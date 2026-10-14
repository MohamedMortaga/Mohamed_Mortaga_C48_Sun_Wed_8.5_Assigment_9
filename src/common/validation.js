import * as z from "zod";
import { GenderEnum } from "./enum/user.enum.js";
import { getMessages } from "./messages.js";

const requiredOrInvalid = (fieldMessages) => (issue) =>
  issue.input === undefined ? fieldMessages.required : fieldMessages.invalid;

export const validationFields = (lang) => {
  const msg = getMessages(lang);

  return {
    username: z
      .string({ error: requiredOrInvalid(msg.username) })
      .min(2, { error: msg.username.min })
      .max(20, { error: msg.username.max }),
    email: z.email({ error: requiredOrInvalid(msg.email) }),
    password: z.string({ error: requiredOrInvalid(msg.password) }),
    confirmPassword: z.string({ error: requiredOrInvalid(msg.confirmPassword) }),
    phone: z.e164({ error: requiredOrInvalid(msg.phone) }),
    gender: z.literal(Object.values(GenderEnum), { error: msg.gender.invalid }),
    DOB: z.date({ error: msg.DOB.invalid }),
  };
};
