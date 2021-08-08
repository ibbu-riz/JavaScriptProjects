// Js sort()

var myA = [2, -8, 7, 1, 0, -2, 3];

// myA.sort();

myA.sort(mySort);

function mySort(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

console.log(myA);