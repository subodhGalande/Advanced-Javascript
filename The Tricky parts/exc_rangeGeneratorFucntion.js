function* rangeGenerator(start, end) {
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  } else {
    for (let i = start; i >= end; i--) {
      yield i;
    }
  }
}

rangeGenerator(2, 5);
