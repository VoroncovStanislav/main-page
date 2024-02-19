$(document).ready(function(){
    $("form").submit(function(event) {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "sendform.php",
            data: form_data,
            success: function() {
                $('.popup_thx').addClass('active');
            }
        });
        event.preventDefault();
    });
    
});
