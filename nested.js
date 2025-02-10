const school = {
    name: "bncc",
    class: ["11", "12"],
    events: ["science fair", "bijoy dibos", "21 feb"],
    unique: {
        color: "blue",
        result: {
            gpa: 5,
            merit: "top"
        }
    }
}
console.log(school.unique.result)
school.events[1] = "Hello"
console.log(school.events[1])
console.log(school)
