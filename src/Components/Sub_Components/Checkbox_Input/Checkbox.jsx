import { useState, useEffect } from "react";
import PropTypes from "prop-types";
export default function Checkbox({
  checkName,
  checkId,
  checkData,
  checkSetter,
  isReset,
}) {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(false);
  }, [isReset]);

  return (
    <input
      type="checkbox"
      name={checkName}
      id={checkId}
      data-filter={checkData}
      onChange={checkSetter}
      checked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
    />
  );
}
Checkbox.propTypes = {
  checkName: PropTypes.string,
  checkId: PropTypes.string,
  checkData: PropTypes.string,
  checkSetter: PropTypes.func,
  isReset: PropTypes.bool,
};
