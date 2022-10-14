// for input function
function getInputvalue(inputid){
    var inputvalue = document.getElementById(inputid)
    var Newvaluestore = parseFloat(inputvalue.value);
    inputvalue.value =''
    return Newvaluestore;
}
//  for output function or text field
function getoutputvalue(element){
    var outputvalue = document.getElementById(element)
    var previousvalue = parseFloat(outputvalue.innerText)
    return previousvalue;
}
// for set value of previous 

function setvalue(elementid,value){
var values = document.getElementById(elementid)
values.innerText =value;
}

// first we will work balance and deposit

document.getElementById('deposit-btn').addEventListener('click',function(){
 var Newvalue = getInputvalue('input-deposit')
//  for deposit start
 var prevalue = getoutputvalue('output-deposit')
 var currentvalue = Newvalue + prevalue;
 setvalue('output-deposit',currentvalue)
// deposit end

// for balance start
var prebalance = getoutputvalue('update-balance')
var currentbalance = prebalance + Newvalue ;
setvalue('update-balance',currentbalance)
// balance end
  
})

// second we will work balance and withdraw

document.getElementById('withdrow-btn').addEventListener('click',function(){
    var Newvalue = getInputvalue('input-withdrow')
   //  for withdraw start
    var prevalue = getoutputvalue('update-withdrow')
    var currentvalue = Newvalue + prevalue;
    setvalue('update-withdrow',currentvalue)
   // withdraw end
   
   // for balance start
   var prebalance = getoutputvalue('update-balance')
   if(Newvalue <= 1200)
  {
    var currentbalance = prebalance - Newvalue ;
    setvalue('update-balance',currentbalance)
  }else{
    alert('you cannot withrdraw')
  }
   // balance end
     
   })
