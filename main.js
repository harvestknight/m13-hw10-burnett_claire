//JavaScript Functionalit Part 1 Goes Here. Comment it all out once finsihed.

var section = document.getElementsByTagName('section');
var button = document.getElementsByTagName('button');

function slideToggle () {
    section[0].classList.toggle('hide');
    
};

for (i=0; i < button.length; i++) {
    button[0].addEventListener('click', slideToggle);
};


//jQuery functionality will go here. Make sure to iclude the document.ready function.
