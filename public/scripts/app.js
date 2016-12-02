console.log("app.js linked!")
$(document).ready(function(){
  console.log("DOM ready!")
  $('.carousel.carousel-slider').carousel({full_width: true});

  $('.carousel').carousel('next', 3);


  $.ajax({
    method: 'GET',
    url: '/api/myworks',
    success: handleSuccMyWorks,
    error: handleErrorMyWorks
  })

  function handleErrorMyWorks(err){
    console.error("show all my works err : ",err);
  }

  function handleSuccMyWorks(myworks) {
    console.log("received all my works results:", myworks);

    var source = $("#myworks-template").html();
    var template = Handlebars.compile(source);


      for(var i = 0; i < myworks.length; i++) {
        var myWorksTemplate = {
        title: myworks[i].title,
        descriptions: myworks[i].descriptions,
        websiteUrl: myworks[i].websiteUrl,
        githubUrl: myworks[i].githubUrl,
        projectImgUrl: myworks[i].projectImgUrl
        }

        var tempHtml = template(myWorksTemplate)
        $('#my-works-here').prepend(tempHtml);
      }
    }

    // function handleSuccMyWorks(myworks) {
    //   console.log("received all my works results:", myworks);
    //
    //   var source = $("#myworks-images").html();
    //   var template = Handlebars.compile(source);
    //
    //
    //     for(var i = 0; i < myworks.length; i++) {
    //       var myWorksTemplate = {
    //       title: myworks[i].title,
    //       descriptions: myworks[i].descriptions,
    //       websiteUrl: myworks[i].websiteUrl,
    //       githubUrl: myworks[i].githubUrl,
    //       projectImgUrl: myworks[i].projectImgUrl
    //       }
    //
    //       var tempHtml = template(myWorksTemplate)
    //       $('#my-works').prepend(tempHtml);
    //     }
    //   }

    // Creating a new work
    $('#create-work').on('submit', function(e) {
      e.preventDefault();
      var newData = $("#create-form").serialize();

      $.ajax({
        type: "POST",
        url: "/api/myworks",
        data: newData,
        success: successCreate,
        error: errorCreate
      });

    })// end create

    function successCreate(response) {
      console.log(response);
    }

    function errorCreate(err) {
      console.log("error occurred during create :", err);
    }



}); // end ready
