export function convertToBaseN(num: number, base: number): string {
  const c = num.toString(base);
  return c.padStart(3, "0");
}

export function modulo(x: number, y: number) {
  return x - Math.floor(x / y) * y;
}
