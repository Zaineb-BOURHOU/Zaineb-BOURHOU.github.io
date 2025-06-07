window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const scrollBar = document.querySelector(".scroll-bar");
    scrollBar.style.width = `${scrollPercent}%`;
});


document.querySelectorAll('.card').forEach(card => {
    const readMore = card.querySelector('.read-more');
    const readLess = card.querySelector('.read-less');

    if (readMore && readLess) {
        readMore.addEventListener('click', function(e) {
            e.preventDefault();
            card.classList.add('expanded');
            readMore.style.display = 'none';
            readLess.style.display = 'inline-block';
        });

        readLess.addEventListener('click', function(e) {
            e.preventDefault();
            card.classList.remove('expanded');
            readMore.style.display = 'inline-block';
            readLess.style.display = 'none';
        });
    }
});


        window.addEventListener('scroll', function() {
            const topBar = document.getElementById('top-bar');
            if (window.scrollY > 0) {
                topBar.classList.add('scrolled');
            } else {
                topBar.classList.remove('scrolled');
            }
        });