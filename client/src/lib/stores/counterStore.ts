import { makeAutoObservable } from "mobx";

export default class CounterStore{
    title = "Counter store"
    count = 0
    events:string[] = [
        `Initial count is ${this.count}`
    ]

    constructor() {
        makeAutoObservable(this);
    }

    increment = (amount = 1) => {
        this.count += amount;
        this.events.push(`the count has been incremented by ${amount} count is now ${this.count}`);
    }

    decrement = (amount = 1) => {
        this.count -= amount;
        this.events.push(`the count has been decremented by ${amount} count is now ${this.count}`);
    }

    get eventCount() {
        return this.events.length
    }
}