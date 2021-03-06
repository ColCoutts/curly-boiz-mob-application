const submit = document.getElementById('form');
const curlyRange = document.getElementById('curliness');
const averageCurl = document.getElementById('average-curl');

curlyRange.addEventListener('change', function() { 
    averageCurl.textContent = curlyRange.value;
});

submit.addEventListener('submit', function() {
    event.preventDefault();
 
    const name = submit.elements.name.value;
    const street = submit.elements.street.value;
    const city = submit.elements.city.value;
    const state = submit.elements.state.value;
    const key = submit.elements.key.value;
 
    const pizza = submit.elements.toppings;
    const pizzaPreference = [];
 
    for(let i = 0; i < pizza.length; i++){
        const toppingChoices = pizza[i];
        if(toppingChoices.checked) {
            pizzaPreference[i] = toppingChoices.value;
        }
    }
 
    const appSubmission = {
        name: name,
        street: street,
        city: city,
        state: state,
        key: key,
        pizza: pizzaPreference,
        curl: curlyRange.value
    };
 
    console.log(appSubmission);
});




        // form incomplete checker
        // read input
        // evaluate pineapple conformity
            // take care of them
            // in the street fraternity