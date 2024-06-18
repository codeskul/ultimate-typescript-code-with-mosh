let speed: number | null = null;

let ride = {
  //   Falsy (undefined, null, "", false, 0)
  //   speed: speed || 30,

  // Nullish coaelscing operator
  speed: speed ?? 30, // speed !== null ? speed: 30
};
