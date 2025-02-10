const form = document.querySelector(".feedback-form");

const formData = { 
    email: "", 
    message: "" 
};

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFormData) {
    formData.email = savedFormData.email;
    formData.message = savedFormData.message;

    form.querySelector('[name="email"]').value = formData.email;
    form.querySelector('[name="message"]').value = formData.message;
};

form.addEventListener('input', (event) => {
    const {name, value} = event.target;

    if(name in formData) {
        formData[name] = value;

        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields"); 
    } else {
        console.log(formData); 

        localStorage.removeItem('feedback-form-state');

        formData.email = "";
        formData.message = "";

        form.querySelector('[name="email"]').value = '';
        form.querySelector('[name="message"]').value = '';
    }
});