function vouchrequests() {
    document.getElementById("vouchrequests").innerHTML="<p>Please wait...</p>";
    var requestsapi = "http://api.djetelina.cz/requests";
    $.getJSON (requestsapi, function(data){
        var output4 = "<p>Judges can cofirm requests by using <span class='code'>.confirmvouch &lt;Name&gt;</span> in IRC.</p>";
        output4 += "<p>If you don't see anything below, there are no requests.</p>"
        for (var i in data.vouchrequests) {
            output4 += "<h3>" + data.vouchrequests[i].Name + "</h3>";
            output4 += "<p><b>About:</b></p><p>" + data.vouchrequests[i].About + "</p>";
        }
        output4 += "";
        document.getElementById("vouchrequests").innerHTML=output4;
    });
}

window.onload=function() {
    vouchrequests();
};