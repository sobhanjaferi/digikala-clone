import PlaceIcon from "@mui/icons-material/Place";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MenuIcon from "@mui/icons-material/Menu";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WhatshotIcon from "@mui/icons-material/Whatshot";

function HeaderNavBar() {
  return (
    <div>
      <div className="m-4 text-gray-900 flex justify-end items-center text-[12px]">
        <div className="flex justify-start items-center lg:w-[24%]">
          <NavigateBeforeIcon />
          <p>تحویل به استان البرز , مشکین دشت</p>
          <PlaceIcon />
        </div>

        <div className="hidden lg:flex justify-end items-center w-[76%]">
          <ul className="text-gray-700 mr-5 flex flex-row-reverse justify-between items-center gap-4">
            <li className="flex justify-between items-center">
              شگفت انگیزها
              <LocalOfferIcon fontSize="small" />
            </li>
            <li className="flex justify-between items-center">
              سوپرمارکت
              <LocalMallIcon fontSize="small" />
            </li>
            <li className="flex justify-between items-center">
              طلای دیجیتال
              <i className="fa-solid fa-coins"></i>
            </li>
            <li className="flex justify-between items-center">
              پرفروش ترین ها
              <WhatshotIcon fontSize="small" />
            </li>
            |<li className="flex justify-between items-center">سوالی دارید؟</li>
            <li className="flex justify-between items-center">
              !دردیجی کالابفروشید
            </li>
          </ul>
          |
          <div className="flex justify-end items-center ml-5">
            <p className="mb-1">دسته بندی کالاها</p>

            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavBar;
