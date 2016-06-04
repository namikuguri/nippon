$(function(){
    $.ajax({
        dataType: 'jsonp',
        url: 'https://picasaweb.google.com/data/feed/base/user/110163380768023994014/albumid/6292338948528023361',
        data: {
            alt: 'json-in-script',
        },
        jsonpCallback: 'picasaCallback',
        success: function(data){
            var photos = [];
            $.each(data.feed.entry, function(){
                photos.push({
                    src: this.content.src
                });
            });
            $('.pic').tmpl({
                photos: photos
            }).appendTo('.pic__list');
        },
        error: function(){
            alert('Access to https://picasaweb.google.com/data/feed/base/user/110163380768023994014/albumid/6292338948528023361');
        }
    });
});
