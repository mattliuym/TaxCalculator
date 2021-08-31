const tax1=14000*0.105; //14000x10.5%
const tax2=tax1+(48000-14000)*0.175; //7420
const tax3=tax2+(70000-48000)*0.3;
const tax4=tax3+(180000-70000)*0.33;

function BindEvent(e){
    if(e.keyCode==13){
        calculateTax();
        e.returnValue = false;
    }
}
function calculateTax(){
    let income = document.getElementById("income").value;
    if(!income){
        alert("Your income cannot be none (so poor, man T-T)");
        return;
    }
    let income_tax=calculator(income);//tax
    let after_tax = income-income_tax;//after-tax income
    let average = income_tax/income*100;
    document.getElementById("1").innerText=income;
    document.getElementById("2").innerText=income_tax.toFixed(2);
    document.getElementById("3").innerText=after_tax.toFixed(2);
    document.getElementById("4").innerText=average.toFixed(2)+"%";
    document.getElementById("5").innerText=(after_tax/12).toFixed(2);
    document.getElementById("result").style.display="block";
}

function calculator(value){
    let tax= 0;
    //calculate here
    if(value<=14000)
        tax = value*0.105;
    else if(value>14000 && value<=48000)
        tax = tax1+(value-14000)*0.175;
    else if(value>48000 && value<=70000)
        tax = tax2+(value-48000)*0.30;
    else if(value>70000 && value<=180000)
        tax = tax3+(value-70000)*0.33;
    else if(value>180000)
        tax = tax4+(value-180000)*0.39;
    else{
        alert("Your input is invalid, please retry!");
        return;
    }
    return tax;
}