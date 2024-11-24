document.getElementById("stdUnit").value="Standard";


function calBMI(){
let wt= parseFloat(document.getElementById("weightId").value);
let h_ft=parseFloat(document.getElementById("heightFtId").value);
let h_in=parseFloat(document.getElementById("heightInId").value);

let ht_inches=(h_ft*12)+h_in;

let bmi=(703*wt)/(ht_inches*ht_inches);

    if(bmi<18.5){
    document.getElementById("div2_2").innerText=bmi.toFixed(1); 
    document.getElementById("div2_2").style.backgroundColor=" rgb(235, 235, 55)"; 
    }
    else if(bmi>=18.5&&bmi<=25)
    {
        document.getElementById("div2_2").innerText=bmi.toFixed(1); 
    document.getElementById("div2_2").style.backgroundColor="rgb(40, 180, 40)";
    }
    else if(bmi>25&&bmi<=30)
    {
        document.getElementById("div2_2").innerText=bmi.toFixed(1); 
    document.getElementById("div2_2").style.backgroundColor="  rgb(235, 0, 0)";
    }
    else{
        document.getElementById("div2_2").innerText=bmi.toFixed(1); 
    document.getElementById("div2_2").style.backgroundColor="rgb(136, 62, 62)";
}
}