export default function orderByProps(obj, order) {
    const orderArry  = [];
    const sortedOrderArry = [];
    for (const key in obj) {
        if (order.includes(key)) {
            orderArry.push({ key, value: obj[key] });
        } else {
            sortedOrderArry.push({ key, value: obj[key] });
        }
    }
    orderArry.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
    sortedOrderArry.sort((a, b) => (a.key > b.key ? 1 : -1));
    return [...orderArry, ...sortedOrderArry];
}