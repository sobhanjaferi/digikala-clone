import { NextResponse } from "next/server";

type HeaderType = {
  id: string;
  imgUrl?: string;
  title?: string;
  content?: string;
  price?: string;
};

const data: HeaderType[] = [
  {
    id: "1",
    title: "زیر پوش مردانه",
  },
  {
    id: "2",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/bdf78c58faf90d930347871f83e2bc7d8d326b2a_1684680776.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "زیر پوش خشتی مردانه تولیدی پاران ...",
    price: "1,896,000",
  },
  {
    id: "3",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/05b3dcf03b036e7f886a2d3e47310231e29c4cce_1730901840.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "زیرپوش رکابی مردانه نیکو مدل 1564 دورو ضخیم",
    price: "177,200",
  },
  {
    id: "4",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/fc0b8f2c0cbd16e1715a3d4f7500b51eb7c1b4a4_1659954121.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "زیر پوش خشتی مردانه پنبینه مدل صادراتی",
    price: "337,000",
  },
  {
    id: "5",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/509b6a2d2a3267b2abe3e9f805d0e132376d5388_1704826774.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "زیرپوش رکابی مردانه ماییلدا مدل پنبه ای کد ...",
    price: "361,000",
  },
  {
    id: "6",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/777fb516366f3e2f88323f575fc9e735da50c586_1714198326.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "زیرپوش رکابی مردانه پنبینه مدل نخ پنبه خال...",
    price: "337,000",
  },
  {
    id: "7",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/5b1633d4b89c95e280922a62e44134a391b3e440_1724841989.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "زیر پوش خشتی مردانه ایزی دو مدل...",
    price: "1,688,000",
  },
  {
    id: "8",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/622a9916a72ff48cb3228ccae7d3b971be7d53f1_1659855516.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "زیر پوش خشتی مردانه پنبینه مدل صادراتی",
    price: "337,000",
  },
  {
    id: "9",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/f188ea9707b08a1f0ba47e5ef77886e354e12f8d_1670067004.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "زیرپوش مردانه تولیدی پاران مدل صادراتی",
    price: "337,000",
  },
  {
    id: "10",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/26187c424ee83bdfe4fa2520d6097026b71b210c_1613495615.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "زیرپوش رکابی مردانه مدل ggvh35695",
    price: "152,000",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
