let userAge = prompt("Внимание, контент для лиц старше 18! Сколько вам лет?");
if (userAge < 18) {
    alert("Извините, сходите в гугл.");
    window.location.href = "http://www.google.com";
}
else {
    alert("Приветствуем на LifeSpot! Время сейчас: " + new Date().toLocaleString());
}