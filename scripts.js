const USD = 5.59
const EUR = 6.18
const GBP = 7.3
const ARS = 0.0059
const YUAN = 0.79



const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


amount.addEventListener("input", () => {
    let sanitizedValue = amount.value.replace(/[^0-9.,]/g, "");
    
    if (/^[.,]/.test(sanitizedValue)) {
        sanitizedValue = sanitizedValue.replace(/^[.,]/, "");
    }
    
    sanitizedValue = sanitizedValue.replace(/,/g, ".");

 
    let parts = sanitizedValue.split(".");
    if (parts.length > 2) {
        sanitizedValue = parts[0] + "." + parts.slice(1).join("");
    }

    amount.value = sanitizedValue;
});

form.onsubmit = (event) => {
    event.preventDefault()

    const normalizedAmount = parseFloat(amount.value.replace(/,/g, '.'));

    if (isNaN(normalizedAmount) || normalizedAmount <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    switch (currency.value) {
        case "USD":
            convertCurrency(normalizedAmount, USD, "US$");
            break;
        case "EUR":
            convertCurrency(normalizedAmount, EUR, "€");
            break;
        case "GBP":
            convertCurrency(normalizedAmount, GBP, "£");
            break;
        case "ARS":
            convertCurrency(normalizedAmount, ARS, "ARS$");
            break;
        case "YUAN":
            convertCurrency(normalizedAmount, YUAN, "¥");
            break;
        default:
            alert("Selecione uma moeda válida.");
            break;
    }
};

function convertCurrency (amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")
        result.textContent = `R$${total}`
        footer.classList.add("show-result")

    } catch (error) {
        footer.classList.remove("show-result")
        alert ("Não foi possível converter. Tente  novamente mais tarde")
    }

}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
