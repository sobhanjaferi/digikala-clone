export interface IofferSlide {
  readonly id?: number;
  imgUrl: string;
  title: string;
  offerPrice: string;
  off: number;
  realPrice: string;
  images: Array<string>;
}
