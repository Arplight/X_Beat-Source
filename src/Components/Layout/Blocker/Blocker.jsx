import { useContext } from "react";
import { FocusContext } from "../../Contexts/FocusProvider";
import SearchBar from "../../Sub_Components/SearchBar/SearchBar";
import MainForm from "../../Forms/Main_Form/MainForm";
export default function Blocker() {
  const { setIsFocused } = useContext(FocusContext);
  return (
    <div className="blocker blocker-hidden" onClick={() => setIsFocused(null)}>
      <MainForm />
      <SearchBar />
    </div>
  );
}
