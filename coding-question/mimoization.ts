function memoize(fn: (n: number) => number) {
  const ceche: { [key: number]: number } = {};

  return function (n: number) {
    if (ceche[n]) return ceche[n];

    ceche[n] = fn(n);

    return ceche[n];
  };
}
