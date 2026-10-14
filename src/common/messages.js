import { SystemLanguageEnum } from "./enum/system.enum.js";

export const messages = {
  [SystemLanguageEnum.EN]: {
    validationFailed: "Validation Failed",
    username: {
      required: "Username is required",
      invalid: "Username must be a string",
      min: "Username must be at least 2 characters",
      max: "Username must be at most 20 characters",
    },
    email: {
      required: "Email is required",
      invalid: "Email Must Follow This Pattern email@domain.com",
    },
    password: {
      required: "Password is required",
      invalid: "Password must be a string",
    },
    confirmPassword: {
      required: "Confirm Password is required",
      invalid: "Confirm Password must be a string",
      mismatch: "Confirm Password Miss Match Password",
    },
    phone: {
      required: "Phone is required",
      invalid: "Phone must be in international format like +201012345678",
    },
    gender: {
      invalid: "Gender must be 0 (male) or 1 (female)",
    },
    DOB: {
      invalid: "DOB must be a valid date",
    },
  },

  [SystemLanguageEnum.AR]: {
    validationFailed: "فشل التحقق من البيانات",
    username: {
      required: "اسم المستخدم مطلوب",
      invalid: "اسم المستخدم يجب أن يكون نصاً",
      min: "اسم المستخدم يجب أن يكون حرفين على الأقل",
      max: "اسم المستخدم يجب ألا يزيد عن 20 حرفاً",
    },
    email: {
      required: "البريد الإلكتروني مطلوب",
      invalid: "يجب أن يتبع البريد الإلكتروني هذا النمط email@domain.com",
    },
    password: {
      required: "كلمة المرور مطلوبة",
      invalid: "كلمة المرور يجب أن تكون نصاً",
    },
    confirmPassword: {
      required: "تأكيد كلمة المرور مطلوب",
      invalid: "تأكيد كلمة المرور يجب أن يكون نصاً",
      mismatch: "تأكيد كلمة المرور لا يطابق كلمة المرور",
    },
    phone: {
      required: "رقم الهاتف مطلوب",
      invalid: "رقم الهاتف يجب أن يكون بالصيغة الدولية مثل +201012345678",
    },
    gender: {
      invalid: "النوع يجب أن يكون 0 (ذكر) أو 1 (أنثى)",
    },
    DOB: {
      invalid: "تاريخ الميلاد يجب أن يكون تاريخاً صحيحاً",
    },
  },
};

export function getMessages(lang) {
  return messages[lang] || messages[SystemLanguageEnum.EN];
}
