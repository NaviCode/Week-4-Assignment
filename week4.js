$(document).ready(function(){
    $('#avg-btn').click(function(){
        var num_inputs = $('#numbers').val();
        calculateAvg(num_inputs);
    });
    $('#max-btn').click(function(){
        var num_inputs = $('#numbers').val();
        calculateMax(num_inputs);
    });
    $('#clr-btn').click(function(){
        $('#numbers').val('');
        $('#answer').html('');
    });

function append_to_div(data){
    $('#answer').html('');
    $('#answer').append(data);
}

function calculateAvg(num_list){
    var parsed_num = 0;
    var single_nums = num_list.split(',');
    for( i = 0; i<single_nums.length;i++){
        parsed_num += parseInt(single_nums[i]);
    }
    var answer = (parsed_num/single_nums.length);
    append_to_div(answer);
}

function calculateMax(num_list){
    var parsed_list = [];
    var single_nums = num_list.split(',');
    for(var i = 0; i<single_nums.length;i++){
        parsed_list.push(single_nums[i]);
    }
    var sorted_list = parsed_list.sort(function(a,b){return b-a});
    append_to_div(sorted_list[0]);
}

})

