$(document).ready(function(){
    $('input:checkbox').click(function() {
        $('input:checkbox').not(this).prop('checked', false);
    });
});

document.getElementById("start").addEventListener("click", destroy);
    function destroy(){
        document.getElementById("test").style.display = "none";
        document.getElementById("start").style.display = "none";
    }
    document.getElementById("start").addEventListener("click", show);
    function show() {
        document.getElementById("show").style.display = "block";
    }

// function hide(e) {
//     e.target.style.visibility = 'hidden';
// }

// const mystuff = document.getElementById("q1");
// mystuff.addEventListener('click', hide, false);