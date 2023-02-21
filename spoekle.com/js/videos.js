
var channelID = "UCAAbZeiuPwsbKqiD8QBubxw";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=")+1);
$("#video1").attr("src","https://youtube.com/embed/"+ id + "?controls=0&showinfo=0&rel=0");
    var link = data.items[1].link;
    var id = link.substr(link.indexOf("=")+1);
$("#video2").attr("src","https://youtube.com/embed/"+ id + "?controls=0&showinfo=0&rel=0");
    var link = data.items[2].link;
    var id = link.substr(link.indexOf("=")+1);
$("#video3").attr("src","https://youtube.com/embed/"+ id + "?controls=0&showinfo=0&rel=0");
    var link = data.items[3].link;
    var id = link.substr(link.indexOf("=")+1);
$("#video4").attr("src","https://youtube.com/embed/"+ id + "?controls=0&showinfo=0&rel=0");
    var link = data.items[4].link;
    var id = link.substr(link.indexOf("=")+1);
$("#video5").attr("src","https://youtube.com/embed/"+ id + "?controls=0&showinfo=0&rel=0");
    var link = data.items[5].link;
    var id = link.substr(link.indexOf("=")+1);
$("#video6").attr("src","https://youtube.com/embed/"+ id + "?controls=0&showinfo=0&rel=0");


});