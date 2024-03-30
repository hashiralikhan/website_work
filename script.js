// $(document).ready(function () {
//   var path = window.location.pathname.split("/").pop();

//   // Remove "active" class from all list items
//   $(".navbar-nav li").removeClass("active");


//   if (path === "index.html") {
//     $(".navbar-nav li:nth-child(1)").addClass("active");
//   } else if (path === "flight.html") {
//     $(".navbar-nav li:nth-child(2)").addClass("active");
//   }
//   else if (path === "Umrah_visa.html") {
//     $(".navbar-nav li:nth-child(0)").addClass("active");
//   }
//   else if (path === "test.html") {
//     $(".navbar-nav li:nth-child(4)").addClass("active");
//   }
//   else if (path === "contact Us.html") {
//     $(".navbar-nav li:nth-child(4)").addClass("active");
//   }

// });


$(document).ready(function () {
  var path = window.location.pathname.split("/").pop();

  // Remove "active" class from all list items
  $(".navbar-nav li").removeClass("active");

  // Add "active" class based on the current page
  if (path === "index.html") {
    $(".navbar-nav li:nth-child(1)").addClass("active");
  } else if (path === "flight.html") {
    $(".navbar-nav li:nth-child(2)").addClass("active");
  } else if (path === "Umrah_visa.html") {
    $(".navbar-nav li:nth-child(3)").addClass("active");
  } else if (path === "test.html") {
    $(".navbar-nav li:nth-child(4)").addClass("active");
  } else if (path === "contact Us.html") {
    $(".navbar-nav li:last-child").addClass("active"); // Target the last child
  }
});






$(document).ready(function () {
  $('#flightOneWay-tab').click(function () {
    $('#returningDate label').prop('disabled', true);
    $('#returningDate input').prop('disabled', true);
  });
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
$(document).ready(function () {
  $("#myTab a").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

// Form validaton
$(document).ready(function () {
  $('.form_main').submit(function (e) {
    e.preventDefault();
    $('.error-message').text('');

    var valid = true;
    $(this).find('input[type="text"], input[type="date"], input[type="tel"]').each(function () {
      if ($(this).val().trim() === '') {
        valid = false;
        $(this).siblings('.error-message').text('Please fill out this field.');
      }
    });

    if (valid) {
      this.submit();
    }
  });
});




$(document).ready(function () {
  // Function to handle tab change event
  $('.nav-link').on('click', function () {
    // Check if the clicked tab is either "One Way" or "Multi Dimension"
    if ($(this).attr('href') === '#flightOneWay' || $(this).attr('href') === '#dimension') {
      $('.ret_time').hide(); // Hide elements with class "ret_time"
    } else {
      $('.ret_time').show(); // Show elements with class "ret_time"
    }
  });
});
$(document).ready(function () {
  // Add button of the second form
  $(".addFormButton2").click(function () {
    // Show the third form
    $("#travelFormDimension3").css("display", "flex");
    // Hide the add button of the second form
    $(this).hide();
  });

  // Remove button of the third form
  $(".removeFormButton3").click(function () {
    // Hide the third form
    $("#travelFormDimension3").hide();
    // Show the add button of the second form
    $(".addFormButton2").show();
  });

  // Add button of the third form
  $(".addFormButton3").click(function () {
    // Show the fourth form
    $("#travelFormDimension4").css("display", "flex");
    // Hide the add and remove buttons of the third form
    $(this).hide();
    $(".removeFormButton3").hide();
  });

  // Remove button of the fourth form
  $(".removeFormButton4").click(function () {
    // Hide the fourth form
    $("#travelFormDimension4").hide();
    // Show the buttons of the third form
    $(".addFormButton3").show();
    $(".removeFormButton3").show();
  });
});


// umrah form
$(document).ready(function () {
  $('#contactForm').submit(function (event) {
    event.preventDefault();
    $('.umrah-error-message').text('');

    const formData = {
      username: $('#username').val().trim(),
      useremail: $('#useremail').val().trim(),
      userphone: $('#userphone').val().trim(),
      usermessage: $('#usermessage').val().trim()
    };

    let valid = true;

    // Validation for each form field
    if (!formData.username) {
      setError('#usernameError', 'Please enter your username.');
      valid = false;
    }

    if (!formData.useremail) {
      setError('#useremailError', 'Please enter your email.');
      valid = false;
    } else if (!isValidEmail(formData.useremail)) {
      setError('#useremailError', 'Please enter a valid email address.');
      valid = false;
    }

    if (!formData.userphone) {
      setError('#userphoneError', 'Please enter your phone number.');
      valid = false;
    } else if (!isValidPhone(formData.userphone)) {
      setError('#userphoneError', 'Please enter a valid phone number.');
      valid = false;
    }

    if (!formData.usermessage) {
      setError('#usermessageError', 'Please enter your message.');
      valid = false;
    }

    if (valid) {
      console.log('Form is valid. Submitting...');
      // $(this).unbind('submit').submit();
    }
  });
});

function setError(selector, message) {
  $(selector).text(message);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}


