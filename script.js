//necessary for project

//1) build the deck of cards
var suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

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
                weight = 11;
            var card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
    return deck;
};

    


//2) create a deal function

//3) create a hit me function

//4) create a stay function

//5) create a you win/lose

// extra stuff if I have time:
// add split and double down features 
// start w/ fixed amount of money
// create chips to bet with

