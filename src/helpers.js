function choice (items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
    if(items.indexOf(item) >= 0) {
        items.splice(items.indexOf(item), 1);
        return item;
    } else {
        return undefined;
    }
}

export {choice, remove}