// Topic-1:

// function name(){
//     if(true){
//         const name='jahid';
//     }
//     console.log(name)
// }

// console.log(name());

// var is a function_scope element thats means In any section of function this var easily 
// On the othe hand const and let is a block_scope element it execute of its own blocks where it is defined

// Difference between const and let:
// const is a constant but let is a changable element

// Topic-2
// Templete String(``)-->used to ceate dynamic object or variable and by using this we can write multiple line in a variable
// like--> const name=`dfdhfds
// hdkfhdfdf`
// example-->
// const a
// const b
// const c=`a ${b}` this is retuen sum

// spread operator-->(...) used to take out just ele from the array or something.
// const arra=[1,2,3,4,5]
// console.log(...arra);   --->1 2 3 4 5 
// console.log(Math.max(...arra)); -->5

// Topic-3
// ArrowFunction-->
// const test=()=>4*4  This function and this is also return the value from where it is called
// console.log(test()) for one line code its easily return and execute
// 1 line e return dorkar nai
// multiple line for arrowFunction is same as normal function but symbol is 
// const test=(a)=>{
// return a*a;
// }
// console.log(test(2));


// Topic-->4
// 1.Array
// const arra=[1,2,3,4,5];
// const [first,second]=arra;   serially Boshbe
// console.log(first,second)
// 2.Normal Object
// const obj={
//     name:'jahid',
//     age:23,
//     village:'satbilla'
// };
// // const name=obj.name;
// const {name,age}=obj;
// console.log(name,age);
// 3.Nested Object,Array
 
// const array=[
//     {name:'jahid',
//     age:23,
//      friends:['tajul','Rakib']},
//     {},
    
//     {}
// ];
// console.log(array[0].friends[0]);  Object ke access korte obossoi (dot .) use korba


// Topic_5
// i)Map
// const nums=[1,2,3,4,5];
// const square=nums.map(x=>x*x);
// console.log(square);
// ii)filter
//   const product=[
//     {id:1,name:'jahid',village: 'satbilla',color:'white'},
//     {id:2,name:'hasan',village: 'salimabad', color:'black'},
//     {id:3,name:'joy',village: 'sahebnagor', color:'green'},
//     {id:4,name:'joy',village: 'sahebnagor', color:'black'},
    
//   ];

//   const result=product.filter((pd)=>pd.color=='black');
//   console.log(result);
//   const result=product.find((pd)=>pd.color=='black');
//   console.log(result);

// Topic_6  Foreach
// dynamic element website e show koraite chaile amra loop er jaygay for each use korbo
// const element=document.getElementById('element')
//   const result=product.forEach((pd)=>{
//       const h1=document.createElement('h1')
//       h1.innerText=pd.name;

//       element.appendChild(h1)


//   }
// );
// Fackstore ApI
// fetch('https://fakestoreapi.com/products/1')
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
 
// Synchronus and Asynchronous
// console.log(1)
// console.log(2)
// name(3)
// console.log(4)
// console.log(5)
// console.log(6)

// function name(x){
//     setTimeout(()=>console.log(x))
// }

// const getData=new Promise(function(resolve,reject){
//     return reject('no Data Found')
// });

// getData.then((data)=>console.log(data)).catch((err)=>console.log(err));

// fetch('https://fakestoreapi.com/products/1')
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

// await means wait kora
// await lagbe e
// async await bebohar kore fetch korlam 

const loadData=async()=>{
    try{
        const response=await fetch("https://fakestoreapi.com/products/1");
        const data=await response.json();
        console.log(data);
    }
   
    catch{
        (err)=>{
            console.log(err);
        };

    }
};
loadData()