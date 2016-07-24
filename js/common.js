var link = document.querySelector(".search-btn-hotel");
var popup = document.querySelector(".formsearch");

link.addEventListener("click", function(event) {
    event.preventDefault();
    if (popup.classList.contains("formsearch-show")) {
        popup.classList.remove("formsearch-show");
    } else {
        popup.classList.add("formsearch-show");
    }
    date_in_out.focus();
});