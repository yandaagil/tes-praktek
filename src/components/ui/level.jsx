const Level = ({ level }) => {
  return level === "Warga" ? (
    <div className="px-6 py-2 w-fit bg-levelbg-orange rounded-[4px]">
      <span className="bg-gradient-to-br text-transparent bg-clip-text from-gradientstart-orange to-gradientend-orange">
        {level}
      </span>
    </div>
  ) : level === "Juragan" ? (
    <div className="px-6 py-2 w-fit bg-levelbg-blue rounded-[4px]">
      <span className="bg-gradient-to-br text-transparent bg-clip-text from-gradientstart-blue to-gradientend-blue">
        {level}
      </span>
    </div>
  ) : level === "Sultan" ? (
    <div className="px-6 py-2 w-fit bg-levelbg-green rounded-[4px]">
      <span className="bg-gradient-to-br text-transparent bg-clip-text from-gradientstart-green to-gradientend-green">
        {level}
      </span>
    </div>
  ) : (
    <div className="px-6 py-2 w-fit bg-levelbg-purple rounded-[4px]">
      <span className="bg-gradient-to-br text-transparent bg-clip-text from-gradientstart-purple to-gradientend-purple">
        {level}
      </span>
    </div>
  );
};

export default Level;
