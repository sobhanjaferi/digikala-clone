import OfferItem from "./OfferItem";

interface IofferItem {
  id: number;
  content: string;
  imgUrl: string;
}

function OfferItems() {
  const OffersData: IofferItem[] = [
    {
      id: 1,
      content: "سوپرمارکت",
      imgUrl:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/40beb2f7258bf47afa1e48008959e76cc70c77fb_1764664513.png",
    },
    {
      id: 2,
      content: "طلای دیجیتال",
      imgUrl:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/801e57b6509b98b93164f4927dbf59191f0464de_1764666155.png",
    },
    {
      id: 3,
      content: "خوش قیمت و با کیفیت",
      imgUrl:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/b2e90cbbf94cf0f52acfcb2cb8d60fa86dfe3147_1709127502.png",
    },
    {
      id: 4,
      content: "15% تخفیف طلا",
      imgUrl:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/3b78c0da204cdf1e3f9456bc88a6f9fab207c3cb_1738825186.jpg",
    },
    {
      id: 5,
      content: "خرید با وام بانکی",
      imgUrl:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/e4cbd0332b9ff4ca0a9b38a1a101394fb6c2a269_1764666231.png",
    },
    {
      id: 6,
      content: "خواروبار اساسی",
      imgUrl:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/3e62b2b704747a5b795f2b750b6af65be0eb66b0_1768037032.png",
    },
    {
      id: 7,
      content: "حراج پوشاک",
      imgUrl:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/7d607596ff3cbf7d97aed37a542b99d014583f25_1765798984.png",
    },
    {
      id: 8,
      content: "لگو",
      imgUrl:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/5e5f58a651a6fcb1cb5658b5a6050c419d2ed639_1765704438.png",
    },
    {
      id: 9,
      content: "نصب اپ",
      imgUrl:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/96be3b2b943c6b3ab3fdaccc0dc71e8ac6bcd3dd_1744551717.png",
    },
    {
      id: 10,
      content: "بیشتر",
      imgUrl: "",
    },
  ];

  return (
    <div
      dir="rtl"
      className="flex justify-evenly items-center w-full lg:w-7/10 lg:container h-30 overflow-auto gap-3 scrollbar-hide my-10 lg:mx-auto"
    >
      {OffersData.map((item: IofferItem) => (
        <OfferItem {...item} key={item.id} />
      ))}
    </div>
  );
}

export default OfferItems;
