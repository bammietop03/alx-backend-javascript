export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Bamiwo';
            resolve(data);
        }, 2000);
    });
}
