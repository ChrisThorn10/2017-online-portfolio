// -----------------------------------------------------------------------------
// make divs clickable
// -----------------------------------------------------------------------------

document.getElementById("travel-site-ql").addEventListener("click", function() {
    window.open('https://christhorn10.github.io/travel-site/', '_blank');
});

document.getElementById("mockups-ql").addEventListener("click", function() {
    window.open('assets/documents/mobile-mockups.pdf', '_blank');
});

document.getElementById("ux-ql").addEventListener("click", function() {
    window.open('assets/documents/ux-design-documents.pdf', '_blank');
});

document.getElementById("parser-ql").addEventListener("click", function() {
    window.open('https://github.com/ChrisThorn10/drupal-automation', '_blank');
});



// -----------------------------------------------------------------------------
// remove classes from div surrounding the about me and work history section
// to ensure fill width display on smaller screens
// -----------------------------------------------------------------------------

if(window.innerWidth < 768){
      workExperienceFullWidth();
    }

document.getElementsByTagName("BODY")[0].onresize = function() {
    if(window.innerWidth < 768){
      workExperienceFullWidth();
    }
    else workExperienceNotFullWidth();
};



function workExperienceFullWidth() {
    document.getElementsByClassName("wrapper wrapper__group-top-section")[0].className = "none";
}

function workExperienceNotFullWidth() {
    document.getElementsByClassName("none")[0].className = "wrapper wrapper__group-top-section";
}

// -----------------------------------------------------------------------------
// adjust menu on scroll
// -----------------------------------------------------------------------------
 
var currentWindowPosition = document.documentElement.scrollTop;

window.onscroll = function(e){
    adjustHeader();
};

function adjustHeader() {
    //alert("in the adjust header function");
    
    var rect = document.getElementsByClassName("about-me")[0].getBoundingClientRect();
    //console.log(rect.top, rect.right, rect.bottom, rect.left);
    
    var newWindowPosition = document.documentElement.scrollTop;
    //console.log("current: " + currentWindowPosition + " new: " + newWindowPosition);
    
    var scrollingDown;
    
    if (currentWindowPosition < newWindowPosition) {
        scrollingDown = true;    
    }else
        scrollingDown = false;
    
    //alert("scrolling down: " + scrollingDown);

    if (scrollingDown && rect.top <= 120 || !scrollingDown && rect.top <= 120){
        //alert(document.getElementById("page-header"));
        document.getElementById("page-header").className = "main-header main-header__minimal";

    }
    else{
        document.getElementById("page-header").className = " main-header";
    }
    
    
    currentWindowPosition = newWindowPosition;
    }
    