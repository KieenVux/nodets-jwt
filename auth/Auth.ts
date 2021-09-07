import { NextFunction, Request, Response } from "express";
import { getRole } from "../token/Token";

const unauthorizeMessage = {
  message: "You don't have authorization to move on!",
};

export const hasRole = (role: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userRole = await getRole(req);
    try {
      const roleToCheck = "ROLE_" + userRole.role.toUpperCase();
      if (role.match(roleToCheck)) {
        next();
      } else {
        res.status(403).json(unauthorizeMessage);
      }
    } catch (error) {
      res.status(403).json(unauthorizeMessage);
    }
  };
};

export const hasAnyRole = (roles:Array<string>) =>{
  return async(req:Request, res:Response, next:NextFunction)=>{
    const userRole = await getRole(req);
    try {
      const roleToCheck = "ROLE_" + userRole.role.toUpperCase();
      if (roles.includes(roleToCheck)) {
        next();
      } else {
        res.status(403).json(unauthorizeMessage);
      }
    } catch (error) {
      res.status(403).json(unauthorizeMessage);
    }
  }
}