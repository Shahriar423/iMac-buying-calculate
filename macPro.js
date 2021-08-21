const FirstM = document.getElementById('first-memory');
const bestPrice = document.getElementById('best-price');
const firstStorage = document.getElementById('first-storage');
const secondMemory = document.getElementById('second-memory');
const secondStorage = document.getElementById('second-storage');
const thirdStorage = document.getElementById('third-storage');
const deliveryCost = document.getElementById('delivery-cost');
const deliverQuick = document.getElementById('deliver-quick');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const totalPrice = document.getElementById('total-price');
const lastTotal = document.getElementById('last-total');
const freeDelivery = document.getElementById('free-delivery');

FirstM.addEventListener('click', function () {
    memoryCost.innerText = '00';
    updateTotal();
});
secondMemory.addEventListener('click', function () {
    memoryCost.innerText = '180';
    updateTotal();
});
firstStorage.addEventListener('click', function () {
    storageCost.innerText = '00';
    updateTotal();
})
secondStorage.addEventListener('click', function () {
    storageCost.innerText = '100';
    updateTotal();
});
thirdStorage.addEventListener('click', function () {
    storageCost.innerText = '180';
    updateTotal();
});
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '00';
    updateTotal();
})
deliverQuick.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    updateTotal();
});
function updateTotal() {
    const mainPrice = Number(bestPrice.innerText);
    const extraMemoryCost = Number(memoryCost.innerText);
    const extraStorageCost = Number(storageCost.innerText)
    const extraDeliverCost = Number(deliveryCost.innerText)
    const totalValue = mainPrice + extraMemoryCost + extraStorageCost + extraDeliverCost;
    totalPrice.innerText = totalValue;
    lastTotal.innerText = totalPrice.innerText;
}