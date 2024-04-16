export const isNumeric = (val: string) => {
  return !isNaN(Number(val));
}

export const numberWithCommas = (val: number | string) => {
  if(typeof val === "number") val = val.toString();
  // return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var parts = val.toString().split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

export const numberWithoutCommas = (val: string) => {
  return val.replace(",", "");
}