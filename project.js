const resetBtn=document.getElementById('reset-btn')
const submitBtn=document.getElementById('submit-btn');
const errorMsg=document.getElementById('error-msg1');
const resultContainer=document.getElementById('result-container');

let option=document.getElementsByName('option')
let inputs=document.querySelectorAll('input');

const validateInputs=()=>{
    let validate=true;
    inputs.forEach((i)=>{
        parent=i.parentElement;
        if(i.value===""){
            i.style.borderColor="red";
            parent.querySelector('small').innerText="This field is required";
            parent.querySelector('small').style.color="red";
            validate=false;
        }
        
        if(i.value){
            i.style.borderColor="lime";
            validate=true;
        }
        if (!(option[0].checked || option[1].checked)) {
            errorMsg.innerText="This field is required";
            errorMsg.style.color="red";
            validate= false;
        }

        option.forEach((i)=>{
            if(i.checked){
               i.parentElement.parentElement.style.borderColor="lime";
               validate=true;
            }
        })
        
    })
    
    
    return validate;
}

resetBtn.addEventListener("click",function(){
    inputs.forEach((i)=>{
        if(i.value){
            i.value="";
        }
        option.forEach((i)=>{
            if(i.checked){
                i.checked="";
            }
        })
        
    })


})

submitBtn.addEventListener("click",function(){
    if(validateInputs()){
        const m1=document.getElementById('m1');
        const m2=document.getElementById('m2');
        const m3=document.getElementById('m3');

        const a=m1.value;
        const t=m2.value;
        const r=m3.value;

        const tR=Math.round(a*t*r);
        const mR=Math.round(tR/12);

        resultContainer.innerHTML=`
        <h2>Your results</h2>
        <p>Your results are shown below based on the
            information you provided.To adjust the
            results,edit the form and click
            "calculate repayments" again. 
        </p>
        <div>
            <p>Your monthly repayments</p>
            <h1>£${mR}</h1>
            <hr>
            <p>Total you'll repay over the term</p>
            <h2>£${tR}</h2>
        </div>
        `
        resultContainer.classList.add("outcome");
    }
    
})

