// Hooks
import { useContext, useState } from "react";
import { FocusContext } from "../../Contexts/FocusProvider";
// Icons
import { IoMdClose } from "react-icons/io";
import SignIn from "./Sign_In/SignIn";
import SignUp from "./Sign_Up/SignUp";
export default function MainForm() {
  const { isFocused, setIsFocused } = useContext(FocusContext);
  const [formType, setFomType] = useState("signup");

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`main-form flex flex-col gap-6 px-6 py-8  ${
        isFocused === "form" ? "show-form" : ""
      } `}
    >
      <button className="close-button" onClick={() => setIsFocused(null)}>
        <IoMdClose className="close" />
      </button>
      <section>
        {formType === "signup" ? (
          <h2 className="text-main mb-1">SignUp</h2>
        ) : (
          <h2 className="text-main mb-1">SignIn</h2>
        )}

        <div className="flex gap-2 items-center">
          {formType === "signup" ? (
            <p className="text-main text-small">Already have an account ?</p>
          ) : (
            <p className="text-main text-small">New to X-Beat ?</p>
          )}

          {formType === "signup" ? (
            <button
              className="text-main text-large"
              onClick={() => setFomType("login")}
            >
              Login
            </button>
          ) : (
            <button
              className="text-main text-large"
              onClick={() => setFomType("signup")}
            >
              Create an account
            </button>
          )}
        </div>
      </section>
      {formType === "signup" ? <SignUp formSetter={setFomType} /> : <SignIn />}
      <section className="flex flex-col gap-4">
        <div className=" social-title">
          <p className="text-main text-large">or login with</p>
        </div>
        <div className="flex gap-2">
          <a href="#" className="social-button-facebook">
            Facebook
          </a>
          <a href="#" className="social-button-google">
            Google
          </a>
          <a href="#" className="social-button-twitter">
            Twitter
          </a>
        </div>
      </section>
    </div>
  );
}
