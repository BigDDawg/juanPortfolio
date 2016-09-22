
var folder = "";

var images = [];

for(var i = 0; i=images.length; i++ ){
	images[i].src = 'img/Photography/' + i + '.jpg'; 

}






console.log(folder)

// var images = $.ajax({
//     url : folder,
//     success: function (data) {
//         $(data).find("a").attr("href", function (i, val) {
//             if( val.match(/\.(jpe?g|png|gif)$/) ) { 
//                 $("body").append( "<img src='"+ folder + val +"'>" );
//             } 
//         });
//     }
// });

// console.log(images)