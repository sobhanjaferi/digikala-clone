export default interface IyourFavoritItem {
  id: number;
  title: string;
  itemOne: IyourFavoritItemProduct;
  itemTwo: IyourFavoritItemProduct;
  itemThree: IyourFavoritItemProduct;
  itemFour: IyourFavoritItemProduct;
  itemFive: IyourFavoritItemProduct;
  itemSix: IyourFavoritItemProduct;
  itemSeven: IyourFavoritItemProduct;
  itemEight: IyourFavoritItemProduct;
  itemNine: IyourFavoritItemProduct;
}

interface IyourFavoritItemProduct {
  id: number;
  imgUrl: string;
  content: string;
  price: string;
}
