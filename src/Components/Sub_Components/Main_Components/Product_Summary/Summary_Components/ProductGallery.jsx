// Hooks
import { useContext } from "react";
import useGallery from "../../../../Hooks/useGallery";
// Context
import { CurrentItemContext } from "../../../../Contexts/CurrentItemProvider";
// React Reveal
import { Fade } from "react-awesome-reveal";

export default function ProductGallery() {
  const currentItem = useContext(CurrentItemContext);
  const [currentImage, setCurrentImage] = useGallery(currentItem.images[0]);
  return (
    <section className="flex flex-col lg:flex-row flex-col-reverse gap-4 w-full lg:w-3/5 items-center  h-[500px] ">
      <ul className="gap-2 lg:gap-0 flex flex-row lg:flex-col w-full lg:w-1/5 justify-center lg:justify-between items-center lg:items-start h-1/5 lg:h-full">
        {currentItem.images.map((image, index) => (
          <li key={index}>
            <Fade delay={100 * index} triggerOnce={true}>
              <img
                src={`${import.meta.env.BASE_URL}${image}`}
                alt={currentItem.brand}
                className={` w-[80px] h-[80px] p-2 border-[1px] cursor-pointer  ${
                  currentImage === image
                    ? "border-[#ffffff80] "
                    : "border-[#ffffff40]"
                } `}
                onClick={() => {
                  setCurrentImage(image);
                }}
                data-active={image}
              />
            </Fade>
          </li>
        ))}
      </ul>
      <Fade
        key={currentImage}
        triggerOnce={true}
        className=" w-full lg:w-4/5 h-4/5 lg:h-full"
      >
        <img
          src={`${import.meta.env.BASE_URL}${currentImage}`}
          alt={currentItem.brand}
        />
      </Fade>
    </section>
  );
}
