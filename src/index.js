import * as elementCreation from './element'
import * as tabs from './tabs'
import './style.css'

(() => {
    const mainContent = document.getElementById('content')

    tabs.homeTab()

    const tabMenu = elementCreation.create('button', 'class', 'tab', 'Menu', tabs.tabContainer)
    tabMenu.classList.add('menu')
    tabMenu.setAttribute('data-for-tab', '2')
    const tabContact = elementCreation.create('button', 'class', 'tab', 'Contact', tabs.tabContainer)
    tabContact.classList.add('contact')
    tabContact.setAttribute('data-for-tab', '3')

    const tabContentMenu = elementCreation.create('div', 'class', 'content', 'Menu: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a augue ut elit vulputate commodo a eget risus. Fusce iaculis malesuada nisi, eget condimentum urna luctus ut. Nam vel tincidunt nunc, fringilla sodales massa. Nunc bibendum neque dolor, et auctor neque congue id. Duis non nunc felis. Donec odio ipsum, volutpat eu enim sit amet, varius pellentesque lacus. Aliquam auctor nec arcu id tincidunt. Donec sapien tellus, faucibus placerat congue quis, luctus vel velit. Aliquam et tortor faucibus, pulvinar dolor eu, pretium ante.', mainContent)
    tabContentMenu.classList.add('menu')
    tabContentMenu.setAttribute('data-tab', '2')
    const tabContentContact = elementCreation.create('div', 'class', 'content', 'Contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nibh tortor. Vivamus quis lobortis dui. Curabitur ut lectus mi. Etiam consequat et elit non hendrerit. Sed elementum pulvinar eros, sit amet luctus sem feugiat id. Nam condimentum euismod eros, in tincidunt leo interdum non. Aliquam mattis rhoncus mattis. Nullam diam nulla, lacinia eget ultricies vel, euismod ut augue. Fusce ac placerat augue. Integer finibus nisl quis libero mollis, fermentum mollis arcu pretium. Phasellus vel nibh in neque dignissim pharetra vitae at lorem. Aliquam dignissim posuere placerat. Duis vulputate nisi vitae mi dignissim sollicitudin. In congue, mi at dignissim rhoncus, ante enim vestibulum magna, ac iaculis massa lacus vitae lorem. Ut nec eros vel est tempor cursus. Aenean ultrices interdum pulvinar.', mainContent)
    tabContentContact.classList.add('contact')
    tabContentContact.setAttribute('data-tab', '3')

    const setupTabs = () => {
        document.querySelectorAll('.tab').forEach(button => {
            button.addEventListener('click', () => {
                const tabNumber = button.dataset.forTab
                const tabToActivate = mainContent.querySelector(`.content[data-tab='${tabNumber}']`)
                tabs.tabContainer.querySelectorAll('.tab').forEach(button => {
                    button.classList.remove('tab-active')
                })
                mainContent.querySelectorAll('.content').forEach(content => {
                    content.classList.remove('content-active')
                })
                button.classList.add('tab-active')
                tabToActivate.classList.add('content-active')
            })
        })
    }

    const footer = (() => {
        const container = elementCreation.create('div', 'class', 'footer-container', '', mainContent)
        const copyright = elementCreation.create('div', 'class', 'footer-copyright', 'Copyright 2022 Acme Corporation. All rights reserved', container)
        const contact = elementCreation.create('div', 'class', 'footer-contact', 'Contact us at info@acme.com or 1-800-555-1212', container)
        const help = elementCreation.create('div', 'class', 'footer-help', 'Need help? Visit our support page for assistance', container)        
    })()

    document.addEventListener('DOMContentLoaded', () => {
        setupTabs()
        tabs.tabContainer.querySelector('.tab').click()
    })
})()