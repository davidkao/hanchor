$(document).ready(function(){

var d = document;
var safari = (navigator.userAgent.toLowerCase().indexOf('safari') != -1) ? true : false;
var gebtn = function(parEl,child) { return parEl.getElementsByTagName(child); };
onload = function() {
    
    var body = gebtn(d,'body')[0];
    body.className = body.className && body.className != '' ? body.className + ' has-js' : 'has-js';
    
    if (!d.getElementById || !d.createTextNode) return;
    var ls = gebtn(d,'label');
    for (var i = 0; i < ls.length; i++) {
        var l = ls[i];
        if (l.className.indexOf('label-') == -1) continue;
        var inp = gebtn(l,'input')[0];
        if (l.className == 'label-check') {
            l.className = (safari && inp.checked == true || inp.checked) ? 'label-check c-on' : 'label-check c-off';
            l.onclick = check_it;
        };
        if (l.className == 'label-radio') {
            l.className = (safari && inp.checked == true || inp.checked) ? 'label-radio r-on' : 'label-radio r-off';
            l.onclick = turn_radio;
        };
    };
};
var check_it = function() {
    var inp = gebtn(this,'input')[0];
    if (this.className == 'label-check c-off' || (!safari && inp.checked)) {
        this.className = 'label-check c-on';
        if (safari) inp.click();
    } else {
        this.className = 'label-check c-off';
        if (safari) inp.click();
    };
};
var turn_radio = function() {
    var inp = gebtn(this,'input')[0];
    if (this.className == 'label-radio r-off' || inp.checked) {
        var ls = gebtn(this.parentNode,'label');
        for (var i = 0; i < ls.length; i++) {
            var l = ls[i];
            if (l.className.indexOf('label-radio') == -1)  continue;
            l.className = 'label-radio r-off';
        };
        this.className = 'label-radio r-on';
        if (safari) inp.click();
    } else {
        this.className = 'label-radio r-off';
        if (safari) inp.click();
    };
};
	

});