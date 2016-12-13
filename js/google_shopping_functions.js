var data = require('../products.json');

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
// function getItemsCount(itemData) {
//   return itemData.items.length;
// }

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

function getItems (objectData) {
  newArray = objectData;
  //console.log(newArray.length);
  return newArray
}

// console.log(getItems(data.items))

// #2.) getItemsByBrand(items, brand)

function getItemsByBrand(item, brandName) {
  newItem = getItems(item)
  //console.log(newItem.length);
  newArray = []
  for (var i = 0; i < newItem.length; i++) {
     var camBrand = newItem[i].product.brand;
     if (camBrand === brandName) {
       newArray.push(newItem[i])
        //console.log(data.items[i].product.title)
     }
   }  // console.log(newArray.length);
      return newArray
}

//console.log(getItemsByBrand(data.items, 'Canon'))

// Question 3
function getItemsByAuthor(arr, author) {
  newItem = getItems(arr)
  var newArray = [];
  for (var i = 0; i < newItem.length; i++) {
    var names = newItem[i].product.author.name
    var item = newItem[i];
    if (names.includes(author)) {
      //console.log(item);
      //console.log(i + ' ' + names);
      newArray.push(item);
      }
  }
  //console.log(newArray.length);
  return newArray;
}

//console.log(getItemsByAuthor(data.items, 'Adorama Camera'))


//4.) getAvailableProducts(items)

function getAvailableProducts (items) {
  newItem = getItems(items)
  var availItems = []
  for (var i = 0; i < newItem.length; i++) {
    if (newItem[i].product.inventories[0].availability === 'inStock') {
      //console.log(i + ' ' + data.items[i].product.title);
      availItems.push(newItem[i])
    }
  } //console.log(availItems.length);
    return availItems;
}

//console.log(getAvailableProducts(data.items))

// 5.) Use your functions

// * All items made by Sony.
//console.log(getItemsByBrand(data.items,'Sony'));

// * All items made by Sony that are available.
//console.log(getAvailableProducts(getItemsByBrand(data.items, 'Sony')));

// * All available items by the author "Adorama Camera"
//var available = getAvailableProducts(data.items)
//console.log(getItemsByAuthor(available, 'Adorama Camera'));

// * All items made by Nikon with the author eBay.
var nik = getItemsByBrand(data.items, 'Nikon')
console.log(getItemsByAuthor(nik, 'eBay'))
