import userModel from "../models/User.js";
import bcrypt from "bcrypt";

import { signToken } from "../util/token.js";

export const register = async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  req.body.password = hashedPassword;

  const newUser = await userModel.create(req.body);
  console.log(newUser);
  res.send(newUser);
};

export const login = async (req, res, next) => {
  try {
    // Finde ein Objekt mit dem selben Usernamen:
    const user = await userModel.findOne({ name: req.body.name });
    if (!user) {
      res.send("No user found!");
      return;
    }
    // Ich vergleiche das passwort aus dem Body mit dem aus der Datenbank.
    const passwordIsEqual = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(passwordIsEqual);
    if (passwordIsEqual) {
      //create token
      const token = signToken({ id: user.id, email: user.email });
      // add cookies
      const expDate = 1000 * 60 * 60 * 24 * 365;
      res.cookie("singIn", token, { maxAge: expDate, httpOnly: true });
      //cookies zurück
      res.json({ message: "login success", id: user._id });
    } else {
      const err = new Error("Login failed");
      err.statusCode = 403;
      throw err;
    }
  } catch (err) {
    return next(err);
  }
};
