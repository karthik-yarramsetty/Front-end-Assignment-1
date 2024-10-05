function toggleCheckboxContent() {
    const checkboxContent = document.getElementById('checkbox-content');
    const checkbox = document.getElementById('employment-status');

    if (checkbox.checked) {
        checkboxContent.style.display = 'block';
    } else {
        checkboxContent.style.display = 'none';
    }
}