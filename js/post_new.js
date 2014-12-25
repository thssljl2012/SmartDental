function back_from_post_new() {
	$('#post-new-container').hide();
	$('#main-container').show();
	window.scrollTo(0, 0);
}

function post_new_action() {
	var title = $("#title").val();
	var author = $("#author").val();
	var img = 'img/avatar.png';
	var content = $("#content").val();
	var favor = 0;
	var response = [];
	var time = new Date().Format("yyyy-MM-dd hh:mm");
	var post = {
		title : title,
		time : time,
		author : author,
		img : img,
		favor : favor,
		content : content,
		responses : response
	};

	data.posts.push(post);
	localStorage.setItem('json', JSON.stringify(data));
	location.reload(true);
}

Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
} 
