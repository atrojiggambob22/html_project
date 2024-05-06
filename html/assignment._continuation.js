jQuery(document).ready(function(){
    jQuery('qty-minus').on('click',function(e){
        var $this = $(this);
        var $input= $this.closest('div').find('button');
        var value = parseInt($input.val());

        if (value >1){
            value = value - 1;
        }
        else {
            value =1;
        }

        $input.val(value);

        console.log
    });
    jQuery('qty-plus').on('click', function(e){
        var $this = $(this);
        var $input = $this.closest('div').find('button');
        var value = parseInt($input. val());

        if (value < 100){
            value = value + 1;
        }
        else {
            value =100;
        }
        $input.val(value);
    });
});