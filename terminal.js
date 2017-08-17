var input = $('.404-input');
input.focus();

  $('#about').on('click', function(e){
  input.focus();
  });

  input.on('keyup', function(e){
    $('.new-output').text(input.val());
  });

  var count = 0;

  $('.four-oh-four-form').on('submit', function(e) {

    e.preventDefault();
    var val = $(this).children($('.404-input')).val().toLowerCase();

      if (count > 5) {
        $('.new-output').removeClass('new-output');
        input.val('');
        response_end();
      }

      else if (val === 'help'){
        $('.new-output').removeClass('new-output');
        input.val('');
        response();
        count++;
      }

      else if (val === 'skills'){
        $('.new-output').removeClass('new-output');
        input.val('');
        response_2();
        count++;
      }

      else if (val === 'education'){
        $('.new-output').removeClass('new-output');
        input.val('');
        response_3();
        count++;
      }

      else if (val === 'experience'){
        $('.new-output').removeClass('new-output');
        input.val('');
        response_4();
        count++;
      }

      else if (val === 'contact'){
        $('.new-output').removeClass('new-output');
        input.val('');
        response_5();
        count++;
      }

      else {
        $('.new-output').removeClass('new-output');
        input.val('');
        response_6();
        count++;
      }
    });



  function response(){
    $('.terminal').append("<p class='prompt'>Skills | Education | Experience | Contact</p>" + "<p class='prompt output new-output'></p>" )
  };

  function response_2() {
    $('.terminal').append("<p class='prompt'><u>Object Oriented Languages</u> \n\n  Java \n  Python  \n  Swift  \n  C, C#  \n  Swift  \n  Go \n\n  <u>Web-Development</u> \n\n  HTML/CSS/JavaScript  \n  PHP \n  SQL \n  AngularJS \n  ReactJS </p>" + "<p class='prompt output new-output'></p>")
  };

  function response_3() {
    $('.terminal').append("<p class='prompt'><u>Virginia Commonwealth University</u> \n\n  B.S. Computer Science  \n\n  Concentration in Cyber Security  \n\n  Spring Class of '17</p>" + "<p class='prompt output new-output'></p>")
  };

  function response_4() {
    $('.terminal').append("<p class='prompt'><u>Work Experience</u> \n\n  Engineering Intern at Snagajob \n  Glen Allen, VA  \n\n  Server at Olive Garden \n  Short Pump, VA</p>" + "<p class='prompt output new-output'></p>")
  };

  function response_5() {
    $('.terminal').append("<p class='prompt'>Email: ryanschnarre@gmail.com \n\n  Phone: (540)848-1335 \n\n  Let's chat!</p>" + "<p class='prompt output new-output'></p>")
  };

  function response_6() {
    $('.terminal').append("<p class='prompt'>Invalid Response</p>" + "<p class='prompt output new-output'></p>")
  };

  function response_end() {
    $('.terminal').append("")
  };
