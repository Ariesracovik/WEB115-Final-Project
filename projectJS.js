$(document).ready(function() {
    $("#clearButton").on('click', clearInputs)
    function clearInputs() {
        // Clear form inputs
        $("input:not(:button)").val('');
        $("textarea").val('');
    };

    $("#createPlanButton").on('click', createWindow)
    function createWindow() {        
        // Get personal info values
        var name = $("#name").val();
        var email = $("#email").val();
        var goal = $("#goal").val();

        // Validate email address before continuing
        let regex = /^[\w-\.]+@(?:[\w-]+\.)+[\w-]{2,4}$/;
        if (!regex.test(email)) {
            console.log('email invalid');
            alert('Please provide a valid email address.')
            return
        } else {
            console.log('email good');
        }

        // Create HTML for the new meal plan
        var newMealPlanHTML = ("<!DOCTYPE html>\n<html>\n<head>\n<title>Weekly Meal Plan</title>\n\
        <script src=\"https://code.jquery.com/jquery-3.6.0.min.js\" async></script>\n\
        <script src=\"projectJS.js\" async></script>\n\
        <link rel=\"stylesheet\" href=\"projectCSS.css\" onerror=\"this.href='https://wcet.waketech.edu/nbrozovsky/WEB115/FinalProject/projectCSS.css'\">\n\
        </head>\n<body>\n");
        newMealPlanHTML += ("<h2>My Week in Meals</h2>" +
                            "<p>" + name + "</p>" +
                            "<p>" + email + "</p>" +
                            "<p><strong>Goal for the Week:</strong> " + goal + "</p>" +
                            "<table>" +
                            "<thead>" +
                            "<tr>" +
                            "<th></th>" +
                            "<th>Monday</th>" +
                            "<th>Tuesday</th>" +
                            "<th>Wednesday</th>" +
                            "<th>Thursday</th>" +
                            "<th>Friday</th>" +
                            "<th>Saturday</th>" +
                            "<th>Sunday</th>" +
                            "</tr>" +
                            "</thead>" +
                            "<tbody>");

        // Loop through each meal and day of the week
        ["Breakfast", "Snack", "Lunch", "Second Snack", "Dinner"].forEach(function(meal) {
            newMealPlanHTML += "<tr><th><strong>" + meal + "</strong></th>";
            ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].forEach(function(day) {
                newMealPlanHTML += "<td>" + $("#" + day.toLowerCase() + meal.replace(" ", "")).val() + "</td>";
            });
            newMealPlanHTML += "</tr>";
        });

        newMealPlanHTML += "</tbody></table>";

        // Print button
        // newMealPlanHTML += "<button id=\"printButton\">Print</button>";

        newMealPlanHTML += ("</body>\n</html>");


        // Display the new meal plan
        var flyWindow = window.open('about:blank','mealPlan','width=900,height=600');
        flyWindow.document.write(newMealPlanHTML);
        // var tableElement = flyWindow.document.getElementsByTagName('table')[0];
        // flyWindow.resizeTo(tableElement.offsetWidth,500);
    };

    

    
    console.log('Script loaded');
});
console.log('script loaded outside document ready');
// $("#printButton").on('click', printWindow)
//     function printWindow() {
//         console.log('printed');
//         window.print();
//     }

console.log(document.getElementsByTagName('table')[0].offsetWidth);

// // Print button
// var timeoutId = setTimeout(function() {
//     var printButton = document.getElementById('printButton');
//     printButton.addEventListener('click', function () {
//         window.print();
//         });
// }, 800);


if (document.title=='Weekly Meal Plan') {
    // Create print button
    var printButton = document.createElement('button');
    printButton.textContent = 'Print';
    printButton.addEventListener('click', function () {
        window.print();
        });
    document.body.appendChild(printButton);
}


// Function to handle downloading of the current page
function downloadPage() {
    // Get the entire HTML content of the page
    var htmlContent = document.documentElement.outerHTML;

    // Create a Blob object from the HTML content
    var blob = new Blob([htmlContent], { type: 'text/html' });

    // Create a URL for the Blob object
    var url = window.URL.createObjectURL(blob);

    // Create an anchor element
    var link = document.createElement('a');

    // Set attributes for the link
    link.href = url;
    link.download = 'weekly-meal-plan.html';

    // Simulate a click on the link to trigger the download
    link.click();

    // Clean up: revoke the URL
    window.URL.revokeObjectURL(url);
}

if (document.title=='Weekly Meal Plan') {
    // Create a download button
    var downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.addEventListener('click', downloadPage);
    document.body.appendChild(downloadButton);
}