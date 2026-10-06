import { createDoc, findOneDoc } from "../../DB/db.repo.js";
import userModel from "../../DB/model/user.model.js";
import {
  ConflictException,
  NotFoundException,
} from "../../common/exceptions/app.exceptions.js";
import { compareHash, hashValue } from "../../common/security/hash.js";
import { encryptValue } from "../../common/security/encryption.js";
import { HashToolEnum } from "../../common/enum/hash.enum.js";
import { createLoginTokens } from "../../common/security/token.security.js";

export async function signup(userData) {
  const { email } = userData;

  const userEmail = await findOneDoc({ model: userModel, filter: { email } });

  if (userEmail) {
    throw ConflictException({ errMsg: "Email Already Exists" });
  }

  userData.password = await hashValue({ value: userData.password, tool: HashToolEnum.ARGON });

  userData.phone = encryptValue({ value: userData.phone });
  const newUser = await createDoc({ model: userModel, insertedData: userData });

  return newUser;
}

export async function login(userData) {
  const { email, password } = userData;

  const user = await findOneDoc({ model: userModel, filter: { email } });

  if (!user) {
    throw NotFoundException({ errMsg: "Invalid Email or Password" });
  }

  const isMatch = await compareHash({ value: password, hash: user.password });

  if (!isMatch) {
    throw NotFoundException({ errMsg: "Invalid Email or Password" });
  }

  return createLoginTokens({ user });
}
