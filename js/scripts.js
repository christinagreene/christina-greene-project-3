//creating empty array to store values
const answerArray = [];

// Results
const cabSauv = `Cabernet Sauvignon`;
const merlot = `Merlot`;
const rose = `Rosé`;
const sauvignon = `Sauvignon Blanc`;
const pinot = `Pinot Grigio`;


$(document).ready(function(){
  // when the form submits, do the following:
  $(`form`).on(`submit`, function(e){
    // Prevents default event when button pressed
    e.preventDefault();
    // smooth scrolls to results section
    $(`html,body`).animate({
      scrollTop: $(`.results`).offset().top},
      `slow`);
    // find each checked radio input and do the following things:
    $(`input[type=radio]:checked`).each(function() {
      //turns user input from a string to a value 
      const userInput = parseInt($(this).val());
      //adds userInput into the array that will store the answers
      answerArray.push(userInput);
      // reduce to find the sum of all answers
      const totalSum = answerArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

      ////////////////// RESULTS //////////////////
      // Wine Result 1 - CARBERNET SAUVIGNON
      if (totalSum <= 4) {
        const resultsContent = `
        <div class="red-result">
          <div class="results-overlay">
            <div class="results-heading">
              <h3>You should try a dry ${cabSauv}</h3>
              <p>Cabernet Sauvignon is the most popular type of red wine around the world. It is full-bodied and tends to be on the dry end of the spectrum. This type of wine has heavy notes of red and black fruits and pairs well with aged cheese, braised beef, roasted lamb, or a good old fashioned burger.</p>
              <button type="reset" class="reset" href="#q-1" aria-label="Click to start over.">Try Again!</button>
            </div>
          </div>
        </div>`
        $(`.results`).html(resultsContent);
      }
      // Wine Result 2 - MERLOT
      if (totalSum === 5) {
        const resultsContent = `
        <div class="red-result">
          <div class="results-overlay">
            <div class="results-heading">
              <h3>It's all about a smooth ${merlot}</h3>
              <p>Why not go for a soft, velvety and fruity wine like a merlot? Depending on where the wine is cultivated, its flavour notes can vary from tabacco to chocolate. Try out a glass of merlot with lightly-spiced dark meat, herb roasted chicken, shepherd's pie or a chocolate dessert of your choosing.</p>
              <button type="reset" class="reset" href="#q-1" aria-label="Click to start over.">Try Again!</button>
            </div>
          </div>
        </div>`
        $(`.results`).html(resultsContent);
      }
      // Wine Result 3 - ROSE
      if (totalSum === 6) {
        const resultsContent = `
        <div class="red-result">
          <div class="results-overlay">
            <div class="results-heading">
              <h3>${rose}, all day</h3>
              <p>Whether you want to enjoy it chilled or as a frozé, this fruity wine features notes of strawberry, melon, peach and rose. Rosé can be acidic and dry or fruity and full-bodied. It pairs well with almost anything from seafood to pasta to soft cheeses.</p>
              <button type="reset" class="reset" href="#q-1" aria-label="Click to start over.">Try Again!</button>
            </div>
          </div>
        </div>`
        $(`.results`).html(resultsContent);
      }
      // Wine Result 4 - SAUVIGNON BLANC
      if (totalSum === 7) {
        const resultsContent = `
        <div class="white-result">
          <div class="results-overlay">
            <div class="results-heading">
              <h3>A crisp, fruity ${sauvignon} would hit the spot</h3>
              <p>This refreshing white wine features both fruity and herbaceous notes like lime, passion fruit, jalapeño and bell pepper while staying on the dry side of the spectrum. It pairs well with herb-topped foods like poultry, white fish, sautéed vegetables and goat cheese.</p>
              <button type="reset" class="reset" href="#q-1" aria-label="Click to start over.">Try Again!</button>
            </div>
          </div>
        </div>`
        $(`.results`).html(resultsContent);
      }
      // Wine Result 5 - PINOT GRIGIO
      if (totalSum >= 8) {
        const resultsContent = `
        <div class="white-result">
          <div class="results-overlay">
            <div class="results-heading">
              <h3>Today calls for a zesty ${pinot}</h3>
              <p>This refreshing white wine is full of citrus notes. It has hints of honeysuckle and can take on fruity flavours like apple, pear and nectarine. This dry wine pairs well with fresh vegetables, raw fish and lighter meals.</p>
              <button type="reset" class="reset" href="#q-1" aria-label="Click to start over.">Try Again!</button>
            </div>
          </div>
        </div>`
        $(`.results`).html(resultsContent);
      }
      //////////////// END OF RESULTS ////////////////
    })

    // Sets the total array value to 0 once the results have displayed
    answerArray.length = 0;

  }) // end of form submit functions

  // When Try Again button is clicked, the following things happen:
  $(`.results`).on(`click`, `button`, function() {
    // the results section is emptied (result and try again button)
    $(`.results`).empty();
    // the form clears
    $(`form`).trigger(`reset`);
    // smooth scrolls back to Question 1
    $(`html,body`).animate({
      scrollTop: $(`.chocolate-type`).offset().top
    },
      `slow`);

  }) // end of Try Again button functions

}); // end of document ready functions
