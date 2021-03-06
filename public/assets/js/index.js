$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
        };

        //POST request
        $.ajax("api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Created new burger");
                location.reload();
            }
        );
    });

    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("devoured burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
});