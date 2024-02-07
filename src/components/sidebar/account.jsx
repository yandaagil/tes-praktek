import avatar from "../../assets/avatar.svg";
import { LogOut } from "lucide-react";

const Account = () => {
  return (
    <div className="flex flex-col gap-6 border-t p-6">
      <div className="flex flex-row gap-3">
        <img src={avatar} alt="avatar" />
        <div className="flex flex-col">
          <span className="text-black font-semibold text-sm">Savannah N</span>
          <span className="text-xs">Food Quality Manager</span>
        </div>
      </div>
      <button className="p-2 bg-[#FEF5F6] hover:bg-[#feedef] flex flex-row gap-1 justify-center items-center transition-colors text-[#8F0A13] font-semibold text-xs rounded-[4px]">
        <LogOut size={16} color="#8F0A13" />
        Log Out
      </button>
    </div>
  );
};

export default Account;
