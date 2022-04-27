const computer = {
    name: "Ein",
    cards: [

    ]
}

const player = {
    name: "Human",
    cards: [
        
    ]
}

const pickCard = () =>{
    return Math.floor(Math.random() * 10);
}

const selectCard = (cardNumber) => {
    console.log(player.cards[cardNumber]);
    document.getElementById("display").innerHTML= "<div class='cards'>"+player.cards[cardNumber]+"</div>"
}

const dealCards = (person) =>{
    person.cards.push(pickCard());

    let cardsHTML = ""

    for (let i = 0; i < 3; i++) {
        person.cards.push(pickCard());
        console.log(i, person.cards, person.cards[i])
        cardsHTML = cardsHTML+"<div class='cards' onClick='selectCard("+i+")'>"+person.cards[i]+"</div>"
    }

    document.getElementById("deck").innerHTML=cardsHTML;

    return person.cards;
}



console.log("computer and player stats", dealCards(computer), dealCards(player))