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
export const createContainer = (containerClassName, firstElementClassName, firstElementDisplayText, SecondElementClassName, SecondElementDisplayText, appendParent) => {
    const container = create('div', 'class', containerClassName, '', appendParent)
    const firstElement = create('div', 'class', firstElementClassName, firstElementDisplayText, container)
    const secondElement = create('div', 'class', SecondElementClassName, SecondElementDisplayText, container)
    return {container, firstElement, secondElement}
}
export const createMenuItem = (name, price, imgSource, parent) => {
    const container = createContainer('menu-sub2-container', 'menu-sub2-title', name + ' ... $' + price, 'menu-sub2-content', '', parent)
    const image = img(imgSource, container.secondElement)
}