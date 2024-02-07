import MenuCard from "./menuCard";
import MenuHead from "./menuHead";
import MenuAside from "./menuAside";
import MenuTable from "./menuTable";
import MenuPagination from "./menuPagination";

const Content = () => {
  return (
    <div className="p-6 ml-[227px] flex flex-col gap-3 min-h-screen">
      <MenuHead />
      <div className="flex flex-col xl:flex-row gap-3 overflow-y-auto">
        <div className="flex flex-col gap-3">
          <MenuCard />
          <MenuTable />
          <MenuPagination />
        </div>
        <MenuAside />
      </div>
    </div>
  );
};

export default Content;
