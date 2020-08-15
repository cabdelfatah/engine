function setFiletype(fileType, buttonData, glyph){
    var defaultString = 'Search anything';
    if (fileType==-1) {
        fileType="";
    }
    switch(glyph) {
        case 'film':
            $("#query").prop('placeholder',defaultString+' eg. The.Blacklist.S01');
            break;
        case 'music':
            $("#query").prop('placeholder',defaultString+' eg. K.Flay discography');
            break;
        case 'book':
            $("#query").prop('placeholder',defaultString+' eg. 1985');
            break;
        case 'cd':
            $("#query").prop('placeholder',defaultString+' eg. GTA V');
            break;
        case 'picture':
            $("#query").prop('placeholder',defaultString+' eg. Donald Trump');
            break;
        case 'os':
            $("#query").prop('placeholder',defaultString+' eg. Windows OS/Mac OS/Mac Software');
            break;
    }
    $("#fileType").prop('value',fileType);
    $("#ddbutton").html('<span class="glyphicon glyphicon-'+glyph+'" aria-hidden="true"></span> '+buttonData+' <span class="caret"></span>');
    $("#query").focus();
    
}
function searchGoogle () {
    var query = document.getElementById('query').value;
    var fileType = document.getElementById('fileType').value;
    if (fileType=="") {
        var finalQuery = query+" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
    } else {
        var finalQuery = query+" +("+fileType+") -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
    }
    var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
    console.log(url);
    window.open(url, '_blank');
}
function openDropdown(){
    $('#ddbutton').click();
}