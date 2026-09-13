// =============== Import Section ===============
import Image from "next/image";
import { ReactElement } from "react";

function SupperOfferItem({
  imgUrl,
  newStyles,
}: {
  imgUrl: string;
  newStyles?: string;
}): ReactElement {
  return (
    <div>
      <Image
        src={imgUrl}
        alt="supper offer item img"
        className={`rounded-2xl cursor-pointer mx-auto ${newStyles}`}
        width={0}
        height={0}
      />
    </div>
  );
}

export default SupperOfferItem;
