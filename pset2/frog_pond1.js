let numFrogs = prompt("How many frogs are about to jump in?");

const maxFrogCapacity = 15;
const isPondOverCapacity = Number(numFrogs) > maxFrogCapacity;
const messageToPrint = isPondOverCapacity ? "It's too crowded!" : "Come on in!";

print(messageToPrint);