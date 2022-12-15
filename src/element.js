export const create = (type, selector, selectorName, text, parent) => {
    const element = document.createElement(type)
    if (selector == 'class') {
        element.classList.add(selectorName)
    }
    element.innerHTML = text
    parent.appendChild(element)
    return element
}
export const img = (source, parent) => {
    const element = document.createElement('img')
    element.src = source
    parent.appendChild(element)
    return element
}
export const createContainer = (containerClassName, firstElementClassName, firstElementDisplayText, secondElementClassName, secondElementDisplayText, parent) => {
    const container = create('div', 'class', containerClassName, '', parent)
    const firstElement = create('div', 'class', firstElementClassName, firstElementDisplayText, container)
    const secondElement = create('div', 'class', secondElementClassName, secondElementDisplayText, container)
    return {container, firstElement, secondElement}
}
export const createMenuItem = (name, price, imgSource, parent) => {
    const container = createContainer('menu-sub2-container', 'menu-sub2-title', name + ' ... $' + price, 'menu-sub2-content', '', parent)
    const image = img(imgSource, container.secondElement)
}
export const createContact = (name, title, phone, email, imgSource, parent) => {
    const container = createContainer('contact-sub2-container', 'contact-sub2-info-container', '', 'contact-sub2-img', '', parent)
    img(imgSource, container.secondElement)
    const subContainer = createContainer('contact-sub3-container', 'contact-sub3-title', name, 'contact-sub3-info', '', container.firstElement)
    create('div', '', '', title, subContainer.secondElement)
    create('div', '', '', phone, subContainer.secondElement)
    create('div', '', '', email, subContainer.secondElement)
}