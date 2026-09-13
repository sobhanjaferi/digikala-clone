import { NextResponse } from "next/server";

type HeaderType = {
  id: string;
  imgUrl: string;
  title: string;
};

const data: HeaderType[] = [
  {
    id: "1",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png",
    title: "پریل",
  },
  {
    id: "2",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png",
    title: "پرسیل",
  },
  {
    id: "3",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/9f5727fd7c13dc4b10c879a1865d77bc1fb333ce_1705308969.jpg",
    title: "چرم مشهد",
  },
  {
    id: "4",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/1800.png?x-oss-process=image/",
    title: "آدیتا",
  },
  {
    id: "5",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/5a10ae95eb42fc96906c8062563b28062668d418_1722238640.png",
    title: "چینی زرین...",
  },
  {
    id: "6",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/3f0e8a262651232007912c06d7cd69f7d9b4bfa4_1662306119.jpg",
    title: "پنتر",
  },
  {
    id: "7",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/d23e8875d5f7a9735e433f1fd86a1513902efc8b_1604470597.jpg",
    title: "ایکس ویژن",
  },
  {
    id: "8",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/960dc4b74e21a9d33d594a161386179b26b3a68a_1606823783.png",
    title: "پمینا",
  },
  {
    id: "9",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/070d1eb61036eaa9d9981aeadd4a0f05cf93efe6_1627122768.png?x-oss-process=image/",
    title: "نتربیت",
  },
  {
    id: "10",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png",
    title: "هوآوی",
  },
  {
    id: "11",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/e44886020b773202d6d431e2fef2f3bd8bd3bc7f_1737817444.jpg",
    title: "یوروویتال",
  },
  {
    id: "12",
    imgUrl: "https://dkstatics-public.digikala.com/digikala-brands/1313.png",
    title: "لافارو",
  },
  {
    id: "13",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/2994.png?x-oss-process=image/",
    title: "شیامو",
  },
  {
    id: "14",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/3972.png?x-oss-process=image",
    title: "مای",
  },
  {
    id: "15",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image",
    title: "سامسونگ",
  },
  {
    id: "16",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/87dcb454f4d8df28bd2f8fd902f0f27b5fb1fac4_1666761801.jpg",
    title: "اکتیو",
  },
  {
    id: "17",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/58ba4ffb03e2843e97778403fbe5b9d99c2f4cdb_1747138682.jpg",
    title: "ساعی",
  },
  {
    id: "18",
    imgUrl: "https://dkstatics-public.digikala.com/digikala-brands/311.png",
    title: "کاله",
  },
  {
    id: "19",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/efb14accdad9be1b2176aa0317c8bbac43733831_1609325767.png",
    title: "ویتالیر",
  },
  {
    id: "20",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-brands/100012444.jpg",
    title: "فولیکا",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
