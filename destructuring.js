// destructuring - it simplifies accessing valuses.

const nums = [1,2,3,"jaya"];

// console.log(nums[0]); // manual way

const [one , x, y , name] = nums;

console.log(name);


// for objects.

const fullname = {
    fname :"jaya",
    lname : "praksh"
}

const {fname , lname}  = fullname;

console.log(fname + lname);
