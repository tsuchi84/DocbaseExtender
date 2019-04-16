import NavItem from './NavItem'
import LocalStorageKey from './LocalStorageKey'

export default async function () {
    const items = document.getElementsByClassName('nav-list__item')

    chrome.storage.local.get(LocalStorageKey.defaultValue, (values) => {
        const hideAllGroup: boolean = !! values.hideAllGroup

        let html: string = ''
        if (hideAllGroup) {
            const changed = new NavItem('更新順', 'desc%3Achanged_at')
            html += changed.html(hideAllGroup)
        }

        const created = new NavItem('作成順', 'desc%3Acreated_at')
        html += created.html(hideAllGroup)


        items[0].insertAdjacentHTML('afterend', html)
    })
}