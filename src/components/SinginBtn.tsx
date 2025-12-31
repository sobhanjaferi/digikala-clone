import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function SingingBtn() {
  return (
    <div className="hidden lg:flex justify-evenly items-center w-[20%]">
      <div className="text-gray-500 mr-1">
        <ShoppingCartIcon />
      </div>
      |
      <div className="ml-2 rounded-lg border border-gray-400 text-black pb-2 pt-1 px-4 flex justify-between items-center">
        <span className="mr-1">ثبت نام</span>|
        <span className="mb-1 ml-1">ورود</span>
        <div className="rotate-180 mt-1.5 ml-2 text-gray-700">
          <LoginIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default SingingBtn;
