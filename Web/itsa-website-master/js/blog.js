console.log("This");
var postsData = null;
$.ajax({
    url: 'blog/posts.json',
    success: function (data) {
        postsData = data;
        $.each(data, function (index) {
            getPostCard(data[index], index);
        });
    },
    error: function (a, b, c) {
        console.log(a, b, c);
    },
    dataType: 'json'
});

function openPost(postSpan) {
    var id = postSpan.getAttribute('post-id');
    $.ajax({
        url: 'blog/post-' + id + '.json',
        success: function (data) {
            var title = postsData[id].title;
            var modal = getModal(title, data);
            $('#modal-post').html(modal);
            $('#myModal').modal({show: true});
        },
        error: function (a, b, c) {
            console.log(a, b, c);
        },
        dataType: 'text'
    });
}

function getPostCard(post, id) {
    var html = '<div class="card"><h3>' + post.title + '</h3><hr><p>' + post.desc + '</p>' +
        '<span class="btn-link" onclick="openPost(this)" post-id="' + id +
        '">See more...</span>' +
        '<div class="author">Author: ' + post.author + '</div>' +
        '</div>';
    $("#content").append(html);
}

function getModal(title, body) {
    var modal = '<div class="modal fade" tabindex="-1" role="dialog" id="myModal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        '<h4 class="modal-title">' + title + '</h4>' +
        '</div>' +
        '<div class="modal-body">' +
        '<p>' + body + '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    return modal;
}