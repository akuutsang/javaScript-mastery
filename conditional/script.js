// let age = 17;
// let password = "BABYLEE";
// let isVip = true;

// if (age > 18 && (password === "BABYLEE" || isVip)) {
//   console.log("Come on in!!! Its party time!!!");
// } else {
//   console.log("Please try another place!!!!!!!!");
// }

// let user = {
//   name: "Limama",
//   age: 2,
//   birthday: "29th July 2023",
// };

// let currentUser = user["name"];
// let birthyear = "birthday";

// user.occupation = "stay at home baby";
// let stat = user["occupation"];

// console.log(user);
// console.log(user[birthyear]);
// console.log(user.birthyear);

// console.log(stat);

let mainUser = {
  userName: "Limaro",
  birthYear: "2023",
  currentYear: "2025",
  getAge: function () {
    return this.currentYear - this.birthYear;
  },
};
console.log(mainUser.getAge());

let user = {
  userName: "Limaro",
  birthYear: 2023,
  currentYear: 2025,
};

user["age"] = user["currentYear"] - user["birthYear"];

console.log(user["age"]);

for (let prop in user) {
  console.log(user[prop]);
}
