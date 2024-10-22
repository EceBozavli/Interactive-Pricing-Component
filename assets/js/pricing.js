const fiyat = 0.00016;

function hesapla() {
  const gosterim = Number(slider.value) * 1000;
  let toplamFiyat = Math.round(gosterim * fiyat);

  if(yillikOdeme.checked) {
    toplamFiyat = (toplamFiyat * 12) * 0.75;
  }
  paymentResultTxt.innerText = ' $' + toplamFiyat;
}

paymentResultTxt.addEventListener('click', hesapla);
slider.addEventListener('input', hesapla);
yillikOdeme.addEventListener('click', hesapla);

hesapla();