import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("testing", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
});
