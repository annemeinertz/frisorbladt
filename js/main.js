"use strict";
document.addEventListener("DOMContentLoaded", function () {
	// Handler when the DOM is fully loaded
	console.log("Document ready!");


	fetch('../js/priser.json')

		.then(function (response) {
			return response.json();
		})

		.then(function (json) {
			console.log(json);

			for (var i = 0; i < json.length; i++) {
				var post = json[i];

				if (post.category == "klipning") {
					document.querySelector("#klipning").innerHTML += "<table class='table table-hover'>" + "<tbody><tr>" + "<td>" + post.name + "</td>" + "<td align='right'>" + post.price + ",- kr" + "</td>" + "</tbody></table>";
				}
				
				if (post.category == "reflekser") {
					document.querySelector("#reflekser").innerHTML += "<table class='table table-hover'>" + "<tbody><tr>" + "<td>" + post.name + "</td>" + "<td align='right'>" + post.price + ",- kr" + "</td>" + "</tbody></table>";
				}
				
				if (post.category == "reflekser2") {
					document.querySelector("#reflekser2").innerHTML += "<table class='table table-hover'>" + "<tbody><tr>" + "<td>" + post.name + "</td>" + "<td align='right'>" + post.price + ",- kr" + "</td>" + "</tbody></table>";
				}
				
				if (post.category == "farvning") {
					document.querySelector("#farvning").innerHTML += "<table class='table table-hover'>" + "<tbody><tr>" + "<td>" + post.name + "</td>" + "<td align='right'>" + post.price + ",- kr" + "</td>" + "</tbody></table>";
				}
				
				if (post.category == "permanent") {
					document.querySelector("#permanent").innerHTML += "<table class='table table-hover'>" + "<tbody><tr>" + "<td>" + post.name + "</td>" + "<td align='right'>" + post.price + ",- kr" + "</td>" + "</tbody></table>";
				}
				
				
				if (post.category == "andet") {
					document.querySelector("#andet").innerHTML += "<table class='table table-hover'>" + "<tbody><tr>" + "<td>" + post.name + "</td>" + "<td align='right'>" + post.price + ",- kr" + "</td>" + "</tbody></table>";
				}



			}
		});
});


$(document).ready(function () {

	$("#google-reviews").googlePlaces({
		placeId: 'ChIJbQuckJY_TEYR_aLOnb_-SYM',
		render: ['reviews'],
		min_rating: 4,
		max_rows: 1,
		shorten_names: false,
		schema: {
			displayElement: "",
			type: 'Hostel',
			beforeText: 'Google Users Have Rated',
			middleText: 'based on',
			afterText: 'ratings and reviews'
		},
		address: {
			displayElement: "#custom-address-id"
		}
	});

});
