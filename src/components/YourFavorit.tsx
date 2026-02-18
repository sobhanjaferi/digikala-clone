function YourFavoritItem() {
  return (
    <div className="min-w-35 lg:min-w-full h-full flex flex-col justify-between items-center text-right">
      <div className="w-full h-6/10 lg:h-full">img</div>

      <p className="w-full text-sm lg:hidden"></p>

      <p className="lg:hidden">
        100/000 <span>تومان</span>
      </p>
    </div>
  );
}

export default YourFavoritItem;
