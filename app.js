const ar = [3, 2, 1, 3];
birthdayCakeCandles(ar);

function birthdayCakeCandles(ar) {
    const max = Math.max(...ar);
    let count = 0;
    ar.forEach(item => {
        if (max === item) {
            count++;
        }
    });
    return count;
}