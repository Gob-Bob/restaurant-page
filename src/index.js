import * as ele from "./element"
import './style.css'

(function () {
    
    const eleVar = {
        tabContainer: ele.createElement('div', 'class', 'tabContainer', ''),
        homeTab: ele.createElement('button', 'class', 'tab', 'Home'),
        menuTab: ele.createElement('button', 'class', 'tab', 'Menu'),
        contactTab: ele.createElement('button', 'class', 'tab', 'Contact'),
        
        tabContentContainer: ele.createElement('div', 'class', 'tabContentContainer', ''),
        homeTabContent: ele.createElement('div', 'class', 'content', 'Home Tab Content'),
        menuTabContent: ele.createElement('div', 'class', 'content', 'Menu Tab Content'),
        contactTabContent: ele.createElement('div', 'class', 'content', 'Contact Tab Content'),
    }
    
    const miscVar = {
        tabClassArray: ['home', 'menu', 'contact'],
        tabNode: document.querySelectorAll('.tab'),
        contentNode: document.querySelectorAll('.content'),
    }

    miscVar.tabNode.forEach((element, index) => {
        element.classList.add(miscVar.tabClassArray[index])
    })

    miscVar.contentNode.forEach((element, index) => {
        element.classList.add(miscVar.tabClassArray[index])
    })

    const sayHello = () => {
        console.log('Hello world!')
    }
})()