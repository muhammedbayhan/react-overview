import * as Yup from "yup";

export const RegisterFormSchemas = Yup.object().shape({
  email: Yup.string().email("EMAIL WRONG").required("EMAIL REQUIRED"),
  age: Yup.number()
    .typeError("PLEASE ENTER A VALID NUMBER")
    .required("NUMBER REQUIRED")
    .positive("PLEASE POSITIVE")
    .integer("PLEASE INTEGER"),
  password: Yup.string()
    .required("PASSWORD REQUIRED")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("CONFIRM PASSWORD REQUIRED"),
  term: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("TERM REQUIRED"),
});
