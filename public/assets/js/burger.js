// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eatburger").on("click", function(event) {
    var id = $(this).data("id");
    console.log("eat clicked:", id)

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",

    }).then(
      function() {
        console.log("changed to eat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#newburger").val().trim(),
      devoured: false
    };
console.log("Create: ", newBurger)
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})
