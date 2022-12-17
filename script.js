const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTuition);
});

const amountInput = document.getElementById("amount");
amountInput.addEventListener("change",calculateTuition);


function calculateTuition(){
    let perUnit = parseFloat(amountInput.value);
    let labPercent = document.getElementById("lab").value;
    let noOfUnits = document.getElementById("no-of-units").value;

    amountInput.value = perUnit.toFixed(2);

    let totalAmount = parseFloat((perUnit * (labPercent/10)).toFixed(2));
    let total = parseFloat((perUnit + totalAmount).toFixed(2));

    let amountPerUnit = (totalAmount * noOfUnits*0.1).toFixed(2);
    let totalPerunits = (total * noOfUnits*.9).toFixed(2);

    document.getElementById("lab-amount").textContent = ` ${totalAmount}`;
    document.getElementById("total-amount").textContent = ` ${total}`;
    
    document.getElementById("lab-percent").textContent = `${labPercent}`;
    document.getElementById("split-num").textContent = noOfUnits;

    document.getElementById("amount-per-unit").textContent = ` ${amountPerUnit}`;
    document.getElementById("total-per-unit").textContent = ` ${totalPerunits}`;
}
calculateTip();