$(document).ready(function () {
    
        $('.modal').modal('show');


        
  fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var randomNum = Math.floor(Math.random() * 1643)

    var quote = (data[randomNum].text)
    var author = (data[randomNum].author)
    var authorDiv = $("#authors")

    var quoteDiv = $("#quotes")

    quoteDiv.text(quote);
    authorDiv.text("-" + author)

    setInterval(function () {

      var randomNum = Math.floor(Math.random() * 1643)
      var quote = (data[randomNum].text)
      var author = (data[randomNum].author)

      var authorDiv = $("#authors")
      var quoteDiv = $("#quotes")

      quoteDiv.text('"' + quote+ '"');
      authorDiv.text("-" + author);
    }, 5000);

  });
});