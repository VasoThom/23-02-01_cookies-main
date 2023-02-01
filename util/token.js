import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export const signToken = (payload) => {
  //erstellt token
  const token = jwt.sign(payload, process.env.TOCKEN_SECRET);

  return token;
};

export const verifyToken = (token) => {
  //verifizieren

  const payload = jwt.verify(token, process.env.TOCKEN_SECRET);
  return payload;
};
