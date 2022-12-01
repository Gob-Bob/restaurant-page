import * as ele from "./element"

(function () {
    
    const homeTab = ele.createElement('button', 'class', 'tab', 'Home')
    const menuTab = ele.createElement('button', 'class', 'tab', 'Menu')
    const contactTab = ele.createElement('button', 'class', 'tab', 'Contact')
    
    const homeTabContent = ele.createElement('div', 'class', 'tab', 'Home Tab Content')
    const menuTabContent = ele.createElement('div', 'class', 'tab', 'Menu Tab Content')
    const contactTabContent = ele.createElement('div', 'class', 'tab', 'Contact Tab Content')

    const tabVar = {
        tabClassArray: ['home', 'menu', 'contact'],
        tabNode: document.querySelectorAll('.tab')
    }

    tabVar.tabNode.forEach((element, index) => {
        if (index >= 3 && index <= 5) {
            element.classList.add(tabVar.tabClassArray[index-3])
            element.classList.add('content')
        } else {
            element.classList.add(tabVar.tabClassArray[index])
        }
    })

    const sayHello = () => {
        console.log('Hello world!')
    }

})()