$(function() {
    $('.change-devoured').on('click', function(eve) {
        const id = $(this).data('id');
        let devoured = $(this).data('devoured');
        console.log(this);
        console.log(devoured);
        console.log(id);
        if(devoured === 0) {
            devoured = 1;
        } else {
            devoured = 0;
        }

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

    $('.create-from').on('submit', function(eve) {
        eve.preventDefault();

        const newBurger = {
            name: $('#bg').val().trim()
        };
        console.log(newBurger);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        })
        .then(
            function() {
                console.log('Add new burger');
                location.reload();
            }
        );
    });
});