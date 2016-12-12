export function ajaxGet(url) {
    return new Promise((resolve, reject) => {
        url === '/known-endpoint'
            ? resolve('Some data')
            : reject('Error!');
    });
}