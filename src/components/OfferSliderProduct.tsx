function OfferSliderProduct() {
  return (
    <div className="h-full min-w-40 w-40 p-1 bg-white cursor-pointer">
      <img
        src="https://dkstatics-public.digikala.com/digikala-products/cf792ca4b13fcf9f4aa8e15dcf34cf5dce0b53b2_1760223103.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
        className="w-11/12 mx-auto h-7/12"
        alt=""
      />

      <div className="text-center w-full h-5/12">
        <p className="text-gray-600 w-full h-1/2 text-sm">
          ساعت مچی عقربه ای کوارتس مردانه مدل ...
        </p>

        <div className="w-full h-1/4 flex justify-start items-center text-gray-500/60 text-sm">
          <div className="rounded-full bg-red-600 text-white px-3">8%</div>

          <del className="mr-1">521,790</del>
        </div>

        <div className="w-full h-1/4 text-black mr-2">
          <p>480,050 تومان</p>
        </div>
      </div>
    </div>
  );
}

export default OfferSliderProduct;


