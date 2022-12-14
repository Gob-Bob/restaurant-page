import * as elementCreation from './element'

const mainContent = document.getElementById('content')
export const tabContainer = elementCreation.create('div', 'class', 'tabContainer', '', mainContent)

export const homeTab = (() => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Home', tabContainer)
    tabButton.classList.add('tab-active')
    const tabContentContainer = elementCreation.create('div', 'class', 'content', '', mainContent)
    tabContentContainer.classList.add('home-main-container')
    tabContentContainer.classList.add('content-active')

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

export const menuTab = (() => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Menu', tabContainer)
    const tabContentContainer = elementCreation.create('div', 'class', 'content', 'Menu: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis erat sed elit scelerisque cursus. Fusce dignissim volutpat justo, in pretium lectus viverra a. Suspendisse potenti. Morbi vitae enim accumsan, euismod tellus at, facilisis tortor. Duis rutrum turpis sed velit volutpat, sed pellentesque quam euismod. Proin quis erat quis erat auctor fermentum at quis orci. Nam dignissim leo at urna bibendum, quis tincidunt arcu lobortis. In hac habitasse platea dictumst. Sed in nunc quis nunc imperdiet aliquet.', mainContent)
})

export const contactTab = (() => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Contact', tabContainer)
    const tabContentContainer = elementCreation.create('div', 'class', 'content', 'Contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis erat sed elit scelerisque cursus. Fusce dignissim volutpat justo, in pretium lectus viverra a. Suspendisse potenti. Morbi vitae enim accumsan, euismod tellus at, facilisis tortor. Duis rutrum turpis sed velit volutpat, sed pellentesque quam euismod. Proin quis erat quis erat auctor fermentum at quis orci. Nam dignissim leo at urna bibendum, quis tincidunt arcu lobortis. In hac habitasse platea dictumst. Sed in nunc quis nunc imperdiet aliquet.', mainContent)
})

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

// export const setupTabs = () => {
//     document.querySelectorAll('.tab').forEach(button => {
//         button.addEventListener('click', () => {
//             const tabNumber = button.dataset.forTab
//             const tabToActivate = mainContent.querySelector(`.content[data-tab='${tabNumber}']`)
//             tabs.tabContainer.querySelectorAll('.tab').forEach(button => {
//                 button.classList.remove('tab-active')
//             })
//             mainContent.querySelectorAll('.content').forEach(content => {
//                 content.classList.remove('content-active')
//             })
//             button.classList.add('tab-active')
//             tabToActivate.classList.add('content-active')
//         })
//     })
// }