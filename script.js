//necessary for project

//1) build the deck of cards
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10 , 'A', 'J', 'Q', 'K'];
const suits = ['S', 'H', 'C', 'D'];
const deck= [];
const playerHand= [];
const dealerHand= [];
const pscore= 0;
// create code for ace to equal 11 at first then one once 11 makes hand over 21


function createDeck()
{
    var deck = new Array();
    for (var i = 0 ; i < values.length; i++)
    {
        for(var x = 0; x < suits.length; x++)
        {
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = pscore <= 10 ? 11 : 1;
            var card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
    console.log(deck);
    return deck;
};
let random = () => Math.floor(deck.length * Math.random());
deck.forEach((card, index) => {
  const randomIndex = random();
  const randomCard = deck[randomIndex];
  deck[randomIndex] = card;
 deck[index] = randomCard;
  deck[randomIndex], deck[index] = [deck[index], deck[randomIndex]];
}) 
const card = deck[0];
const img = new Image();
img.src = `${card}.png`;
console.log(deck);
//2) create a deal function
window.onload = () => {
    console.log(document.querySelector("#start"))
    document.querySelector("#start").onclick = () => {
    console.log("start game");
      startGame();
    };
};
function startGame() 
{
    console.log('starting game')
    createDeck();
    dealCards() 
};
function dealCards()
 {
    //2 random cards to dealer and player
    const phand= playerHand.push; //phand needs to be an array and I need to push 2 random cards in it;
    const dhand= dealerHand.push; //dhand needs to be an array w/ 1 random card and one face down card to start off but the face down card eventually gets revealed

    //1 of dealer cards is face down
};
document.getElementById("reset").onclick = () => {
    newGame(
    // return blank screen
    );
};
//3) create a hit me function
/*function hitMe()
{
    return phand.push;
}*/

//4) create a stay function

function stay() 
{return "Your turn is over. Dealer's turn";}
 //then proceed to dealer turn

/*4.5) dealer rules
dealer hand =< 16- dealer must hit
dealer hand >= 17 dealer must stay


//5) create win/lose logic
dealer hand > 21- player wins
dealer hand but 21 or less > player hand- dealer wins
dealer hand = player hand- tie*/
// suggestion logic if phand < 16, hit, if phand > 16 stay

// extra stuff if I have time:
// add split and double down features 
// start w/ fixed amount of money
// create chips to bet 