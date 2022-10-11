function calc() {
    let price = document.getElementsByName("cena");
    let quan = document.getElementsByName("kolvo");
    if ((/^[1-9][0-9]*$/).test(price[0].value) && (/^[1-9][0-9]*$/).test(quan[0].value)) 
    {
        alert("Цена = " + parseInt(price[0].value) * parseInt(quan[0].value));
    } 
    else 
    {
        alert("Вы ввели некорректные данные");
    }
}
window.addEventListener("DOMContentLoaded", function(event) {
    let b = document.getElementById("result");
    b.addEventListener("click", calc);
});
