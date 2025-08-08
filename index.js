let userdate=document.getElementById("date");
let btn=document.getElementById("calculatebtn");
let result=document.getElementById("result")


btn.addEventListener("click",function(){
    let birthdate =new Date(userdate.value);

    let d1=birthdate.getDate();
    let m1=birthdate.getMonth();
    let y1=birthdate.getFullYear();


    let today=new Date();
    let d2=today.getDate();
    let m2=today.getMonth() + 1;
    let y2=today.getFullYear();

    let d3,m3,y3;

    y3=y2-y1;

    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1;
    }
    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDaysInMonth(y1,m1)+d2-d1;

    }
    if(m3<0){
        m3=11;
    y3--;
    }
    result.innerHTML=` you are  ${y3} year ${m3} month and ${d3} days old`;
    result.style.fontSize="35px";
    result.style.color="yellow";
    result.style.fontWeight="bold";
})
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}


