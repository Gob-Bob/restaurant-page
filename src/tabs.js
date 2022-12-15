import * as elementCreation from './element.js'
import mobilImageFile from './mobil.jpg'
import superTechImageFile from './supertech.jpg'
import nutsBoltsImageFile from './nuts&bolts.jpg'
import spareTireImageFile from './spareTire.jpg'
import gasolineImageFile from './gasoline.jpeg'
import scrapMetalImageFile from './scrapmetal.png'
import carBatteryImageFile from './carbattery.png'
import cablesImageFile from './cables.png'


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
        const mobil = elementCreation.createMenuItem('Mobil 1 Extended Performance Full Synthetic Motor Oil 5W-30', '39.99', mobilImageFile, menuCategoryContainer.secondElement)
        const supertech = elementCreation.createMenuItem('Super Tech Full Synthetic SAE 5W-30 Motor Oil', '26.25', superTechImageFile, menuCategoryContainer.secondElement)
    })()
    const sidesMenu = (() => {
        const menuCategoryContainer = elementCreation.createContainer('menu-sub-container', 'menu-sub-title', 'Sides', 'menu-sub-content', '', tabContentContainer)
        const nutsBolts = elementCreation.createMenuItem('Assorted Nuts & Bolts', '12.00', nutsBoltsImageFile, menuCategoryContainer.secondElement)
        const spareTire = elementCreation.createMenuItem('Spare Tire Salad', '86.00', spareTireImageFile, menuCategoryContainer.secondElement)
    })()
    const entreeMenu = (() => {
        const menuCategoryContainer = elementCreation.createContainer('menu-sub-container', 'menu-sub-title', 'Entrees', 'menu-sub-content', '', tabContentContainer)
        const gasoline = elementCreation.createMenuItem('Midwest Gasoline', '32.98', gasolineImageFile, menuCategoryContainer.secondElement)
        const scrapMetal = elementCreation.createMenuItem('Stainless Steel Shavings', '14.99', scrapMetalImageFile, menuCategoryContainer.secondElement)
        const carBattery = elementCreation.createMenuItem('Duracell Car Battery Bisque', '214.99', carBatteryImageFile, menuCategoryContainer.secondElement)
        const cables = elementCreation.createMenuItem('Copper Cable Pasta', '28.98', cablesImageFile, menuCategoryContainer.secondElement)
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