import { NextResponse } from "next/server";

type HeaderType = {
  id: string;
  content: string;
  imgUrl: string;
};

const data: HeaderType[] = [
  {
    id: "1",
    content: "سوپرمارکت",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/40beb2f7258bf47afa1e48008959e76cc70c77fb_1764664513.png",
  },
  {
    id: "2",
    content: "طلای دیجیتال",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/801e57b6509b98b93164f4927dbf59191f0464de_1764666155.png",
  },
  {
    id: "3",
    content: "حراج سرماه",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/4bb0b7006012e541a6a4002242d1bfe863296e4f_1713545982.png",
  },
  {
    id: "4",
    content: "خوش قیمت و با کیفیت",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/b2e90cbbf94cf0f52acfcb2cb8d60fa86dfe3147_1709127502.png",
  },
  {
    id: "5",
    content: "گرم بمون",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/0e85e1766e101fd7d48fc9bc3a04cacbcd5f9064_1759155562.png",
  },
  {
    id: "6",
    content: "اشتراک پلاس",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/74a5ac2c42df40e2b9e9a1f7ef2fbb87a8f13cad_1765275958.png",
  },
  {
    id: "7",
    content: "حمایت از محک",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/8c3c332aa0d20bfe9c5cfd0a7650f356fa2c4d86_1768889237.png",
  },
  {
    id: "8",
    content: "خرید با وام بانکی",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/e4cbd0332b9ff4ca0a9b38a1a101394fb6c2a269_1764666231.png",
  },
  {
    id: "9",
    content: "خوارو بار اساسی",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-bellatrix/3e62b2b704747a5b795f2b750b6af65be0eb66b0_1768037032.png",
  },
  {
    id: "10",
    content: "بیشتر",
    imgUrl: "./images/Tools.svg",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
