import { ArrowRight } from "lucide-react";

const MenuPagination = () => {
  return (
    <div className="mt-10 flex flex-row justify-between">
      <p className="font-semibold text-grey">Showing 10 Data Customers</p>
      <div className="flex flex-row">
        <ul className="flex flex-row">
          <li className="px-4 py-2 font-bold text-sm drop-shadow-xl bg-white">
            1
          </li>
          <li className="px-4 py-2 font-semibold text-sm text-[#6D6D6D]">2</li>
          <li className="px-4 py-2 font-semibold text-sm text-[#6D6D6D]">3</li>
        </ul>
        <span className="px-4 py-2 font-semibold text-sm text-[#6D6D6D]">
          ...
        </span>
        <span className="px-4 py-2 font-semibold text-sm text-[#6D6D6D]">
          38
        </span>
        <button className="px-4 py-2 font-semibold text-sm text-[#6D6D6D] flex flex-row gap-3 items-center">
          Next
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default MenuPagination;
