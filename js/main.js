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