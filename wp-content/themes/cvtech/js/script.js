function check_form(success, errors) {
  
  // if (success == true) {
  //   $('.form_candidat_div_1').fadeOut();
  //   $('.form_candidat_div_2').fadeIn();
  // } else {
  //   $('#error_form_1').html('Des erreurs ont été detectées ')
  // }
}
function next_form(params) {
    
  $('#form_candidat_loading').css('display', 'none')
}


/***********************************************
* FORMULAIRE CV
***********************************************/
$(document).ready(function () {
  // $('#form_1').submit(function (e) {
  //   e.preventDefault();
  //   var candidate_info = {
  //     nom: $('#nom').val(),
  //     prenom: $('#prenom').val(),
  //     metier: $('#metier').val(),
  //     ville: $('#ville').val(),
  //     naissance: $('#naissance').val(),
  //     address: $('#adresse').val(),
  //     email: $('#email').val(),
  //     telephone: $('#phone').val()
  //   }
  //   $.ajax({
  //     url: ajaxurl['ajax_url'],
  //     type: "POST",
  //     data: {
  //       'action': 'candidate_info',
  //       'info': candidate_info
  //     },
  //     dataType: 'json',
  //     beforeSend: function () {
  //       $('.form_div').css('display', 'none');
  //       $('#form_candidat_loading').css('display', 'block');
  //     },
  //     success: function (response) {
  //       $('#form_candidat_loading').css('display', 'none');
  //       ajax_errors_check(response['success'],response['errors']);
  //     },
  //     error: function (response) {
  //     }
  //   })
  // });

  $('#form_finish').on('click', function (e) {
    console.log('soumis')
    e.preventDefault()

    let btnForm = $('#form_finish');
    let form1 = $('#form_1');
    let form2 = $('#form_2');
    let form3 = $('#form_3');
    let form4 = $('#form_4-comp');
    let form5 = $('#form_4-langue');

    $.ajax({
      method: 'POST',
      url: btnForm.attr('formaction'),
      data: btnForm.serialize(),
      dataType: 'json',
      beforeSend: function () {
        console.log('avant')
      },
      success: function (response) {
        console.log('success')
      },
      errors: function() {
        console.log('erreur');
      }
    })



  })
});




































// Tableau Cv recruteur
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();

// hover btn voir espace recruteur
$('#see').hover(function() {
  $( '#eye' ).css('display','inline');
  $("#see").css('display','none');
  $("#eye").on('mouseout', function(){
    $("#eye").css('display','none');
    $("#see").css('display','inline');
  });
})

// MENU BURGER
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}