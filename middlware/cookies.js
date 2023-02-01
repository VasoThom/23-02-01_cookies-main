import { verifyToken } from "../util/token.js";

export const authorize = (req, res, next) => {
  const token = req.cookies.loggedIn;

  try {
    const verifiedUser = verifyToken(token);
    next();
  } catch (err) {
    res.status(401).json("main seite :login");
  }
};

export const loggedIn = (req, res, next) => {
  const token = req.cookies.loggedIn;

  try {
    const verifiedUser = verifyToken(token);
    res.json("mainsteite login");
  } catch (err) {
    next();
  }
};
