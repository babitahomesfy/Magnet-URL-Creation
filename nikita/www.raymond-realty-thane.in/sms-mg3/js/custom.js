debugger
// Sticky navbar
// =========================
// Get data Only using ajax get call method 
var projectId;
var RegNo;
var city;

 
let apiDataGet = async () => {
    let data = getProjectData(289)       // Change Project_ID Integer Value only Ex:1131
        .then((data) =>{ 
            debugger;
            phone_no = data.result.phone;
            whatsapp_url = data.result.wp_links_sms;
             whatsapp_url=whatsapp_url.split("=");
            whatsapp_url[2]="I want to know about "+whatsapp_url[2];
             whatsapp_url=whatsapp_url.join("=");
            projectId = data.result.Project.p_id;
            project_name=data.result.Project.project_name;
            city = data.result.Project.Region.city;
            RegNo = data.result.Project.Region.region_name;
            $(".phone_url").attr("href", "tel:" + phone_no + "");
            $(".whatsapp_url").attr("href", whatsapp_url + ".");
            $(".phone_no").html(phone_no);
             
        })
        .catch((error) => {
            var whatsapp_url = "https://api.whatsapp.com/send?phone=917304412403&text=Hi!"
            $(".whatsapp_url").attr("href", whatsapp_url);
            $(".phone_url").attr("href", "tel:" + 917304927701 + "");
            $(".phone_no").html("917304927701")
        });
}    
apiDataGet();
// UTM Data Call
var param_region_id = RegNo;
var param_nationality = 1;

    $('#dropAnEnquiry').on("submit", function () {
        debugger;
        var name = $('#dropname').val();
        var email =null;
        var number = $('#dropnumber').val();
        saveLead(name, email, number, ' top_enquire_form');
        return false;
    })
  

    async function saveLead(name, email, number, pref) {
    debugger;
    
    var getUtmData = queryForm();
    var ipAddress = await getIpAddress();
    var user_device = deviceData();
    var user_browser = browserData();
    
    
    var obj = {};
    obj.name = name;
    obj.number = number;
    obj.email = email;
    // obj.country_code = country_code;
    // obj.is_tc_agree = parseInt(checkbox);
    // obj.admin_message= message; 
    obj.nationality = param_nationality; // 1 for indian & 2 for NRI (int)
    obj.is_magnet = 1 ; // 1 for yes and 0 for no (int),
    obj.magnet_id =40159; //if magnet else blank (int)
    obj.source_id = 14;
    obj.project_id = projectId;
    if(getUtmData){
        obj.Utm = {
                utm_medium: getUtmData.utmmedium,
                utm_source: getUtmData.utmsource,
                utm_content: getUtmData.utmcontent,
                utm_term: getUtmData.utmterm
            };        
    }
    obj.Digital = {
            user_device: user_device,
            user_browser: user_browser,
            campaing_type: getUtmData ? getUtmData.utmcampaign : null,
            launch_name: "",
            client_ipaddress: ipAddress,
            client_pref: pref
        }
    if (pref == 'DownloadBrochure_overview_homepage') {
        SendLead(obj, "thankyou.html");
    } else {
        SendLead(obj, "thankyou.html");
    }
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
//OnLoad

//WhatsApp button

window.$zopim || (function (g, a) { var f = $zopim = function (d) { f._.push(d) }, b = f.s = g.createElement(a), c = g.getElementsByTagName(a)[0]; f.set = function (d) { f.set._.push(d) }; f._ = []; f.set._ = []; b.async = !0; b.setAttribute("charset", "utf-8"); b.src = "//v2.zopim.com/?2F4uasrDz8AwB7cxrCz3igHZtZovK0w4"; f.t = +new Date; b.type = "text/javascript"; c.parentNode.insertBefore(b, c) })(document, "script"); $zopim(function () { $zopim.livechat.button.setOffsetVerticalMobile(55); $zopim.livechat.button.setOffsetHorizontalMobile(10) });

    
$(document).ready(function () {
  //called when key is pressed in textbox
  $(".quantity").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $(".errmsg").html("Digits Only").show().fadeOut("slow");
               return false;
    }
   });
});