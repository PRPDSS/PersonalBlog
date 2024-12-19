function showMessage(msg) { console.log(msg) }
function changeBackgroundColor() {
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    // console.log(newColor)
    document.querySelector("main").style.backgroundColor = newColor
    document.querySelector("body").style.backgroundColor = newColor
}
function toggleVisibility() {
    let elem = document.getElementById("visty-change")
    if (elem == null) return
    elem.style.visibility = elem.style.visibility == "hidden" ? "visible" : "hidden"
    console.log("работает??")
}
function logCurrentTime() {
    const time = new Date()
    alert("Сейчас " + time.getHours() + ':' + time.getMinutes())
}

function rotateImg(event, element) {
    // Получаем размеры контейнера
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left; // Координаты внутри контейнера
    const y = event.clientY - rect.top;

    // Вычисляем смещение для поворота
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 30; // Поворот по оси X
    const rotateY = ((x - centerX) / centerX) * -30; // Поворот по оси Y
    const tiltZ = ((x - centerX) / centerX) * 100; // Лёгкий наклон


    // Применяем поворот к изображению
    const img = element.querySelector('img');
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${tiltZ}px)`;
};

function restoreImg(element) {
    const img = element.querySelector('img')
    img.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
}