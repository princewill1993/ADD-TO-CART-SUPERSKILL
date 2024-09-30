// ALL DELETE BTNS ID:
let delBtnOne = document.querySelector("#del-btn1");
let delBtnTwo = document.querySelector("#del-btn2");
let delBtnThree = document.querySelector("#del-btn3");
let delBtnFour = document.querySelector("#del-btn4");

// ALL ADDITION BTNS ID:
let plusBtnOne = document.querySelector("#plus-btn1");
let plusBtnTwo = document.querySelector("#plus-btn2");
let plusBtnThree = document.querySelector("#plus-btn3");
let plusBtnFour = document.querySelector("#plus-btn4");

// ALL SUBTRACTION ITEMS BTNS ID:
let idsubBtnOne = document.querySelector("#sub-btn1");
let idsubBtnTwo = document.querySelector("#sub-btn2");
let idsubBtnThree = document.querySelector("#sub-btn3");
let idsubBtnFour = document.querySelector("#sub-btn4");

// ALL ID FOR CARDS HOLDING THE PHONES:
let cardOne = document.querySelector("#card-1");
let cardTwo = document.querySelector("#card-2");
let cardThree = document.querySelector("#card-3");
let cardFour = document.querySelector("#card-4");

// ALL PLUS IDs

let idPlusBtnOne = document.querySelector("#plus-btn1");
console.log(plusBtnOne);

let idPlusBtnTwo = document.querySelector("#plus-btn2");
let idPlusBtnThree = document.querySelector("#plus-btn3");
let idPlusBtnFour = document.querySelector("#plus-btn4");

let cartQantityOne = document.querySelector("#cart-quantity-1");
let cartQantityTwo = document.querySelector("#cart-quantity-2");
let cartQantityThree = document.querySelector("#cart-quantity-3");
let cartQantityFour = document.querySelector("#cart-quantity-4");

// initial state of numOfItems in each cart
let numOfItems1 = 1;

// TOTAL AMOUNT OF ITEMS ID.
let idTotalAmountOfItems = document.querySelector("#total-amt");

// ALL PRICES ID.
let cardOnePrice = document.querySelector("#price-card-1");
let cardTwoPrice = document.querySelector("#price-card-2");
let cardThreePrice = document.querySelector("#price-card-3");
let cardFourPrice = document.querySelector("#price-card-4");

// ID FOR THE LOVE EMOJI
let loveEmoji = document.querySelectorAll(".love-emoji");
console.log(loveEmoji);

// ALL CARDS PRICES:

//---------------------------- ALL CARTS STARTS HERE!------------------------------

let phoneOnePrice = 40000;
let phoneTwoPrice = 30000;
let phoneThreePrice = 60000;
let phoneFourPrice = 10000;

let phonePriceList = [
  phoneOnePrice,
  phoneTwoPrice,
  phoneThreePrice,
  phoneFourPrice,
];

function sumOfItems(listOfPrices) {
  let totat_sum = 0;
  for (let i = 0; i < listOfPrices.length; i++) {
    totat_sum += listOfPrices[i];
  }
  return totat_sum;
}

// ADDING EVENT LISTENERS.
// ---------------------CARD 1.-----------------------
delBtnOne.addEventListener("click", removeCardOne);

function removeCardOne(e) {
  if (e.target.tagName === "BUTTON") {
    cardOne.style.display = "none";
  }
}

// ADDING AN EVENT LISTERNER TO THE CARD 1 (ADD BTN).

idPlusBtnOne.addEventListener("click", increaseCartItems);

function increaseCartItems() {
  if (numOfItems1 < 1) {
    return;
  } else {
    numOfItems1 += 1;
    cartQantityOne.innerHTML = numOfItems1;
    phonePriceList.push(phoneOnePrice);
    idTotalAmountOfItems.innerText = `Total amount of items is: #${sumOfItems(
      phonePriceList
    )}`;
  }
}

idsubBtnOne.addEventListener("click", decreaseCardOne);

function decreaseCardOne() {
  if (numOfItems1 <= 1 || phonePriceList.indexOf(phoneOnePrice) == -1) {
    return;
  } else {
    let indexOfFirstItem = phonePriceList.indexOf(phoneOnePrice);
    phonePriceList.splice(indexOfFirstItem, 1);
    sumOfItems(phonePriceList);
    numOfItems1 -= 1;
    cartQantityOne.innerHTML = numOfItems1;
    idTotalAmountOfItems.innerText = `Total amount of items is: #${sumOfItems(
      phonePriceList
    )}`;
  }
}

//-----------------------cart item 2 starts here--------------------------

// function TO remove card 2 at a CLICK.

delBtnTwo.addEventListener("click", removeCardTwo);
function removeCardTwo(e) {
  if (e.target.tagName === "BUTTON") {
    cardTwo.style.display = "none";
  }
}

// ADDING AN EVENT LISTERNER TO THE CARD 2 (ADD BTN) TO INCREASE CART QUANTITY AND UPDATE TOTAL PRICE.

idPlusBtnTwo.addEventListener("click", increaseCartItemsOne);

