import Level from "../ui/level";
import sort from "../../assets/sort.svg";
import { PencilLine, Trash, Search } from "lucide-react";

const tableData = [
  {
    customerName: "Odis Rhinehart",
    level: "Warga",
    favoriteMenu: "Chicken & Ribs Combo",
    totalTransaction: "194,700",
  },
  {
    customerName: "Kris Roher",
    level: "Warga",
    favoriteMenu: "Surf & Turf Gift Basket",
    totalTransaction: "632,200",
  },
  {
    customerName: "Serenity Fisher",
    level: "Juragan",
    favoriteMenu: "Fried Chiken Dinne",
    totalTransaction: "1,040,920",
  },
  {
    customerName: "Brooklyn Warren",
    level: "Sultan",
    favoriteMenu: "Surf & Turf Gift Basket",
    totalTransaction: "730,500",
  },
  {
    customerName: "Franco Delort",
    level: "Juragan",
    favoriteMenu: "Chicken & Ribs Combo",
    totalTransaction: "96,000",
  },
  {
    customerName: "Saul Geoghegan",
    level: "Juragan",
    favoriteMenu: "Surf & Turf Gift Basket",
    totalTransaction: "256,000",
  },
  {
    customerName: "Alfredo Vetrovs",
    level: "Juragan",
    favoriteMenu: "Dark & Stormy",
    totalTransaction: "590,080",
  },
  {
    customerName: "Cristofer Vetrovs",
    level: "Konglomerat",
    favoriteMenu: "Shaking Beef Tri-Tip",
    totalTransaction: "782,600",
  },
  {
    customerName: "Calvin Steward",
    level: "Konglomerat",
    favoriteMenu: "BBQ Rib Dinner",
    totalTransaction: "467,500",
  },
  {
    customerName: "Calvin Steward",
    level: "Konglomerat",
    favoriteMenu: "BBQ Rib Dinner",
    totalTransaction: "467,500",
  },
];

const MenuTable = () => {
  return (
    <div className="w-full">
      <table className="overflow-x-auto">
        <thead>
          <tr>
            <th className="bg-[#FAFAFA] p-[10px] text-grey font-medium text-sm min-w-48">
              <div className="flex flex-row justify-between">
                <span>Customer Name</span>
                <img src={sort} alt="sort" />
              </div>
            </th>
            <th className="bg-[#FAFAFA] p-[10px] text-grey font-medium text-sm min-w-48">
              <div className="flex flex-row justify-between">
                <span>Level</span>
                <img src={sort} alt="sort" />
              </div>
            </th>
            <th className="bg-[#FAFAFA] p-[10px] text-grey font-medium text-sm min-w-48">
              <div className="flex flex-row justify-between">
                <span>Favorite Menu</span>
                <img src={sort} alt="sort" />
              </div>
            </th>
            <th className="bg-[#FAFAFA] p-[10px] text-grey font-medium text-sm min-w-48">
              <div className="flex flex-row justify-between">
                <span>Total Transaction</span>
                <img src={sort} alt="sort" />
              </div>
            </th>
            <th className="bg-[#FAFAFA] p-[10px] text-grey font-medium text-sm min-w-48">
              <div className="flex flex-row justify-between">
                <span>Action</span>
                <img src={sort} alt="sort" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={data.customerName + index}>
              <td className="p-[10px] text-[#110D17] font-semibold text-sm">
                {data.customerName}
              </td>
              <td className="p-[10px] font-semibold text-sm">
                <Level level={data.level} />
              </td>
              <td className="p-[10px] text-[#110D17] font-semibold text-sm">
                {data.favoriteMenu}
              </td>
              <td className="p-[10px] text-[#110D17] font-semibold text-sm">
                IDR {data.totalTransaction}
              </td>
              <td className="p-[10px] text-[#110D17] font-semibold text-sm gap-1 flex flex-row">
                <button className="p-3 bg-[#FAFAFA] hover:bg-[#feeded] transition-colors rounded-[4px] flex flex-row gap-1 items-center">
                  <Search size={16} />
                  Detail
                </button>
                <button className="p-3 bg-[#FAFAFA] hover:bg-[#feeded] transition-colors rounded-[4px]">
                  <PencilLine size={16} />
                </button>
                <button className="p-3 bg-[#FEF5F6] hover:bg-[#feebee] transition-colors rounded-[4px]">
                  <Trash size={16} color="#F02D3A" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;
