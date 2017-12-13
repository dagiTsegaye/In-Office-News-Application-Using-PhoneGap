/*var db;
var dbCreated = true;

var scroll = new iScroll('wrapper',{vScrollbar:false, hScroll:false});
document.addEventListener("deviceready", onDecviceReady,false);

function onDeviceReady(){
	db = window.openDatabase("MySql","scit");
	if(dbCreated)
		db.transaction(getNews,transaction_error);
	else
		alert('no news!');
}

function transaction_error(tx, error) {
	$('#busy').hide();
	alert("Database Error: " + error);
}

function getNews(tx){
	var sql = "select * from news";
	tx.executeSql(sql, [], getNews_success);
}

function getNews_success(tx, results){
	$('busy').hide();
	var len = results.rows.length;
	for (var i=0; i< len; i++){
		var news =result.rows.item(i);
		$('#col-md-4').append('<p class="newsTitle">' + news.title +'</p>');
		$('#col-md-4').append('<p class="newsDesc">' + news.description +'</p>');
		$('#col-md-4').append('<img src="' + news.image_url + '/>' );
	}
	setTimeout(function(){
		scroll.refresh();
	},100);
	db = null;
}*/
/*document.addEventListener("deviceready", function(){
	var url="http://localhost/testmysql.php";
	 $.getJSON(url,function(result){
	 console.log(result);
		 $.each(result, function(i, field){
		 var title=field.title;
		 var description=field.description;
		 //var image=field.image_url;		 
		 $("#newsTitle").append(title);
		 $("#newsDesc").append(description);
		 console.log(title);
		 });
	 });
}, false);*/
$(document).ready(function()
{
 var url="http://localhost/news.php";
	 $.getJSON(url,function(result){
	 //console.log(result);
	 //console.error();
		 $.each(result, function(i, field){
		 var id = field.id;
		 var title=field.title;
		 //var img = field.imgage_url;
		 var description=field.description;
		 //var image=field.image_url;
		 //alert(field.groups.length);
		 //alert(result.id['1']);
		 	//for(id=3; id >= 1; id--){
		 		//$("#id").append(id);
		 		var readMore = "<p class='readMoreLink'>ReadMore</p>";
		 		var readLess = "<p class = 'readLessLink'> ReadLess</p>"
		 		var news="<b><i>" + title + "</i></b>" + "</br>" + 
		 		"<div class='toReadMore'>"+description+"</div></br><hr>";

		 		$("#newsTitle").append(news + readMore);
		 		$(".toReadMore").hide();
		 		$(".readMoreLink").click(function(){

		 			$(".toReadMore").faceToggle();
		 		});
		 		alert(field.description[4]);
		 		//$("#image").append("<img src=" + img + "/"">");
		 		//$("#newsDesc").append(description + "</br></br>");		 	
		 	//}			 
		});
	});
});