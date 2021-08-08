/*
Defining a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access to create / delete courses
testprep - with access to create / delete tests
user - consume all content
other - trial user   

Input: getUserRole(name, role)
*/



// function getUserRole(name, role) {

// var getUserRole = (name, role) => {

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; // this is not necessary
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
        case "testprep":
            return `${name} is test prep with access to create and delete tests`;
        case "user":
            return `${name} is user to consume content`;
        default:
            return `${name} is a trial user`;
    }
}

console.log(getUserRole("Ibbu", "testprep"));

var getRole = getUserRole("Riz", "user");

console.log(getRole);

console.log(getUserRole("Ibbu_riz", "abc"));