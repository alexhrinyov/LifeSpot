//let userAge = prompt("Внимание, контент для лиц старше 18! Сколько вам лет?");
//if (userAge < 18) {
//    alert("Извините, сходите в гугл.");
//    window.location.href = "http://www.google.com";
//}
//else {
//    alert("Приветствуем на LifeSpot! Время сейчас: " + new Date().toLocaleString());
//}

function checkElement() {
    // Получим все контейнеры с видео
    let elements = document.getElementsByTagName('iframe');

    // Пробежимся в цикле и выведем все в консоль
    for (let i = 0; i <= elements.length; i++) {
        // Получим всё что внутри контейнера
        let childElements = elements[i];
      
        // Получим элемент, содержащий описание видео
        // Он у нас единственный с тегом h3, снова воспользуемся поиском по тегу,
        let videoDescription = childElements;
        // Выведем его текст на консоль
        console.log(videoDescription.textContent);

        let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
        if (!videoDescription.textContent.includes(inputString))

    }
    
}