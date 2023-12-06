// Data
import reviewsData from "../../../../../data/reviewsData";
// Icons
import { LiaStarSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
// React Reveal
import { Fade } from "react-awesome-reveal";

export default function ReviewsTab() {
  return (
    <ul className="flex flex-col gap-8">
      {reviewsData.map((comment) => (
        <li key={comment.id} className="flex items-start gap-3">
          <Fade delay={comment.id * 50}>
            <span>
              <IoPersonOutline className="avatar" />
            </span>
            <span className="flex flex-col gap-0.5">
              <h4 className="text-main leading-none	">{comment.name}</h4>
              <div className="flex items-center">
                <ul className="rating border-r-[1px] border-[#ffffff40] pr-2 py-0.5">
                  {[...Array(comment.rateCount).keys()].map((start, index) => (
                    <li key={index}>
                      <LiaStarSolid className="star" />
                    </li>
                  ))}
                </ul>
                <p className="text-large text-muted pl-2">{comment.date}</p>
              </div>
              <p className="text-main text-small">{comment.review}</p>
            </span>
          </Fade>
        </li>
      ))}
    </ul>
  );
}
