$ is used to select in place of document.querySelector

To change the css of h1--    $("h1").css("color", "red");

To print the rgb value of h1--     console.log($("h1").css("color"));

If there are two properties in .css(" ", " ") then you are setting the value and if you have one value .css(" ") then you are getting the value.

//Separating html css and js
//(To change the heading) 
*-CSS-*
.heading{
  color:aquamarine;
  font-size: 32px;
}

*-JS-*
$("h1").addClass("heading");


*-----For multiple classes, write like this-----*
.heading{
  color:aquamarine;
  font-size: 32px;
}
.marg{
  margin:auto;
}

//JS
$("h1").addClass("heading marg");

//To change the html
$("h1").html("BYE");

//To change the css on click
$("h1").click(function(){
  $("h1").css("color", "purple");
});

//To create elements 
$("h1").before("<button>NEW</button>") //adds a NEW button before h1
$("button").after("<button>NEW</button>") //adds a NEW button after EVERY button present
 $("button").prepend("<button>NEW</button>") // adds a NEW button right before all the buttons (in the button tag itself)
$("h1").append("<button>NEW</button>") // adds a NEW button right after h1 (in the h1 tag itself)






















