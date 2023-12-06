import { CurrentItemContext } from "../../../../Contexts/CurrentItemProvider";
import { useContext } from "react";
export default function OverviewTab() {
  const currentItem = useContext(CurrentItemContext);

  return (
    <article className="flex flex-col  gap-8">
      <div className="text-main text-xl font-medium">
        The <span className="text-[red] font-medium">{currentItem.title}</span>{" "}
        {currentItem.info}provides with fabulous sound quality
      </div>
      <ul className="flex flex-col gap-2">
        <li className="text-main text-large list-disc">
          Sound Tuned to Perfection
        </li>
        <li className="text-main text-large list-disc">Comfortable to Wear</li>
        <li className="text-main text-large list-disc">
          Long Hours Playback Time
        </li>
      </ul>
      <p className="text-main text-large text-justify leading-[30px]">
        Buy the{" "}
        <span className="text-main text-xl font-medium">
          {currentItem.title}
          {currentItem.info}
        </span>{" "}
        which offers you with fabulous music experience by providing you with
        awesome sound quality that you can never move on from. Enjoy perfect
        flexibility and mobility with amazing musical quality with these
        Headphones giving you a truly awesome audio experience. It blends with
        exceptional sound quality and a range of smart features for an
        unrivalled listening experience.
      </p>
    </article>
  );
}
