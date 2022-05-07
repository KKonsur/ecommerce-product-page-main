const cartValue = document.querySelector('.addProductContainer__value')
const plusButton = document.querySelector('.addProductContainer__addButton')
const minusButton = document.querySelector('.addProductContainer__removeButton')
const mainImage = document.querySelector('.mainImage')
const lightBoxMainImage = document.querySelector('.lightBox__mainImage')
const lightBox = document.querySelector('.lightBox')
const thumbnailImages = document.querySelectorAll('.imagesSection__thumbnailImage')
const lightBoxThumbnailImages = document.querySelectorAll('.lightBox__thumbnailImage')
const previousButton = document.querySelector('.previousButton')
const nextButton = document.querySelector('.nextButton')
const previousButtonMobile = document.querySelector('.previousButton--mobile')
const nextButtonMobile = document.querySelector('.nextButton--mobile')
const closeButton = document.querySelector('.lightBox__closeButton')
const addToCartButton = document.querySelector('.addProductContainer__addToCartButton')
const cartValueContainer = document.querySelector('.cartSection__cartValue')
const cartIcon = document.querySelector('.cartSection__cartIcon')
const avatarIcon = document.querySelector('.cartSection__imageAvatar')
const navLink = document.querySelectorAll('.nav__link')
const bin = document.querySelector('.cartSection__bin')
const menuIcon = document.querySelector('.nav__menuIcon')
const images = [
   './images/image-product-1.jpg',
   './images/image-product-2.jpg',
   './images/image-product-3.jpg',
   './images/image-product-4.jpg',
]
let value = 0
let currentImageIndex = 0

plusButton.addEventListener('click', () => cartValue.textContent = ++value)
minusButton.addEventListener('click', () => value > 0 ? cartValue.textContent = --value : 0)

navLink.forEach(link => {
   link.addEventListener('click', () => {
      navLink.forEach(link => {
         link.classList.remove('nav__link--active')
      })
      link.classList.add('nav__link--active')
   })
})

thumbnailImages.forEach((image, index) => {
   image.addEventListener('click', () => {
      mainImage.src = images[index]
      currentImageIndex = index
   })
})

lightBoxThumbnailImages.forEach((image, index) => {
   image.addEventListener('click', () => {
      lightBoxMainImage.src = images[index]
      currentImageIndex = index
   })
})

mainImage.addEventListener('click', () => {
   if (window.innerWidth > 700) {
      lightBox.classList.add('lightBox--active')
   }
})

closeButton.addEventListener('click', () => {
   lightBox.classList.remove('lightBox--active')
})

document.body.addEventListener('keydown', e => {
   if (e.keyCode == 27) {
      lightBox.classList.remove('lightBox--active')
   }
})

nextButton.addEventListener('click', () => {
   if (currentImageIndex == images.length - 1) {
      currentImageIndex = 0
   }
   else {
      ++currentImageIndex
   }

   lightBoxMainImage.src = images[currentImageIndex]

   if (window.innerWidth < 700)
      mainImage.src = images[currentImageIndex]
})

previousButton.addEventListener('click', () => {
   if (currentImageIndex == 0) {
      currentImageIndex = images.length - 1
   }
   else {
      --currentImageIndex
   }

   lightBoxMainImage.src = images[currentImageIndex]

   if (window.innerWidth < 700)
      mainImage.src = images[currentImageIndex]
})


nextButtonMobile.addEventListener('click', () => {
   if (currentImageIndex == images.length - 1) {
      currentImageIndex = 0
   }
   else {
      ++currentImageIndex
   }

   lightBoxMainImage.src = images[currentImageIndex]

   if (window.innerWidth < 700)
      mainImage.src = images[currentImageIndex]
})

previousButtonMobile.addEventListener('click', () => {
   if (currentImageIndex == 0) {
      currentImageIndex = images.length - 1
   }
   else {
      --currentImageIndex
   }

   lightBoxMainImage.src = images[currentImageIndex]

   if (window.innerWidth < 700)
      mainImage.src = images[currentImageIndex]
})

addToCartButton.addEventListener('click', () => {
   if (value != 0) {
      cartValueContainer.style = "display: flex;"
      cartValueContainer.textContent = value
      document.querySelector('.cartSection__numberOfProduct').textContent = value
      document.querySelector('.cartSection__price').textContent = `$${(value * 125).toFixed(2)}`
      if (document.querySelector('.cartSection__basketEmpty')) {
         document.querySelector('.cartSection__basketEmpty').style = "display: none;"
      }
      document.querySelector('.cartSection__cartValueContainer').classList.add('cartSection__cartValueContainer--active')
      document.querySelector('.cartSection__basketFIlled').classList.add('cartSection__basketFIlled--active')
   }
   cartValue.textContent = 0
   value = 0
})

cartIcon.addEventListener('click', () => {
   document.querySelector('.cartSection__popup').classList.toggle('cartSection__popup--active')
})

avatarIcon.addEventListener('click', () => {
   document.querySelector('.cartSection__popup').classList.toggle('cartSection__popup--active')
})

bin.addEventListener('click', () => {
   document.querySelector('.cartSection__basketEmpty').style = "display: flex;"
   document.querySelector('.cartSection__basketFIlled').classList.remove('cartSection__basketFIlled--active')
   value = 0
   cartValueContainer.style = "display: none;"
})

menuIcon.addEventListener('click', function () {
   let imgFile = this.src.split('/').pop()
   if (imgFile == 'icon-menu.svg') {
      this.src = 'images/icon-close.svg'
   } else {
      this.src = 'images/icon-menu.svg'
   }
})

menuIcon.addEventListener('click', () => {
   document.querySelector('.nav__links').classList.toggle('nav__links--active')
   document.querySelector('body').classList.toggle('body--hiddenScroll')
})