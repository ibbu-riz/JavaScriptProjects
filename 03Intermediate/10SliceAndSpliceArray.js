// Slice and Splice in array

// Whenever passing a range

// start position or value is inclusive(included)

// end position or value is exclusive(not included)

var users = ["Ibbu", "Rish", "John", "Sak", "Rao", "Adav", "Riz", "Yog"]

// console.log(users.slice(1, 3)); // Here 1,2 index

// console.log(users.slice(1, 6));

// console.log(users.slice(users.length - 1)); --> little confusing

// users.splice(1, 2, "HI")

// splice(1st param, 2nd param, 3or more params)

//  1st param -> start position (index)

// 2nd param -> no. of count to be covered and replaced with value
// , starting from the start position

// 3or more params -> values that be replaced (we can include as many as possible) 

users.splice(1, 3, "HI", "BYE", "SEE You Soon")

console.log(users);