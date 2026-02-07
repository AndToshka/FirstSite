// Получаем кнопку
const toTopBtn = document.getElementById('toTopBtn');

// Показать/скрыть кнопку при прокрутке
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
});

// Прокрутка вверх при клике
toTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const toUslugi = document.getElementById('uslugi');

toUslugi.addEventListener('click', function() {
    const targetElement = document.getElementById('uslugiSection');
    
    if (targetElement) {

        const headerHeight = document.querySelector('.mainHeader').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});


const toCompany = document.getElementById('toCompany');

toCompany.addEventListener('click', function() {
    const targetElement = document.getElementById('aboutCompany');
    
    if (targetElement) {

        const headerHeight = document.querySelector('.mainHeader').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});

const toMap = document.getElementById('toMap');

toMap.addEventListener('click', function() {
    const targetElement = document.getElementById('map');
    
    if (targetElement) {

        const headerHeight = document.querySelector('.mainHeader').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});


const toMain = document.getElementById('toMain');

toMain.addEventListener('click', function() {
    const targetElement = document.getElementById('main');
    
    if (targetElement) {

        const headerHeight = document.querySelector('.mainHeader').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});