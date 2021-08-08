// Picking data in js

// Destructing the data in js

// Not only in js

// Whatever data is on the rhs is similar to that of the lhs

// Probably do the destructing the data

// const user = ["ibbu", 3, "admin"];

// console.log(name[1]);

// var role = user[2];

// var name = user[0];

// var [name, courseCount, role] = user;

// console.log(role);

// console.log(name);

// Commonly destructing the objs

const MyUser = {
    name: "ibbu",
    courseCount: 3,
    role: "admin"
};

// console.log(MyUser.courseCount);

// names should match as like objs

// const {name, mycourseCount, role} = MyUser;
const {name, courseCount, role} = MyUser;

console.log(courseCount);

console.log(role);
