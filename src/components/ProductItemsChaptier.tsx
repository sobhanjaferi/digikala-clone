// =============== Import Section ===============

import Image from "next/image";
import { ReactElement } from "react";

function ProductItemsChaptier({
  imgUrl,
  title,
}: {
  imgUrl: string;
  title: string;
}): ReactElement {
  return (
    <section className="w-30 h-30 p-2 flex flex-col justify-between items-center cursor-pointer">
      <Image
        src={imgUrl}
        alt={title}
        className="w-full h-full"
        width={0}
        height={0}
      />

      <h2 className="text-sm sm:text-md text-center">{title}</h2>
    </section>
  );
}

export default ProductItemsChaptier;
