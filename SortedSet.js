class SortedSet {
    constructor() {
        this.arr = [];
    }

    add(n) {
        const { found, index } = this.binarySearch(this.arr, n);
        if (!found) {
            this.arr.push(-1);
            for (let i = this.arr.length - 1 ; i > index ; i--) {
                this.arr[i] = this.arr[i - 1];
            }
            this.arr[index] = n;
        }
        console.log('found === ', found, 'index === ', index, "arr = ", JSON.stringify(this.arr))
    }

    binarySearch(arr, n) {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] == n) {
                return {
                    found: true,
                    index: mid
                };
            }
            if (arr[mid] > n) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return {
            found: false,
            index: low
        };
    }
}

const l = new SortedSet();
l.add(1);
l.add(3);
l.add(2);
l.add(6);
l.add(9);
l.add(2);
l.add(0);