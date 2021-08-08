// Methods(Functions) and Objects

// key: function () {} 

var user = {
    firstName: "Mohamed",
    lastName: "Ibrahim",
    role: "Admin",
    loginCount: 35,
    facebookSignedIn: true,
    courseList: [], // empty = 0
    buyCourse: function (courseName) {
        // Here this is referring to user in this context
        this.courseList.push(courseName); 
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info: function () {
        console.log(`
firstName = ${this.firstName}
lastName = ${this.lastName}
role = ${this.role}
loginCount = ${this.loginCount}
facebookSignedIn = ${this.facebookSignedIn}
courseList = ${this.courseList}
`);
    }
};

var courseList = true;

console.log(user.firstName);

console.log(user.getCourseCount());

user.buyCourse("React JS course");

user.buyCourse("Python course");

console.log(user.getCourseCount());

user.info();