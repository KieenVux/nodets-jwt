import { RoleModel } from "../database/models/Role";
import { RoleDto } from "../dto/RoleDto";

export const findRole = async(role_id:number) =>{
    const result = await RoleModel.findByPk(role_id);
    return result?.get() as RoleDto;
}