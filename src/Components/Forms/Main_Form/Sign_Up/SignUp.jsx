import { useContext } from "react";
import { signUp } from "../../../../data/formData";
import FormField from "../../Form_Field/FormField";
import { signUpSchema } from "../../Validation_Schema/ValidationSchema";
import { Formik, Form } from "formik";
// Contexts
import { userContext } from "../../../Contexts/userProvider";
import PropTypes from "prop-types";

export default function SignUp({ formSetter }) {
  const { setCurrentUser, addUser } = useContext(userContext);

  return (
    <Formik
      initialValues={{
        name: "",
        signup_form_mail: "",
        signup_pass: "",
        passwordConfirm: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        setCurrentUser(() => ({
          userMail: values.signup_form_mail,
          status: "signedUp",
        }));
        formSetter("login");
        addUser(values);
        alert("Signup successful! Welcome aboard!");
      }}
    >
      <Form className="flex flex-col gap-7">
        {signUp.map((field, index) => (
          <FormField
            key={index}
            fieldLabel={field.label}
            fieldName={field.name}
            fieldType={field.type}
            labelClass={"form-label"}
          />
        ))}
        <button type="submit" className="full-button mt-1">
          Signup
        </button>
      </Form>
    </Formik>
  );
}
SignUp.propTypes = {
  formSetter: PropTypes.func,
};
