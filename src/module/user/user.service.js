import { JWT_ACCESS_EXPIRES_IN } from "../../config/config.js";
import { BadRequestException } from "../../common/exceptions/app.exceptions.js";
import { createLoginTokens } from "../../common/security/token.security.js";

export async function rotateToken(payload, user) {
  const tokenExpiryDate = payload.iat + JWT_ACCESS_EXPIRES_IN; // 1/10
  const currentDate = Date.now() / 1000; // 30/9

  // if (tokenExpiryDate > currentDate) {
  //   throw BadRequestException({ errMsg: "Old Token Still Valid" });
  // }

  return createLoginTokens({ user });
}
