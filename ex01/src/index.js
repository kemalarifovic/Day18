let myArr = [];
// Only change code below this line
function* multiplication(x) {
  const X = x;
  for (let i = 0; i < X; i++) {
    yield (x = x * 2);
    myArr.push(x);
  }
}

let num = multiplication(3);

for (let i = 0; i < 3; i++) {
  let { value } = num.next();
  console.log(value);
}
// Only change code above this line
module.exports = multiplication;
