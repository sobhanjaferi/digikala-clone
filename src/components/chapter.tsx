function Chaptear({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="rounded-2xl h-35 sm:h-50 md:h-60 lg:h-50 cursor-pointer">
      <img src={imgUrl} className="w-full h-full rounded-2xl" />
    </div>
  );
}

export default Chaptear;
