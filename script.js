//necessary for project

//1) build the deck of cards
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10 , 'A', 'J', 'Q', 'K'];
const suits = ['S', 'H', 'C', 'D'];
const deck= [];
const playerHand= [];
const dealerHand= [];
const pscore= 0;
const dscore=0;
const img = new Image();

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
            var card = { Value: values[i], Suit: suits[x], Weight: weight, image: `./${values[i]}${suits[x]}.png` };
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
//2) create a deal function
    window.onload = () => {
        document.querySelector("#start").onclick = () => {
            console.log("start game");
            startGame();
        };
    };
    function startGame() {
        console.log('starting game')
        createDeck();
        setHandforPlayers();
        dealCards(); 
    };
    function setHandforPlayers() {
    for (i=0; i< 2; i++){
        playerHand.push(deck[0]); // add to hit function may need to add a conditional as well
        deck.splice(0, 1);
        dealerHand.push(deck[0]);
        deck.splice(0, 1);
    }

    }
    function dealCards()
    {
        //2 random cards to dealer and player
        // playerHandCard1= document.getElementById("p1") //.concat.valuesuit.png
        // playerHandCard2= document.getElementById("p2") //.concat.valuesuit.png
        //phand needs to be an array and I need to push 2 random cards in it;
        // dealerHandCard1= document.getElementById("#d1") //.concat.valuesuit.png
        // dealerHandCard2= document.getElementById("#d2") //.concat.valuesuit.png
        //dhand needs to be an array w/ 1 random card and one face down card to start off but the face down card eventually gets revealed
        // concatanate ./valuesuit.png
        //1 of dealer cards is face down

        playerHand.forEach((card, i) => {
            const playerHandCard = document.getElementById(`phand`);
            playerHandCard.innerHTML = '';

            addCardImage(playerHandCard, card)
        })

        dealerHand.forEach((card, i) => {
            const dealerHandCard = document.getElementById(`dhand`);
            dealerHandCard.innerHTML = '';

            addCardImage(dealerHandCard, card)
        })

    };

    function addCardImage(listLocation, card) {
        let img = document.createElement('img');
        img.src = card.image
        listLocation.appendChild(img)
    }

    window.onload = () => {
        document.querySelector("#reset").onclick = () => {
           console.log("new game");
           
    };
    };
    

    // suggestion logic:
    //f suggestAMove () 
    //document.getElementById("#suggestion")
    



//3) create a hit me function
function hitMe()
{
    phand.push(card); return sum(card.weight + pscore);
}

//4) create a stay function

function stay() 
{return "Your turn is over. Dealer's turn"
};
 //then proceed to dealer turn

//4.5) dealer rules
//dealer hand =< 16- dealer must hit
function dealersMove() {
   if (dscore <= 17){
       return dealerHand.push(card);
   } else return endOfGame()
};
function endOfGame () {
    if (dscore== 21){
        return "The Dealer has 21. You lose!"
            } else if (dscore > pscore) {
                return "The Dealer wins."
            } else if (dscore > 21) {
                return "The Dealer busted. You win."
            } else {
                return "You beat the Dealer"
            }
};
//dealer hand >= 17 dealer must stay




// extra stuff if I have time:
// add split and double down features 
// start w/ fixed amount of money
// create chips to bet 