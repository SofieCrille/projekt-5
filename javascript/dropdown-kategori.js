console.log("js virker");

let kategorier = [
    "Entreprenør",
    "Arkitekt",
    "Ingeniør",
    "Elektriker",
    "Husejer",
    "Tavlebygger",
    "Studerende"
];

function dropdownkat() {
    let dropdown = document.getElementById('kategori-dropdown');
    
    for (let i = 0; i < kategorier.length; i++) {
        let option = document.createElement('option');
        option.text = kategorier[i];
        option.value = kategorier[i].toLowerCase();
        dropdown.add(option);
    }

    dropdown.addEventListener("change", function() {
        if (this.value !== "") {
            this.blur();
            let selectedCategory = this.value;
            console.log("Der er valgt " + selectedCategory);
        } else {
            console.log("Ingen kategori valgt");
        }
    });
}

document.addEventListener('DOMContentLoaded', dropdownkat);