// Задача №1

const array = [3, 7, 12, 22, 14, 10, 9, 21];


function map(arr, callback) {
    let newArray = [];
    
    for(let i = 0; i < arr.length; i++) {
      const res = callback(arr[i]);
      newArray.push(res);
    }
    return newArray;
};

const result = map(array, function(item) {

    return item * 5;
});

console.log(result);

// Задача №2

const array1 = [3, 6, 11, 18, 31, 8, 24, 15];


function filter(arr, callback) {
    let newArray = [];
    
    for(let i = 0; i < arr.length; i++) {
      const condition = callback(arr[i]);
      if(condition) {
        newArray.push(arr[i]);
      }
      
      
    }
    return newArray;
};

const result1 = filter(array1, function(item) {

    return item % 2 === 0 && item % 3 === 0;
});

console.log(result1);

// Задача №3

 const notification = [
{
    date: '09/07/2020',
    msg: 'Message #1'
},
{
    date: '11/07/2020',
    msg: 'Message #2'
},
{
    date: '08/07/2020',
    msg: 'Message #3'
},
{
    date: '09/07/2020',
    msg: 'Message #4'
},
{
    date: '11/07/2020',
    msg: 'Message #5'
},
 ];

 function sortArray(arr) {  
    
    return arr.reduce((group, item) => {
      const key = item.date;

      if(group[key] === undefined) {
        group[key] = [];
      }
      group[key].push(item.msg)
      
      return group; 
    }, {})
    
  }

console.log(sortArray(notification));








 
  
 