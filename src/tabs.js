import * as elementCreation from './element'

const mainContent = document.getElementById('content')
const tabContainer = elementCreation.create('div', 'class', 'tabContainer', '', mainContent)

const homeTab = (() => {
    const tabButton = elementCreation.create('button', 'class', 'tab', 'Home', tabContainer)
    tabButton.setAttribute('data-for-tab', '1')

    const tabContent = elementCreation.create('div', 'class', 'content', '', mainContent)
    tabContent.classList.add('container')
    tabContent.setAttribute('data-tab', '1')

    const tabTitle = elementCreation.create('div', 'class', 'title', 'iCafe', tabContent)
    tabTitle.classList.add('home')

    const customerReview = elementCreation.create('div', 'class', 'content', "I had a truly delightful dining experience at this restaurant, thanks to the fantastic food and top-notch service. The atmosphere was cozy and inviting, and I felt right at home. I would highly recommend this restaurant to anyone, and I'll definitely be coming back! Thank you for a memorable evening. - Jane Doe", tabContent)

    const variablesNeedingClass = [
        tabButton,
        tabContent,
        tabTitle,
        customerReview
    ]
    variablesNeedingClass.forEach(variable => {
            variable.classList.add('home')
    })
})

export {mainContent, tabContainer, homeTab}