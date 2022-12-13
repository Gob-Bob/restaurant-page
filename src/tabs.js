import * as elementCreation from './element'

const mainContent = document.getElementById('content')

export const tabContainer = elementCreation.create('div', 'class', 'tabContainer', '', mainContent)

export const homeTab = (() => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Home', tabContainer)
    tabButton.setAttribute('data-for-tab', '1')

    const tabContentContainer = elementCreation.create('div', 'class', 'content', '', mainContent)
    tabContentContainer.classList.add('home-content-container')
    tabContentContainer.setAttribute('data-tab', '1')

    const tabTitle = elementCreation.create('div', 'class', 'home-title', 'Welcome to the Scrap Yard!', tabContentContainer)

    const customerReview = (() => {
        const container = elementCreation.create('div', 'class', 'review-container', '', tabContentContainer)
        elementCreation.create('div', 'class', 'review', "I had a truly delightful dining experience at this restaurant, thanks to the fantastic food and top-notch service. The atmosphere was cozy and inviting, and I felt right at home. I would highly recommend this restaurant to anyone, and I'll definitely be coming back! Thank you for a memorable evening.", container)
        elementCreation.create('div', 'class', 'customer', ' - Local Scrapper', container)
    })()

    const restaurantHours = (() => {
        const mainContainer = elementCreation.create('div', 'class', 'hours-container', '', tabContentContainer)
        elementCreation.create('div', 'class', 'hours-title', 'Hours', mainContainer)
        const hoursContainer = elementCreation.create('div', 'class', 'hours-container', '', mainContainer)
        const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const hoursOfOpening = ': 9am - 10pm'
        daysArray.forEach(day => {
            elementCreation.create('div', 'class', 'days-time-open', day + hoursOfOpening, hoursContainer)
        })
    })()
    const restaurantLocation = (() => {
        const mainContainer = elementCreation.create('div', 'class', 'location-container', '', tabContentContainer)
        elementCreation.create('div', 'class', 'location-title', 'Location', mainContainer)
        elementCreation.create('div', 'class', 'address', '123 Acme Drive, Corporation, CA', mainContainer)
    })()
})