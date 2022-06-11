
const multiStepForm = document.querySelector("[data-multi-step]");
//  [data-multi-step] is Attribute that"s why here used [] when selecting
const formSteps  = [...multiStepForm.querySelectorAll("[data-step]")]

let currentStep = formSteps.findIndex(step =>{
    return step.classList.contains("active")
})

if (currentStep <0){
    currentStep = 0
    showCurrentStep()
    // formSteps[currentStep].classList.add ("active")
}


// function for the Next-Previous button with reportValidity()
multiStepForm.addEventListener("click", e =>{
    let incrementor
    if(e.target.matches("[data-next]")){
        incrementor = 1
    }
    else if(e.target.matches("[data-previous]")){
        incrementor = -1
    }
    if(incrementor ==null) return
const inputs = [...formSteps[currentStep].querySelectorAll("input")]
const allValid = inputs.every(input=>input.reportValidity())
if(allValid){
    currentStep +=incrementor
}
    showCurrentStep()
})


// hide and show the current step by toggleing the class "active"
function showCurrentStep(){
    formSteps.forEach((step,index) =>{
        step.classList.toggle ("active", index===currentStep)
    })
}

// i want to make sure that the inputs valid