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
    title: "جوراب زنانه و مردانه",
  },
  {
    id: "2",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/86d94b790a940fdf5a46401f7e2f61f3287e5e69_1646431664.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق کوتاه مدل 02",
    price: "58,800",
  },
  {
    id: "3",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/00be7c89695018c783f943e34eaf28080786e818_1729095112.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق بلند مردانه تن پوش هنگامه مدل کش اسپر...",
    price: "139,450",
  },
  {
    id: "4",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/952242e2d5e70db9cc3c981865eb2e8f81a42609_1697357796.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب مدل اسپرت کد 01154-6 بسته 3 عددی",
    price: "299,990",
  },
  {
    id: "5",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/bf570f920cd632a4ff6b0ca49b01defd2f8633c7_1625309975.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب تن پوش هنگامه مدل کد T-002",
    price: "142,750",
  },
  {
    id: "6",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/c3fb981f6abe49d657e26f101649c5f5156e464b_1600229811.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب پاتریس طرح هویی مدل 67-2271251",
    price: "85,900",
  },
  {
    id: "7",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/6cf67910ecc4d7ae14cc2508e8b6f818c6635e09_1722632423.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب مدل مچی ساده نخ پنبه اعلا بسته 6 عددی",
    price: "183,000",
  },
  {
    id: "8",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/4b4897b1820c3072a069baef66a0e490b40fccad_1711788293.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق بلند مدل FW03-FOS بسته 3 عددی",
    price: "399,000",
  },
  {
    id: "9",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/e551000362d2c35aff1de366fd6e23ec567e0be6_1666430907.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب تن پوش هنگامه مدل  حوله ای تیک بسته...",
    price: "345,710",
  },
  {
    id: "10",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/a147961362ef6e7911549394473a096589a999ce_1735315070.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "جوراب ساق کوتاه مدل تدی بسته 6 عددی ",
    price: "258,000",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
