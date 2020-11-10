    $(function () {
        $("#checkInDate").datepicker({
            dateFormat: 'dd-M-yy'
        });
    });
        $(function () {
        $("#checkOutDate").datepicker({
            dateFormat: 'dd-M-yy'
        });
    });

    $('.counter-btn').click(function(e) {
        e.preventDefault();
        var $btn = $(this);
        $('#output-' + $btn.data('index')).html(function(i, val) {
            val = val * 1 + $btn.data('inc');
            return (val <= 0 ? '' : '') + val;
        });
    });

    $(function(){
        $('input[type="number"]').niceNumber();
    })