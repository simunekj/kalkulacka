const vstup1 = document.getElementById("vstup1");
const vstup2 = document.getElementById("vstup2");
const vysledek = document.getElementById("vysledek");

function getNumber(input) {
  // povolí i desetinnou čárku
  const text = input.value.trim().replace(",", ".");
  return Number(text);
}

function vypocet(op) {
  const a = getNumber(vstup1);
  const b = getNumber(vstup2);

  if (vstup1.value.trim() === "" || vstup2.value.trim() === "") {
    vysledek.textContent = "Výsledek: vyplň obě čísla";
    return;
  }

  if (isNaN(a) || isNaN(b)) {
    vysledek.textContent = "Výsledek: zadej čísla (ne text)";
    return;
  }

  if (op === "/" && b === 0) {
    vysledek.textContent = "Výsledek: nelze dělit nulou";
    return;
  }

  let r;
  if (op === "+") r = a + b;
  if (op === "-") r = a - b;
  if (op === "*") r = a * b;
  if (op === "/") r = a / b;

  vysledek.textContent = "Výsledek: " + r;
}

document.getElementById("tlPlus").addEventListener("click", () => vypocet("+"));
document.getElementById("tlMinus").addEventListener("click", () => vypocet("-"));
document.getElementById("tlKrat").addEventListener("click", () => vypocet("*"));
document.getElementById("tlDeleno").addEventListener("click", () => vypocet("/"));

