var nums1 = [1,2,3,4,5];
console.log(nums1);

// nums2 = nums1.map(function(i) {
//     return i * 3;
// });
nums2 = nums1.map(i => i * 3);
console.log(nums2);

// nums3 = nums1.filter(function(i) {
//     return i % 2;
// });
nums3 = nums1.filter( i => i % 2);
console.log(nums3);

//when index property and index value is same,can be {name,age}
var name = "Mike";
var age = "23";
var user = { name, age };

console.log(user);

// module from math.js
var math = require("./math.js");
console.log(math.add(23,45));
console.log(math.PI);
