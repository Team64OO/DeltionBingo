let objectives = [
    "test 0",
    "test 1",
    "test 2",
    "test 3",
    "test 4",
    "test 5",
    "test 6",
    "test 7",
    "test 8",
    "test 9"
];

let b1 = document.getElementById("b1");

function setObjective(square, location) {
    square.innerHTML = objectives[location];
}