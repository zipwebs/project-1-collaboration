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