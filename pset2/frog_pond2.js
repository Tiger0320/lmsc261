const activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];

let index = prompt("choose activity");
index = index % 4;
print(activities[index]);
