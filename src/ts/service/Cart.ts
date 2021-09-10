import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    removeItem(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }

    calculateSumWithoutDiscount(): number {
        return this._items.reduce((sum: number, next: Buyable) => sum + next.price, 0);
    }

    calculateSumWithDiscount(percent: number): number {
        return this.calculateSumWithoutDiscount() / 100 * (100 - percent)
    }
}