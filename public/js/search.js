console.log("here");

  $(document).ready(function(){


  $("#trending").on("click", function(){
      // $("#gridContainer").empty();
      searchTopHeadlines();
  })

  $("#search-submit").on("click", function(){
        // $("#gridContainer").empty();
        var start = $("#startDate").val();
        var end = $("#endDate").val();
        var keyword = $(".form-control").val().trim();

        if($('#all').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchKeywordDate(keyword, start, end);

            }else{
      
                searchKeyword(keyword, start, end);
              }

        } else if($('#cnn').is(':checked')){
            if(start!= "" || end!=""){
              var check = validateDate();
              if(check == false) return;

                  return searchCNNDate(keyword, start, end);

            }   else{
                
                searchCNN(keyword, start, end);
            }
        } else if($('#the-wall-street-journal').is(':checked')){
            if(start!= "" || end!=""){
              var check = validateDate();
              if(check == false) return;

                return searchWallStreetDate(keyword, start, end);

          }   else{
              
              searchWallStreet(keyword, start, end);
          }
        }else if($('#the-huffington-post').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchHuffPostDate(keyword, start, end);

          }else{
              
              searchHuffPost(keyword, start, end);
          }
        }else if($('#vice-news').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;
              
                return searchViceDate(keyword, start, end);

          }else{
              
              searchVice(keyword, start, end);
          }
        }else if($('#usa-today').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchUSADate(keyword, start, end);

          }else{
              
              searchUSA(keyword, start, end);
          }
        }else if($('#google-news').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchGoogleDate(keyword, start, end);

          }else{
              
              searchGoogle(keyword, start, end);
          }
        }else if($('#buzzfeed').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchBuzzfeedDate(keyword, start, end);

          }else{

              searchBuzzfeed(keyword, start, end);
          }
        };
      $(".form-control").val("")

  });

  $("#business").on("click", function(){
        // $("#gridContainer").empty();
        searchBusiness();
  });

  $("#sports").on("click", function(){
        // $("#gridContainer").empty();
        searchSports();
  })

  $("#entertainment").on("click", function(){
        // $("#gridContainer").empty();
        searchEntertainment();
  })

  $("#technology").on("click", function(){
        // $("#gridContainer").empty();
        searchTech();
  })
  //=========================================================================================================
  //=========================================================================================================
  //=========================================================================================================
  //the next 8 functions are for the search option menu

  //ALL seach bar function
  function searchKeywordDate(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'from=' + start + '&' +
                'to=' + end + '&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

    var url = url;
        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchKeyword(keyword, start, end){
      var url = 'https://newsapi.org/v2/everything?' +
                      'q=' + keyword + '&' +
                      'language=en&' +
                      'sortBy=publishedAt&' +
                      'sortBy=relevancy&' +
                      'sortBy=popularity&' +
                      'apiKey=b8438b744ce24b42a60f3a56367a00c4';
      var url = url;
        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchCNNDate(keyword, start, end){
      var url = 'https://newsapi.org/v2/everything?' +
                  'q=' + keyword + '&' +
                  'sources=cnn&' +
                  'language=en&' +
                  'sortBy=publishedAt&' +
                  'sortBy=relevancy&' +
                  'sortBy=popularity&' +
                  'from=' + start + '&' +
                  'to=' + end + '&' +
                  'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchCNN(keyword, start, end){
      var url = 'https://newsapi.org/v2/everything?' +
                  'q=' + keyword + '&' +
                  'sources=cnn&' +
                  'language=en&' +
                  'sortBy=publishedAt&' +
                  'sortBy=relevancy&' +
                  'sortBy=popularity&' +
                  'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchWallStreetDate(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=the-wall-street-journal&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'from=' + start + '&' +
                'to=' + end + '&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchWallStreet(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=the-wall-street-journal&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchHuffPostDate(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=the-huffington-post&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'from=' + start + '&' +
                'to=' + end + '&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchHuffPost(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=the-huffington-post&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchViceDate(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=vice-news&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'from=' + start + '&' +
                'to=' + end + '&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchVice(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=vice-news&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchUSADate(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=usa-today&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'from=' + start + '&' +
                'to=' + end + '&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchUSA(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=usa-today&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchGoogleDate(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=google-news&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'from=' + start + '&' +
                'to=' + end + '&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchGoogle(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=google-news&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchBuzzfeedDate(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'sources=buzzfeed&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'from=' + start + '&' +
                'to=' + end + '&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchBuzzfeed(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=buzzfeed&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  //===================================================================================================
  //===================================================================================================
  //===================================================================================================
  //the remainder of the functions are for the tab options on the page
  //business tab search

  //trending tab search

  function searchTopHeadlines(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&' +
                'sortBy=publishedAt&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';
        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  };

  function searchBusiness(){

    var url = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&' +
                'category=business&' +
                'sortBy=publishedAt&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4'
        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });

  }

  //sports tab search

  function searchSports(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&' +
                'category=sports&' +
                'sortBy=publishedAt&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4'
        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          renderArticles(response.articles);
          modalButtons(response.articles);
        });
  }

  //entertainment tab search

  function searchEntertainment(){
      var url = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&' +
                'category=entertainment&' +
                'sortBy=publishedAt&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4'
        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }

  function searchTech(){
      var url = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&' +
                'category=technology&' +
                'sortBy=publishedAt&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4'
        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles);
        });
  }


