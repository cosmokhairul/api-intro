// Javascript Object notation
// JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranvir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhat',
        profession: 'actor',
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);
//Stringified যখন হয়ে যাবে তখন সে কিন্তু আর object থাকবে না অর্থাৎ সেটা একটা string হয়ে যাবে এবং সেখান থেকে কোনো property একসেস করা যাবে না যেমন const converted = JSON.stringify(shop.address) করা যাবে না
// আর যদি access করতে হয় তাহলে JSON.parse দিয়ে object বানিয়ে access করতে হবে যেমন const converted = JSON.parse(shopStringified.address);