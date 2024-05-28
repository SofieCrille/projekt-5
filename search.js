
    function filterFunction() {
        console.log("Function called");
        var input, filter, div, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        div.classList.add("show");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
                console.log("Showing: " + a[i].innerText);
            } else {
                a[i].style.display = "none";
            }
        }

        // Hide dropdown if input is empty
        if (input.value === '') {
            div.classList.remove("show");
            console.log("Input is empty, hiding dropdown");
        }
    }


