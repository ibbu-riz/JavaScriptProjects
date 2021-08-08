// Objects from MDN docs

var User = {
    name : "",
    getUserName : function () {
        console.log(`User name is : ${this.name}`);
    }
};

var ibbu = Object.create(User);

console.log(ibbu);
ibbu.name = "Mohamed Ibrahim"

ibbu.getUserName();

var jack = Object.create(User, {
    name : {value: "jackie"},
    courseCount : {value: 3}
});

jack.getUserName();