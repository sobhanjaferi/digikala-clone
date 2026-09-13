//  =============== Import Section ===============
import Image from "next/image";
import { ReactElement } from "react";

function Chaptear({ imgUrl }: { imgUrl: string }): ReactElement {
  return (
    <div className="rounded-2xl h-35 sm:h-50 md:h-60 lg:h-50 cursor-pointer">
      <Image
        src={imgUrl}
        alt="chaptear img"
        width={10}
        height={10}
        className="w-full h-full rounded-2xl"
      />
    </div>
  );
}

export default Chaptear;
