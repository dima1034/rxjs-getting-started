import { from, Observer } from 'rxjs';

let numbers = [1, 2, 3, 4, 5];
let source = from(numbers);

class MyObserver implements Observer<any> {
    
    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.log(`e: ${e}`);
    }

    complete() {
        console.log(`done`);
    }
}

source.subscribe(new MyObserver());