export default function() {
    const dialogList: HTMLCollectionOf<Element> = document.getElementsByClassName('group-dialog__list')
    if (! dialogList.length) {
        return
    }

    const list: HTMLCollectionOf<HTMLElement> = dialogList[0].getElementsByTagName('li');

    const groups: Array<string> = [];
    Array.prototype.forEach.call(list, (li: HTMLLIElement) => {
        groups.push(li.getElementsByTagName('span')[0].innerText)
    });

    const panel: HTMLDivElement = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.bottom = '0';
    panel.style.width = '100%';

    const input: HTMLInputElement = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'フィルター';
    input.style.width = '100%';

    panel.appendChild(input);

    const dialogContent: HTMLCollectionOf<Element> = document.getElementsByClassName('group-dialog__content')
    const dialog: Element = dialogContent[0];

    dialog.appendChild(panel);

    let handler: number|null;
    input.addEventListener('keyup', () => {
        if (handler) {
            clearTimeout(handler);
        }

        handler = setTimeout(() => {
            const text: string = input.value;
            const results: Array<number> = [];

            groups.forEach((name: string, i) => {
                if (name.includes(text)) {
                    results.push(i)
                }
            })

            Array.prototype.forEach.call(list, (li: HTMLElement, i: number) => {
                li.style.display = results.includes(i) ? 'block' : 'none';
            });
            handler = null;
        }, 500);
    });
}