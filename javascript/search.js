function showDropdown() {
  document.getElementById("dropdown-searchbar").classList.toggle("show");
}

function filterDropdown() {
  const input = document.getElementById("input");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("dropdown-searchbar");
  const a = div.getElementsByTagName("a");
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
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

