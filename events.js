/*var db;
var dbCreated = true;

var scroll = new iScroll('wrapper',{vScrollbar:false, hScroll:false});
document.addEventListener("deviceready", onDecviceReady,false);

function onDeviceReady(){
	db = window.openDatabase("MySql","scit");
	if(dbCreated)
		db.transaction(getEvent,transaction_error);
	else
		alert('no news!');
}

function transaction_error(tx, error) {
	$('#busy').hide();
	alert("Database Error: " + error);
}

function getEvent(tx){
	var sql = "select * from events";
	tx.executeSql(sql, [], getEvent_success);
}

function getEvent_success(tx, results){
	$('busy').hide();
	var len = results.rows.length;
	for (var i=0; i< len; i++){
		var news =result.rows.item(i);
		$('#col-md-4').append('<p class="newsTitle">' + news.title +'</p>');
		$('#col-md-4').append('<p class="newsDesc">' + news.description +'</p>');
		$('#col-md-4').append('<img src="' + news.picture + '/>' );
	}
	setTimeout(function(){
		scroll.refresh();
	},100);
	db = null;
}*/
$(document).ready(function()
{
 var url="http://localhost/events.php";
	 $.getJSON(url,function(result){
	 //console.log(result);
	 //console.error();
		 $.each(result, function(i, field){
		 var id = field.id;
		 var title=field.title;
		 var date = field.date;
		 var description=field.description;
		 //var image=field.image_url;	
		 for(id=1; id< 10; id++){	
		 	$("#eventTitle").append(title);
		 	$("#eventDate").append(date);
		 	$("#eventDesc").append(description);
		 }			 
		});
	});
});