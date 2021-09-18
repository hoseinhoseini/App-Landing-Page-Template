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
    videoPopup.classList.remove('video-popup-open')
})

// ----------------------------------------------------------------
// ------------------------- Video Player -------------------------
// ----------------------------------------------------------------
