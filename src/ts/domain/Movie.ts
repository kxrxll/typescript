import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly tagline: string,
    readonly genre: string[],
    readonly year: number,
    readonly length: number,
  ) { }
}