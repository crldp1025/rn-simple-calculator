export const isNumeric = (val: string) => {
  return !isNaN(Number(val));
}

export const hasDecimal = (val: number) => {
  if(val % 1 === 0) {
    return true;
  }

  return false;
}