const fruitsPrice = new Map();

fruitsPrice.set('apple', 70);
fruitsPrice.set('pineapple', 150);
fruitsPrice.set('banana', 89);
fruitsPrice.set('mango', 120);

for (let [key, value] of fruitsPrice) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}


