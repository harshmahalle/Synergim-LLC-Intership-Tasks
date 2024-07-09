function validateForm() {
    const username = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const phone = document.querySelector('input[type="tel"]').value.trim();
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value.trim();

    // Validate username
    if (username === '') {
        alert('Username cannot be empty!');
        return false;
    } else if (typeof username !== 'string' || !isNaN(username)) {
        alert('Username should be a string!');
        return false;
    }

    // Validate password
    if (password === '') {
        alert('Password cannot be empty!');
        return false;
    } else if (typeof password !== 'string') {
        alert('Password should be a string!');
        return false;
    }

    // Validate email
    if (email === '') {
        alert('Email cannot be empty!');
        return false;
    } else if (typeof email !== 'string' || !validateEmail(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    // Validate phone number
    if (phone === '') {
        alert('Phone number cannot be empty!');
        return false;
    } else if (typeof phone !== 'string' || !validatePhone(phone)) {
        alert('Please enter a valid phone number (10 digits)!');
        return false;
    }

    // Validate confirm password
    if (confirmPassword === '') {
        alert('Confirm Password cannot be empty!');
        return false;
    } else if (typeof confirmPassword !== 'string') {
        alert('Confirm Password should be a string!');
        return false;
    }

    // Password match validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    // All validations passed
    alert('Form validation successful!');
    return true;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to validate phone number format (10 digits)
function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}
