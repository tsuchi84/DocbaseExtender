const baseUrl = '/search?q='
const hideAllGroupQuery = '-group%3A全員'

class NavItem {
    private readonly queries: Array<string>

    constructor(private label: string, queries: string|Array<string>) {
        if (typeof(queries) === "string") {
            this.queries = [queries]
        } else {
            this.queries = queries
        }
    }

    html(hideAllGroup: boolean = false): string {
        const queries = this.queries
        if (hideAllGroup) {
           queries.push(hideAllGroupQuery)
        }

        const url = baseUrl + queries.join('%20')

        return `
            <li class="nav-list__item" style="text-align: right">
              <a class="js-posts-link nav-list__item-link" href="${url}">
                <span style="padding-right: 40px">${this.label}</span>
              </a>
            </li>`
    }
}

export default NavItem