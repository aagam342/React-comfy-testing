export const formatPrice = (Number) => {
  return new Intl.NumberFormat("en-US", {
    type: "currency",
    currency: "USD",
  }).format(Number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
