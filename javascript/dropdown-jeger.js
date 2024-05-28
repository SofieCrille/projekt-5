console.log("please virk")

let dropdown = document.getElementById("title-dropdown");
let titles = [
    "Direktør",
    "Ejer",
    "Konsulent",
    "Manager",
    "Medarbejder",
    "Studerende",
    "Top Executive (formand, administrerende direktør osv.)",
    "Vice President /VP /EVP",
    "Andet"
];

 for (let i = 0; i < titles.length; i++) {
    let option = document.createElement("option");
    option.text = titles[i];
    option.value = titles[i];
    dropdown.add(option);
}

dropdown.addEventListener("change", function() {
    if (this.value !== "") {
        this.blur();
        let selectedTitle = this.value;
    } 
    else {
        console.log("Ingen titel valgt.");
    }
});