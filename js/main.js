let isUpdated = false; // flag to track the content state

function toggleContent() {
    // This fuction will check if the desired element is empty, if it is then it will update it's inner HTML with some content
    const paragraph = document.getElementById('update-info');

    if (!isUpdated) {
        paragraph.innerHTML = 'This HTML is updated by the function called <span class=\"blue-text\">toggleContent()<span>. If you click it again it will remove this html';
    } else {
        paragraph.innerHTML = '';
    }

    isUpdated = !isUpdated; // toggle the flag
}

// This function is going to set Section background Color  by changing the CSS class which were declared by Ahmad 
function toggleSectionColor() {
    const element = document.getElementById('change-bg');

    if (element.classList.contains('white-background')) {
        element.classList.remove('white-background');
        element.classList.add('blue-background');
    } else {
        element.classList.remove('blue-background');
        element.classList.add('white-background');
    }
}

//This function is very similar to the one above, it will check if a particular class exists then it will change it if does. 
function toggleSectionHeadingDecoration() {
    const element = document.getElementById('styled-header');

    if (element.classList.contains('normal')) {
        element.classList.remove('normal');
        element.classList.add('styled-header');
    } else {
        element.classList.remove('styled-header');
        element.classList.add('normal');
    }
}

// The duplicate me fuction will clone the node in question when it's invoked.  
function duplicateMe() {
    const buttonToDuplicate = document.getElementById('duplicateMe');

    if (buttonToDuplicate) {
        // Create a copy of the button
        const clonedButton = buttonToDuplicate.cloneNode(true);

        // Optional: Give the cloned button a new ID or remove the ID to avoid duplicate IDs
        clonedButton.removeAttribute('id');

        // Append the cloned button after the original button
        buttonToDuplicate.parentNode.insertBefore(clonedButton, buttonToDuplicate.nextSibling);
    }
}

// This is a simple function it will print a message the console when a the event is recorde
function printToConsoleSimple(){
	console.log("Javascript is a very powerful scripting language that has solidify itself as one of the top three of the internet!");
}

// Showing an alert when showAlert function is invoked.
function showAlert() {
    alert("This is a simple alert box for WDDM - 113, which doesn't give the user a great experience. But it get the job done when needed!");
}