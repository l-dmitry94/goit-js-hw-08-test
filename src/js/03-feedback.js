import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector("input[name='email']");
const messageTextarea = feedbackForm.querySelector("textarea[name='message']");
const LOCALSTORAGE_KEY = "feedback-form-state";

const saveFormObject = () => {
    try {
        const user = {
            email: emailInput.value,
            message: messageTextarea.value
        }
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
    }

    catch (error) {
        console.log(error.message);
    }
};

feedbackForm.addEventListener("input", throttle(saveFormObject, 500));

const restoreFormObject = () => {
    try {
        const currentFormObject = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        if (currentFormObject) {
            emailInput.value = currentFormObject.email;
            messageTextarea.value = currentFormObject.message;
        }
    }
    catch (error) {
        console.log(error.message);
    }
}

restoreFormObject();

const submitForm = (event) => {
    event.preventDefault();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    emailInput.value = "";
    messageTextarea.value = "";
}

feedbackForm.addEventListener("submit", submitForm);