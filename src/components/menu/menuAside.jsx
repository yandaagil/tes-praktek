import BtnCard from "../ui/btnCard";
import graph from "../../assets/graph.svg";

const topMenu = [
  { name: "Nasi Goreng Jamur Special Resto Pak Min" },
  { name: "Tongseng Sapi Gurih" },
  { name: "Nasi Gudeg Telur Ceker" },
  { name: "Nasi Ayam Serundeng" },
  { name: "Nasi Goreng Seafood" },
];

const MenuAside = () => {
  return (
    <div className="w-fit xl:w-64 flex flex-row xl:flex-col gap-3">
      <div className="bg-iris rounded-lg w-full h-[400px] p-6 flex flex-col justify-between">
        <p className="font-semibold text-xl text-white">
          See analytics of the customer clearly
        </p>
        <div>
          <BtnCard btnText="See Analytics" />
        </div>
      </div>
      <div className="h-full p-6 bg-[#FAFAFA] rounded-lg text-grey flex flex-col gap-3">
        <h3 className="text-[#110D17] font-medium text-2xl">
          Top Menu <br />
          <span className="font-bold text-[#F17300]">This Week</span>
        </h3>
        <p className="text-grey font-medium text-xs">10 - 12 Agustus 2023</p>
        <ul className="flex flex-col gap-2">
          {topMenu.map((menu, index) =>
            index === 0 ? (
              <li
                key={menu.name}
                className="font-bold text-sm text-black bg-white rounded-xl drop-shadow p-[10px]"
              >
                <div className="bg-[#F17300] fixed px-2 right-1 -top-2 drop-shadow-md text-white rotate-[8deg]">
                  {index + 1}
                </div>
                {menu.name}
              </li>
            ) : (
              <li
                key={menu.name}
                className="font-semibold text-xs text-grey p-[10px]"
              >
                {index + 1}. {menu.name}
              </li>
            )
          )}
        </ul>
        <img src={graph} alt="graph" />
      </div>
    </div>
  );
};

export default MenuAside;
