import * as elementCreation from './element.js'
import mobilImageFile from './mobil.jpg'
import superTechImageFile from './supertech.jpg'
import nutsBoltsImageFile from './nuts&bolts.jpg'
import spareTireImageFile from './spareTire.jpg'

const mainContent = document.getElementById('content')
export const tabContainer = elementCreation.create('div', 'class', 'tabContainer', '', mainContent)

export const homeTab = (() => {
    elementCreation.create('button', 'class', 'tab', 'Home', tabContainer)
    const tabContentContainer = elementCreation.create('div', 'class', 'content', '', mainContent)
    tabContentContainer.classList.add('container')
    tabContentContainer.classList.add('home')

    const tabTitle = elementCreation.create('div', 'class', 'home-title', 'Welcome to the Scrap Yard!', tabContentContainer)

    const customerReview = elementCreation.createContainer('review-container', 'customer-comment', "I had a truly delightful dining experience at this restaurant, thanks to the fantastic food and top-notch service. The atmosphere was cozy and inviting, and I felt right at home. I would highly recommend this restaurant to anyone, and I'll definitely be coming back! Thank you for a memorable evening.", 'customer-name', ' - Local Scrapper', tabContentContainer)

    const restaurantHours = (() => {
        const container = elementCreation.createContainer('restaurantHours-container', 'hours-title', 'Hours', 'hours-container', '', tabContentContainer)
        const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const hoursOfOpening = ': 9am - 10pm'
        daysArray.forEach(day => {
            elementCreation.create('div', 'class', 'days-time-open', day + hoursOfOpening, container.secondElement)
        })
    })()

    const restaurantLocation = elementCreation.createContainer('location-container', 'location-title', 'Location', 'location-address', '123 Acme Drive, Corporation, CA', tabContentContainer)
})

export const menuTab = () => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Menu', tabContainer)
    const tabContentContainer = elementCreation.create('div', 'class', 'content', '', mainContent)
    tabContentContainer.classList.add('container')
    tabContentContainer.classList.add('menu')

    const beverageMenu = (() => {
        const menuCategoryContainer = elementCreation.createContainer('menu-sub-container', 'menu-sub-title', 'Beverages', 'menu-sub-content', '', tabContentContainer)
    
        const mobil = (() => {
            const container = elementCreation.createContainer('menu-sub2-container', 'menu-sub2-title', 'Mobil 1 Extended Performance Full Synthetic Motor Oil 5W-30 ... $39.99', 'mobil-content', '', menuCategoryContainer.secondElement)
            const image = elementCreation.img(mobilImageFile, container.secondElement)
        })()
        
        const superTech = (() => {
            const container = elementCreation.createContainer('menu-sub2-container', 'menu-sub2-title', 'Super Tech Full Synthetic SAE 5W-30 Motor Oil ... $26.85', 'supertech-content', '', menuCategoryContainer.secondElement)
            const image = elementCreation.img(superTechImageFile, container.secondElement)
        })()
    })()

    const sidesMenu = (() => {
        const menuCategoryContainer = elementCreation.createContainer('menu-sub-container', 'menu-sub-title', 'Sides', 'menu-sub-content', '', tabContentContainer)
    
        const nutsBolts = (() => {
            const container = elementCreation.createContainer('menu-sub2-container', 'menu-sub2-title', 'Assorted Nuts & Bolts ... $12.00', 'nutsBolts-content', '', menuCategoryContainer.secondElement)
            const image = elementCreation.img(nutsBoltsImageFile, container.secondElement)
        })()
        
        const spareTire = (() => {
            const container = elementCreation.createContainer('menu-sub2-container', 'menu-sub2-title', 'Spare Tire Salad ... $86.00', 'spareTire-content', '', menuCategoryContainer.secondElement)
            const image = elementCreation.img(spareTireImageFile, container.secondElement)
        })()
    })()
}

export const contactTab = () => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Contact', tabContainer)
    const tabContentContainer = elementCreation.create('div', 'class', 'content', '', mainContent)
    tabContentContainer.classList.add('container')
    tabContentContainer.classList.add('contact')

    tabButton.classList.add('tab-active')
    tabContentContainer.classList.add('content-active')

    const contactUs = (() => {
        const contactCategoryContainer = elementCreation.createContainer('contact-sub-container', 'contact-sub-title', 'Contact Us', 'contact-sub-content', '', tabContentContainer)
    
        const elonMusk = (() => {
            const container = elementCreation.createContainer('contact-sub2-container', 'contact-sub2-info', 'Elon Musk', 'contact-sub2-img', '', contactCategoryContainer.secondElement)
            
            const image = elementCreation.create('img', 'class', 'mobil-image', '', container.secondElement)
            image.src = mobilImageFile
        })()
    })()
}

export const setupTabs = () => {
    const allTabs = document.querySelectorAll('.tab'),
        allTabContent = document.querySelectorAll('.content')

    allTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            allTabContent.forEach(content => {
                content.classList.remove('content-active')
            })
            allTabs.forEach(tab => {
                tab.classList.remove('tab-active')
            })
            allTabs[index].classList.add('tab-active')
            allTabContent[index].classList.add('content-active')
        })
    })
}