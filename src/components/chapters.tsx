//  =============== Import Section ===============
import { ReactElement } from "react";
import Chaptear from "./chapter";

function Chaptears({
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
}: {
  imgOne: string;
  imgTwo: string;
  imgThree: string;
  imgFour: string;
}): ReactElement {
  return (
    <div className="m-5 lg:mt-0 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 w-full lg:w-310">
      <Chaptear imgUrl={imgOne} />
      <Chaptear imgUrl={imgTwo} />
      <Chaptear imgUrl={imgThree} />
      <Chaptear imgUrl={imgFour} />
    </div>
  );
}

export default Chaptears;
