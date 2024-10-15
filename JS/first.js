// console.log("wellome to first program -> Hello world");

// fullname = "Jai";
// age =5;

// console.log(fullname);
// console.log(age);

// var a=34;
// var a=86;
// console.log(a);
// let b=34;
// b=56;
// console.log(b);

// {
//     let c=5;
//     console.log(c);
// }
// let c =6;
// console.log(c);

// let d=25;
// console.log(typeof d);

// let e=BigInt(123);
// let f= Symbol("Hello");
// console.log(e);
// console.log(f);

// const student = {
//     fullname : "RAHUL",
//     age : 20,
//     cgpa : 8.2,
//     isPass: true
// };

// console.log(student);

// console.log(student.fullname);
// console.log(student["age"]);


// const profile = {
//     instagram : 'jaigupta18',
//     isfollow : true,
//     followers : 1000,
//     following : 1000
// };

// console.log(profile);
// console.log(typeof profile["followers"]);


// let a =5;
// let b= "5";

// console.log("5==5",a!==b);

//conditional statement
// let num=26;

// if(num%2 ==0){
//     console.log(num , "is even");
// }
// else{
//     console.log(num , "is odd");
// }

// let result= num%2==0 ? "even" : "odd";
// console.log(result);


// alert("Hello");

// let a = prompt("Enter a number");

// if(a%5 ==0){
//     console.log(a,"is multiple of 5");
// }
// else{
//     console.log(a,"is not a multiple of 5");
// }

// let marks = prompt("Enter the mark that you scored in the subject");

// if(marks >= 80 && marks <= 100){
//     console.log("A");
// }
// else if(marks >= 70 && marks <= 79){
//     console.log("B");
// }
// else if(marks >= 60 && marks <= 69){
//     console.log("A");
// }
// else if(marks >= 50 && marks <= 59){
//     console.log("A");
// }
// else if(marks>=0 && marks<=49){
//     console.log("F");
// }
// else{
//     console.log("Not a valid marks");
// }

// for(let i=0;i<5;i++){
//     console.log("hello");
// }

// let str="Apna college";
// for (let i of str){
//     console.log(i);
// }

// let student = {
//     name: "rahul",
//     age: 20,
//     cgps: 7.2,
//     ispass: true,
// };

// for (let key in student){
//     console.log("key is",key ,"value is",student[key]);
// }

//practice2
// let gamenum=25;

// let num=prompt("Guess the number");
// console.log(num);

// while(num!=gamenum){
//     num=prompt("you entered the wrong number,Guess again");
    
// }

// console.log("Congratulations you entered the right number");

//Template literals(created using backticks)
// let sentence=`This is the template literal`;
// console.log(sentence);


// let obj = {
//    item : "pen",
//    price : 10
// };
//this whole will come as one string.
// let output = `the cost of item ${obj.pen} is ${obj.price}`;
// console.log(output);

//when we will print this, the price will come out to be in bold as it is integer here.
// console.log("the codt of" , obj.item, "is" ,obj.price );

//practice
// let fullname=prompt("Enter the full name");
// let stringname="@"+fullname+fullname.length;
// console.log(stringname);

//Arrays
// let marks=[97,52,75];
// console.log(marks);

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum +=marks[i];
// }
// console.log(sum/marks.length);

// let marks=[85,97,44,37,76,60];
// let sum=0;

// for (let val of marks){
//     sum +=val;
// }
// let avg=sum/marks.length;
// console.log(`the avegar is ${avg}`);

// let arr=[250,645,300,900,50];

// for (let i=0;i<arr.length;i++){
//     arr[i]=arr[i]*0.9;
// }
// console.log(arr);

// let arr=[250,645,300,900,50];
// console.log(arr.push(320));
// console.log(arr);

// let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// arr.splice(0,1);
// we could have use shift as well. arr.shift();
// arr.splice(1,1,"Ola"); 
// arr.push("Amazon");

//Function
// function sumoftwonos(a,b){
//       console.log(a+b);
// }

// sumoftwonos(12,3);

// function sumoftwonos(a,b){
//     local variables-> scope
//           let sums=a+b;
//           return sums;
//     }
    
// let val=sumoftwonos(12,3);
// console.log(val);

//arrow function
// const mul= (a,b) => {
//     let m=a*b;
//     return m;
// }

// console.log(mul(2,3));

//practice

// let no=0;
// function vowel(st){
//     for(let val of st){
//         if(val==="a"|| val=== "e"||val==="i"||val==="o"||val==="u"){
//             no++;
//         }
//     }
//     return no;
// }

// let ans=vowel("Hello");
// console.log(ans);
// let no=0;
// const vowels = (str) => {
//     for(let val of str){
//                 if(val==="a"|| val=== "e"||val==="i"||val==="o"||val==="u"){
//                     no++;
//                 }
//             }
//             return no;
// }
// console.log(vowels("Hello"));

//for each loop

// let arr=[1,2,3,4,5];

// arr.forEach(function printval(val){
    //val is basically value of arr array at each index
    //printval function is the callbackfunnction
    //foreach will basically execute the printval function, we just need to define the callbackfunction

//     console.log(val);
// });

//we generally maker the callbackfunction as arrow function in case of foreach
// let arr=[1,2,3,4,5];
// let arr=["Pune","banglore","Hyderabad"];

// arr.forEach( (val,idx,arr) =>{
//     console.log(val.toUpperCase(),idx,arr);
// } );

//for each we use for arrays only.

//practice
// let arr=[1,2,3,4,5,6,7,8,9];

// arr.forEach((val,idx) =>{
//     console.log(idx+1 , val*val);
// });

//2nd method
// let arr=[1,2,3,4,5,6,7,8];

// let calsquare= (num,idx) => {
//     console.log(idx+1,num*num);
// }

// arr.forEach(calsquare);

//map method
// let arr=[1,2,3,4,5];

// let newarr=arr.map((val) => {
//     return val;
// });

// console.log(newarr);

//filter
// let arr=[1,2,3,4,5];

// let newarr=arr.filter((val)=> {
//         return val>2;
// });

// console.log(newarr);

//reduce
// let arr=[1,2,3,4,5];

// const arr2 = arr.reduce((prev,curr) => {
//     return prev > curr ? prev : curr; 
// });

// console.log(arr2);

//practice1

// let arr=[86,22,35,98,91];

// let newarr = arr.filter((val) => {
//     return val>=90;
// });

// console.log(newarr);

//practice 2

// let n = prompt("Enter a number");
// let arr = [];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// };
// console.log(arr);

// let newarr= arr.reduce((prev,curr) => {
//     return prev+curr;
// });
// console.log(newarr);
// let newarr2= arr.reduce((prev,curr) => {
//     return prev*curr;
// });
// console.log(newarr2);



























