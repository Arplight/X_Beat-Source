import TabButton from "../../Buttons/Tab_Button/TabButton";
// Hooks
import useActive from "../../../Hooks/useActive";
import { useState } from "react";
// Tabs
import SpecificationsTab from "./Tabs/SpecificationsTab";
import OverviewTab from "./Tabs/OverviewTab";
import ReviewsTab from "./Tabs/ReviewsTab";
// React Reveal
import { Fade } from "react-awesome-reveal";

export default function ProductTabs() {
  const [active, activeHandler] = useActive("Specifications");
  const [currentTab, setCurrentTab] = useState("Specifications");

  return (
    <div className="product-tabs ">
      <div className="flex flex-wrap m-auto mb-[80px] gap-4 md:gap-10">
        {["Specifications", "Overview", "Reviews"].map((t) => (
          <TabButton
            key={t}
            tab={t}
            onClick={(e) => {
              activeHandler(e);
              setCurrentTab(t);
            }}
            active={active}
          />
        ))}
      </div>
      <div>
        {currentTab === "Specifications" ? (
          <Fade duration={200}>
            <SpecificationsTab key={1} />
          </Fade>
        ) : currentTab === "Overview" ? (
          <Fade duration={200}>
            <OverviewTab key={2} />
          </Fade>
        ) : currentTab === "Reviews" ? (
          <ReviewsTab key={3} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
