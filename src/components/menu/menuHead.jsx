import MenuNav from "./menuNav";

const MenuHead = () => {
  return (
    <div className="border-b flex flex-col xl:flex-row justify-between">
      <div className="pb-3 flex flex-col">
        <h2 className="font-bold text-2xl">Customer</h2>
        <p className="font-medium text-grey text-sm">
          You can manage and organize your customer and other things here
        </p>
      </div>
      <MenuNav />
    </div>
  );
};

export default MenuHead;
