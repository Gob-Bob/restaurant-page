import * as ele from "./element"

const homeTab = ele.createElement('div', 'id', 'home-tab', 'Home')
ele.createElement('div', 'id', 'menu-tab', 'Menu')
ele.createElement('div', 'id', 'contact-tab', 'Contact')

ele.createClass(homeTab, 'tab')