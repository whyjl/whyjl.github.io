document.addEventListener("DOMContentLoaded", function(event) {
    /* 按鈕特效控制 */
    let animateButton = function(e) {
        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
    };
    let bubblyButtons = document.getElementsByClassName("bubbly-button");
    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
    }
});