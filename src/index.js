import * as elementCreation from './element'
import * as tabs from './tabs'
import './style.css'

(() => {
    const mainContent = document.getElementById('content')

    tabs.homeTab()
    tabs.menuTab()
    tabs.contactTab()
    tabs.setupTabs()

    const footer = (() => {
        const container = elementCreation.create('div', 'class', 'footer-container', '', mainContent)
        const copyright = elementCreation.create('div', 'class', 'footer-copyright', 'Copyright 2022 Acme Corporation. All rights reserved', container)
        const contact = elementCreation.create('div', 'class', 'footer-contact', 'Contact us at info@acme.com or 1-800-555-1212', container)
        const help = elementCreation.create('div', 'class', 'footer-help', 'Need help? Visit our support page for assistance', container)        
    })()
})()