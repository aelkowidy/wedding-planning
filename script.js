let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');



window.onscroll = () =>{

    searchBtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


$(document).ready(function(){

    $('#input').change(function(){

        var input = $(this).val();
        $('ul').append('<li>' + input + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>');
        $(this).val('');
    });

    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(200);
    });

    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').toggleClass('checked');
    });


    
});

$(window).on('load',function(){
    $(".loader-container").fadeOut(3000);
  
  });





