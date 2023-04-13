//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

function removeElement(array, item) {

  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] / item != 1) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

let array = [1, 2, 3, 4, 5, 6, 7];
const item = 4;

removeElement(array, item)
