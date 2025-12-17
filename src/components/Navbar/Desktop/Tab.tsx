import type { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded p-4 transition-colors text-custom-black ${
        selected === tab
          ? "underline"
          : ""
      }`}
    >
      <span className="text-xl font-semibold text-custom-black">{children}</span>
      <FiChevronDown
        className={`transition-transform size-6 ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

export default Tab;