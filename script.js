document.getElementById("searchIcon").addEventListener("click", function() {
    var searchBar = document.getElementById("searchBar");
    if (searchBar.style.display === "flex") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "flex";
    }
});