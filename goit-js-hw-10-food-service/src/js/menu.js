import itemMenu from '../gallery-items.hbs'
import array from '../menu.json'
const markup = itemMenu(array)
const listRef = document.querySelector('.js-menu')
listRef.insertAdjacentHTML('beforeend',markup)
