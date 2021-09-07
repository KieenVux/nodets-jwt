import { AccountModel } from "../database/models/Account";
import { AccountDto } from "../dto/AccountDto";
import { LoginReq } from "../dto/LoginReq";

export const checkLogin = async (req: LoginReq) => {
  const result = await AccountModel.findAll({
    where: { username: req.username, password: req.password },
  });
  return result[0].get() as AccountDto;
};

export const createAccountDao = async (req: AccountDto) => {
  const isExist = await ifAccountExistDao(req);
  if (!isExist) {
    try {
      const result: AccountDto = await (await AccountModel.create(req)).get();
      return result;
    } catch (error) {
      console.log("id conflict");
      return null;
    }
  } else {
    return null;
  }
};

const ifAccountExistDao = async (req: AccountDto) => {
  const result = await AccountModel.findOne({
    where: {
      username: req.username,
    },
  });
  if (result) {
    return true;
  }
  return false;
};
