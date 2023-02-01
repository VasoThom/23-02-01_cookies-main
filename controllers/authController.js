import userModel from "../models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    req.body.password = hashedPassword;

    const newUser = await userModel.create(req.body);
    console.log(newUser);
    res.send(newUser);
}

export const login = async (req, res) => {
    // Finde ein Objekt mit dem selben Usernamen:
    const user = await userModel.findOne({name: req.body.name});
    if(!user) {
        res.send("No user found!");
        return; 
    }
    // Ich vergleiche das passwort aus dem Body mit dem aus der Datenbank. 
    const passwordIsEqual = await bcrypt.compare(req.body.password, user.password);
    console.log(passwordIsEqual)
    if(passwordIsEqual){
        res.send("login success");
    } else {
        res.sendStatus(403);
    }
}