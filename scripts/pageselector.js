// Функция для загрузки содержимого страниц
function loadPage(page) {
    const pagePath = `../pages/${page}.html`;

    fetch(pagePath)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            document.querySelector("main").innerHTML = html; // Замена содержимого main
        })
        .catch(error => {
            console.error(error);
            document.querySelector("main").innerHTML = "<p>Error loading page 😿</p><p>Вероятно, такой страницы просто нет.</p";
        });
}

// Навешиваем события на ссылки
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const page = event.target.getAttribute("data-page");
        loadPage(page); // Загружаем нужную страницу
    });
});

// По умолчанию загружаем домашнюю страницу
loadPage("home");