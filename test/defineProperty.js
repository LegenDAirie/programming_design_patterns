var object = {};

Object.defineProperty(object, "cat", {
  value: "meow!",
  writable: false,
  enumerable: false,
  configurable: false
});

object["cat"] = "no";

Object.defineProperty(object, "cat", {
  value: "hi",
  writable: false,
  enumerable: false,
  configureable: true
});
console.log(object["cat"]);
