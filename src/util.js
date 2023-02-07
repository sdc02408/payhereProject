export function setStorageItem(key, value) {
    localStorage.setItem(key, value);
}

export function setStorageStringItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getStorageItem(key) {
    return localStorage.getItem(key);
}

export function getStorageParsedItem(key) {
    return JSON.parse(getStorageItem(key));
}
