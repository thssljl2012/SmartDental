function generate_single_post(msgid) {
    var post = data.posts[msgid];

    $('.single-title').append(post.title);

    var main_head = $('.single-main-head');
    $(main_head.children()[1]).append(post.author);

    $('.single-main-favor').append(post.favor);

    $('.single-main-avatar').append('<img src="' + post.img + '">');

    var main_body = $('.single-main-body');
    main_body.append(post.content);

    var main_time = $('.single-main-time');
    main_time.append(post.time);

    var responses = post.responses;
    for (var i = 0; i < responses.length; i = i + 1) {
        $('.response').append('<li class="response-post"><div class="response-left"><div class="response-avatar"><img src="'+responses[i].img+'"></div></div><div class="response-middle"><div class="response-name">' + responses[i].author + '</div><div class="response-content">' + responses[i].content + '</div></div><div class="response-right"><div class="response-like"><img src="img/like.png"><div class="response-favor">' + responses[i].favor + '</div></div></div><div class="response-foot"><div class="response-time">' + responses[i].time + '</div></div></li>');
        
        var len = $('.response-like img').length;
        $($('.response-like img')[len-1]).click(function() {
            if ($(this).attr('src') == "img/like.png") {
                $($(this).next()[0]).text(parseInt($($(this).next()[0]).text()) + 1);
                $(this).attr('src', 'img/liked.png')
            } else {
                $($(this).next()[0]).text(parseInt($($(this).next()[0]).text()) - 1);
                $(this).attr('src', 'img/like.png')
            }
            data.posts[msgid].responses[i].favor = parseInt($($(this).next()[0]).text());
            localStorage.setItem('json', JSON.stringify(data));
        })
    }

    $('.single-main-like img').click(function() {
        if ($('.single-main-like img').attr('src') == "img/like.png") {
            $('.single-main-favor').text(parseInt($('.single-main-favor').text()) + 1);
            $('.single-main-like img').attr('src', 'img/liked.png');
        } else {
            $('.single-main-favor').text(parseInt($('.single-main-favor').text()) - 1);
            $('.single-main-like img').attr('src', 'img/like.png');
        }
        data.posts[msgid].favor = parseInt($('.single-main-favor').text());
        localStorage.setItem('json', JSON.stringify(data));
    })

    /*
    $('.response-like img').click(function() {
        if ($(this).attr('src') == "img/like.png") {
            $($(this).next()[0]).text(parseInt($($(this).next()[0]).text()) + 1);
            $(this).attr('src', 'img/liked.png')
        } else {
            $($(this).next()[0]).text(parseInt($($(this).next()[0]).text()) - 1);
            $(this).attr('src', 'img/like.png')
        }
    })
    */

    $('.single-foot img').click(function() {
        var input = $('.response-action');
        if (input.val() != "") {
            var date = new Date();
            var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
            var author = "匿名用户";
            var favor = 0;
            var content = input.val();
            var img = 'img/avatar.png';

            var response = {
                author: author,
                img: img,
                time: time,
                favor: favor,
                content: content
            };

            data.posts[msgid].responses.push(response);
            localStorage.setItem('json', JSON.stringify(data));
            input.val("");
            $('#single-post-container').remove();
            show_single_post(msgid);

            /*
            $('.response').append('<li class="response-post"><div class="response-left"><div class="response-avatar"><img src="img/avatar.png"></div></div><div class="response-middle"><div class="response-name">' + data.user + '</div><div class="response-content">' + input.val() + '</div></div><div class="response-right"><div class="response-like"><img src="img/like.png"><div class="response-favor">' + 0 + '</div></div></div><div class="response-foot"><div class="response-time">' + time + '</div></div></li>');
            input.val("");

            var len = $('.response-like img').length;
            $($('.response-like img')[len-1]).click(function() {
                 if ($(this).attr('src') == "img/like.png") {
                    $($(this).next()[0]).text(parseInt($($(this).next()[0]).text()) + 1);
                    $(this).attr('src', 'img/liked.png')
                } else {
                    $($(this).next()[0]).text(parseInt($($(this).next()[0]).text()) - 1);
                    $(this).attr('src', 'img/like.png')
                }
            })
            */
        }
    })
}


function back_from_single_post() {
    $('#single-post-container').remove();
    $('#main-container').show();
}


var single_post_container = 
'<div id="single-post-container" style="display:none;">' + 
    '<div class="single-head">' + 
        '<div class="single-back-icon-area">' + 
            '<img class="single-back-icon" src="img/back-icon.png" width="30em" height="30em" onclick="back_from_single_post()">' + 
        '</div>' + 
        '<div class="single-title"></div>' +
    '</div>' + 
    '<div class="single-post-content">' + 
        '<div class="single-main-post">' + 
            '<div class="single-main-head">' + 
                '<div class="single-main-avatar">' +  
                '</div>' +
                '<div class="single-main-name"></div>' + 
                '<div class="single-main-like">' + 
                    '<img src="img/like.png">' + 
                    '<div class="single-main-favor"></div>' +
                '</div>' + 
            '</div>' + 
            '<div class="single-main-body">' + 
            '</div>' + 
            '<div class="single-main-foot">' + 
                '<div class="single-main-time">' +
                '</div>' +
                '<div style="clear:both">' + 
                '</div>' +
            '</div>' + 
        '</div>' +
        '<ul class="response">' +
        '</ul>' +
    '</div>' + 
    '<div class="single-foot">' + 
        '<input class="response-action" type="text"/>' + 
        '<img src="img/write.png">' + 
    '</div>' + 
'</div>';