function increaseCartItemsOne() {
  if (numOfItems1 < 1) {
    return;
  } else {
    numOfItems1 += 1;
    cartQantityTwo.innerHTML = numOfItems1;
    phonePriceList.push(phoneTwoPrice);
    idTotalAmountOfItems.innerText = `Total amount of items is: #${sumOfItems(
      phonePriceList
    )}`;
  }
}

// ADDING AN EVENT LISTERNER TO THE CARD 2 (SUBTRACTION BTN) TO REDUCE CART QUANTITY AND UPDATE TOTAL PRICE..

idsubBtnTwo.addEventListener("click", decreaseCartItemsTwo);

function decreaseCartItemsTwo() {
  if (numOfItems1 <= 1 || phonePriceList.indexOf(phoneTwoPrice) == -1) {
    return;
  } else {
    let indexOfFirstItem = phonePriceList.indexOf(phoneTwoPrice);
    phonePriceList.splice(indexOfFirstItem, 1);
    sumOfItems(phonePriceList);
    numOfItems1 -= 1;
    cartQantityTwo.innerHTML = numOfItems1;
    idTotalAmountOfItems.innerText = `Total amount of items is: #${sumOfItems(
      phonePriceList
    )}`;
  }
}

// ------------CART 3 STARTS HERE---------------

// function TO remove card 3 at a CLICK.

delBtnThree.addEventListener("click", removeCardThree);
function removeCardThree(e) {
  if (e.target.tagName === "BUTTON") {
    cardThree.style.display = "none";
  }
}

// ADDING AN EVENT LISTERNER TO THE CARD 3 (ADD BTN) TO INCREASE CART QUANTITY AND UPDATE TOTAL PRICE.

idPlusBtnThree.addEventListener("click", increaseCartItemsThree);

function increaseCartItemsThree() {
  if (numOfItems1 < 1) {
    return;
  } else {
    numOfItems1 += 1;
    cartQantityThree.innerHTML = numOfItems1;
    phonePriceList.push(phoneThreePrice);
    idTotalAmountOfItems.innerText = `Total amount of items is: #${sumOfItems(
      phonePriceList
    )}`;
  }
}

// ADDING AN EVENT LISTERNER TO THE CARD 3 (SUBTRACTION BTN) TO REDUCE CART QUANTITY AND UPDATE TOTAL PRICE..

idsubBtnThree.addEventListener("click", decreaseCartItemsThree);

function decreaseCartItemsThree() {
  if (numOfItems1 <= 1 || phonePriceList.indexOf(phoneThreePrice) == -1) {
    return;
  } else {
    let indexOfFirstItem = phonePriceList.indexOf(phoneThreePrice);
    phonePriceList.splice(indexOfFirstItem, 1);
    sumOfItems(phonePriceList);
    numOfItems1 -= 1;
    cartQantityThree.innerHTML = numOfItems1;
    idTotalAmountOfItems.innerText = `Total amount of items is: #${sumOfItems(
      phonePriceList
    )}`;
  }
}

// ------------CART 4 STARTS HERE---------------
// function TO remove card 3 at a CLICK.

delBtnFour.addEventListener("click", removeCardFour);
function removeCardFour(e) {
  if (e.target.tagName === "BUTTON") {
    cardFour.style.display = "none";
  }
}

// ADDING AN EVENT LISTERNER TO THE CARD 4 (ADD BTN) TO INCREASE CART QUANTITY AND UPDATE TOTAL PRICE.

idPlusBtnFour.addEventListener("click", increaseCartItemsFour);

function increaseCartItemsFour() {
  if (numOfItems1 < 1) {
    return;
  } else {
    numOfItems1 += 1;
    cartQantityFour.innerHTML = numOfItems1;
    phonePriceList.push(phoneFourPrice);
    idTotalAmountOfItems.innerText = `Total amount of items is: #${sumOfItems(
      phonePriceList
    )}`;
  }
}

// ADDING AN EVENT LISTERNER TO THE CARD 4 (SUBTRACTION BTN) TO REDUCE CART QUANTITY AND UPDATE TOTAL PRICE..

idsubBtnFour.addEventListener("click", decreaseCartItemsFour);

function decreaseCartItemsFour() {
  if (numOfItems1 <= 1 || phonePriceList.indexOf(phoneFourPrice) == -1) {
    return;
  } else {
    let indexOfFirstItem = phonePriceList.indexOf(phoneFourPrice);
    phonePriceList.splice(indexOfFirstItem, 1);
    sumOfItems(phonePriceList);
    numOfItems1 -= 1;
    cartQantityFour.innerHTML = numOfItems1;
    idTotalAmountOfItems.innerText = `Total amount of items is: #${sumOfItems(
      phonePriceList
    )}`;
  }
}

// Function to toggle the heart image
function toggleLoveEmoji(element) {
  // Check the current source of the image
  if (element.src.includes("love-blank.jpeg")) {
    // Change to checked heart

    element.src = "IMG/love-checked.jpg";
  } else {
    // Change back to blank heart
    element.src = "IMG/love-blank.jpeg";
  }
}

// loveEmoji.forEach((item) => {
//   item.addEventListener("click", function () {
//     toggleLoveEmoji(item);
//   });
// });
