function fibonacciGenerator(n) {

    var sequence = [0, 1];
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }

    for (var i = 2; i < n; i++) {
        sequence.push(sequence[sequence.length - 2 ] + sequence[sequence.length - 1 ]);
    }

    return sequence;


}

console.log(fibonacciGenerator(5));