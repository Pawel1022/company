'use strict'

const innerList = document.querySelector('.nav__list--inner')
const btnOffers = document.querySelector('#btn')
const navBtn = document.querySelector('.nav__btn')
const navBox = document.querySelector('.nav__box')
const body = document.body

btnOffers.addEventListener('click', () => {
	innerList.classList.toggle('nav__list--active')
	btnOffers.classList.toggle('nav__link--active')
})

navBtn.addEventListener('click', () => {
	navBox.classList.toggle('nav__box--active')
	navBox.classList.contains('nav__box--active') ? (body.style.overflowY = 'hidden') : (body.style.overflowY = 'visible')
    
})
