import { Router } from "express";
import { hasAnyRole, hasRole } from "../auth/Auth";
import { createAccount, login } from "../services/AccountService";

const AccountRouter = Router();

AccountRouter.post("/login", login);

AccountRouter.post("/create", createAccount);

AccountRouter.get("/getCheck", hasRole("ROLE_ADMIN"), (_req,res)=>{
    res.send("you got here then you must be admin");
})
AccountRouter.get("/getCheck2", hasAnyRole(["ROLE_ADMIN","ROLE_MOD"]), (_req,res)=>{
    res.send("you got here then you must be admin or mod");
})



export {AccountRouter} 