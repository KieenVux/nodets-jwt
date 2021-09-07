import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import { RoleModel } from "./Role";

const AccountModel = sequelize.define("account", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
});

AccountModel.belongsTo(RoleModel, { foreignKey: "role_id" });

export { AccountModel };
