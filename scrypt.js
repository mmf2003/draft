 let newText= prompt('What do ou want', 'JS is cool!!!');

 $('#main-heading').text(newText);
 $('body').append('<p>New par!!!</p>');

 for (let i = 0; i < 3; i++) {
    $('body').append(`<p>New par ${i + 1}!!!</p>`);
 }

 $("p").slideUp(1000).slideDown(1000);
 
 $("p").hide(1000).show(1000);