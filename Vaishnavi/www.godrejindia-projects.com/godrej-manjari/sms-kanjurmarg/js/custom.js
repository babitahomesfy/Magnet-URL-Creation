debugger

$.ajax({
    type: "GET",
    url: "https://www.myhomesfy.com/api/leads/projectdata/1032"
}).done(function (data) {
    if ("result" in data) {
        phone_no = data['result']['phone'];
        whatsapp_url = data['result']['wp_links'];
        window.projectname = data['result']['project_name'];
        window.RegNo = data['result']['reg_no'];
        window.City = data['result']['city'];
        $(".phone_url").attr("href", "tel:" + phone_no + "");
        $(".whatsapp_url").attr("href", whatsapp_url + "!I want to know about " + data['result']['project_name'] + ".");
        $(".phone_no").html(phone_no);
        //$("#projectname").val(projectname);
    }
}).fail(function () {
    var whatsapp_url = "https://api.whatsapp.com/send?phone=917304412403&text=Hi!"
    $(".whatsapp_url").attr("href", whatsapp_url);
    $(".phone_url").attr("href", "tel:" + 917304927701 + "");
    $(".phone_no").html("917304927701");
});
var utmsource, utmcampaign, utmmedium, utmterm, utmcontent;

var queryForm = function (settings) {
    var reset = settings && settings.reset ? settings.reset : false;
    var self = window.location.toString();
    var querystring = self.split("?");
    if (querystring.length > 1) {
        var pairs = querystring[1].split("&");
        for (i in pairs) {
            var keyval = pairs[i].split("=");
            if (reset || sessionStorage.getItem(keyval[0]) === null) {
                sessionStorage.setItem(keyval[0], keyval[1]);
            }

            if (keyval[0] == "utm_source")
                utmsource = keyval[1];
            if (keyval[0] == "utm_medium")
                utmmedium = keyval[1];
            if (keyval[0] == "utm_campaign")
                utmcampaign = keyval[1];
            if (keyval[0] == "utm_content")
                utmcontent = keyval[1];
            if (keyval[0] == "utm_term")
                utmterm = keyval[1];
        }

    }
    var hiddenFields = document.querySelectorAll("input[type=hidden]");
    for (var i = 0; i < hiddenFields.length; i++) {
        var param = sessionStorage.getItem(hiddenFields[i].name);
        if (param) document.getElementById(hiddenFields[i].name).value = param;
    }
}
queryForm();


// ip address
$(document).ready(function () {
    
    //global variables for Ip address and Browsername
    var Ipaddress;
    var objbrowserName = navigator.appName;
    var result = getBrowserName();
    var browser = result.browser.name;
    var currentTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    var device;

    //user Agent Info starts
    if
        (
            navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
        device = "Mobile";
    }

    else if
        (
            navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)

        ) {
        device = "Tablet";
    }
    else if 
        (
            navigator.userAgent.match(/BlackBerry/i)
        ) {
        device = "Blackberry";
    }
    else {
        device = "Desktop";
    }
    //User Agent Info Ends

    //Ip Address Detection start
    $.getJSON("https://jsonip.com?callback=?", function (data) {
        Ipaddress = data.ip;
    });
    //Ip Address End


    //Detect Browser Name starts
    function getBrowserName() {
        var parser = new UAParser();
        var result = parser.getResult();
        return result;
    }

    $('#dropAnEnquiry').on("submit", function () {
        debugger;
        var name = $('#dropname').val();
        var email = "No email";
        var number = $('#dropnumber').val();
        var message = $('#ProjecID').val();
        var launchname = $('#ProjecID').val();
        saveLead(name, email, number, message, launchname, ' top_enquire_form');
        return false;
    })
   


    function saveLead(name, email, number, launchname, message, pref ) {
        debugger
        //check_if_capcha_is_filled();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (name.length == 0) {
            alert('Please Enter Your Sweet Name');
            return false;
        }
        //if (reg.test(email) == false) {
        //    alert('Invalid Email Address');
        //    return false;
        //}
        if (number.length != 10) {
            alert('Number should be 10 digits');
            return false;
        }
        else {

            var obj = {};
            obj.p_username = name;
            obj.p_mobilenumber = number;
            obj.p_email = email;
            obj.p_pref = pref;
            obj.p_leadtype = window.projectname;
            obj.p_launchname = launchname;
            obj.p_messagefeedback = message;
            obj.p_feedback = message;
            obj.p_message = message;
            obj.p_source = "Landing Page";
            obj.p_city = window.City;
            //obj.p_projectid = "250";
            //obj.p_regionid = "99";
            //obj.p_magnetlead = 'yes'
            //obj.p_magnetleadrm = 35577;
            obj.p_utmsource = utmsource;
            obj.p_utmmedium = utmmedium;
            obj.p_utmcampaign = utmcampaign;
            obj.p_utmcontent = utmcontent;
            obj.p_utmterm = utmterm;
            obj.p_ipaddress = Ipaddress;
            obj.p_userbrowser = browser;
            obj.p_visittimestamp = currentTime;
            obj.p_useragent = device;

            SendLead(obj);
        }
        return true;
    }
})

var SendLead = function (obj) {

    $.post("https://www.myhomesfy.com/api/leads", obj, function (data) {
        alert("Thank You!");
        window.location.href = "thankyou.html";
        return true;
    });

}
//Number value start 
function character(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
    ((evt.which) ? evt.which : 0));
    if (charCode > 33 && (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122)) {
        alert("Enter only characters");
        return false;
    }
    return true;
}
//Number value end
//tel
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
};

//Zopin
