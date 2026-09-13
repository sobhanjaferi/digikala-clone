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
    title: "شورت مردانه",
  },
  {
    id: "2",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/5750b5349f1d00eb7845303af1c6ca58dceb5dad_1661185609.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "شورت مردانه پنبینه مدل صادراتی",
    price: "286,000",
  },
  {
    id: "3",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/ee0f34a81aaf8a16311118a7945ae2fe0475ad61_1755618379.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "شورت اسلیپ مردانه چیندکا مدل سوپر نخ پنب...",
    price: "231,000",
  },
  {
    id: "4",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/6e2895269bc7456f41ab99b235fdedc833d8b67f_1661075935.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "شورت مردانه پنبینه مدل صادراتی",
    price: "286,000",
  },
  {
    id: "5",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/1565c2ec645257c682422ac0a62ef450259c0f1e_1715158092.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "شورت مردانه مدل اسلیپ کد 10",
    price: "265,000",
  },
  {
    id: "6",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/9479afc9332dc3e1391690610bd0621389c402a3_1659507768.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "شورت مردانه پنبینه مدل صادراتی",
    price: "251,000",
  },
  {
    id: "7",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/b91c3d4ab5425dfb8828a0c3b652d43bbd668921_1718177846.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "شورت مردانه مدل 353 مجموعه 3 عددی",
    price: "749,000",
  },
  {
    id: "8",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/bc6b608574b5f5d869ca819a7216d51694d51796_1644128250.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "شورت مردانه پونتو بلانکو مدل 199-10-...",
    price: "3,800,000",
  },
  {
    id: "9",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/f9325e2b5d5c98a254843b7d213bfa871ef2ca08_1734829298.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "شورت سلیب مردانه پوشاک ناطقیان مدل ...",
    price: "179,000",
  },
  {
    id: "10",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/507523f74c94ad5c60c41a31f7e67466a56fed5b_1661232940.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    content: "شورت مردانه پنبینه مدل نیم باکسر ...",
    price: "330,000",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
