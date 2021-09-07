import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

export const RoleModel = sequelize.define("role", {
    role:{
        type:DataTypes.STRING
    }
},{timestamps:false});
