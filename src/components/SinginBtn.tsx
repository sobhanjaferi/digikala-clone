// =============== MUI Icons ===============
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

// =============== Import Section ===============
import { useAppContext } from "@/context/appContext";
import { ReactElement } from "react";

function SingingBtn(): ReactElement {
  const {
    isUserAxist,
    isUserNumber,
  }: { isUserAxist: boolean; isUserNumber: string } = useAppContext();

  return (
    <div className="hidden lg:flex justify-evenly items-center w-[20%] lg:w-70 xl:w-100">
      <div className="text-gray-500 mr-1 cursor-pointer">
        <ShoppingCartIcon />
      </div>
      |
      <div className="ml-2 rounded-lg border border-gray-400 text-black pb-2 pt-1 px-4 flex justify-between items-center cursor-pointer">
        {isUserAxist ? (
          <>
            <p>{isUserNumber}</p>
          </>
        ) : (
          <>
            <span className="mr-1">ثبت نام</span>|
            <span className="mb-1 ml-1">ورود</span>
            <div className="rotate-180 mt-1.5 ml-2 text-gray-700">
              <LoginIcon fontSize="small" />
            </div>
          </>
        )}
      </div>
      <div className="p-2 rounded-full border border-gray-300 text-gray-500 lg:border-none flex justify-evenly items-center cursor-pointer">
        <NotificationsNoneIcon />
      </div>
    </div>
  );
}

export default SingingBtn;
