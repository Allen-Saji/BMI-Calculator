const calculateBtn = document.querySelector('#calculate_bmi');
const bmiResults = document.querySelector('#bmi_result');
const form = document.querySelector('form');

calculateBtn.addEventListener('click' , (event)=>{
    const height = document.querySelector("#HeightField").value;
    const weight = document.querySelector("#WeightField").value;

//check whether the user inputs both weight and height 
    if(weight == '' || height == ''){
        alert("Please enter both height and weight");
    }

    const result = weight/(height*height);

    let bmiMsg;
    let resultColor = 'text_danger';

    if(result < 18.5){
        bmiMsg = "Under Weight";
    }else if(result>18.5 && result<=24.9){
        bmiMsg = "Healthy Weight";
        resultColor = "text-success";
    }else if(result>24.9 && result<=29.9){
        bmiMsg = "Over Weight";
        resultColor = "text-success";
    }else{
        bmiMsg = "Obese";
    }

    bmiResults.innerHTML = `BMI = <b>${result.toFixed(2)}</b> (<span class="${resultColor}"><b>${bmiMsg}) </b></span>`
    
});

//To prevent page from re-loading when you hit the calculate button

form.addEventListener('submit' , e => {
    e.preventDefault();
});