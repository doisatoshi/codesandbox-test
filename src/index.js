// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

//let val2 = "let変数";

// const val3 = "定数だよ";
// console.log(val3);

//val3 = "できんよ";

// const val3 = "定数だよ";

// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };

// val4.name = "じゃk";
// val4.addres = "北海道";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "さとし";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢んは" + age + "です";

// console.log(message1);

// //テンプレート

// const message2 = `私の名前は${name}です。年齢は${age}です`;

// console.log(message2);

// アロー関数

// //従来の関数
// function func1(str) {
//   return str;
// }

// console.log(func1("func1です"));

// アロー関数の使い方

// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 30));

/** 分割代入 */

// const myProfile = {
//   name: "さとし",
//   age: 42
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;

// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

const myProfile = ["さとし", 42];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です`;
console.log(message4);
