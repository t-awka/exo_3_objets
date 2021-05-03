let francois = {
    panier: ["huile", "tomate", "pain"],
    derober(p1){
        for (let i = 0; i < p1.panier.length -1; i++) {
            this.panier.push(p1.panier[i]);
            p1.panier.splice(i, 1);
            i--;
        }
    }
}

let sergio = {
    panier: ["oranges", "yaourt", "gâteaux"]
}

francois.derober(sergio);
console.log(francois.panier);
console.log(sergio.panier);