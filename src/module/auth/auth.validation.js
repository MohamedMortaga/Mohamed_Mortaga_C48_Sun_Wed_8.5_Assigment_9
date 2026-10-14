import * as z from "zod";
import { validationFields } from "../../common/validation.js";
import { getMessages } from "../../common/messages.js";

const loginSchemaBody = (lang) => {
  return z.object({
    email: validationFields(lang).email,
    password: validationFields(lang).password,
    // confirmPassword: z.string(),
    // phone: z.e164(),
    // age: z.coerce.number({}).int().min(18).max(100),
    // gender: z.literal([0, 1]),
    // flag: z.stringbool({
    //   // case: "sensitive",
    //   truthy: ["ali", "aya"],
    //   falsy: ["yousef", 3, "user"],
    // }),
  });
};

export const loginSchema = (lang) => {
  return z.object({
    body: loginSchemaBody(lang),
  });
};

export const signupSchema = (lang) => {
  return z.object({
    body: loginSchemaBody(lang)
      .extend({
        username: validationFields(lang).username,
        phone: validationFields(lang).phone,
        gender: validationFields(lang).gender.optional({}),
        DOB: validationFields(lang).DOB.optional(),
        confirmPassword: validationFields(lang).confirmPassword,
      })
      .refine(
        (value) => {
          console.log({ value });

          return value.confirmPassword === value.password;
        },
        { error: getMessages(lang).confirmPassword.mismatch },
      ),
  });
};

//--------------------------- Castom validation (refine)

// .refine(
//   (value) => {
//     return value.password === value.confirmPassword;
//   },
//   {
//     error: "ConfirmPassword doesn't match password",
//   },
// );

//--------------------------- multi Castom validation Super refine

// .superRefine((value, ctx) => {
//   if (value.password !== value.confirmPassword) {
//     ctx.addIssue({
//       code: "custom",
//       path: ["confirmPassword"],
//       message: "Invalid Confirm password",
//     });
//   }

//   if (value.email.length != 10) {
//     ctx.addIssue({
//       code: "custom",
//       path: ["email"],
//       message: "Email must be 10 char",
//     });
//   }
// });
