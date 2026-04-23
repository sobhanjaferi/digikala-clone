// =============== Import Section ===============
import { ReactElement } from "react";
import OfferNumber from "./OfferNumber";
import Image from "next/image";

function SupperMarketOffer(): ReactElement {
  return (
    <div className="hidden lg:flex justify-between items-center m-4 -mt-1 w-310 h-25 bg-zinc-300 rounded-2xl cursor-pointer p-5">
      <div className="w-5/12 flex flex-row-reverse justify-between items-center">
        <div className="rounded-full bg-white p-2 w-20 h-20 relative">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-products/ae2c79b8164d10c2d74880614be1bffe7e9ef064_1720616192.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
            alt="supper market product img"
            className="w-full rounded-full"
            width={0}
            height={0}
          />

          <OfferNumber offerNumber={45} />
        </div>

        <div className="rounded-full bg-white p-2 w-20 h-20 relative">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-products/988ba68a51b40872314a7e711f73346b8608747f_1695128484.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
            alt="supper market product img"
            className="w-full rounded-full"
            width={0}
            height={0}
          />

          <OfferNumber offerNumber={40} />
        </div>

        <div className="rounded-full bg-white p-2 w-20 h-20 relative">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-products/931db6b57bc16804af279b53a21c2b4b85f15dd1_1699172021.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
            alt="supper market product img"
            className="w-full rounded-full"
            width={0}
            height={0}
          />

          <OfferNumber offerNumber={35} />
        </div>

        <p className="p-4 rounded-full bg-white text-green-500">
          <i className="fa-solid fa-arrow-left mr-2"></i>بیش از 50 کالا
        </p>
      </div>

      <div className="flex justify-end items-center w-7/12">
        <p className="py-1 px-3 rounded-full bg-green-600 text-white font-medium mr-7">
          تا 45% تخفیف
        </p>

        <Image
          src="/images/SupperMarketOfferText.png"
          alt="supper market product img"
          className="mr-5"
          width={0}
          height={0}
        />

        <Image
          src="/images/SupperMarketOfferShopping.png"
          alt="supper market product img"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}

export default SupperMarketOffer;
