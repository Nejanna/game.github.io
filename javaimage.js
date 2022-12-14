let name1=prompt("Як вас звати ?");
console.log(name1);
let  sumAtt=Number(0);
document.getElementById("nam").innerHTML = (name1);
let btn=document.getElementById ("btn")

let array=new Array();
array[0] ="img/1.jpg" ;
array[1]="img/2.jpg";
array[2]="img/3.jpg";
array[3]="img/4.webp";
/*
let mass=new Array();
mass[0]="image1"
mass[1]="image2"
*/
let mass=[
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
    "image7",
    "image8",
    "image9"


];

btn.addEventListener("click", () =>{
    if(sumAtt<3){
    let application= document.getElementById("appli");
    sumAtt+=1;
      document.getElementById("appli").innerHTML="Спроба   "+ sumAtt++ +"із 3";
   
  
      let arr=[];

    for (i=0;i<9;i++){
        let giv=Math.round((Math.random() * 3));
        arr[i]= '<img src="'+ array[giv] +'" style="width:150px" />'
        document.getElementById(mass[i]).innerHTML= arr[i];
        
        }


      for (let i = 0; i < 9; i +=3) {

        if (arr[i] == arr[i + 1] && arr[i] == arr[i + 2]) {
         
          alert(" Won vertical");
          break;
        }
      }
      Func(arr[0],arr[3],arr[6])
      Func(arr[1],arr[4],arr[7])
      Func(arr[2],arr[5],arr[8])
     
       
} 
});
function Func(x1,x2,x3){
  if(x1==x2&&x2==x3){
   alert("coincidence with the horizontal")
  }
}

  