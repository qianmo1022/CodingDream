//斐波那契数列 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); // 55