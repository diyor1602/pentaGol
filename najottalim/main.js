let arr = "3:1";

let [a, b] = arr.split(":");
console.log(a, b); // 3 1

if(a> b) {
  console.log("Ochko a + 3 b+ 0");
}
else if(a = b) {
  console.log("Ochko a+1 + b+1");
}
else {
  console.log("Ochko b+3 a+ 0");
}