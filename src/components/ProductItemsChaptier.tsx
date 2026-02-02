function ProductItemsChaptier({
  imgUrl,
  title,
}: {
  imgUrl: string;
  title: string;
}) {
  return (
    <section className="w-30 h-30 p-2 flex flex-col justify-between items-center cursor-pointer">
      <img src={imgUrl} alt={title} className="w-full h-full" />

      <h2 className="text-sm sm:text-md text-center">{title}</h2>
    </section>
  );
}

export default ProductItemsChaptier;
