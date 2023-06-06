
// Modal

// const btnTab = document.querySelectorAll('.content__info-btn button'),
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
// }

// btnTab.forEach(item => {
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


// modal 2

// const submit = document.querySelectorAll('.info-btn button'),
//     modal2 = document.querySelector('.modal__wrap2'),
//     closeBtn = document.querySelector('[data-close2]');

// function closeModal2() {
//     modal2.classList.add('hide')
//     modal2.classList.remove('show')
//     document.body.style.overflow = ''
// }

// function openModal2() {
//     closeModal()
//     modal2.classList.add('show')
//     modal2.classList.remove('hide')
//     document.body.style.overflow = 'hidden'
// }

// submit.forEach(item => {
//     item.addEventListener('click', openModal2)
// })

// closeBtn.addEventListener('click', closeModal2)

// modal2.addEventListener('click', (e) => {
//     if (e.target == modal2) {
//         closeModal2()
//     }
// })

// document.addEventListener('keydown', (e) => {
//     if (e.code == 'Escape' && modal2.classList.contains('show')) {
//         closeModal2()
//     }
// })