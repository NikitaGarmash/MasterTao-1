$( document ).ready(function() {
    $('.first-screen-slider').slick({
        dots: true,
        speed: 1000,
        appendArrows: ".arrows",

        responsive: [
            {
                breakpoint: 991,
                settings: {
                arrows: false
                }
            },
        ]
    });

    Fancybox.bind(' [data-fancybox="gallery"]', {

    })
});


document.getElementById('fileInput').onchange = function () {
    //short-name
    document.getElementById('file-name').innerHTML = this.files[0].name;
    //long-name
    //document.getElementById('file-name').innerHTML = this.value;
}


function CheckboxContainerPadding() {
    const checkButton1 = document.querySelector('.check-button');
    const checkButton2 = document.querySelectorAll('.check-button');

    checkButton1.classList.add('.test1')

    checkButton2.forEach(item => {
        item.closest('[class*="col"]').classList.add('padding-top');
    })
}

if (document.querySelector('.calculation-form')) {
    CheckboxContainerPadding()
} else {
    null
}