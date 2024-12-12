import orderByProps from "../js/orderByProps";

//  сначала идёт сортировка по тому, как указано в массиве сортировки,
// для тех ключей, для которых в массиве сортировки нет записи, сортировка идёт в алфавитном порядке.

test("Корректная сортировка", () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    deffence: 40,
  };
  const order = ["name", "level"];
  const result = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "deffence", value: 40 },
    { key: "health", value: 10 },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
});

test("функция работает, даже если переданные свойства не существуют", () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    deffence: 40,
  };
  const order = ["name", "balance"];
  const result = [
    { key: "name", value: "мечник" },
    { key: "attack", value: 80 },
    { key: "deffence", value: 40 },
    { key: "health", value: 10 },
    { key: "level", value: 2 },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
});

test("функция работает, даже если  свойства не переданы", () => {
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    deffence: 40,
  };
  const order = [];
  const result = [
    { key: "attack", value: 80 },
    { key: "deffence", value: 40 },
    { key: "health", value: 10 },
    { key: "level", value: 2 },
    { key: "name", value: "мечник" },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
});