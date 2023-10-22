// //variables
// //primitive datatypes
// Number
// string
// null
// Boolean
// undefined
// Symbol
// js is developed by Brandon Eich in 1995.

// To create Array

var arr=[1,2,3,4,5];
var arr1=new Array(6,7,8,9);
var arr2=new Array(1);
// console.log(arr);
// console.log(typeof(arr1));

// arr.push(10)//used toadd element in the end of the array
// console.log(arr);
// arr.unshift(20);//used to add element in the starting of the array
// console.log(arr);
// arr.pop();//used to remove the element of array from last
// console.log(arr);
// arr.shift();//shift() is used to remove an element from the starting  of the array
// console.log(arr);

const fruits=["Apple","Mango","Kiwi","Banana","Orange"];
// console.log(fruits.splice(2,1));
// console.log(fruits.splice(1,3));
// console.log(fruits.slice(1,4));

/*
Javascript interpreter moves all the variable declarations and function declaration to top.
 */
var student={
    name:'rajesh',
    roll:45,
    marks:50
}
console.log(`Name of the student ${student.name} and marks of the student ${student.marks}`)
//
//to print keys in on=bject
for(var i in student)
{
    console.log(i,':',student[i]);
}

//to print value in object
// for(var j of student)
// {
// console.log(j);
// }