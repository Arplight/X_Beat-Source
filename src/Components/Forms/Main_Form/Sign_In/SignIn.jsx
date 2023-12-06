import { useContext } from "react";
import { signIn } from "../../../../data/formData";
import FormField from "../../Form_Field/FormField";
import { signInSchema } from "../../Validation_Schema/ValidationSchema";
import { Formik, Form } from "formik";
// Contexts
import { userContext } from "../../../Contexts/userProvider";
import { FocusContext } from "../../../Contexts/FocusProvider";
export default function SignIn() {
  const { setCurrentUser, users } = useContext(userContext);
  const { setIsFocused } = useContext(FocusContext);
  return (
    <Formik
      initialValues={{
        signin_form_mail: "",
        signin_pass: "",
      }}
      validationSchema={signInSchema}
      onSubmit={(values, { resetForm }) => {
        if (users.length > 0) {
          const userFound = users.some(
            (user) =>
              user.signup_form_mail === values.signin_form_mail &&
              user.signup_pass === values.signin_pass
          );
          if (userFound) {
            resetForm();
            setCurrentUser(() => ({
              userMail: values.signin_form_mail,
              status: "signedIn",
            }));
            setIsFocused(null);
            alert("Welcome back! You have successfully signed in.");
          } else {
            alert("No users found. Please sign up.");
          }
        } else {
          alert("No users found. Please sign up.");
        }
        console.log(values);
      }}
    >
      <Form className="flex flex-col gap-7">
        {signIn.map((field, index) => (
          <FormField
            key={index}
            fieldLabel={field.label}
            fieldName={field.name}
            fieldType={field.type}
            labelClass={"form-label"}
          />
        ))}

        <button type="submit" className="full-button mt-1">
          Signin
        </button>
      </Form>
    </Formik>
  );
}
