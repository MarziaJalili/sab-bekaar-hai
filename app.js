const API_KEY = "e6a88c27f7a5a4e2f3de62b9";
const amountInput = document.querySelector("input");
const baseSelect = document.getElementById("base");
const targetSelect = document.getElementById("target");
const result = document.querySelector(".result");

const convertShit = () => {
    const amount = Number(amountInput.value);
    const baseCurrency = baseSelect.value;
    const targetCurrency = targetSelect.value;

    if (!amount) return;

    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const rate = data.conversion_rates[targetCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        result.innerText = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
      })
      .catch(err => console.error("Error:", err));
}

 amountInput.addEventListener("input", convertShit);
baseSelect.addEventListener("change", convertShit);
targetSelect.addEventListener("change", convertShit);

// dark.mode toggle
const modeBtn = document.querySelector(".toggle-shit") 
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})
  
