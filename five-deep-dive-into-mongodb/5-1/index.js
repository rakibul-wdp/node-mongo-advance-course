const interleave = (str1, str2) => {
  let result = "";
  let len = Math.max(str1.length, str2.length);
  for (let i = 0; i < len; i++) {
    if (i < str1.length) {
      result += str1.charAt(i);
    }
    if (i < str2.length) {
      result += str2.charAt(i);
    }
  }
  return result;
};

console.log(interleave("abc", "123")); // a1b2c3
console.log(interleave("foo", "bar")); // foboar
console.log(interleave("hello", "world")); // hweolrllod
