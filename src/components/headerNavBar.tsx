import PlaceIcon from "@mui/icons-material/Place";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MenuIcon from "@mui/icons-material/Menu";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { ReactElement } from "react";

interface Idata {
  id: number;
  title: string;
  icon?: ReactElement<any, string>;
}

function HeaderNavBar() {
  const data: Idata[] = [
    {
      id: 1,
      title: "شگفت انگیزها",
      icon: <LocalOfferIcon fontSize="small" />,
    },
    {
      id: 2,
      title: "سوپرمارکت",
      icon: <LocalMallIcon fontSize="small" />,
    },
    {
      id: 3,
      title: "طلای دیجیتال",
      icon: <i className="fa-solid fa-coins"></i>,
    },
    {
      id: 4,
      title: "پرفروش ترین ها",
      icon: <WhatshotIcon fontSize="small" />,
    },
    {
      id: 5,
      title: "!دردیجی کالابفروشید",
    },
  ];

  return (
    <div>
      <div className="m-4 text-gray-900 flex justify-end items-center text-[12px]">
        <div className="flex justify-start items-center lg:w-[24%] cursor-pointer">
          <NavigateBeforeIcon />
          <p>تحویل به استان البرز , مشکین دشت</p>
          <PlaceIcon />
        </div>

        <div className="hidden lg:flex justify-end items-center w-[76%]">
          <ul className="text-gray-700 mr-5 flex flex-row-reverse justify-between items-center gap-4">
            {data.map((item: Idata) => (
              <li
                className="flex justify-between items-center cursor-pointer"
                key={item.id}
              >
                <p>{item.title}</p>

                {item?.icon}
              </li>
            ))}
          </ul>
          |
          <div className="flex justify-end items-center ml-5 cursor-pointer">
            <p className="mb-1">دسته بندی کالاها</p>

            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavBar;
