debugger
// Sticky navbar
// =========================
$(document).ready(function() {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        } else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function() {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});
////
//Amenites Slider
$('.amenitiesImageSlider').slick({
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.amenitiesTextSlider',
});
$('.amenitiesTextSlider').slick({
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.amenitiesImageSlider',
    customPaging: function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>' + i + '</a>';
    },
    dots: true,
    fade: false,
    arrows: true,
    autoplay: false
});

var $status = $('.pagingInfo');
var $slickElement = $('.amenitiesTextSlider');

var currentSlide = 0;
var slickcnt = $('.amenitiesTextSlider .slick-dots li a').length;
$('.amenitiesTextSlider .slick-dots').css('display', 'none');
$('#slider .flex-control-nav').css('display', 'none');
$('#video .flex-control-nav').css('display', 'none');
$('#view360 .flex-control-nav').css('display', 'none');
$(window).on("load", function() {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slickcnt);

});

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});
//Banner
$('.slider-for').slick({
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: false,
    arrows: true,
    centerPadding: "0px",
    dots: false,
    slidesToShow: 1,
    infinite: false,
    draggable: true,

});


//Scroll to top
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(300); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(300); // Else fade out the arrow
    }
});
$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 700);
});
//Floor Plan accordian
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.article-title');
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('.accordion-container'), false);
});
///
$(document).ready(function() {
    $('#lightgallery').lightGallery({
        pager: true
    });
    $('#lightgallery2').lightGallery({
        pager: true
    });
    $('#lightgallery3').lightGallery({
        pager: true
    });
});
//Gallery Section
$(".item").hover(function() {
    $("span").text($(this).find("img").attr("alt")), $(".item").not(this).find("img").addClass("fade")
}, function() {
    $("span").text(""), $(".item").not(this).find("img").removeClass("fade")
})
//Light Gallery Section
$(document).ready(function() {
    $('#dynamic').on('click', function(e) {
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: [{
                    src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Ashish.jpg',
                    thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Ashish.jpg'
                },
                {
                    src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Bedroom.jpg',
                    thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Bedroom.jpg'
                }, {
                    src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Building.jpg',
                    thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Building.jpg'

                }, {
                    src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Garden.jpg',
                    thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Garden.jpg'
                }, {
                    src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Libreray.jpg',
                    thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/Libreray.jpg'
                },
                {
                    src: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/LivingRoom.jpg',
                    thumb: 'https://s3.amazonaws.com/cdnhomesfy/jogeshwari/Gallery/LivingRoom.jpg'
                },
            ]
        });
    });
});

var id;
$('[data-target][data-toggle=modal]').on('click', function() {
    id = $(this).attr('data-target');
    Title = {
        'Homemeeting': "Put your interests in action, get all the details right now.",
        'DownloadBrochure': "Mention your whatsapp number to receive Brochure on whatsapp",
        'PriceSection': "Get explicit details about the pricing and on spot offers",
        'FloorPlan': "You are trying to download a big file, get it on Whatsapp",
        'Location': "Due to huge rush at site we would request you to book your sitevisit in advance",
        'Gallery': "Inside features of the project at a glance",
        'default': "PLEASE SHARE YOUR DETAILS. OUR SALES EXPERT WILL CALL YOU SHORTLY"
    }
    $('.modal.form h4').text(Title[id])
    $('.modal.form').attr('id', id).modal('show');
});

//Navigation code
// Cache selectors
var lastId,
    topMenu = $("#mainNav"),
    topMenuHeight = topMenu.outerHeight() + 1,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 100 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 850);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
});
// Get data Only using ajax get call method 
var projectId;
var RegNo;
var city;
var is_magnet=0;
var magnet_id;

let apiDataGet = async () => {
    let data = getProjectData(328) // Change Project_ID Integer Value only Ex:1131
        .then((data) => {
            phone_no = data.result.phone;
            whatsapp_url = data.result.wp_links_sms;
            whatsapp_url = whatsapp_url.split("=");
            whatsapp_url[2] = "I want to know more about " + whatsapp_url[2];
            whatsapp_url = whatsapp_url.join("=");
            projectId = data.result.Project.p_id;

            is_magnet = data.result.is_magnet;
            magnet_id = data.result.magnet_id?data.result.magnet_id:null;
            
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
// main function to store the data and post data to api

$('input[type=checkbox]').on('change', function() {
    this.value = this.checked ? 1 : 0;
}).change();


$('#dropAnEnquiry').on("submit", function() {
    debugger;
    var name = $('#dropname').val();
    var email = "no email";
    var number = $('#dropnumber').val();
    var checkbox = $('#dropAnEnquiry_checkbox').val();
    saveLead(name, email, number, checkbox, ' top_enquire_form');
    return false;
})
$('#OnLoadForm').on("submit", function() {
    debugger;
    var name = $('#OnLoadname').val();
    var email = "No email";
    var number = $('#OnLoadnumber').val();
    var checkbox = $('#OnLoadForm_checkbox').val();
    saveLead(name, email, number, checkbox, 'specialoffer_overview_homepage');
    return false;
})

$('#PriceForm').on("submit", function() {

    debugger;
    var name = $('#Pricename').val();
    var email = "Noe email";
    var number = $('#Pricenumber').val();
    var checkbox = $('#PriceForm_checkbox').val();
    saveLead(name, email, number, checkbox, id + '_overview_homepage');
    return false;

})
$('#OfferForm').on("submit", function() {

    debugger;
    var name = $('#Offername').val();
    var email = "Noe email";
    var number = $('#Offernumber').val();
    var checkbox = $('#OfferForm_checkbox').val();
    //NewApi(name, email, number);
    saveLead(name, email, number, checkbox, 'Offernumber_overview_homepage');
    return false;

})


async function saveLead(name, email, number, checkbox, pref) {
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
    obj.is_tc_agree = parseInt(checkbox);
    // obj.admin_message= message; 
    obj.nationality = param_nationality; // 1 for indian & 2 for NRI (int)
    // obj.is_magnet = 1 ; // 1 for yes and 0 for no (int),
    // magnet_id =39603; //if magnet else blank (int)
    obj.source_id = 31;
    obj.project_id = projectId;
    console.log(obj.project_id);
    if (getUtmData) {
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
    if(is_magnet===1)
        {
            obj.is_magnet = is_magnet;
            obj.magnet_id = magnet_id;
            obj.source_id = 49;
        }
        else
        {
            obj.source_id = 31;
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

//OnLoad
$(window).load(function() {
    $('.loader').fadeOut();
});
//WhatsApp button
$(document).ready(function() {
    window.onscroll = function() {
        620 < document.body.scrollTop || 620 < document.documentElement.scrollTop ? document.getElementById("SocailSection").style.bottom = "0px" : document.getElementById("SocailSection").style.bottom = "-150px"
    }
});

$(document).ready(function() {
    //called when key is pressed in textbox
    $(".quantity").keypress(function(e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $(".errmsg").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });
});