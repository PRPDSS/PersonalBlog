document.querySelectorAll(".kamushki").forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Скрипт запустиуся")
        // Массив картинок для снежинок
        const images = [
            '../assets/images/rocks/rock1.png',
            '../assets/images/rocks/rock2.png',
            '../assets/images/rocks/rock3.png'
        ];

        // Функция для создания снежинки
        function createSnowflake() {
            const snowflake = document.createElement('img');
            snowflake.src = images[Math.floor(Math.random() * images.length)];
            document.body.appendChild(snowflake);

            // Устанавливаем случайные начальные параметры
            const size = Math.random() * 30 + 20; // Размер от 20 до 50 пикселей
            const startX = Math.random() * window.innerWidth; // Случайное начальное положение по X
            const fallDuration = Math.random() * 3000 + 2000; // Продолжительность падения от 2 до 5 секунд
            const rotateDuration = Math.random() * 2000 + 1000; // Продолжительность вращения

            // Применяем стили прямо через JS
            snowflake.style.position = 'fixed';
            snowflake.style.left = `${startX}px`;
            snowflake.style.top = `-50px`; // За пределами экрана сверху
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            snowflake.style.pointerEvents = 'none'; // Чтобы не мешать кликам
            snowflake.style.zIndex = '9999';
            snowflake.style.transition = `transform ${fallDuration}ms linear, top ${fallDuration}ms linear`;

            // Запускаем падение с вращением
            setTimeout(() => {
                snowflake.style.top = `${window.innerHeight}px`; // Падает вниз
                snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;
            }, 0);

            // Удаляем снежинку после завершения анимации
            setTimeout(() => {
                snowflake.remove();
            }, fallDuration);
        }

        // Генерация снежинок каждые 300 мс в течение 10 секунд
        const interval = setInterval(() => {
            createSnowflake();
        }, 300);

        // Останавливаем генерацию снежинок через 10 секунд
        setTimeout(() => {
            clearInterval(interval);
        }, 10000);
    });
});