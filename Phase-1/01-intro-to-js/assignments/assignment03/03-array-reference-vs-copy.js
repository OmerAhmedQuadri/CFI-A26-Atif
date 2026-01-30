//21
// let arr1 = [10, 20, 30]
// let arr2 = arr1
// arr1[0] = 100
// console.log(arr1)//100,20,30
// console.log(arr2)//100,20,30//explanation updating the arr1[0] in arr1 and storing in arr2

//22
// let arr1 = [5, 10, 15]
// let arr2 = arr1
// arr2.push(20)
// console.log(arr1)//5,10,15,20
// console.log(arr2)//5,10,15,20

//23
// let arrA=[1,2,3]
// let array2=[...arrA]
// array2.push(4)
// console.log(arrA,array2);

//24
// let arr1 = [100, 200]
// let arr2 = [...arr1]
// arr2[0] = 999
// console.log(arr1[0])//100
// console.log(arr2[0])//999

//25
// let arr1 = [1, 2, 3]
// let arr2 = [...arr1]
// console.log(arr1 == arr2)//false         Explanation: it only stores the reference of arr1 not values
// console.log(arr1[0] == arr2[0])//true    Explanation: it stores the same index values as in arr1

//26
// let arr1=['a','b','c']
// let arr2=['a','b','c']
// console.log(arr1==arr2);//false    Explanation: values are same but arr1 is not equals to arr2 its not copying

//27
// let arr2 = arr1 //method1- is just assigning arr1 to arr2
// let arr2 = [...arr1]//method 2- is copying the arr1(copy method) & assigning to arr2

//28
// var A1=[10,20,30]
// var B1=A1//reference copy
// var B12=[...A1]//spread copy
// B1.push(40)
// console.log(A1);//printing & pushing new value in original array
// console.log(B1);//printing reference values 
// console.log(B12);//printing spread copy not pushing the new element


