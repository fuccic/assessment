// console.log("Testing for connection")

// ============
// AJAX CALL FOR JSON DATA also formatting the array to remove symbols and spaces
// ============
var generateContentList = function() {
	var dataArray = [];
	$.ajax({url: "http://localhost:3000/infos", success: function(result){
        $("#1").html(result);
        $("#1").hide();
        var allText = $("#1").text()
        dataArray.push(allText)
        dataArray[0].toString();
        // console.log(dataArray[0]);
        var changedArray = dataArray[0];
        // Removing the symbols/non-alphanumeric
        var changedArray2 = changedArray.replace(/[^\w\s]/gi, '');
        var countingArray = changedArray2.split(" ");
        // console.log(countingArray);
        counter(countingArray);
    }});
    

};
// ================
// Function to count the number of times each word occurs and consoladate the words array
// ================
var counter = function(countingArray){
	var wordArray = [], occuranceArray = [], prev;
	countingArray.sort();
	// console.log(x);
	for ( var i = 0; i < countingArray.length; i++ ) {
		// removing blank array spaces
        if (countingArray[i] === ""){
        	countingArray.splice(i, 1);
        	// console.log(countingArray)
        	// comparing words for duplicates
        } else if( countingArray[i] !== prev ) {
            wordArray.push(countingArray[i]);
            occuranceArray.push(1);
            // generating counter
        } else {
            occuranceArray[occuranceArray.length-1]++;
        }
        prev = countingArray[i];
    }

   generateChart(wordArray, occuranceArray);

};
// ===============
// Click function to start the Chart Generation
// ===============
$("#get").click(function(){
	generateContentList();
});

// ==============
// chart.js function that will generate the chart containing the word counts.
// ==============
var generateChart = function(wordArray , occuranceArray){
	// console.log(wordArray);
	var ctx = $("canvas");
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: wordArray,
	        datasets: [{
	            label: '# of occurances',
	            data: occuranceArray
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
};