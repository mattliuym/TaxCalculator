const tax1=14000*0.105; //14000x10.5%
const tax2=tax1+(48000-14000)*0.175; //7420
const tax3=tax2+(70000-48000)*0.3;
const tax4=tax3+(180000-70000)*0.33;

function BindEvent(e){
    if(e.keyCode===13){
        calculateTax();
        e.returnValue = false;
    }
}
//the tax calculating function
function calculateTax(){
    const type = $("input[type='radio']:checked").val();
    let income = document.getElementById("income").value.replace(/,/g, "");
    if(type==="hour"){
        income=income*2080;
        console.log(1);
    }
    if(!income){
        alert("Your income cannot be none (so poor, man T-T)");
        return;
    }
    let income_tax=calculator(income);//tax
    let after_tax = income-income_tax;//after-tax income
    let average = income_tax/income*100;
    document.getElementById("1").innerText=numberWithCommas(income);
    document.getElementById("2").innerText=numberWithCommas(income_tax.toFixed(2));
    document.getElementById("3").innerText=numberWithCommas(after_tax.toFixed(2));
    document.getElementById("4").innerText=average.toFixed(2)+"%";
    document.getElementById("5").innerText=numberWithCommas((after_tax/12).toFixed(2));
    document.getElementById("result").style.display="block";
}

//return the tax after calculating
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
//add commas to numbers
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function updateTextView(_obj){
    let num = getNumber(_obj.val());
    if(num===0){
        _obj.val('');
    }else{
        _obj.val(num.toLocaleString());
    }
}
function getNumber(_str){
    let arr = _str.split('');
    let out = [];
    for(let cnt=0;cnt<arr.length;cnt++){
        if(isNaN(arr[cnt])===false){
            out.push(arr[cnt]);
        }
    }
    return Number(out.join(''));
}
$(document).ready(function(){
    $('#income').on('keyup',function(){
        updateTextView($(this));
    });
});