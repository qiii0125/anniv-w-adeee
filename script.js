const slider = document.querySelector('.slider')
const list = document.querySelector('.list')
const thumbnail = document.querySelector('.thumbnail')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

next.addEventListener('click', () => {
    initSlider('next')
});
prev.addEventListener('click', () => {
    initSlider('prev')
});

/*let runAutoPlay = setTimeout(() => {
    next.click()
}, 5000)*/

const initSlider = (type) =>  {
    const sliderItem = list.querySelectorAll('.item');
    const thumbnailItem = thumbnail.querySelectorAll('.item');

    if(type === 'next'){
        list.appendChild(sliderItem[0])
        thumbnail.appendChild(thumbnailItem[0])
        slider.classList.add('next')
    } else {
        const lastItemPosition = sliderItem.length -1
        list.prepend(sliderItem[lastItemPosition])
        thumbnail.prepend(thumbnailItem[lastItemPosition])
        slider.classList.add('prev')
    }

    setTimeout(() => {
        slider.classList.remove('next')
        slider.classList.remove('prev')
    }, 2000)

    /*clearTimeout(runAutoPlay)
    runAutoPlay = setTimeout(() => {
        next.click()
    }, 5000)*/
}