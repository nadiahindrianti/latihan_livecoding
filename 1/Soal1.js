//Input: nums = [2, 7, 11, 15], target = 9
//Output: [0, 1]

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); 

//soal  membuat sebuah fungsi reverse yang mana akan membalik sebuah array, 
//[1, 2, 3] [3, 2, 1]

const arr1 = [1, 2, 3];

function reverse(arr1) {
    return arr1.slice().reverse();
}

const newArr = reverse(arr1);

console.log(arr1, newArr);

//Soal - 02 
// const arr1 = [1, 3, 4, 1, 2, 8]; arr2 = [5, 6, 7, 8, 1, 3]; 
// Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8 
// Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8 

const arr2 = [1, 3, 4, 1, 2, 8];
const arr3 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const count = arr.filter(num => num > average).length;
    return count;
}

console.log(getAverage(arr2)); 
console.log(getAverage(arr3)); 


//Soal - 03 fungsi yang mana akan mencari sebuah elemen didalam array multi dimensi
const arr4 = [ 
    [10], 
    [9, 7, 1], 
    [2, 8], 
  ]; 

function searchInArray(arr4, target) {
    for (let i = 0; i < arr4.length; i++) { // Looping array utama
        for (let j = 0; j < arr4[i].length; j++) { // Looping array di dalamnya
            if (arr4[i][j] === target) {
                return [i, j]; // Kembalikan indeks [baris, kolom] jika ditemukan
            }
        }
    }
    return null; // Jika tidak ditemukan, kembalikan null
}

console.log(searchInArray(arr4, 3)); // Output: null
console.log(searchInArray(arr4, 2)); // Output: [2, 0]
console.log(searchInArray(arr4, 4)); // Output: null
console.log(searchInArray(arr4, 8)); // Output: [2, 1]


////soal lanjutan
// input        // result
//[1,4,6,7]       // [14,12,8,2]
//[7,4,2,1]       // [2,4,8,14]
//[5]             // [10]
//[1,3]			//[6,2]

function angka(input) {
    const kalidua = input.map(element => element * 2);
    const hasil = kalidua.reverse()
    return hasil;
}

const angkainput = [1,4,6,7];
const hasil = angka(angkainput);

console.log("");
console.log("Soal pertama");
console.log("input = " ,angkainput);
console.log("output = " ,hasil);

//soal kedua

const angkainput2 = [7,4,2,1];
const hasil2 = angka(angkainput2);

console.log("");
console.log("Soal kedua");
console.log("input = " ,angkainput2);
console.log("output =", hasil2);

//soal ketiga

const angkainput3 = [5];
const hasil3 = angka(angkainput3);

console.log("");
console.log("Soal ketiga");
console.log("input = " ,angkainput3);
console.log("output = " ,hasil3);

//soal keempat

const angkainput4 = [1,3];
const hasil4 = angka(angkainput4);

console.log("");
console.log("Soal keempat");
console.log("input = " ,angkainput4);
console.log("output = " ,hasil4);