function rot13(str) {
  const A = "A".charCodeAt();
  const N = "N".charCodeAt();
  const Z = "Z".charCodeAt();

  const result = [...str]
    .map(function (i) {
      const given = i.charCodeAt();
      if (A <= given && given <= Z) {
        if (given < N) {
          return String.fromCharCode(given + 13);
        } else {
          return String.fromCharCode(given - 13);
        }
      } else {
        return i;
      }
    })
    .join("");
  return result;
}

rot13("SERR PBQR PNZC");
