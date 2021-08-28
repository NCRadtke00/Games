document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    { name: "fries", img: "memoryimg/fries.png" },
    { name: "fries", img: "memoryimg/fries.png" },
    { name: "cheeseburger", img: "memoryimg/cheeseburger.png" },
    { name: "cheeseburger", img: "memoryimg/cheeseburger.png" },
    { name: "hotdog", img: "memoryimg/hotdog.png" },
    { name: "hotdog", img: "memoryimg/hotdog.png" },
    { name: "ice-cream", img: "memoryimg/ice-cream.png" },
    { name: "ice-cream", img: "memoryimg/ice-cream.png" },
    { name: "milkshake", img: "memoryimg/milkshake.png" },
    { name: "milkshake", img: "memoryimg/milkshake.png" },
    { name: "pizza", img: "memoryimg/pizza.png" },
    { name: "pizza", img: "memoryimg/pizza.png" },
  ];
  const grid = document.querySelector(".grid");
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }
  createBoard();
  function checkForMatch(){}
  function flipCard(){}
});
