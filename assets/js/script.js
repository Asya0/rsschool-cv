document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.aside-nav');
    const pageNav = document.querySelectorAll('.js-nav-item');
    const pageContent = document.querySelectorAll('.main-content_page');

    if (page) {
        page.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('js-nav-item')) {
                const pagePath = e.target.dataset.pagePath;
                pageNav.forEach(el => { el.classList.remove('active') });
                document.querySelector(`[data-page-path="${pagePath}"]`).classList.add('active');

                pageContent.forEach(el => { el.classList.remove('active') });
                document.querySelector(`[data-page-target="${pagePath}"]`).classList.add('active');
            }
        });
    }
});