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
      "https://dkstatics-public.digikala.com/digikala-mega-menu/09a98a13c782e12a245930b4515d243b17734a33_1740299441.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "موبایل",
  },
  {
    id: "2",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/7cf1fed6dac6bdfd1b888db6bf8f443ea680244b_1748692252.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "لپ تاپ",
  },
  {
    id: "3",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/151ec29bae111afd3b6a0e71cec5c4c26f1c3014_1740299456.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "کالای دیجیتال",
  },
  {
    id: "4",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/8a042388b93c5116604f35092a1fb35f8f0756be_1740299467.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "خانه و آشپزخانه",
  },
  {
    id: "5",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/d825f64f509cd5067a9022528c465e8ca705f60d_1740299511.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "لوازم خانگی برقی",
  },
  {
    id: "6",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/b196bbdea97f57bfac02dc1666d7401b16ee4bcb_1740299482.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "آرایشی بهداشتی",
  },
  {
    id: "7",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/b3d4eaefebe67ab8d849296ea2e7e113cde8094c_1740299538.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "مد و پوشاک",
  },
  {
    id: "8",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/78135af4274ad7b7fcdaec7e5912689e5f5db96a_1740299548.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "طلا و نقره",
  },
  {
    id: "9",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/03552aa1293fec9f43477814ca62afdacdac18e3_1740299496.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "خودرو و موتور سیکلت",
  },
  {
    id: "10",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/deb3f514c62761797eb6a49e1559268b8bce3219_1740299561.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "سلامت و پزشکی",
  },
  {
    id: "11",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/fb6303218362cd2c48b40fef5da89ad33a5c04d7_1740299524.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "ابزار آلات و تجهیزات",
  },
  {
    id: "12",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/0cdf9c404e509371c3177a334be948a7e500419c_1740299574.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "کتاب و هنر",
  },
  {
    id: "13",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/4d4582205d0d5045c2bd94c5e910bbb49ae4fd4e_1740299590.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "ورزش و سفر",
  },
  {
    id: "14",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/f35b3eba7de8bf2432fff4f53abfa8cbaa6e71d6_1740299603.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "کارت هدیه و گیفت کارت",
  },
  {
    id: "15",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/7adb0cc6edc18a6d04b9ba3bdd424b1bcce47848_1740299618.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "سوپر مارکت آنلاین",
  },
  {
    id: "16",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/6f5284dccdb280616bbfe58533ecc483de4639af_1740299648.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "اسباب بازی کودک و نوزاد",
  },
  {
    id: "17",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/9a4dfac524f8a865f9f69e38d5434fa69fe63e3b_1740299663.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "محصولات بومی و محلی",
  },
  {
    id: "18",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-mega-menu/6f236efd9caae4d1c3177f37c483aa44c3092b6a_1753614680.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    title: "پت شاپ",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
