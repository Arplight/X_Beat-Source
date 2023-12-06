import { useContext } from "react";
import { dropdownMenu } from "../../../../data/headerData";
// Contexts
import { FocusContext } from "../../../Contexts/FocusProvider";
import { userContext } from "../../../Contexts/userProvider";
// Reat Router
import { Link } from "react-router-dom";
export default function HeaderDropdown() {
  const { setIsFocused } = useContext(FocusContext);
  const { currentUser, setCurrentUser, userName } = useContext(userContext);

  return (
    <div className="header-dropdown absolute bg-[#161819] h-max px-4 ">
      <section className="flex flex-col gap-2  border-b-[1px] border-[#ffffff30] py-4">
        <div className="flex gap-4">
          <h4 className="text-main">Hello</h4>
          <h4 className="text-[red]">
            {currentUser.status === "signedIn" && userName}
          </h4>
        </div>
        <p className="text-main text-small">Access account and manage orders</p>
        {currentUser.status === "signedIn" ? (
          <button
            className="form-button mb-1"
            onClick={() =>
              setCurrentUser({
                status: "signedOut",
                userMail: "",
              })
            }
          >
            Logout
          </button>
        ) : (
          <button
            className="form-button mb-1"
            onClick={() => setIsFocused("form")}
          >
            Login / Signup
          </button>
        )}
      </section>
      <section className="py-4">
        <ul className="flex flex-col gap-2">
          {dropdownMenu.map((list) => (
            <li key={list.id} className="leading-none">
              <Link to={list.path} className="text-large text-muted link-hover">
                {list.link}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
