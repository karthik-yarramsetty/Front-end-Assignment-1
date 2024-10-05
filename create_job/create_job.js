
function isValidDate(dateString) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/; 
    if (!dateString.match(regex)) {
        return false; 
    }
    const [day, month, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function isTodayOrFuture(dateString) {
    const inputDate = new Date(dateString.split('/').reverse().join('-')); 
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    return inputDate >= today;
}

document.getElementById('date-submit').addEventListener('click', function(event) {
    const dateInput = document.getElementById('dateInput').value;
    const isValid = isValidDate(dateInput);
    const isValidFuture = isTodayOrFuture(dateInput);
    let resultText = '';

    if (!isValid) {
        resultText = 'Invalid date format! Please use DD/MM/YYYY.';
    } else if (!isValidFuture) {
        resultText = 'The date must be today or in the future!';
    } else {
        resultText = 'Date is valid! You can proceed to submit the job data.';
    }

    document.getElementById('result').textContent = resultText;
});

document.getElementById('details').addEventListener('submit', function(event) {
    const dateInput = document.getElementById('dateInput').value;
    if (!isValidDate(dateInput) || !isTodayOrFuture(dateInput)) {
        event.preventDefault();
        alert('Please ensure the date is valid and today or in the future before submitting.');
    }
});

