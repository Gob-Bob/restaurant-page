import * as elementCreation from './element'
import mobilImageFile from './mobil.jpg'
import superTechImageFile from './supertech.jpg'

const mainContent = document.getElementById('content')
export const tabContainer = elementCreation.create('div', 'class', 'tabContainer', '', mainContent)

const createContainer = (containerClassName, firstElementClassName, firstElementDisplayText, SecondElementClassName, SecondElementDisplayText, appendParent) => {
    const container = elementCreation.create('div', 'class', containerClassName, '', appendParent)
    const firstElement = elementCreation.create('div', 'class', firstElementClassName, firstElementDisplayText, container)
    const secondElement = elementCreation.create('div', 'class', SecondElementClassName, SecondElementDisplayText, container)
    return {container, firstElement, secondElement}
}

export const homeTab = (() => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Home', tabContainer)
    tabButton.classList.add('tab-active')
    const tabContentContainer = elementCreation.create('div', 'class', 'content', '', mainContent)
    tabContentContainer.classList.add('container')
    tabContentContainer.classList.add('home')
    tabContentContainer.classList.add('content-active')

    const tabTitle = elementCreation.create('div', 'class', 'home-title', 'Welcome to the Scrap Yard!', tabContentContainer)

    const customerReview = createContainer('review-container', 'customer-comment', "I had a truly delightful dining experience at this restaurant, thanks to the fantastic food and top-notch service. The atmosphere was cozy and inviting, and I felt right at home. I would highly recommend this restaurant to anyone, and I'll definitely be coming back! Thank you for a memorable evening.", 'customer-name', ' - Local Scrapper', tabContentContainer)

    const restaurantHours = (() => {
        const container = createContainer('restaurantHours-container', 'hours-title', 'Hours', 'hours-container', '', tabContentContainer)
        const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const hoursOfOpening = ': 9am - 10pm'
        daysArray.forEach(day => {
            elementCreation.create('div', 'class', 'days-time-open', day + hoursOfOpening, container.secondElement)
        })
    })()

    const restaurantLocation = createContainer('location-container', 'location-title', 'Location', 'location-address', '123 Acme Drive, Corporation, CA', tabContentContainer)
})

export const menuTab = () => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Menu', tabContainer)
    const tabContentContainer = elementCreation.create('div', 'class', 'content', '', mainContent)
    tabContentContainer.classList.add('container')
    tabContentContainer.classList.add('menu')

    const beverageMenu = (() => {
        const beverageContainer = createContainer('beverage-container', 'beverage-title', 'Beverages', 'beverage-content', '', tabContentContainer)
    
        const mobil = (() => {
            const container = createContainer('mobil-container', 'mobil-title', 'Mobil 1 Extended Performance Full Synthetic Motor Oil 5W-30', 'mobil-content', '', beverageContainer.secondElement)
            const image = elementCreation.create('img', 'class', 'mobil-image', '', container.secondElement)
            image.src = mobilImageFile
            elementCreation.create('div', 'class', 'mobil-price', '$39.99', container.secondElement)
        })()
        
        const superTech = (() => {
            const container = createContainer('supertech-ontainer', 'supertech-title', 'Super Tech Full Synthetic SAE 5W-30 Motor Oil', 'supertech-content', '', beverageContainer.secondElement)
            const image = elementCreation.create('img', 'class', 'supertech-image', '', container.secondElement)
            image.src = superTechImageFile
            elementCreation.create('div', 'class', 'supertech-price', '$26.85', container.secondElement)
        })()
    })()
}

export const contactTab = () => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Contact', tabContainer)
    const tabContentContainer = elementCreation.create('div', 'class', 'content', 'Contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis erat sed elit scelerisque cursus. Fusce dignissim volutpat justo, in pretium lectus viverra a. Suspendisse potenti. Morbi vitae enim accumsan, euismod tellus at, facilisis tortor. Duis rutrum turpis sed velit volutpat, sed pellentesque quam euismod. Proin quis erat quis erat auctor fermentum at quis orci. Nam dignissim leo at urna bibendum, quis tincidunt arcu lobortis. In hac habitasse platea dictumst. Sed in nunc quis nunc imperdiet aliquet.', mainContent)
    tabContentContainer.classList.add('container')
    tabContentContainer.classList.add('contact')
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