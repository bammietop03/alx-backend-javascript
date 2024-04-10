export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responseData = 'Bamiwo';
      resolve(responseData);
    }, 2000);
  });
}
