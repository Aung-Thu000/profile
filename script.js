function calculate() {
  console.log('a')
    const weightInGram = document.getElementById('weightInGram').value;
    const weightInPae = weightInGram/1.0205;
    document.getElementById ('weightInPae').textContent = weightInPae.toFixed(2);

    const marketPrice = document.getElementById('marketPrice').value;
    const actualPrice = weightInPae * (marketPrice / 16);
    document.getElementById('actualPrice').textContent = actualPrice.toFixed(0);

    const salePrice = document.getElementById('salePrice').value;
    const serviceCharge = salePrice - actualPrice;
    document.getElementById('serviceCharge').textContent = serviceCharge.toFixed(0);
}
