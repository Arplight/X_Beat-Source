import { Field, ErrorMessage, useFormikContext } from "formik";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
export default function FormField({
  fieldType,
  fieldName,
  fieldLabel,
  labelClass,
}) {
  const [labelFocus, setLabelFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState("");
  // Current values
  const { values } = useFormikContext();
  useEffect(() => {
    if (values && values[fieldName]) {
      setIsEmpty(values[fieldName]);
    } else {
      setIsEmpty("");
    }
  }, [values, fieldName]);

  return (
    <fieldset>
      <label
        className={`${
          labelFocus || isEmpty !== "" ? "label-focus" : ""
        } ${labelClass}`}
      >
        {fieldLabel}
      </label>
      <Field
        className={"form-input"}
        type={fieldType}
        id={fieldName}
        name={fieldName}
        onFocus={() => setLabelFocus(true)}
        onBlurCapture={() => setLabelFocus(false)}
        maxLength={"40"}
      />
      <ErrorMessage
        id={fieldName}
        name={fieldName}
        component="div"
        className="error"
      />
    </fieldset>
  );
}
FormField.propTypes = {
  fieldType: PropTypes.string,
  fieldName: PropTypes.string,
  fieldLabel: PropTypes.string,
  labelClass: PropTypes.string,
};
