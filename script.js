// Resalta el enlace del nav segun la seccion visible
(function () {
    var links = document.querySelectorAll('.nav-link');
    var sections = [];

    links.forEach(function (link) {
        var id = link.getAttribute('href');
        if (id && id.charAt(0) === '#') {
            var sec = document.querySelector(id);
            if (sec) sections.push({ link: link, section: sec });
        }
    });

    function onScroll() {
        var scrollY = window.scrollY || window.pageYOffset;
        var current = null;
        sections.forEach(function (item) {
            if (item.section.offsetTop - 120 <= scrollY) {
                current = item;
            }
        });
        links.forEach(function (l) { l.classList.remove('active'); });
        if (current) current.link.classList.add('active');
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
})();
