import { NextResponse } from "next/server";

type HeaderType = {
  id: string;
  imgUrl: string;
};

const data: HeaderType[] = [
  {
    id: "1",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/784497f93998136e2f5a2a73cfc40786449e3899_1768731128.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: "2",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/ef6a593edda5dfa52248518274092524a236b7ed_1768374793.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: "3",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/a7da30f26a500a1b60d38d37d311303aac4cdeb5_1769012403.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: "4",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/4779c83fb18fb5890bcf68b712461da4c64da7c6_1768194411.gif?x-oss-process=image",
  },
  {
    id: "5",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/06a20be84f78136bedaf0b23db1e8417eedc2f9c_1768114115.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: "6",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/1be8777affde04bf53c9fd02a18f53aaea84e455_1768725488.png?x-oss-process=image/quality,q_95",
  },
  {
    id: "7",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/03b1c89b5eb17c7f40c91ecdbff5b5bd9e270691_1768374133.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: "8",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/607d5933b1796644fa89269770ca07b041b48b93_1760779555.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: "9",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/3a86149f69853ea1db939a8e3afc378485cb16b5_1760779957.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: "10",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/2c3e93364b3711bc1a692b316d11d4f78371d9f1_1766989442.jpg?x-oss-process=image/quality,q_95",
  },
  {
    id: "11",
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-adservice-banners/98c71ce5170a030157803b6fd6bef0e745ec14a4_1768907967.jpg?x-oss-process=image/quality,q_95",
  },
];

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
