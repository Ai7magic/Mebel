
function toggleMenu() {
    var menu = document.getElementById('dropdownMenu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Закрывать меню при клике вне его
window.onclick = function(event) {
    if (!event.target.matches('.burger-button')) {
        var menu = document.getElementById('dropdownMenu');
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
    }
}