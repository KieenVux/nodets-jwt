import { AccountModel } from "./models/Account";
import { RoleModel } from "./models/Role"


export const initConnection = () =>{
    RoleModel.sync({alter:true});
    AccountModel.sync({alter:true});
}