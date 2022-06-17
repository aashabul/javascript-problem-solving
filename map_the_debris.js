function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbitalPeriod = function (obj) {
    const b = Math.pow(earthRadius + obj.avgAlt, 3);
    const c = Math.sqrt(b / GM);
    const t = Math.round(c * a);
    return { name: obj.name, orbitalPeriod: t };
  };
  for (let i in arr) {
    newArr.push(getOrbitalPeriod(arr[i]));
  }
  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
