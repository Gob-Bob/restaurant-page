import * as ele from "./element"
import './style.css'

(function () {
    const mainContent = document.getElementById('content')

    const tabContainer = ele.create('div', 'class', 'tabContainer', '', mainContent)
    const tabHome = ele.create('button', 'class', 'tab', 'Home', tabContainer)
    tabHome.classList.add('home')
    tabHome.setAttribute('data-for-tab', '1')
    const tabMenu = ele.create('button', 'class', 'tab', 'Menu', tabContainer)
    tabMenu.classList.add('menu')
    tabMenu.setAttribute('data-for-tab', '2')
    const tabContact = ele.create('button', 'class', 'tab', 'Contact', tabContainer)
    tabContact.classList.add('contact')
    tabContact.setAttribute('data-for-tab', '3')

    const tabContentHome = ele.create('div', 'class', 'content', 'Home: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor venenatis libero. Vivamus viverra in metus a maximus. Aliquam a libero ut erat aliquam ultricies. Nullam quis mi libero. Curabitur tempor faucibus dui. Suspendisse nec orci maximus, interdum velit in, molestie ligula. Fusce ornare nisl metus, sed facilisis felis mattis eu. Proin felis massa, efficitur sit amet magna ac, consectetur iaculis libero. In ut sapien a lorem sollicitudin mattis in non erat. Ut placerat faucibus nisl, sed cursus turpis sodales at. Maecenas vestibulum vulputate consequat. Proin enim nisl, commodo eget condimentum ut, dictum ac felis. Nam id diam non sem rutrum molestie. Nunc turpis eros, iaculis ac nunc ut, venenatis hendrerit mi.', mainContent)
    tabContentHome.classList.add('home')
    tabContentHome.setAttribute('data-tab', '1')
    const tabContentMenu = ele.create('div', 'class', 'content', 'Menu: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a augue ut elit vulputate commodo a eget risus. Fusce iaculis malesuada nisi, eget condimentum urna luctus ut. Nam vel tincidunt nunc, fringilla sodales massa. Nunc bibendum neque dolor, et auctor neque congue id. Duis non nunc felis. Donec odio ipsum, volutpat eu enim sit amet, varius pellentesque lacus. Aliquam auctor nec arcu id tincidunt. Donec sapien tellus, faucibus placerat congue quis, luctus vel velit. Aliquam et tortor faucibus, pulvinar dolor eu, pretium ante.', mainContent)
    tabContentMenu.classList.add('menu')
    tabContentMenu.setAttribute('data-tab', '2')
    const tabContentContact = ele.create('div', 'class', 'content', 'Contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nibh tortor. Vivamus quis lobortis dui. Curabitur ut lectus mi. Etiam consequat et elit non hendrerit. Sed elementum pulvinar eros, sit amet luctus sem feugiat id. Nam condimentum euismod eros, in tincidunt leo interdum non. Aliquam mattis rhoncus mattis. Nullam diam nulla, lacinia eget ultricies vel, euismod ut augue. Fusce ac placerat augue. Integer finibus nisl quis libero mollis, fermentum mollis arcu pretium. Phasellus vel nibh in neque dignissim pharetra vitae at lorem. Aliquam dignissim posuere placerat. Duis vulputate nisi vitae mi dignissim sollicitudin. In congue, mi at dignissim rhoncus, ante enim vestibulum magna, ac iaculis massa lacus vitae lorem. Ut nec eros vel est tempor cursus. Aenean ultrices interdum pulvinar.', mainContent)
    tabContentContact.classList.add('contact')
    tabContentContact.setAttribute('data-tab', '3')

    const setupTabs = () => {
        document.querySelectorAll('.tab').forEach(button => {
            button.addEventListener('click', () => {
                const tabNumber = button.dataset.forTab
                const tabToActivate = mainContent.querySelector(`.content[data-tab='${tabNumber}']`)
                console.log(tabNumber)
                console.log(tabToActivate)
            })
        })
    }

    document.addEventListener('DOMContentLoaded', () => {
        setupTabs()
    })
})()