//Function to Calculate experience
getExperience();
function getExperience(){
var experience=document.getElementById("experience");
var startDate=new Date('01/June/2022');  //Start Date 
var presentDate=new Date();
var diffYear=Math.abs(startDate.getFullYear()-presentDate.getFullYear());
var diffMonth;
var startMonth=startDate.getMonth()+1;
var presentMonth=presentDate.getMonth()+1;
var difference;
if(presentMonth<startMonth){
diffYear=diffYear-1;
diffMonth=startMonth+presentMonth;
}
else{
diffYear=diffYear;
diffMonth=Math.abs(startMonth-presentMonth);
}
var differenceYear=(diffYear<=1)?diffYear+" Year ": diffYear+" Years ";
var differenceMonth=(diffMonth===0)?"":((diffMonth===1)?diffMonth+" Month":diffMonth+" Months");
difference=differenceYear.concat(differenceMonth);
experience.innerHTML=difference;
experience.title=difference;
}


//Function to download the Resume..
function download(){
    const resume=document.getElementById("resume");
    html2pdf().from(resume).save();
}
