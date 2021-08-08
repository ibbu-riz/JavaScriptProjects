// first user signup

const uid = "abc123";

// uid = "abcd234";

var fullName = "Md Ibrahim";

var email = "mailmeib@ibbu.com";

var password = "123456";

var confirmPassword = "123456";

var courseCount = 0;

var isLoggedInFromGoogle = false;

var country = "India";

// fullName = prompt("Enter your name");

// console.log("Full Name is: ",fullName);

// console.log(uid);

// console.log(email);

// console.log(courseCount);

// console.log(isLoggedInFromGoogle);

// String Interpolation

console.log(`
    With Unique ID: ${uid}
    User is : ${fullName}
    and his email: ${email}
    and the course count is : ${courseCount}
    and user password: ${password}
    and is logged in from Google : ${isLoggedInFromGoogle}
    and his country is : ${country}
`)