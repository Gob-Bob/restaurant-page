import * as ele from "./element"
import './style.css'

(function () {
    const mainContent = document.getElementById('content')

    const tabContainer = ele.create('div', 'class', 'tabContainer', '', mainContent)
    const tabHome = ele.create('button', 'class', 'tab', 'Home', tabContainer)
    tabHome.classList.add('home')
    const tabMenu = ele.create('button', 'class', 'tab', 'Menu', tabContainer)
    tabMenu.classList.add('menu')
    const tabContact = ele.create('button', 'class', 'tab', 'Contact', tabContainer)
    tabContact.classList.add('contact')

    const tabContentContainer = ele.create('div', 'class', 'tabContentContainer', '', mainContent)
    const tabContentHome = ele.create('div', 'class', 'tab', 'Home Content', tabContentContainer)
    tabContentHome.classList.add('content', 'home')
    const tabContentMenu = ele.create('div', 'class', 'tab', 'Menu Content', tabContentContainer)
    tabContentMenu.classList.add('content', 'menu')
    const tabContentContact = ele.create('div', 'class', 'tab', 'Contact Content', tabContentContainer)
    tabContentContact.classList.add('content', 'contact')

})()