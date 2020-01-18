
/**
 * @file
 * Contains the JS function
 */

(function ($, Drupal) {
  Drupal.behaviors.review = {
    attach: function (context, settings) {
      $('.btn').once('.review').append( '<button class="button">Click to review</button>' );
      $('.button', context).click(function () {
        alert( 'Welcome to my Portfolio'  );
        var like = prompt('Did you like it ?');
        if (like == 'yes') {
        alert('Thanks');
      } else if (like == 'no') {
          alert('Sorry i will try my best to make it better with experience');
          alert( 'Thanks  ' );
        } else if (like == 'dont know') {
            alert('ok thanks');
        } else {
          alert('Sorry i didnt get that . No worries');
        }
        alert('Thank you for your interest in my portfolio');
      });
    }
  };
})(jQuery, Drupal);
