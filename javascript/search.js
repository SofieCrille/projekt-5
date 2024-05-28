function showDropdown() {
  document.getElementById("dropdown-searchbar").classList.toggle("show");
}

function filterDropdown() {
  let input = document.getElementById("input");
  let filter = input.value.toUpperCase();
  let div = document.getElementById("dropdown-searchbar");
  let a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    let txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

window.onclick = function(event) {
  if (!event.target.matches('#input')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

