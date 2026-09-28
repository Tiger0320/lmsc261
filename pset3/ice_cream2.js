const conesSoldPerHour = 3;
const inventory = 60;

for (let hour = 1; hour <= 12; hour++) {
    print(conesSoldPerHour * hour + " sold at hour " + hour);
    print((inventory - conesSoldPerHour * hour) + " left");
}