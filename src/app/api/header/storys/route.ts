import { NextResponse } from "next/server";

type HeaderType = {
  id: string;
  imgUrl: string;
  content: string;
};

const data: HeaderType[] = [
  {
    id: "1",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/0f2a442499e07090ef6de75acfc5e88054f6fd3a_1766346590.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "شارژر مطمعن همراهت",
  },
  {
    id: "2",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/61fb1eaadab9269bf07e7083097a0cc71a5d44a5_1766815225.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "اره دیسکی رو به میزی ...",
  },
  {
    id: "3",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/f453fd4f92dcd8d0b3508892706686333b853745_1767166391.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "موس ارزون و (تقربا)...",
  },
  {
    id: "4",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/3a953b11391500435888f5629d881e0cff78419d_1766383536.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "بی باد نمون!",
  },
  {
    id: "5",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/77e16a4aee11ece96304b46715c692515df3a22f_1766577568.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "رژلب های جامد کالیس ...",
  },
  {
    id: "6",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/b40f4063c40f7ce793bbc5a04610f07195547f9a_1766222644.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "به هر رنگ پوست میاد",
  },
  {
    id: "7",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/95a12e53253dce7aee7c162a1c19e5d62dfeb494_1767200763.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "هدست گیمینگ اونیکوما",
  },
  {
    id: "8",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/8cd9eb56bebd2d67c3dcacdf562b6de7dcec4bc4_1766356228.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "شامپو بدنه یا عطره؟",
  },
  {
    id: "9",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/7895635445849a98b5c1de0dfc00ecf4afbe581a_1767103497.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "تلفن آسان",
  },
  {
    id: "10",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/d5657a34a2e7571a9065dc864e922dc8e22860b3_1766305644.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "موقع فروش کدوم برندو...",
  },
  {
    id: "11",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/6fe76cc71d7a5545585ef77d7c7b2cc51f607942_1766448991.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "آباژور با قالب گیری...",
  },
  {
    id: "12",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/0274ed31b2e68763f16e88668251fc09875cbd50_1767265780.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "کنترل هوشمند برق",
  },
  {
    id: "13",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/ebaa7769bbba6b00f7880fd788a440a963e54aaf_1767081064.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "هم چراغ روشنایی هم چ...",
  },
  {
    id: "14",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/fdec04bb3ad8b6e7081a457859de724f92815bf9_1766209480.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "ساخت چوب لباسی پیانو...",
  },
  {
    id: "15",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/ac71f16505fff48b7971735d51cea6da06768cc7_1767415636.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "صفحه بزرگتر بهتره",
  },
  {
    id: "16",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/51e7c1b73c5d3b4b4f26ebee72b7a82bf2a8ad7b_1766746108.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "بلت کولاک کرده!",
  },
  {
    id: "17",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/d3a9312c00b373fe67b1928184f08a767c6f0703_1766498617.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "با اکسپنشن بخر",
  },
  {
    id: "18",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/35a3441c39df0ea131351cd10cce46852df16ce6_1766344582.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "نسکوی متفاوت!",
  },
  {
    id: "19",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/d3c40fd1a2753258f696fbee4f71091076ad0a8c_1766390520.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "گیره کاربردی",
  },
  {
    id: "20",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-content-x-post-media/99badfcebf995e41d04f08a98d9220c26b54b5df_1768204386.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
    content: "دیگه بدونه آنتن نمون...",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
