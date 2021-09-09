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

    calculateSumWithoutDiscount() {
        return this._items.reduce((prev: any, next: any) => {
            if (prev.price) {
                return prev.price + next.price
            } else return prev + next.price
        });
    }

    calculateSumWithDiscount(percent: number) {
        const sum: any = this.calculateSumWithoutDiscount();
        return sum / 100 * (100 - percent)
    }
}