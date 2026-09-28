const priceOfIceCream = 5;

let paymentRecieved = prompt("How much money do you have?");
paymentRecieved = Number(paymentRecieved);

let isPaymentEnough;

if (paymentRecieved >= priceOfIceCream) {
    isPaymentEnough = true;
    let change = paymentRecieved - priceOfIceCream;

    print("Thanks! Enjoy the Ice Cream!");
    print("Your change is $" + change);
} else {
    isPaymentEnough = false;
    print("Not enough cash!");
}