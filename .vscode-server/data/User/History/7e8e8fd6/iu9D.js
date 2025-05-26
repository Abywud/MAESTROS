// Code your solutions in this file
//const gifts = [ "tedy bear", "drone" ,"doll"];

//function WrapGifts(gifts) {
   // for (let i = 0; i< gifts.length; i++) {
      //  console.log(`Wrapped ${gifts[i]} and added a bowl`);
      //  debugger;
   // }
   // return gifts;
//}   
//WrapGifts(gifts);




const names = ["Abiud", "Kinya", "Rose"];
const event = "Birthday";

function writeCards(cards, event) {
    const messages = [];
    for (let i = 0; i < cards.length; i++) {
        const message = `Thank you, ${cards[i]}, for the wonderful ${event} gift!`;
        console.log(message);
        debugger;
        messages.push(message);
    }
    return messages;
}


function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber--);
    }
}