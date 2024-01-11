// script.js

// Wait for the DOM to be ready
$(document).ready(function () {
    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Click event handler for the button
    $('#changeColorBtn').click(function () {
        // Change the background color of the box
        $('#colorBox').css('background-color', getRandomColor());
    });
});