//========================================================================================
//========================================================================================
//========================================================================================
//this function will render all other search functions


function renderArticles(searchResponse){

      //rendering the modal for the tiles
      var body = $(".putinmodal");

      //for(var i = 0; i < 1; i++){
        var modalContainer = $("<div>");
        modalContainer.attr("id", "modal-container");
        body.append(modalContainer);

        var background = $("<div>");
        background.addClass("modal-background");
        modalContainer.append(background);

        var modal = $("<div>");
        modal.addClass("modal");
        modal.append("<iframe id='myFrame' src=" + searchResponse[0].url + " style='height:500px;width:900px'></iframe>")
        background.append(modal);
      //}

      var newPanel = $("<div>");
      newPanel.attr("class", "main");
      var newPanelList = $("<ul>");
      newPanelList.attr("id", "og-grid");
      newPanelList.attr("class", "og-grid");
      newPanel.append(newPanelList);
      
    for(var i = 0; i < searchResponse.length; i++){

      var listItemOne = $("<li>")
      newPanelList.append(listItemOne);
      //inside list item
      var newDiv = $("<div>");
      newDiv.attr("id", "two");
      newDiv.addClass("button");
      listItemOne.append(newDiv)
      //inside "two" div
      var link = $("<a>");
      link.attr("href", searchResponse[i].url);
      link.append(link);
      //inside anchor tag
      var tileContent = $("<div>");
      tileContent.addClass("tileContent");  
      tileContent.addClass("tile" + i);
      newDiv.append(tileContent);
      //inside tilecontent
      tileContent.append("<p class='tileTitle'>" + searchResponse[i].title + "</p>");
      tileContent.append("<p class='tileSource'>" + searchResponse[i].source.name + "</p>");
      tileContent.append("<p class='tileSource'>" + searchResponse[i].publishedAt + "</p>");
      var buttonReal = $("<button>");
      buttonReal.addClass("btn voteButton glyphicon glyphicon-ok");
      buttonReal.attr("data-source", searchResponse[i].source.name);
      buttonReal.attr("data-title", searchResponse[i].title);
      buttonReal.attr("data-url", searchResponse[i].url);
      buttonReal.attr("data-id", "real-" + searchResponse[i].url);
      var buttonFaux = $("<button>");
      buttonFaux.addClass("btn voteButton glyphicon glyphicon-remove");
      buttonFaux.attr("data-source", searchResponse[i].source.name);
      buttonFaux.attr("data-title", searchResponse[i].title);
      buttonFaux.attr("data-url", searchResponse[i].url);
      buttonFaux.attr("data-id", "faux-" + searchResponse[i].url);
      tileContent.append(buttonReal);
      tileContent.append(buttonFaux);
      // var voteContain = $("div");
      // voteContain.addClass("voteContainer");
      // tileContent.append(voteContain);
      // //inside voteContainer
      // var scale = $("div");
      // scale.addClass("notFakeVote");
      // voteContain.append(scale);

      $(".panel").empty();
      $(".panel").append(newPanel);
    };
    return;

  }




  
    $('div').on ("click", "div.button", function(){
        console.log("id two on click")
          var buttonId = $(this).attr('id');
          $('#modal-container').removeAttr('class').addClass(buttonId);
          $('body').addClass('modal-active');
    })

    $('div').on("click", "div#modal-container", function(){
          $(this).addClass('out');
          $('body').removeClass('modal-active');
    });

    var iframe = document.getElementById("myFrame");
    var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
    elmnt.style.display = "none";
  



//================================================================================================
//================================================================================================
//================================================================================================
//this code toggles the date search option



  function validateDate(){
    var start = $("#startDate").val();
    var end = $("#endDate").val();
    if(start == ""){
      alert("Please fill in a start date.")
      return false;
    } else if(end == ""){
      alert("Please fill in an end date.")
      return false;
    }
  };

});







