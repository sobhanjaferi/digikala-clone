//  =============== Import Section ===============
import Image from "next/image";
import { ReactElement } from "react";

function OfferItem({
  imgUrl,
  content,
}: {
  imgUrl: string;
  content: string;
}): ReactElement {
  return (
    <div className="flex flex-col justify-start items-center min-w-20 w-20 h-full cursor-pointer">
      <Image
        src={imgUrl}
        alt="OfferImg"
        className="rounded-full w-10 h-10 lg:w-15 lg:h-15 bg-gray-300/80"
        width={0}
        height={0}
      />

      <p className="text-center text-[12px] max-w-16 mt-2">{content}</p>
    </div>
  );
}

export default OfferItem;
