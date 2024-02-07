const SidebarMenu = ({ titleMenu, sideMenu }) => {
  return (
    <div className="space-y-5">
      <h5 className="text-grey font-medium text-xs">{titleMenu}</h5>
      <div className="space-y-5 flex flex-col">
        {sideMenu.map((menu) => (
          <a
            key={menu.name}
            href="/"
            className="flex flex-row justify-between text-grey cursor-pointer text-start font-bold text-sm hover:text-iris/70 focus:text-iris transition-colors"
          >
            <div className="items-center flex flex-row gap-3">
              {menu.icon}
              {menu.name}
            </div>
            {menu.badge && (
              <span className="bg-gradient-to-br from-gradientstart-orange to-gradientend-orange text-white font-semibold text-[10px] rounded-full px-2 ml-2">
                {menu.badge}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;
