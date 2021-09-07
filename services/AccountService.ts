import { Request, Response } from "express";
import { checkLogin, createAccountDao } from "../dao/AccountDao";
import { AccountDto, AccountDtoForGenerateToken } from "../dto/AccountDto";
import { LoginReq } from "../dto/LoginReq";
import { generateToken } from "../token/Token";

export const login = async (req: Request, res: Response) => {
  console.log(req.body);
  const loginReq: LoginReq = req.body;
  const loginResult = await checkLogin(loginReq);
  if (loginResult) {
    const tokenReq: AccountDtoForGenerateToken = {
      role: loginResult.role_id,
      username: loginResult.username,
    };
    console.log(tokenReq);
    const token = generateToken(tokenReq);
    res.json({token: token});
  } else {
    res.json({ message: "false" }); 
  }
};

export const createAccount = async (req: Request, res: Response) => {
  const createAccountReq: AccountDto = req.body;
  if (createAccountReq) {
    const result = await createAccountDao(createAccountReq);
    if (result) {
      res.json(result);
    } else {
      res.status(500).json({ message: "create failed!" });
    }
  } else {
    res.status(400).json({ message: "create failed because lack of params" });
  }
};
