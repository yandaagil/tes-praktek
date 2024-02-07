import BtnCard from "../ui/btnCard";
import { Filter, Plus, RefreshCw, Printer } from "lucide-react";

const MenuCard = () => {
  return (
    <div className="bg-iris px-3 py-4 flex flex-col gap-4 rounded-lg">
      <h3 className="text-white font-bold text-xl">Customer</h3>
      <p className="text-[#EBFFFE] font-medium text-xs">
        On this menu you will be able to create, edit, and also delete
      </p>
      <p className="text-[#EBFFFE] font-medium text-xs">
        the customer. Also you can manage it easily.
      </p>
      <div className="flex flex-row gap-3">
        <BtnCard btnText="Add New Customer" icon={<Plus size={16} />} />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Customer"
          className="py-2 px-4 bg-white text-grey rounded-lg font-semibold text-sm w-[421px]"
        >
          {/* <button className="bg-iris rounded-lg px-4 py-2">Search</button> */}
        </input>
        <BtnCard btnText="Filter" icon={<Filter size={16} />} />
        <BtnCard btnText="Refresh" icon={<RefreshCw size={16} />} />
        <BtnCard icon={<Printer size={16} />} />
      </div>
    </div>
  );
};

export default MenuCard;
