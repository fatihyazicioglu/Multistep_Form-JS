
const multiStepForm = document.querySelector("[data-multi-step]");
//  [data-multi-step] is Attribute that"s why here used [] when selecting
const formSteps  = [...multiStepForm.querySelectorAll("[data-step]")]

let currentStep = formSteps.findIndex(step =>{
    return step.classList.contains("active")
})

if (currentStep <0){
    currentStep = 0
    formSteps[currentStep].classList.add ("active")
}


// function for the Next-Previous button
multiStepForm.addEventListener("click", e =>{
    if(e.target.matches("[data-next]")){
        currentStep +=1
    }
    else if(e.target.matches("[data-previous]")){
        currentStep -=1
    }
})


// hide and show the current step