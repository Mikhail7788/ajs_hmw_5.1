const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(array, options) {
  const oldArray = array;
  const newArray = [];
  const error = new Error('Такого значения не существует!');
  
  for (const option in options) {
    const find = options[option];
    if (array[find] === undefined) {
      return error;
    }
    newArray.push({ key: find, value: array[find] });
    delete oldArray[find];
  }
  const restKeys = Object.keys(oldArray);
  for (const prop in restKeys.sort()) {
    const find = restKeys[prop];
    newArray.push({ key: find, value: array[find] });
  }
  return newArray;
}


console.log(orderByProps(obj, ['level', 'name']));