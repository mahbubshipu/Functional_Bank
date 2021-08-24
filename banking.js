function getInputValue(inputValue){
    const inputField=document.getElementById(inputValue);
    const inputText=inputField.value;
    const inputAmount=parseFloat(inputText);
    inputField.value='';
    return inputAmount;
}
function getAmount(totalAmount,amount){
    const currentTotalAmount=document.getElementById(totalAmount);
    const currentTotalText=currentTotalAmount.innerText;
    const newTotalAmount=parseFloat(currentTotalText);
    const finalTotalAmount=newTotalAmount+amount;
    currentTotalAmount.innerText=finalTotalAmount;
   
}
function getCurrentBalance(){
    const currentBalance=document.getElementById('update-balance');
    const currentBalanceText=currentBalance.innerText;
    const currentBalanceAmount=parseFloat(currentBalanceText);
    return currentBalanceAmount;
     
}
function updateBalance(inputFieldDepositAmount, isAdd){
    const currentBalance=document.getElementById('update-balance');
    // const currentBalanceText=currentBalance.innerText;
    // const currentBalanceAmount=parseFloat(currentBalanceText);
    const currentBalanceAmount=getCurrentBalance();
    
    if(isAdd==true){
        currentBalance.innerText=currentBalanceAmount+inputFieldDepositAmount;
    }
    else{
        currentBalance.innerText=currentBalanceAmount-inputFieldDepositAmount;
    }
}
 
document.getElementById('btn-submit-deposit').addEventListener('click',function(){
    //Balance update
    // const currentBalance=document.getElementById('update-balance');
    // const currentBalanceText=currentBalance.innerText;
    // const currentBalanceAmount=parseFloat(currentBalanceText);
    // currentBalance.innerText=currentBalanceAmount+inputFieldDepositAmount;
    const inputFieldDepositAmount= getInputValue('input-deposit-amount');
    if(inputFieldDepositAmount>0){
        getAmount('deposit-total',inputFieldDepositAmount);
        updateBalance(inputFieldDepositAmount,true);
    }
    else{
        alert('Please enter a valid number');
    }
   
})

//WithDraw
document.getElementById('btn-submit-withdraw').addEventListener('click',function(){
    
    // const currentWithAmount=document.getElementById('withdraw-total');
    // const currentWithAmountText=currentWithAmount.innerText;
    // const newWithAmount=parseFloat(currentWithAmountText);
    // //const totalWithAmount=newWithAmount+inputFieldWithAmount;
    // currentWithAmount.innerText=newWithAmount+inputFieldWithAmount;
    
    //Balance
    // const CurrentBalance=document.getElementById('update-balance');
    // const CurrentBalanceText=CurrentBalance.innerText;
    // const CurrentBalanceAmount=parseFloat(CurrentBalanceText);
    // CurrentBalance.innerText=CurrentBalanceAmount-inputFieldWithAmount;
    // inputFieldWith.value='';

    const inputFieldWithAmount=getInputValue('input-withdraw-amount');
    const currentbalance=getCurrentBalance();
    if(inputFieldWithAmount>0 && inputFieldWithAmount<currentbalance){
        getAmount('withdraw-total',inputFieldWithAmount);
        updateBalance(inputFieldWithAmount,false);
    }
    else if(inputFieldWithAmount > currentbalance){
        alert('Your balance is not suffient');
    } 
    else{
        alert('Please enter a valid number');
    }
    
})