import { useContext } from "react";
import { CurrentItemContext } from "../../../../Contexts/CurrentItemProvider";
export default function SpecificationsTab() {
  const currentItem = useContext(CurrentItemContext);
  const tableData = [
    { label: "Brand", target: currentItem.brand },
    { label: "Model", target: currentItem.title },
    { label: "Generic Name", target: currentItem.category },
    { label: "Headphone Type", target: currentItem.type },
    { label: "Connectivity", target: currentItem.connectivity },
    { label: "Microphone", target: "Yes" },
  ];
  return (
    <table className="w-full sm:w-1/2">
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td className="text-large text-muted">{row.label}</td>
            <td className="text-large text-main font-light">{row.target}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
