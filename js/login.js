var global_username;
var global_image;

function show_info(str) {
	alert(str);
}

function get_global_image(username) {
	return "img/avatar.png";
}

function login_action() {
	var username = $('#username-text').val();
	console.log(username);
	if (username == '') {
		show_info('用户名不能为空');
		return;
	} else {
		global_username = username;
		global_image = get_global_image(username);
	}

	$('#login-container').hide();
	show_main_page();
}
