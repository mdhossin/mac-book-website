// get all extra cost id
const memoryCost = document.getElementById("memoryCost");
const storageCost = document.getElementById("storageCost");
const deliveryCost = document.getElementById("deliveryCost");

// update bonus total price
const bonusTotal = document.getElementById("totalCost");

function totalPrice(costId) {
  const extraCostId = document.getElementById(costId + "Cost");
  const extraCost = parseInt(extraCostId.innerText);
  const totalCostAmount = parseInt(bonusTotal.innerText);
  bonusTotal.innerText = totalCostAmount + extraCost;
}
//  update total price

function totalCost(cost) {
  const extraCostId = document.getElementById(cost + "Cost");
  const extraCost = parseInt(extraCostId.innerText);
  const totalPrice = document.getElementById("totalPrice");
  const totalAmount = parseInt(totalPrice.innerText);
  totalPrice.innerText = totalAmount + extraCost;
}

// add event listener memory button
document.getElementById("memorySmall").addEventListener("click", function () {
  memoryCost.innerText = "0";
});
document.getElementById("memoryBig").addEventListener("click", function () {
  memoryCost.innerText = "180";
  totalCost("memory");
  totalPrice("memory");
});

// add event listener storage button
document.getElementById("storageSmall").addEventListener("click", function () {
  storageCost.innerText = "0";
});

document.getElementById("storageMedium").addEventListener("click", function () {
  storageCost.innerText = "100";
  totalCost("storage");
  totalPrice("storage");
});

document.getElementById("storageBig").addEventListener("click", function () {
  storageCost.innerText = "180";
  totalCost("storage");
  totalPrice("storage");
});

// add event listener delivery button
document.getElementById("freeDelivery").addEventListener("click", function () {
  deliveryCost.innerText = "0";
});
document
  .getElementById("deliveryCharge")
  .addEventListener("click", function () {
    deliveryCost.innerText = "20";
    totalCost("delivery");
    totalPrice("delivery");
  });

//   add event handeler promo apply button
document.getElementById("promoButton").addEventListener("click", function () {
  promoDiscount();
});

function promoDiscount() {
  const promoInput = document.getElementById("promoInput");
  const promoValue = promoInput.value;
  const totalPrice = parseInt(bonusTotal.innerText);
  if (promoValue == "stevekaku") {
    bonusTotal.innerText = totalPrice - (totalPrice * 20) / 100;
  } else {
    alert("Please enter the write promo code");
  }
}
