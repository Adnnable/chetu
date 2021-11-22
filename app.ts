/*
let courses:string[]=[]

function AddItem():void{
    let item:any=document.querySelector("#course");
    //console.log(courses.filter(e=>e==item))
    if(courses.filter(e=>e==item.value).length>0)
    {
        alert("item already exist !")
    }
    else{
    courses.push(item.value)
    BindItems(courses)
    }
}

function BindItems(items:string[]):void{

    let list=`<ul>`
    items.forEach((e,i)=>{
        list+=`<li>${e} <span class="close" onclick="removeItem(${i})">&times;</span></li>`
    })
    list+=`</ul>`
    document.querySelector("#result").innerHTML=list
}

function removeItem(i:number):void{
    courses.splice(i,1);
    BindItems(courses)
}



function FilterData(txt:string){

    let filtercourses=courses.filter((item:string)=>{
        if(item.startsWith(txt))
        return item;
    })
    if(filtercourses.length>0){
        BindItems(filtercourses)
    }
    else{
        BindItems(courses)
    }
}

document.querySelector("#course").addEventListener("keyup",function()
{
//console.log(this.value)
FilterData(this.value)
})


let btn=document.querySelector("#btn");
btn.addEventListener("click",AddItem);
*/
//object

/*
let hotel={"location":"noida","name":"hotel lucky","totalroom":200,"booked":120,"checkAvailiblity":function(){
    return this.totalroom-this.booked
}}
*/

let Hotel=function(loca:string,name:string,totalroom:number,booked:number){
    this.location=loca;
    this.name=name;
    this.totalroom=totalroom;
    this.booked=booked;
   Hotel.prototype.checkAvailiblity=function(){
        return this.totalroom-this.booked
    }
}

let hotel1=new Hotel("delhi","hotel raja ratan",230,60);
let hotel2=new Hotel("jaipur","hotel shyam",260,10);
let hotel3=new Hotel("noida","hotel divya",238,80);

console.log(hotel1)
console.log(hotel2)
console.log(hotel3)

















