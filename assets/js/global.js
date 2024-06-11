const addEventOnElements  = function (elements, evenType , callback) {
    for (const elem of elements) elem.addEventListener(evenType,
        callback);    
}

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click" , function () {
    searchBox.classList.toggle("active");
})