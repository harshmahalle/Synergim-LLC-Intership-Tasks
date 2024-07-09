// Get references to HTML elements
const inputString = document.getElementById('inputString');
const reverseButton = document.getElementById('reverseButton');
const result = document.getElementById('result');

// Function to reverse a string using a swap mechanism
const reverseString = (str) => {

    if (typeof str !== 'string' || !isNaN(str)) {
        return 'Invalid input. Please enter a valid string.';
    }

    // Convert the string to an array of characters
    let arr = str.split('');
    
    // Initialize pointers for the start and end of the array
    let left = 0;
    let right = arr.length - 1;

    // Loop until the pointers meet in the middle
    while (left < right) {
        // Swap the elements at the pointers
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move the pointers towards the middle
        left++;
        right--;
    }

    // Convert the array back to a string and return
    return arr.join('');
};

// Add an event listener to the button to reverse the string when clicked
reverseButton.addEventListener('click', () => {
    // Get the user's input
    const userInput = inputString.value; 
    // Reverse the input string
    const reversed = reverseString(userInput); 
    // Display the reversed string
    result.textContent = `Reversed String: ${reversed}`; 
});

