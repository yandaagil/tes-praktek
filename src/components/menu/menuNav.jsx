const navs = [{ name: "Customer" }, { name: "Promo" }, { name: "Voucher" }];

const MenuNav = () => {
  return (
    <div className="flex items-end">
      <div className="flex flex-row gap-2">
        {navs.map((nav) => (
          <button
            key={nav.name}
            className="px-6 py-3 w-48 text-grey border-b-2 border-transparent font-semibold hover:text-iris focus:text-iris focus:font-bold focus:border-b-2 focus:border-iris"
          >
            {nav.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuNav;
