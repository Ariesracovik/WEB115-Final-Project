$(document).ready(function() {
    $("#createPlanButton").on('click',createWindow)
    function createWindow() {
        // Get personal info values
        var name = $("#name").val();
        var email = $("#email").val();
        var goal = $("#goal").val();

        // Create HTML for the new meal plan
        var newMealPlanHTML = ("<html>\n<head>\n<title>Weekly Meal Plan</title>\n<link rel=\"stylesheet\" href=\"projectCSS.css\">\n</head>\n<body>\n");
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

        newMealPlanHTML += ("</body>\n</html>");


        // Display the new meal plan
        flyWindow = window.open('about:blank','mealPlan');
        flyWindow.document.write(newMealPlanHTML);
        
    };
});
