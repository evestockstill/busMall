export function findById(items, id) {
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        if(item.id === id) {
            return item;
        }
    }
    return null;
}
export function trackUserPick(userPick, id) {
    let found = findById(userPick, id);
    if(!found) {
        found = {
            id: id,
            timesClicked: 1
        };
        userPick.push(found);
    } else {
        found.timesClicked++;
    }
}


