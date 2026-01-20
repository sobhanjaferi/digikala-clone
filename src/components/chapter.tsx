function Chaptear({ imgUrl }: { imgUrl: string }) {
  return (
    <div className="rounded-2xl h-50 cursor-pointer">
      <img src={imgUrl} className="w-full h-full rounded-2xl" />
    </div>
  );
}

export default Chaptear;
