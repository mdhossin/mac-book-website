// get all extra cost id
const memoryId = document.getElementById("memoryCost");
const storageId = document.getElementById("storageCost");
const deliveryId = document.getElementById("deliveryCost");

// get all total price id

const bestPrice = document.getElementById("bestPrice");
const totalPrice = document.getElementById("totalPrice");
const grandTotalPrice = document.getElementById("grandTotal");

//  update total price

function totalCostPrice(costId) {
  const extraCostId = document.getElementById(costId + "Cost");
  const extraCost = parseInt(extraCostId.innerText);
  const bestPrice = document.getElementById("bestPrice");
  const totalBestPrice = parseInt(bestPrice.innerText);
  totalPrice.innerText = totalBestPrice + extraCost;
}

// update total price cost

function updateTotal() {
  const bestPriceCost = parseInt(bestPrice.innerText);
  const memoryCost = parseInt(memoryId.innerText);
  const storageCost = parseInt(storageId.innerText);
  const deliveryCost = parseInt(deliveryId.innerText);
  const totalCost = bestPriceCost + memoryCost + storageCost + deliveryCost;
  totalPrice.innerText = totalCost;
  const grandTotal = document.getElementById("grandTotal");
  grandTotal.innerText = totalCost;
}

// add event listener memory button
document.getElementById("memorySmall").addEventListener("click", function () {
  memoryId.innerText = "0";
  totalCostPrice("memory");
  updateTotal();
});
document.getElementById("memoryBig").addEventListener("click", function () {
  memoryId.innerText = "180";
  totalCostPrice("memory");
  updateTotal();
});

// add event listener storage button
document.getElementById("storageSmall").addEventListener("click", function () {
  storageId.innerText = "0";
  totalCostPrice("storage");
  updateTotal();
});

document.getElementById("storageMedium").addEventListener("click", function () {
  storageId.innerText = "100";
  totalCostPrice("storage");
  updateTotal();
});

document.getElementById("storageBig").addEventListener("click", function () {
  storageId.innerText = "180";
  totalCostPrice("storage");
  updateTotal();
});

// add event listener delivery button
document.getElementById("freeDelivery").addEventListener("click", function () {
  deliveryId.innerText = "0";
  totalCostPrice("delivery");
  updateTotal();
});
document
  .getElementById("deliveryCharge")
  .addEventListener("click", function () {
    deliveryId.innerText = "20";
    totalCostPrice("delivery");
    updateTotal();
  });

function promoDiscount() {
  const promoInput = document.getElementById("promoInput");
  const promoValue = promoInput.value;
  const totalPrice = document.getElementById("totalPrice");
  const totalCostAmount = parseInt(totalPrice.innerText);
  if (promoValue == "stevekaku") {
    grandTotalPrice.innerText = totalCostAmount - (totalCostAmount * 20) / 100;
    document.getElementById("promoButton").disabled = true;
    promoInput.value = "";
  } else {
    alert("Please enter the write promo code");
  }
}

//   add event handeler promo apply button
document.getElementById("promoButton").addEventListener("click", function () {
  promoDiscount();
});
