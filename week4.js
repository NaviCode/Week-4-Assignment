$(document).ready(function(){
    $('#avg-btn').click(function(){
        var num_inputs = $('#numbers').val();
        calculateAvg(num_inputs);
    });
    $('#max-btn').click(function(){
        var num_inputs = $('#numbers').val();
        calculateMax(num_inputs);
    });
})

function calculateAvg(num_list){
    var parsed_num = 0;
    var single_nums = num_list.split(',');
    for( i = 0; i<single_nums.length;i++){
        parsed_num += parseInt(single_nums[i]);
    }
    var avg = (parsed_num/single_nums.length);
    alert('Average is: ' + avg);
}

function calculateMax(num_list){
    var parsed_list = [];
    var single_nums = num_list.split(',');
    for(var i = 0; i<single_nums.length;i++){
        parsed_list.push(single_nums[i]);
    }
    var sorted_list = parsed_list.sort(function(a,b){return b-a});
    console.log(sorted_list[0]);
}

