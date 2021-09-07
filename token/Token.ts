import dotEnv from "dotenv";
import { Request } from "express";
import jwt from "jsonwebtoken";
import { findRole } from "../dao/RoleDao";
import { AccountDtoForGenerateToken } from "../dto/AccountDto";

dotEnv.config();
const unauthorizeObject: AccountDtoForGenerateToken = {
  role: -1,
  username: "",
};

export const generateToken = (account: AccountDtoForGenerateToken) => {
  const token = jwt.sign(account, process.env.SECRET_KEY || "");
  return token;
};

export const verifyToken = (req: Request): AccountDtoForGenerateToken => {
  const headerToken = req.headers.authorization;
  if (headerToken) {
    const token = headerToken.split(" ")[1];
    try {
      const result = jwt.verify(
        token,
        process.env.SECRET_KEY || ""
      ) as AccountDtoForGenerateToken;
      return result != undefined ? result : unauthorizeObject;
    } catch (error) {
      return unauthorizeObject;
    }
  } else {
    return unauthorizeObject;
  }
};

export const getRole = async (req: Request) => {
  const user = verifyToken(req);
  return await findRole(user.role);
};
