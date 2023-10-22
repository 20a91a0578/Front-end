// const john={
//     "name":"trew"
// }
// function ask()
// {
//     console.log(this,this.name);
// }
// //ask();
// //METHOD 1:
// // ask.call(john);
// // ask.apply(john);
// var raj={
//     name:"raj",
//     greet:function(){
//         console.log("hello !,",this);
//     }
// }
// //METHOD 2
// var localAsk=raj.greet.bind(raj);
// //raj.greet();
// //localAsk();

// //METHOD 3
// raj.greet();
// var localAskFun=raj.greet;
// localAskFun();




//CREATING FUNCTION PROTOTYPE.
// function student(name,age){
//     this.name=name;
//     this.age=age;
// }
// var st1=new  student("Rajesh","20");
// console.log(st1);
// function vehicle(nowheels,price){
//     this.nowheels=nowheels;
//     this.price=price;
//     // this.getPrice=function(){
//     //     return this.price;
//     // }
// }
// vehicle.prototype.getPrice=function(){
//     return this.price;
// }
// vehicle.prototype.color="red";
// var v1=new vehicle(4,456);
// console.log(v1.getPrice());
// console.log(v1);
// // console.log(vehicle.prototype)
// //to check  that v1 prototype function is equal to vechicle prototype
// console.log(vehicle.prototype==v1.__proto__);
// console.log(vehicle.prototype.isPrototypeOf(v1));

// //to check whether the object has its own property

// console.log(v1.hasOwnProperty('price'))




//CLASS
// class vechicle{
//     constructor(nowh,price){
//         this.nowh=nowh;
//         this.price=price;
//     }
//     getPrice(){
//         return this.price;
//     }
// }
// class Car extends vechicle{
//     constructor(nowh,price,seats){
//         super(nowh,price);
//         this.seats=seats;
//     }
//     getdetails(){
//         return this.price+" "+this.seats    }
// }

// var c1=new Car(4,256543,6);
// console.log(c1.getdetails())
// var v1=new vechicle(4,54321);
// var v2=new vechicle(3,2534);
// console.log(v1)
// console.log(v2)
// console.log(v1.getPrice)
// console.log(vechicle.prototype);
function Student(id, name, club){
    this.id = id ;
    this.name = name ;
    this.club = club ;
}

Student.prototype.printDetails = function() {
    console.log(this.id, this.name, this.club);
};


 var s1= new Student(1, 'Raj', 'Cricket')
 var s2= new Student(2, 'Rohan', 'Dance')
 var s3= new Student(3, 'Rita', 'Basketball')
 var s4= new Student(4, 'Reema', 'Music')
const students=[s1,s2,s3,s4]

  
  students.forEach(function(student) {
    student.printDetails();
  });