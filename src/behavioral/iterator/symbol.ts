function CustomRange(start: number, end: number) {
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          if (start < end) {
            return { value: start++, done: false };
          }
          return { done: true, value: end };
        },
      };
    },
  };
}

for (const num of CustomRange(1, 5)) {
  console.log(num);
}
