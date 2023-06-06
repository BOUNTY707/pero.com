// const tabsLink = document.querySelectorAll('.product__main-links .main-link')

// tabsLink.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         tabsLink.forEach((item) => {
//             item.classList.remove("active")
//         })
//         item.classList.add("active")
//     })
// })


// slick carousel

// let slickopts = {
//     centerPadding: '60px',
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     rows: 3,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2
//             }
//         },
//         {
//             breakpoint: 526,
//             settings: {
//                 slidesToShow: 1,
//                 rows: 3
//             }
//         },


//     ]
// };

// $('.carousel').slick(slickopts);


// Modal

// const slideItem = document.querySelectorAll('.slide-item .product-icons .product__icons1'),
//     modal = document.querySelector('.modal__wrap'),
//     modaCloseBtn = document.querySelector('[data-close]')

// function closeModal() {
//     modal.classList.add('hide')
//     modal.classList.remove('show')
//     document.body.style.overflow = ''
// }

// function openModal() {
//     modal.classList.add('show')
//     modal.classList.remove('hide')
//     document.body.style.overflow = 'hidden'
//     clearInterval(modalTimerId)
// }

// slideItem.forEach(item => {
//     item.addEventListener('click', openModal)
// })

// modaCloseBtn.addEventListener('click', closeModal)

// modal.addEventListener('click', (e) => {
//     if (e.target == modal) {
//         closeModal()
//     }
// })

// document.addEventListener('keydown', (e) => {
//     if (e.code == 'Escape' && modal.classList.contains('show')) {
//         closeModal()
//     }
// })


