import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import Seo from "../../Components/Seo/Seo";

export default function ErrorPage() {
  return (
    <div className="error-page flex flex-col gap-8 w-full  items-center ">
      <Seo currentPage={"Not-Found"} />
      <TbError404 className="text-[red] large-icon" />
      <h1 className="text-main">Not Found</h1>
      <h5 className="text-main text-center">
        Sorry, the requested page was not found.
      </h5>
      <Link to="/" className="single-button">
        Go Home
      </Link>
    </div>
  );
}
