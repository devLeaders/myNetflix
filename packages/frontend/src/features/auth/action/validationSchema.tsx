import * as yup from "yup";
import { ErrorMessages, Fields } from "../enums";

export const loginValidationSchema = yup.object().shape({
  Email: yup
    .string()
    .label(Fields.EMAIL)
    .email(ErrorMessages.WRONG_EMAIL)
    .required(ErrorMessages.REQUIRED_EMAIL),
  Password: yup
    .string()
    .label(Fields.PASSWORD)
    .required(ErrorMessages.REQUIRED_PASSWORD)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(20, ErrorMessages.MAX_LENGHT_PASSWORD),
});

export const RegValidationSchema = yup.object().shape({
  email: yup
    .string()
    .label(Fields.EMAIL)
    .email(ErrorMessages.WRONG_EMAIL)
    .required(ErrorMessages.REQUIRED_EMAIL)
    .max(255),
  password: yup
    .string()
    .label(Fields.PASSWORD)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(255)
    .required(ErrorMessages.REQUIRED_PASSWORD),
  passwordConfirmation: yup
    .string()
    .label(Fields.PASSWORD_CONFIRMATION)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(255)
    .oneOf([yup.ref("password")], ErrorMessages.SAME_PASSWORD)
    .required(ErrorMessages.REQUIRED_PASSWORD),
});
