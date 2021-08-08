// Borrow a method using bind

const ibbu = {
    firstName: "Mohamed",
    lastName: "Ibrahim",
    role: "Admin",
    courseCount: 3,
    // Atleast one method(fn) in this object
    getInfo: function () {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
};

// Up there, this points to ibbu but i want this points to jack,
// using bind method

const jack = {
    firstName: "Jack",
    lastName: "Pearson",
    role: "Sub-Admin",
    courseCount: 4
};

// ibbu.getInfo();

// jack.getInfo();

// Borowing a method...

// Two ways

// ibbu.getInfo.bind(jack)();

// var jackInfo = ibbu.getInfo.bind(jack);

// jackInfo();

// Binds - reference fn, call - calling fn

ibbu.getInfo.call(jack);