import * as ele from "./element"
import './style.css'

(function () {
    
    const eleVar = {
        homeTab: ele.createElement('button', 'class', 'tab', 'Home'),
        menuTab: ele.createElement('button', 'class', 'tab', 'Menu'),
        contactTab: ele.createElement('button', 'class', 'tab', 'Contact'),
        
        homeTabContent: ele.createElement('div', 'class', 'tab', 'Home Tab Content'),
        menuTabContent: ele.createElement('div', 'class', 'tab', 'Menu Tab Content'),
        contactTabContent: ele.createElement('div', 'class', 'tab', 'Contact Tab Content'),
    }
    
    const miscVar = {
        tabClassArray: ['home', 'menu', 'contact'],
        tabNode: document.querySelectorAll('.tab'),
    }

    miscVar.tabNode.forEach((element, index) => {
        if (index >= 3 && index <= 5) {
            element.classList.add(miscVar.tabClassArray[index-3])
            element.classList.add('content')
        } else {
            element.classList.add(miscVar.tabClassArray[index])
        }
    })

    const sayHello = () => {
        console.log('Hello world!')
    }

})()