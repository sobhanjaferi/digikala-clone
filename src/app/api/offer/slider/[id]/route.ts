import { NextResponse } from "next/server";
import { data } from "../route";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: Request, { params }: Props) {
  const { id } = await params;

  const product = data.find((item) => item.id === id);

  if (!product) {
    return NextResponse.json(
      {
        message: "Product not found",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json(product);
}
