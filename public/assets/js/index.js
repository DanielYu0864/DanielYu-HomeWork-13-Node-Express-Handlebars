$(function() {
    $('.change-devoured').on('click', function(eve) {
        const id = $(this).data('id');
        let devoured = $(this).data('devoured');
        console.log(this);
        console.log(devoured);
        console.log(id);
        devoured = 1;
        const devourState = {
            devoured: devoured
        };

        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: devourState
        })
        .then(
            function() {
                console.log('change devoured to', devourState);
                location.reload();
            }
        );
    });
});