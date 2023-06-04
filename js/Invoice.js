function CheckOut() {
    document.getElementById('CheckBoxes').style.display = 'block';
}

$('.checkbox').on('change', function () {
    $('.checkbox').not(this).prop('checked', false);
});

function CreditCard() {
    document.getElementById('Fawry-method').style.display = 'none';
    document.getElementById('CreditCard-method').style.display = 'block';
    document.getElementById('CreditCard-method').scrollIntoView();
}

function exampleModal() {
    // document.getElementById('exampleModal').style.display = 'block';
    $("#exampleModal").modal('show');
}

function Fawry() {
    $("#exampleModal").modal('show');
    document.getElementById('Fawry-method').style.display = 'block';
    document.getElementById('CreditCard-method').style.display = 'none';
    document.getElementById('Fawry-method').scrollIntoView();
}

function FawryReference(){

    var loader = document.getElementById("preloaderpong");

    loader.style.display = 'block';
    document.getElementById('documentblur').style.filter = 'blur(8px)';
    setTimeout(dismissLoadingScreen, 3000);

    
    function dismissLoadingScreen() {
        loader.style.display = "none";
        document.getElementById('documentblur').style.filter = 'none';
        document.getElementById('fawryrefbutton').style.display = 'none';
        document.getElementById('Fawryinput').style.display = 'block';
        document.getElementById('Fawryinput').scrollIntoView();
    };
    
}
