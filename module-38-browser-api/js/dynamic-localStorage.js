const displayItems = () => {
    const items = document.getElementById('items');
    items.textContent = '';

    let cart = localStorage.getItem('cart');
    if (cart) {
        const parseCart = JSON.parse(cart);

        for (const item in parseCart) {
            const element = document.createElement('li');
            let text = '';

            if (parseCart[item] == 1) {
                text = `${item}`;
            }
            else {
                text = `${item} (${parseCart[item]})`;
            }

            element.innerText = text;
            items.appendChild(element);
        }

    }
}

displayItems();

const addItem = () => {
    const inputField = document.getElementById('input-field');
    const cart = localStorage.getItem('cart');

    if (cart) {
        const parseCart = JSON.parse(cart);
        const key = inputField.value;

        if (parseCart[key]) {
            parseCart[key] += 1;
        }
        else {
            parseCart[key] = 1;
        }

        const stringifiedCart = JSON.stringify(parseCart);
        localStorage.setItem('cart', stringifiedCart);
    }
    else {
        const key = inputField.value;
        const newCart = {};
        newCart[key] = 1;

        const stringifiedCart = JSON.stringify(newCart);
        localStorage.setItem('cart', stringifiedCart);
    }

    displayItems();
    inputField.value = '';
}

