import { Router } from "express";
import { login, signup } from "./auth.service.js";
import { successResponse } from "../../common/response/success.response.js";
import validation from "../../middleware/validation.middleware.js";
import { loginSchema, signupSchema } from "./auth.validation.js";
const authRouter = Router();

authRouter.post("/signup", validation(signupSchema), async (req, res) => {
  const result = await signup(req.body);

  successResponse({ res, message: "created", data: result, status: 201 });
});

authRouter.post("/login", validation(loginSchema), async (req, res) => {
  console.log({ "req.validateData": req.validateData });

  const result = await login(req.validateData.body);

  successResponse({ res, data: result });
});

export default authRouter;
