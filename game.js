//Current room
currentroom="outside_school"

$(document).ready(function() {
  
  $("console").fadeIn(1000)
  $("form").submit(function() {
    var input = $("#command_line).val();
    
    //help command
    if (input=="help") {
      $("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
    }
    
    //next command
    if (input=="next") {
      $("<p>Hello</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    
    //school navigation commands
      
    //First Floor
    if (currentroom="outside_school" && input=="1F"){
      currentroom="first_floor"
      $("<p>Moved from outside of school to 1F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="first_floor" && input=="1F"){
      currentroom="first_floor"
      $("<p>I'm already on 1F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    if (currentroom="second_floor" && input=="1F"){
      currentroom="first_floor"
      $("<p>Moved from 2F to 1F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="third_floor" && input=="1F"){
      currentroom="first_floor"
      $("<p>Moved from 3F to 1F</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="flat_wing" && input=="1F"){
      currentroom="first_floor"
      $("<p>Moved from FW to 1F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    
    //Second Floor
    if (currentroom="outside_school" && input=="2F"){
      currentroom="second_floor"
      $("<p>Moved from outside of school to 2F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="first_floor" && input=="2F"){
      currentroom="second_floor"
      $("<p>Moved from 1F to 2F</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    //2F
    if (currentroom="second_floor" && input=="2F"){
      currentroom="second_floor"
      $("<p>I'm already on 2F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="third_floor" && input=="2F"){
      currentroom="second_floor"
      $("<p>Moved from 3F to 2F./p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="flat_wing" && input=="2F"){
      currentroom="second_floor"
      $("<p>Moved from FW to 2F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
      
    //Third Floor
    if (currentroom="outside_school" && input=="3F"){
      currentroom="third_floor"
      $("<p>Moved from outside of school to 3F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="first_floor" && input=="3F"){
      currentroom="third_floor"
      $("<p>Moved from 1F to 3F</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    if (currentroom="second_floor" && input=="3F"){
      currentroom="third_floor"
      $("<p>Moved from 2F to 3F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="third_floor" && input=="3F"){
      currentroom="third_floor"
      $("<p>I'm already on 3F./p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="flat_wing" && input=="3F"){
      currentroom="third_floor"
      $("<p>Moved from FW to 3F.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }    
      
    //Flat Wing
    if (currentroom="outside_school" && input=="FW"){
      currentroom="flat_wing"
      $("<p>Moved from outside of school to FW.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="first_floor" && input=="FW"){
      currentroom="flat_wing"
      $("<p>Moved from 1F to FW.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    //2F
    if (currentroom="second_floor" && input=="FW"){
      currentroom="flat_wing"
      $("<p>Moved from 2F to FW.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="third_floor" && input=="FW"){
      currentroom="flat_wing"
      $("<p>Moved from 3F to FW./p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="flat_wing" && input=="FW"){
      currentroom="flat_wing"
      $("<p>I'm already in the FW.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }    
    
    //Exit School
    if (currentroom="outside_school" && input=="ES"){
      currentroom="outside_school"
      $("<p>I'm already outside of the school.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="first_floor" && input=="ES"){
      currentroom="outside_school"
      $("<p>Moved from 1F to outside of the school.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    //2F
    if (currentroom="second_floor" && input=="ES"){
      currentroom="outside_school"
      $("<p>Moved from 2F to outside of the school.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="third_floor" && input=="ES"){
      currentroom="outside_school"
      $("<p>Moved from 3F to outside of the school./p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
    if (currentroom="flat_wing" && input=="ES"){
      currentroom="outside_school"
      $("<p>Moved from FW to the outside of the school.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }    
      
    //if input is not recognized
    else {
      $("<p>I do not understand "+input+".</p>").hide().insertBefore("#placeholder").fadeIn(1000);
    }
      
    if (input
    //reset text box command
    $("#command_line").val("");
  });
});
