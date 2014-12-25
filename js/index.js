var width 	= window.innerWidth;
var height 	= window.innerHeight;

var data; // virtual database using localStorage

var header_img = 'img/header2.jpg';


function get_database() {
	if (!localStorage.getItem('json')) {
		data = json;
		localStorage.setItem('json', JSON.stringify(data));
	} else {
		data = JSON.parse(localStorage.getItem('json'));
	}
}

function get_messages() {
	return data.posts;
}

function show_post_new() {
	$('#main-container').hide();
	$('#post-new-container').css("width", width);
	$('#post-new-container').show();
	window.scrollTo(0, 0);
}

function show_single_post(msgid) {
	$('body').append(single_post_container);
	generate_single_post(msgid);
	
	$('#main-container').hide();
	
	$('#single-post-container').css("width", width);
	$('#single-post-container').show();
	window.scrollTo(0, 0);
}

function show_message(msg, msgid)
{
	var div = '';
	var tit = msg.title;
	var fav = msg.favor;
	var icon = msg.img;
	var cont = msg.content;

	if (tit.length > 12) {
		tit = tit.substr(0, 12) + '...';
	}

	if (cont.length > 85) {
		cont = cont.substr(0, 85) + '...';
	}

	div = 
	'<div class="msg" style="width:'+(width-15)+'px">'+
		'<a class="post-link" onclick="show_single_post(' + msgid + ')">'+
		'<div class="title-area">'+
			'<div class="title">'+
					tit+
			'</div>'+
			'<div class="title-arrow">'+
				//'<img class="arrow-img" src="'+arrowicon+'">'+
			'</div>'+
		'</div>'+
		'<div class="under-area">'+
			'<div class="under-left">'+
				'<div class="icon">'+
					'<img class="icon-img" src="'+icon+'">'+
				'</div>'+
				'<div class="favor">'+
					fav+
				'</div>'+
			'</div>'+
			'<div class="under-right">'+
				cont+
			'</div>'+
		'</div>'+
		'</a>'+
	'</div>';

	$('#main-container').append(div);
}

function show_button() {
	/*
	var div =
	'<div class="button-area">'+
		'<input type="button" class="post-button" value="发贴" onclick="show_post_new()">'+
	'</div>';

	$('#main-container').append(div);
	*/

	var footer = 
	'<a class="footer" onclick="show_post_new()">' + 
		'<div class="footer-box">' + 
			'<img src="img/write.png">' +
			'<div class="footer-text">' +
				'发贴' + 
			'</div>' +
		'</div>' +
	'</a>';

	$('#main-container').append(footer);
}

function initialize() {
	get_database();

	var msgs = get_messages();

	$('body').append('<div id="main-container"></div>');
	$('#main-container').append('<img class="head_img" width="' + width + '" height="' + width * 0.25 + '" src="' + header_img + '">');

	if (msgs.length == 0) {

		div = 
		'<div class="no-posts">'+
			'现在还没有人发贴哦，快来做第一个吧~'
		'</div>';

		$('#main-container').append(div);

	} else {

		for (var i = msgs.length - 1; i >= 0; i = i - 1) {
			show_message(msgs[i], i);
		}

	}

	show_button();
}

initialize();


