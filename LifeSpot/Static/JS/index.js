
function autorization() {
    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);

    session.set("age", prompt("Внимание, контент для лиц старше 18! Сколько вам лет?"));
    if (session.get("age") < 18) {
        alert("Извините, сходите в гугл.");
        window.location.href = "http://www.google.com";
    }
    else {
        alert("Приветствуем на LifeSpot! Время сейчас: " + new Date().toLocaleString());
        let startDate = new Date().toLocaleString();
        session.set("startDate", startDate)
    }
    return session;
}


let contentFilter = function filterContent() {
    // Получим все контейнеры с видео
    let elements = document.getElementsByTagName('iframe');
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
   /* debugger;*/
    // Пробежимся в цикле и выведем все в консоль
    for (let i = 0; i < elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].textContent;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }

    }
    
}

// Логирование сессии (объявлено через function declaration)
let sessionLog = function logSession(session) {
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}