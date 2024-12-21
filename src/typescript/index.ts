// Basic Types
let userName: string = "Muhammed";
let age :number=23;
let isStudent:boolean=true;
let randomValue:any=10;


//Union types | we can use multiple types for a variable

let userName2:string|number="Muhammed";


//Literal Types | we can use specific values for a variable

let statusResult:"pending" | "success" | "failure";
statusResult="success";
statusResult="pending";
statusResult="failure";

//Array Types
let names:string[]=["Muhammed","Ali","Veli"];
let names2:Array<string>=["Muhammed","Ali","Veli"];
let mixedArray:(string|number|boolean)[]=["Muhammed",23,true];
let mixedArray2:Array<string|number|boolean>=["Muhammed",23,true];



//Interface and Type
type User={
    name:string;
    surname:string;
    phone:number;
    random?:any;
}

let user1:User={ name:"Muhammed",surname:"Bayhan",phone:1234567890};
let user2:User={ name:"Muhammed",surname:"Bayhan",phone:1234567890,random:false};


interface User2{
    name:string;
    surname:string;
    phone:number; 
    random?:any;
}

let user3:User2={ name:"Muhammed",surname:"Bayhan",phone:1234567890};

//Function Types
function add(a:number,b:number):number{
    return a+b;
}
function add2(a:number,b:any):number|string{
    return a+b;
}
 

function write(array:string[]):void{
    array.forEach((item:string)=>{
        console.log(item);
    })
}

let writeArray:string[]=["Muhammed","Ali","Veli"];
write(writeArray);


//Generics

interface ResponseGerenic<T>{
    name:string;
    surname:string;
    phone:number;
    message:T;
} 

let resObj1:ResponseGerenic<string>={name:"Muhammed",surname:"Bayhan",phone:1234567890,message:"Hello World"};
let resObj2:ResponseGerenic<number>={name:"Muhammed",surname:"Bayhan",phone:1234567890,message:1231231231};
let resArray:ResponseGerenic<string|number|boolean>[]= [{name:"Muhammed",surname:"Bayhan",phone:1234567890,message:true}];


//Extemds

interface Engine
{
    power:number;
    type:string;
}


interface Bmw extends Engine{
    color:string;
    model:string;
}

interface Audi extends Engine{
    color:string;
    model:string;
}

let bmw1:Bmw={power:200,type:"diesel",color:"red",model:"320d"};
let audi1:Audi={power:200,type:"diesel",color:"red",model:"A3"};



//Partial Required Readonly Pick Omit


interface User3{
    name:string;
    age:string;
    phone:number;
}

let user4:Partial<User3>={name:"Muhammed"}; //OTO ?
let user5:Required<User3>={name:"Muhammed",age:"23",phone:12345678  };// all required
let user6:Readonly<User3>={name:"Muhammed",age:"23",phone:12345678};// all readonly no set
let user7:Pick<User3,"name">={name:"Muhammed"};// only name
let user8:Omit<User3,"name">={age:"23",phone:12345678 };// all except name

