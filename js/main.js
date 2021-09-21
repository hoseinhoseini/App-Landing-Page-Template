// ----------------------------------------------------------------
// ------------------------- Preloader ----------------------------
// ----------------------------------------------------------------
$(window).on('load', function () {
    $('.preloader').fadeOut('slow')
})

// ----------------------------------------------------------------
// ------------------------- Navbar Shrink -------------------------
// ----------------------------------------------------------------
const navbar = document.querySelector('.navbar')

document.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 90) {
        navbar.classList.add('navbar-shrink')
    } else {
        navbar.classList.remove('navbar-shrink')
    }
})

// ----------------------------------------------------------------
// ------------------------- Video Player -------------------------
// ----------------------------------------------------------------

const videoPlayerClose = document.querySelector('.video-popup-close')
const videoPopup = document.querySelector('.video-popup')
const videoPlayBtn = document.querySelector('.video-play-btn')

videoPopup.addEventListener('click', function () {
    if (videoPopup.classList.contains('video-popup-open')) {
        videoPopup.classList.remove('video-popup-open')
    } else {
        videoPopup.classList.add('video-popup-open')
    }
})

videoPlayBtn.addEventListener('click', function () {
    videoPopup.classList.add('video-popup-open')
})

videoPlayerClose.addEventListener('click', function () {
    if (videoPopup.classList.contains('video-popup-open')) {
        videoPopup.classList.remove('video-popup-open')
    }
})

// ----------------------------------------------------------------
// ------------------------- Feature Carousel ---------------------
// ----------------------------------------------------------------
$('.feature-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },

        600: {
            items: 2,
        },

        1000: {
            items: 3,
        },
    },
})

// ----------------------------------------------------------------
// --------------------- App Screenshots Carousel -----------------
// ----------------------------------------------------------------
$('.screenshots-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },

        600: {
            items: 2,
        },

        1000: {
            items: 4,
        },
    },
})

// ----------------------------------------------------------------
// --------------------- Testimonials Carousel -----------------
// ----------------------------------------------------------------
$('.testimonials-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },

        600: {
            items: 2,
        },

        1000: {
            items: 3,
        },
    },
})

// ----------------------------------------------------------------
// --------------------- Team Carousel -----------------
// ----------------------------------------------------------------
$('.team-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },

        600: {
            items: 2,
        },

        1000: {
            items: 3,
        },
    },
})

// ----------------------------------------------------------------
// --------------------- Page Scrolling - Scrollit  ---------------
// ----------------------------------------------------------------
$.scrollIt({
    topOffset: -50,
})

// ----------------------------------------------------------------
// --------------------- Navbar Collapse  -------------------------
// ----------------------------------------------------------------
$('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide')
})

// ----------------------------------------------------------------
// ------------ Toggler Theme - Light & Dark Mode  ----------------
// ----------------------------------------------------------------
function toggleTheme() {
    updateIcon()
}

toggleTheme()

function updateIcon() {
    if ($('body').hasClass('dark')) {
        $('.toggle-theme i').removeClass('fa-moon')
        $('.toggle-theme i').addClass('fa-sun')
    } else {
        $('.toggle-theme i').removeClass('fa-sun')
        $('.toggle-theme i').addClass('fa-moon')
    }
}

$('.toggle-theme').on('click', function () {
    $('body').toggleClass('dark')

    if ($('body').hasClass('dark')) {
        localStorage.setItem('hossein-theme', 'dark')
    } else {
        localStorage.setItem('hossein-theme', 'light')
    }
})

if (localStorage.getItem('hossein-theme') !== null) {
    if (localStorage.getItem('hossein-theme') === 'dark') {
        $('body').addClass('dark')
    } else {
        $('body').removeClass('dark')
    }
}
