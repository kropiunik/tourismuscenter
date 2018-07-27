import { Component } from '@angular/core';

@Component({
    selector: 'app-rechnung',
    templateUrl: 'rechnung.component.html'

})
export class RechnungComponent {

    writer: string;
    recipient: string;
    dateOfInvoice: Date;
    dateOfPerformance: Date;
    items: Array<Item>;

    constructor() {
        this.items = new Array<Item>();
        this.items.push(new Item('Camel', 7.50, 20));
        this.items.push(new Item('Schnitzel', 12.90, 10));
        this.items.push(new Item('Einbettzimmer', 45, 13));
        this.items.push(new Item('2 cl Vodka', 4.30, 20));
    }
}

class Item {
    name: string;
    price: number;
    code: number;
    constructor(n: string, p: number, c: number) {
        this.name = n; this.price = p; this.code = c;
    }
}

function roundTo2(num: number) {
    let n = Math.floor(num * 1000);
    const r = n % 10;
    n = Math.floor(n / 10);
    if (r >= 5) {
        n++;
    }
    n = n / 100.00;
    return n;
}

function numToString(num: number): string {
    let ret = String(num);
    ret = ret.replace('.', ',');
    const splitted = ret.split(',');
    // insert kilo seperator e.g.: 1000 -> 1.000
    let count = 1;
    for (let i = splitted[0].length - 1; i > 0; i--) {
        if (count === 3) {
            ret = ret.slice(0, i) + '.' + ret.slice(i);
            count = 0;
        } else {
            count ++;
        }
    }
    return ret;
}
