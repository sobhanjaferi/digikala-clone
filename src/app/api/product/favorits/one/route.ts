import { NextResponse } from "next/server";

type HeaderType = {
  id: string;
  title?: string;
  imgUrl?: string;
  content?: string;
  price?: string;
};

const data: HeaderType[] = [
  {
    id: "1",
    title: "جوراب مردانه",
  },
  {
    id: "2",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/133eade16ce07c6d4c638d429b8e447867ae28c8_1664624808.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق بلند مردانه لنتر مدل ساده",
    price: "655,700",
  },
  {
    id: "3",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/a8eefdfeabb600c8d2196908369ecb556c549646_1754987908.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق بلند مردانه سیرداش",
    price: "739,000",
  },
  {
    id: "4",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/8ba5d1b523828bebf065bfc58dcb97e9e5bc9780_1684309692.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق بلند مردانه لنتر مدل ساده کد SAM",
    price: "635,700",
  },
  {
    id: "5",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/86021277172b4e1364848ce6975214d1b4be8f43_1754583308.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق بلند مردانه سیرداش مدل 185",
    price: "739,000",
  },
  {
    id: "6",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/81ffe2ea15e1c1cbb00cfe71ec5cb5698e4d97aa_1660129410.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق کوتاه مردانه لنتر مدل مچی",
    price: "315,000",
  },
  {
    id: "7",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/c666019737a428d5a2351558f26a50feb1e685ed_1695494512.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق بلند مردانه تن پوش هنگامه ",
    price: "260,700",
  },
  {
    id: "8",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/723deb338c8210127676cc55e45219be58532bd5_1649231004.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب مچی مردانه پاوین مدل میکس",
    price: "260,000",
  },
  {
    id: "9",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/576e58501b1290edcd852a324d907be28c0a2fa7_1754987833.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق بلند مردانه سیرداش مدل 008",
    price: "739,000",
  },
  {
    id: "10",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/43a6febeafb016bc68605ce31dc161151fdce914_1680207590.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق بلند مردانه لنتر مدل ساده",
    price: "330,000",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
