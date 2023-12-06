import * as Yup from "yup";
// Password
const passwordValidation = Yup.string()
  .trim()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters")
  .matches(/[0-9]/, "Password must contain at least on number")
  .matches(/[a-z]/, "password must contain at least 1 lower case letter")
  .matches(/[A-Z]/, "password must contain at least 1 upper case letter")
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    "password must contain at least 1 special character"
  );
// SignUp schema
export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Please enter your name")
    .matches(/^[a-zA-Z][\w]*$/gi, "Invalid name format")
    .min(3, "Name should be at least 3 characters.")
    .max(20, "Name should not exceed 20 characters."),

  signup_form_mail: Yup.string()
    .required("Email is required.")
    .trim()
    .email("Please enter a valid email address."),

  signup_pass: passwordValidation,

  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("signup_pass"), null],
    "Password must match"
  ),
});

// SignIn schema
export const signInSchema = Yup.object().shape({
  signin_form_mail: Yup.string()
    .trim()
    .required("Email is required.")
    .email("Please enter a valid email address."),

  signin_pass: passwordValidation,
});

// Subscription Schema
export const subscriptionSchema = Yup.object().shape({
  subscription_mail: Yup.string()
    .trim()
    .required("Email is required.")
    .email("Please enter a valid email address."),
});
