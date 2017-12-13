/*var db;
var dbCreated = true;

var scroll = new iScroll('wrapper',{vScrollbar:false, hScroll:false});
document.addEventListener("deviceready", onDecviceReady,false);

function onDeviceReady(){
	db = window.openDatabase("MySql","scit");
	if(dbCreated)
		db.transaction(getAnn,transaction_error);
	else
		alert('no news!');
}

function transaction_error(tx, error) {
	$('#busy').hide();
	alert("Database Error: " + error);
}

function getAnn(tx){
	var sql = "select * from ann";
	tx.executeSql(sql, [], getAnn_success);
}

function getAnn_success(tx, results){
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
 var url="http://localhost/ann.php";
	 $.getJSON(url,function(result){
	 //console.log(result);
	 //console.error();
		$.each(result, function(i, field){
		var id = field.id;
		var title=field.title;
		var description=field.description;
		//var image=field.image_url;
		for(id=1; id< 10; id++){		 
			$("#annTitle").append(title);
			$("#annDesc").append(description);			 
		}
		});
	});
});