const BtnCard = ({ btnText, icon }) => {
  return (
    <button className="text-white bg-white/20 hover:bg-white/30 transition-colors font-semibold text-sm rounded-lg py-2 px-4 flex flex-row gap-1 items-center">
      {icon}
      {btnText}
    </button>
  );
};

export default BtnCard;
