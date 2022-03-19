$("select").html(`
    <option disabled="disabled" value="">Country Code</option>
    <option data-countrycode="IN" value="+91" selected="">India (+91)</option>
    <option data-countrycode="AU" value="+61">Australia (+61)</option>
    <option data-countrycode="BH" value="+973">Bahrain (+973)</option>
    <option data-countrycode="CA" value="+1">Canada (+1)</option>
    <option data-countrycode="HK" value="+852">Hong Kong (+852)</option>
    <option data-countrycode="QA" value="+974">Qatar (+974)</option>
    <option data-countrycode="SA" value="+966">Saudi Arabia (+966)</option>
    <option data-countrycode="SG" value="+65">Singapore (+65)</option>
    <option data-countrycode="ZA" value="+27">South Africa (+27)</option>
    <option data-countrycode="AE" value="+971">United Arab Emirates (+971)</option>
    <option data-countrycode="US" value="+1">USA (+1)</option>
    <option data-countrycode="GB" name="countrycode" value="+44">UK (+44)</option>
    <optgroup label="Other countries">
        <option data-countrycode="AF" value="+93">Afghanistan (+93)</option>
        <option data-countrycode="AL" value="+355">Albania (+355)</option>
        <option data-countrycode="DZ" value="+213">Algeria (+213)</option>
        <option data-countrycode="AS" value="+1-684">American Samoa (+1-684)</option>
        <option data-countrycode="AD" value="+376">Andorra (+376)</option>
        <option data-countrycode="AO" value="+244">Angola (+244)</option>
        <option data-countrycode="AI" value="+1-264">Anguilla (+1-264)</option>
        <option data-countrycode="AQ" value="+672">Antarctica (+672)</option>
        <option data-countrycode="AG" value="+1-268">Antigua and Barbuda (+1-268)</option>
        <option data-countrycode="AR" value="+54">Argentina (+54)</option>
        <option data-countrycode="AM" value="+374">Armenia (+374)</option>
        <option data-countrycode="AW" value="+297">Aruba (+297)</option>
        <option data-countrycode="AT" value="+43">Austria (+43)</option>
        <option data-countrycode="AZ" value="+994">Azerbaijan (+994)</option>
        <option data-countrycode="BS" value="+1-242">Bahamas (+1-242)</option>
        <option data-countrycode="BD" value="+880">Bangladesh (+880)</option>
        <option data-countrycode="BB" value="+1-246">Barbados (+1-246)</option>
        <option data-countrycode="BY" value="+375">Belarus (+375)</option>
        <option data-countrycode="BE" value="+32">Belgium (+32)</option>
        <option data-countrycode="BZ" value="+501">Belize (+501)</option>
        <option data-countrycode="BJ" value="+229">Benin (+229)</option>
        <option data-countrycode="BM" value="+1-441">Bermuda (+1-441)</option>
        <option data-countrycode="BT" value="+975">Bhutan (+975)</option>
        <option data-countrycode="BO" value="+591">Bolivia (+591)</option>
        <option data-countrycode="BA" value="+387">Bosnia and Herzegowina (+387)</option>
        <option data-countrycode="BW" value="+267">Botswana (+267)</option>
        <option data-countrycode="BV" value="+47">Bouvet Island (+47)</option>
        <option data-countrycode="BR" value="+55">Brazil (+55)</option>
        <option data-countrycode="IO" value="+246">British Indian Ocean Territory (+246)</option>
        <option data-countrycode="BN" value="+673">Brunei Darussalam (+673)</option>
        <option data-countrycode="BG" value="+359">Bulgaria (+359)</option>
        <option data-countrycode="BF" value="+226">Burkina Faso (+226)</option>
        <option data-countrycode="BI" value="+257">Burundi (+257)</option>
        <option data-countrycode="KH" value="+855">Cambodia (+855)</option>
        <option data-countrycode="CM" value="+237">Cameroon (+237)</option>
        <option data-countrycode="CV" value="+238">Cape Verde (+238)</option>
        <option data-countrycode="KY" value="+1-345">Cayman Islands (+1-345)</option>
        <option data-countrycode="CF" value="+236">Central African Republic (+236)</option>
        <option data-countrycode="TD" value="+235">Chad (+235)</option>
        <option data-countrycode="CL" value="+56">Chile (+56)</option>
        <option data-countrycode="CN" value="+86">China (+86)</option>
        <option data-countrycode="CX" value="+61">Christmas Island (+61)</option>
        <option data-countrycode="CC" value="+61">Cocos (Keeling) Islands (+61)</option>
        <option data-countrycode="CO" value="+57">Colombia (+57)</option>
        <option data-countrycode="KM" value="+269">Comoros (+269)</option>
        <option data-countrycode="CG" value="+242">Congo Democratic Republic of (+242)</option>
        <option data-countrycode="CK" value="+682">Cook Islands (+682)</option>
        <option data-countrycode="CR" value="+506">Costa Rica (+506)</option>
        <option data-countrycode="CI" value="+225">Cote D'Ivoire (+225)</option>
        <option data-countrycode="HR" value="+385">Croatia (+385)</option>
        <option data-countrycode="CU" value="+53">Cuba (+53)</option>
        <option data-countrycode="CY" value="+357">Cyprus (+357)</option>
        <option data-countrycode="CZ" value="+420">Czech Republic (+420)</option>
        <option data-countrycode="DK" value="+45">Denmark (+45)</option>
        <option data-countrycode="DJ" value="+253">Djibouti (+253)</option>
        <option data-countrycode="DM" value="+1-767">Dominica (+1-767)</option>
        <option data-countrycode="DO" value="+1-809">Dominican Republic (+1-809)</option>
        <option data-countrycode="TL" value="+670">Timor-Leste (+670)</option>
        <option data-countrycode="EC" value="+593">Ecuador (+593)</option>
        <option data-countrycode="EG" value="+20">Egypt (+20)</option>
        <option data-countrycode="SV" value="+503">El Salvador (+503)</option>
        <option data-countrycode="GQ" value="+240">Equatorial Guinea (+240)</option>
        <option data-countrycode="ER" value="+291">Eritrea (+291)</option>
        <option data-countrycode="EE" value="+372">Estonia (+372)</option>
        <option data-countrycode="ET" value="+251">Ethiopia (+251)</option>
        <option data-countrycode="FK" value="+500">Falkland Islands (Malvinas) (+500)</option>
        <option data-countrycode="FO" value="+298">Faroe Islands (+298)</option>
        <option data-countrycode="FJ" value="+679">Fiji (+679)</option>
        <option data-countrycode="FI" value="+358">Finland (+358)</option>
        <option data-countrycode="FR" value="+33">France (+33)</option>
        <option data-countrycode="GF" value="+594">French Guiana (+594)</option>
        <option data-countrycode="PF" value="+689">French Polynesia (+689)</option>
        <option data-countrycode="TF" value="+">French Southern Territories (+)</option>
        <option data-countrycode="GA" value="+241">Gabon (+241)</option>
        <option data-countrycode="GM" value="+220">Gambia (+220)</option>
        <option data-countrycode="GE" value="+995">Georgia (+995)</option>
        <option data-countrycode="DE" value="+49">Germany (+49)</option>
        <option data-countrycode="GH" value="+233">Ghana (+233)</option>
        <option data-countrycode="GI" value="+350">Gibraltar (+350)</option>
        <option data-countrycode="GR" value="+30">Greece (+30)</option>
        <option data-countrycode="GL" value="+299">Greenland (+299)</option>
        <option data-countrycode="GD" value="+1-473">Grenada (+1-473)</option>
        <option data-countrycode="GP" value="+590">Guadeloupe (+590)</option>
        <option data-countrycode="GU" value="+1-671">Guam (+1-671)</option>
        <option data-countrycode="GT" value="+502">Guatemala (+502)</option>
        <option data-countrycode="GN" value="+224">Guinea (+224)</option>
        <option data-countrycode="GW" value="+245">Guinea-bissau (+245)</option>
        <option data-countrycode="GY" value="+592">Guyana (+592)</option>
        <option data-countrycode="HT" value="+509">Haiti (+509)</option>
        <option data-countrycode="HM" value="+011">Heard Island and McDonald Islands (+011)</option>
        <option data-countrycode="HN" value="+504">Honduras (+504)</option>
        <option data-countrycode="HU" value="+36">Hungary (+36)</option>
        <option data-countrycode="IS" value="+354">Iceland (+354)</option>
        <option data-countrycode="ID" value="+62">Indonesia (+62)</option>
        <option data-countrycode="IR" value="+98">Iran (Islamic Republic of) (+98)</option>
        <option data-countrycode="IQ" value="+964">Iraq (+964)</option>
        <option data-countrycode="IE" value="+353">Ireland (+353)</option>
        <option data-countrycode="IL" value="+972">Israel (+972)</option>
        <option data-countrycode="IT" value="+39">Italy (+39)</option>
        <option data-countrycode="JM" value="+1-876">Jamaica (+1-876)</option>
        <option data-countrycode="JP" value="+81">Japan (+81)</option>
        <option data-countrycode="JO" value="+962">Jordan (+962)</option>
        <option data-countrycode="KZ" value="+7">Kazakhstan (+7)</option>
        <option data-countrycode="KE" value="+254">Kenya (+254)</option>
        <option data-countrycode="KI" value="+686">Kiribati (+686)</option>
        <option data-countrycode="KP" value="+850">Korea, Democratic People's Republic of (+850)</option>
        <option data-countrycode="KR" value="+82">South Korea (+82)</option>
        <option data-countrycode="KW" value="+965">Kuwait (+965)</option>
        <option data-countrycode="KG" value="+996">Kyrgyzstan (+996)</option>
        <option data-countrycode="LA" value="+856">Lao People's Democratic Republic (+856)</option>
        <option data-countrycode="LV" value="+371">Latvia (+371)</option>
        <option data-countrycode="LB" value="+961">Lebanon (+961)</option>
        <option data-countrycode="LS" value="+266">Lesotho (+266)</option>
        <option data-countrycode="LR" value="+231">Liberia (+231)</option>
        <option data-countrycode="LY" value="+218">Libya (+218)</option>
        <option data-countrycode="LI" value="+423">Liechtenstein (+423)</option>
        <option data-countrycode="LT" value="+370">Lithuania (+370)</option>
        <option data-countrycode="LU" value="+352">Luxembourg (+352)</option>
        <option data-countrycode="MO" value="+853">Macao (+853)</option>
        <option data-countrycode="MK" value="+389">Macedonia, The Former Yugoslav Republic of (+389)</option>
        <option data-countrycode="MG" value="+261">Madagascar (+261)</option>
        <option data-countrycode="MW" value="+265">Malawi (+265)</option>
        <option data-countrycode="MY" value="+60">Malaysia (+60)</option>
        <option data-countrycode="MV" value="+960">Maldives (+960)</option>
        <option data-countrycode="ML" value="+223">Mali (+223)</option>
        <option data-countrycode="MT" value="+356">Malta (+356)</option>
        <option data-countrycode="MH" value="+692">Marshall Islands (+692)</option>
        <option data-countrycode="MQ" value="+596">Martinique (+596)</option>
        <option data-countrycode="MR" value="+222">Mauritania (+222)</option>
        <option data-countrycode="MU" value="+230">Mauritius (+230)</option>
        <option data-countrycode="YT" value="+262">Mayotte (+262)</option>
        <option data-countrycode="MX" value="+52">Mexico (+52)</option>
        <option data-countrycode="FM" value="+691">Micronesia, Federated States of (+691)</option>
        <option data-countrycode="MD" value="+373">Moldova (+373)</option>
        <option data-countrycode="MC" value="+377">Monaco (+377)</option>
        <option data-countrycode="MN" value="+976">Mongolia (+976)</option>
        <option data-countrycode="MS" value="+1-664">Montserrat (+1-664)</option>
        <option data-countrycode="MA" value="+212">Morocco (+212)</option>
        <option data-countrycode="MZ" value="+258">Mozambique (+258)</option>
        <option data-countrycode="MM" value="+95">Myanmar (+95)</option>
        <option data-countrycode="NA" value="+264">Namibia (+264)</option>
        <option data-countrycode="NR" value="+674">Nauru (+674)</option>
        <option data-countrycode="NP" value="+977">Nepal (+977)</option>
        <option data-countrycode="NL" value="+31">Netherlands (+31)</option>
        <option data-countrycode="AN" value="+599">Netherlands Antilles (+599)</option>
        <option data-countrycode="NC" value="+687  ">New Caledonia (+687 )</option>
        <option data-countrycode="NZ" value="+64">New Zealand (+64)</option>
        <option data-countrycode="NI" value="+505">Nicaragua (+505)</option>
        <option data-countrycode="NE" value="+227">Niger (+227)</option>
        <option data-countrycode="NG" value="+234">Nigeria (+234)</option>
        <option data-countrycode="NU" value="+683">Niue (+683)</option>
        <option data-countrycode="NF" value="+672">Norfolk Island (+672)</option>
        <option data-countrycode="MP" value="+1-670">Northern Mariana Islands (+1-670)</option>
        <option data-countrycode="NO" value="+47">Norway (+47)</option>
        <option data-countrycode="OM" value="+968">Oman (+968)</option>
        <option data-countrycode="PK" value="+92">Pakistan (+92)</option>
        <option data-countrycode="PW" value="+680">Palau (+680)</option>
        <option data-countrycode="PA" value="+507">Panama (+507)</option>
        <option data-countrycode="PG" value="+675">Papua New Guinea (+675)</option>
        <option data-countrycode="PY" value="+595">Paraguay (+595)</option>
        <option data-countrycode="PE" value="+51">Peru (+51)</option>
        <option data-countrycode="PH" value="+63">Philippines (+63)</option>
        <option data-countrycode="PN" value="+64">Pitcairn (+64)</option>
        <option data-countrycode="PL" value="+48">Poland (+48)</option>
        <option data-countrycode="PT" value="+351">Portugal (+351)</option>
        <option data-countrycode="PR" value="+1-787">Puerto Rico (+1-787)</option>
        <option data-countrycode="RE" value="+262">Reunion (+262)</option>
        <option data-countrycode="RO" value="+40">Romania (+40)</option>
        <option data-countrycode="RU" value="+7">Russian Federation (+7)</option>
        <option data-countrycode="RW" value="+250">Rwanda (+250)</option>
        <option data-countrycode="KN" value="+1-869">Saint Kitts and Nevis (+1-869)</option>
        <option data-countrycode="LC" value="+1-758">Saint Lucia (+1-758)</option>
        <option data-countrycode="VC" value="+1-784">Saint Vincent and the Grenadines (+1-784)</option>
        <option data-countrycode="WS" value="+685">Samoa (+685)</option>
        <option data-countrycode="SM" value="+378">San Marino (+378)</option>
        <option data-countrycode="ST" value="+239">Sao Tome and Principe (+239)</option>
        <option data-countrycode="SN" value="+221">Senegal (+221)</option>
        <option data-countrycode="SC" value="+248">Seychelles (+248)</option>
        <option data-countrycode="SL" value="+232">Sierra Leone (+232)</option>
        <option data-countrycode="SK" value="+421">Slovakia (Slovak Republic) (+421)</option>
        <option data-countrycode="SI" value="+386">Slovenia (+386)</option>
        <option data-countrycode="SB" value="+677">Solomon Islands (+677)</option>
        <option data-countrycode="SO" value="+252">Somalia (+252)</option>
        <option data-countrycode="GS" value="+500">South Georgia and the South Sandwich Islands (+500)</option>
        <option data-countrycode="ES" value="+34">Spain (+34)</option>
        <option data-countrycode="LK" value="+94">Sri Lanka (+94)</option>
        <option data-countrycode="SH" value="+290">Saint Helena, Ascension and Tristan da Cunha (+290)</option>
        <option data-countrycode="PM" value="+508">St. Pierre and Miquelon (+508)</option>
        <option data-countrycode="SD" value="+249">Sudan (+249)</option>
        <option data-countrycode="SR" value="+597">Suriname (+597)</option>
        <option data-countrycode="SJ" value="+47">Svalbard and Jan Mayen Islands (+47)</option>
        <option data-countrycode="SZ" value="+268">Swaziland (+268)</option>
        <option data-countrycode="SE" value="+46">Sweden (+46)</option>
        <option data-countrycode="CH" value="+41">Switzerland (+41)</option>
        <option data-countrycode="SY" value="+963">Syrian Arab Republic (+963)</option>
        <option data-countrycode="TW" value="+886">Taiwan (+886)</option>
        <option data-countrycode="TJ" value="+992">Tajikistan (+992)</option>
        <option data-countrycode="TZ" value="+255">Tanzania, United Republic of (+255)</option>
        <option data-countrycode="TH" value="+66">Thailand (+66)</option>
        <option data-countrycode="TG" value="+228">Togo (+228)</option>
        <option data-countrycode="TK" value="+690">Tokelau (+690)</option>
        <option data-countrycode="TO" value="+676">Tonga (+676)</option>
        <option data-countrycode="TT" value="+1-868">Trinidad and Tobago (+1-868)</option>
        <option data-countrycode="TN" value="+216">Tunisia (+216)</option>
        <option data-countrycode="TR" value="+90">Turkey (+90)</option>
        <option data-countrycode="TM" value="+993">Turkmenistan (+993)</option>
        <option data-countrycode="TC" value="+1-649">Turks and Caicos Islands (+1-649)</option>
        <option data-countrycode="TV" value="+688">Tuvalu (+688)</option>
        <option data-countrycode="UG" value="+256">Uganda (+256)</option>
        <option data-countrycode="UA" value="+380">Ukraine (+380)</option>
        <option data-countrycode="GB" value="+44">United Kingdom (+44)</option>
        <option data-countrycode="US" value="+1">United States (+1)</option>
        <option data-countrycode="UM" value="+246">United States Minor Outlying Islands (+246)</option>
        <option data-countrycode="UY" value="+598">Uruguay (+598)</option>
        <option data-countrycode="UZ" value="+998">Uzbekistan (+998)</option>
        <option data-countrycode="VU" value="+678">Vanuatu (+678)</option>
        <option data-countrycode="VA" value="+379">Vatican City State (Holy See) (+379)</option>
        <option data-countrycode="VE" value="+58">Venezuela (+58)</option>
        <option data-countrycode="VN" value="+84">Vietnam (+84)</option>
        <option data-countrycode="VG" value="+1-284">Virgin Islands (British) (+1-284)</option>
        <option data-countrycode="VI" value="+1-340">Virgin Islands (U.S.) (+1-340)</option>
        <option data-countrycode="WF" value="+681">Wallis and Futuna Islands (+681)</option>
        <option data-countrycode="EH" value="+212">Western Sahara (+212)</option>
        <option data-countrycode="YE" value="+967">Yemen (+967)</option>
        <option data-countrycode="RS" value="+381">Serbia (+381)</option>
        <option data-countrycode="ZM" value="+260">Zambia (+260)</option>
        <option data-countrycode="ZW" value="+263">Zimbabwe (+263)</option>
        <option data-countrycode="AX" value="+358">Aaland Islands (+358)</option>
        <option data-countrycode="PS" value="+970">Palestine (+970)</option>
        <option data-countrycode="ME" value="+382">Montenegro (+382)</option>
        <option data-countrycode="GG" value="+44-1481">Guernsey (+44-1481)</option>
        <option data-countrycode="IM" value="+44-1624">Isle of Man (+44-1624)</option>
        <option data-countrycode="JE" value="+44-1534">Jersey (+44-1534)</option>
        <option data-countrycode="CW" value="+599">CuraÃ§ao (+599)</option>
        <option data-countrycode="CI" value="+225">Ivory Coast (+225)</option>
        <option data-countrycode="XK" value="+383">Kosovo (+383)</option>                              
`);

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://www.myhomesfy.com/api/leads/projectdata/174"
    }).done(function (data) {
        if ("result" in data) {
            phone_no = data.result.phone;
            whatsapp_url = data.result.wp_links;
            window.projectname = data.result.project_name;
            window.city = data.result.city;
            window.RegNo = data.result.reg_no;
            $(".phone_url").attr("href", "tel:" + phone_no + "");
            $(".whatsapp_url").attr("href", whatsapp_url + "!I want to know about " + data.result.project_name + ".");
            $(".phone_no").html(phone_no)
        }
    }).fail(function () {
        var whatsapp_url = "https://api.whatsapp.com/send?phone=917304412403&text=Hi!"
        $(".whatsapp_url").attr("href", whatsapp_url);
        $(".phone_url").attr("href", "tel:" + 917304927701 + "");
        $(".phone_no").html("917304927701")
    });
    var utmsource, utmcampaign, utmmedium, utmterm, utmcontent;
    var param_region_id = window.RegNo;
    var param_nationality = 1;
    var queryForm = function (settings) {
        var reset = settings && settings.reset ? settings.reset : !1;
        var self = window.location.toString();
        var querystring = self.split("?");
        if (querystring.length > 1) {
            var pairs = querystring[1].split("&");
            for (i in pairs) {
                var keyval = pairs[i].split("=");
                if (reset || sessionStorage.getItem(keyval[0]) === null) {
                    sessionStorage.setItem(keyval[0], keyval[1])
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
                    utmterm = keyval[1]
                if (keyval[0] == "p_nationality")
                    param_nationality = keyval[1]
                if (keyval[0] == "p_regionid") {
                    param_region_id = keyval[1];
                    $.ajax({
                        type: "GET",
                        url: "https://myhomesfy.com/api/leads/regiondata/" + param_region_id
                    }).done(function (data) {
                        if ("result" in data) {

                            phone_no = data['result']['phone'];
                            whatsapp_url = data['result']['wp_links'];
                            $(".phone_url").attr("href", "tel:" + phone_no + "");
                            $(".whatsapp_url").attr("href", whatsapp_url + "!I want to know about Lodha Quality Homes Majiwada project.");
                            $(".phone_no").html(phone_no);
                        }
                    });
                }

            }
        }
        var hiddenFields = document.querySelectorAll("input[type=hidden]");
        for (var i = 0; i < hiddenFields.length; i++) {
            var param = sessionStorage.getItem(hiddenFields[i].name);
            if (param) document.getElementById(hiddenFields[i].name).value = param
        }
    }

    queryForm();
    $(document).ready(function () {
        var Ipaddress;
        var browser;
        var device;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Windows Phone/i)) {
            device = "Mobile";
        } else if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
            device = "Tablet";
        } else if (navigator.userAgent.match(/BlackBerry/i)) {
            device = "Blackberry";
        } else {
            device = "Desktop";
        }

        $.getJSON("https://jsonip.com?callback=?", function (data) {
            Ipaddress = data.ip;
        });

        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            browser = "Opera";
        } else if (navigator.userAgent.indexOf("Chrome") != -1) {
            browser = "Chrome";
        } else if (navigator.userAgent.indexOf("Safari") != -1) {
            browser = "Safari";
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            browser = "Firefox";
        } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
        {
            browser = "MSIE";
        }
        $('#dropAnEnquiry').on("submit", function () {
            debugger
            var name = $('#dropname').val();
            var email = "No email";
            var number = $('#dropnumber').val();
            var country_code = $('#drop_CountryCode').val();
            saveLead(name, email, number, country_code, 'top_enquire_form');
            return !1
        })
        $('#HomemeetingForm').on("submit", function () {
            debugger
            var name = $('#Homemeetingname').val();
            var email = "Noe email";
            var number = $('#Homemeetingnumber').val();
            var country_code = $('#Homemeeting_CountryCode').val();
            saveLead(name, email, number, country_code, ' homemeeting_overview_homepage');
            return !1
        })
        $('#BrochureForm').on("submit", function () {
            debugger
            var name = $('#Brochurename').val();
            var email = "Noe email";
            var number = $('#Brochurenumber').val();
            var country_code = $('#Brochure_CountryCode').val();
            saveLead(name, email, number, country_code, 'downloadbrochure_overview_homepage');
            return !1
        })
        $('#PriceForm').on("submit", function () {
            debugger
            var name = $('#Pricename').val();
            var email = "Noe email";
            var number = $('#Pricenumber').val();
            var country_code = $('#Price_CountryCode').val();
            saveLead(name, email, number, country_code, ' priceplan_overview_homepage');
            return !1
        })
        $('#OfferModalForm').on("submit", function () {
            debugger
            var name = $('#OfferModalname').val();
            var email = "Noe email";
            var number = $('#OfferModalnumber').val();
            var country_code = $('#drop_CountryCode').val();
            saveLead(name, email, number, country_code, 'gallery_overview_homepage');
            return !1
        })
        $('#AmenitiesForm').on("submit", function () {
            debugger
            var name = $('#Amenitiesname').val();
            var email = "Noe email";
            var number = $('#Amenitiesnumber').val();
            var country_code = $('#Amenities_CountryCode').val();
            saveLead(name, email, number, country_code, ' amenities_overview_homepage');
            return !1
        })
        $('#FloorPlanForm').on("submit", function () {
            debugger
            var name = $('#FloorPlanName').val();
            var email = "Noe email";
            var number = $('#FloorPlanNumber').val();
            var country_code = $('#FloorPlan_CountryCode').val();
            saveLead(name, email, number, country_code, ' floorplan_overview_homepage');
            return !1
        })
        $('#LocationForm').on("submit", function () {
            debugger;
            var name = $('#LocationName').val();
            var email = "Noe email";
            var number = $('#LocationNumber').val();
            var country_code = $('#Location_CountryCode').val();
            saveLead(name, email, number, country_code, ' sitevisit_overview_homepage');
            return !1
        })
        $('#EmiFormModal').on("submit", function () {
            debugger;
            var name = $('#EmiFormname').val();
            var email = "Noe email";
            var number = $('#EmiFormnumber').val();
            var country_code = $('#EmiForm_CountryCode').val();
            saveLead(name, email, number, country_code, 'emicalculator_overview_homepage');
            return !1
        })
        $('#KnowMoreForm').on("submit", function () {
            debugger;
            var name = $('#KnowMoreName').val();
            var email = "Noe email";
            var number = $('#KnowMoreNumber').val();
            var country_code = $('#KnowMore_CountryCode').val();
            saveLead(name, email, number, country_code, 'Know_more_details_overview_homepage');
            return !1
        })
        $('#FeatureForm').on("submit", function () {
            debugger;
            var name = $('#FeatureName').val();
            var email = "Noe email";
            var number = $('#FeatureNumber').val();
            var country_code = $('#Feature_CountryCode').val();
            saveLead(name, email, number, country_code, 'featured_porject_details_overview_homepage');
            return !1
        })
        $('#GalleryForm').on("submit", function () {
            debugger;
            var name = $('#Galleryname').val();
            var email = "Noe email";
            var number = $('#Gallerynumber').val();
            var country_code = $('#Gallery_CountryCode').val();
            saveLead(name, email, number, country_code, 'video_gallery_overview_homepage');
            return !1
        })
        $('#onloadForm').on("submit", function () {
            debugger;
            var name = $('#onloadname').val();
            var email = "Noe email";
            var number = $('#onloadnumber').val();
            var country_code = $('#onload_CountryCode').val();
            saveLead(name, email, number, country_code, 'featured_porject_details_overview_homepage');
            return !1
        })

        function saveLead(name, email, number,country_code, pref) {
            debugger;
                    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (name.length == 0) {
            alert('Please Enter Your Sweet Name');
            return !1
        }
        else {
            var obj = {};
            obj.p_username = name;
            obj.p_mobilenumber = number;
            obj.p_email = email;
            obj.p_countrycode = country_code;
            obj.p_pref = pref;
            obj.p_leadtype = window.projectname;
            obj.p_launchname = "Runwal Bliss Kanjurmarg - Avenue";
            obj.p_source = "website";
            obj.p_city = window.city;
            //obj.p_regionid = window.RegNo;
            obj.p_nationality = param_nationality;
            obj.p_regionid = (param_region_id != undefined) ? parseInt(param_region_id) : window.RegNo;
            obj.p_utmsource = utmsource;
            obj.p_utmmedium = utmmedium;
            obj.p_utmcampaign = utmcampaign;
            obj.p_utmcontent = utmcontent;
            obj.p_utmterm = utmterm;
            obj.p_ipaddress = Ipaddress;
            obj.p_userbrowser = browser;
            obj.p_useragent = device;
            if (pref == 'priceplanoffer_overview_homepage') {
                SendPrice(obj);
            }
            else if (pref == 'downloadbrochure_overview_homepage') {
                SendBrochure(obj);
            }
            else if (pref == 'video_gallery_overview_homepage') {
                SendGallery(obj);
            }
            else if (pref == 'testimonialvideo_overview_homepage') {
                SendVideo(obj);
            }
            else if (pref == 'trending_projects_navigation_allpage') {
                SendTrending(obj);
            }
            else if (pref == 'sampleflat_overview_homepage') {
                SampleFlatform(obj);
            }

            else
                SendLead(obj);
        }
        return !0
        }

    })
    var SendLead = function (obj) {
        $.post("https://www.myhomesfy.com/api/leads", obj, function (data) {
            alert("Thank You!");
            window.location.href = "thankyou.html";
            return !0
        })
    }
    var SendGallery = function (obj) {
        $.post("https://www.myhomesfy.com/api/leads", obj, function (data) {
            alert("Thank You!");
            window.location.href = "thankyou.html";
            return !0
        })
    }
    var SendBrochure = function (obj) {
        $.post("https://www.myhomesfy.com/api/leads", obj, function (data) {
            alert("Thank You!");
            window.location.href = "thankyou.html";
            return !0
        })
    }
});
$('.Main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	centerPadding: "0px",
	infinite: true,
	asNavFor: '.MainNav',
	prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
	nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
});
$('.MainNav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.Main',
	centerPadding: "0px",
	dots: false,
	arrows: false,
	centerMode: true,
	focusOnSelect: true
});
/* Please ❤ this if you like it! */




(function ($) {
	"use strict";

	$(function () {
		var header = $(".start-style");
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});

	//Animation

	$(document).ready(function () {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover

	$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
		if ($(window).width() > 750) {
			var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
			setTimeout(function () {
				_d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
			}, 1);
		}
	});

	//Switch light/dark

	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});

})(jQuery); 


//(function () {
//    var Util,
//        __bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; };

//    Util = (function () {
//        function Util() { }

//        Util.prototype.extend = function (custom, defaults) {
//            var key, value;
//            for (key in custom) {
//                value = custom[key];
//                if (value != null) {
//                    defaults[key] = value;
//                }
//            }
//            return defaults;
//        };

//        Util.prototype.isMobile = function (agent) {
//            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
//        };

//        return Util;

//    })();

//    this.WOW = (function () {
//        WOW.prototype.defaults = {
//            boxClass: 'wow',
//            animateClass: 'animated',
//            offset: 0,
//            mobile: true
//        };

//        function WOW(options) {
//            if (options == null) {
//                options = {};
//            }
//            this.scrollCallback = __bind(this.scrollCallback, this);
//            this.scrollHandler = __bind(this.scrollHandler, this);
//            this.start = __bind(this.start, this);
//            this.scrolled = true;
//            this.config = this.util().extend(options, this.defaults);
//        }

//        WOW.prototype.init = function () {
//            var _ref;
//            this.element = window.document.documentElement;
//            if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
//                return this.start();
//            } else {
//                return document.addEventListener('DOMContentLoaded', this.start);
//            }
//        };

//        WOW.prototype.start = function () {
//            var box, _i, _len, _ref;
//            this.boxes = this.element.getElementsByClassName(this.config.boxClass);
//            if (this.boxes.length) {
//                if (this.disabled()) {
//                    return this.resetStyle();
//                } else {
//                    _ref = this.boxes;
//                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
//                        box = _ref[_i];
//                        this.applyStyle(box, true);
//                    }
//                    window.addEventListener('scroll', this.scrollHandler, false);
//                    window.addEventListener('resize', this.scrollHandler, false);
//                    return this.interval = setInterval(this.scrollCallback, 50);
//                }
//            }
//        };

//        WOW.prototype.stop = function () {
//            window.removeEventListener('scroll', this.scrollHandler, false);
//            window.removeEventListener('resize', this.scrollHandler, false);
//            if (this.interval != null) {
//                return clearInterval(this.interval);
//            }
//        };

//        WOW.prototype.show = function (box) {
//            this.applyStyle(box);
//            return box.className = "" + box.className + " " + this.config.animateClass;
//        };

//        WOW.prototype.applyStyle = function (box, hidden) {
//            var delay, duration, iteration;
//            duration = box.getAttribute('data-wow-duration');
//            delay = box.getAttribute('data-wow-delay');
//            iteration = box.getAttribute('data-wow-iteration');
//            return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
//        };

//        WOW.prototype.resetStyle = function () {
//            var box, _i, _len, _ref, _results;
//            _ref = this.boxes;
//            _results = [];
//            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
//                box = _ref[_i];
//                _results.push(box.setAttribute('style', 'visibility: visible;'));
//            }
//            return _results;
//        };

//        WOW.prototype.customStyle = function (hidden, duration, delay, iteration) {
//            var style;
//            style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
//            if (duration) {
//                style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
//            }
//            if (delay) {
//                style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
//            }
//            if (iteration) {
//                style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
//            }
//            return style;
//        };

//        WOW.prototype.scrollHandler = function () {
//            return this.scrolled = true;
//        };

//        WOW.prototype.scrollCallback = function () {
//            var box;
//            if (this.scrolled) {
//                this.scrolled = false;
//                this.boxes = (function () {
//                    var _i, _len, _ref, _results;
//                    _ref = this.boxes;
//                    _results = [];
//                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
//                        box = _ref[_i];
//                        if (!(box)) {
//                            continue;
//                        }
//                        if (this.isVisible(box)) {
//                            this.show(box);
//                            continue;
//                        }
//                        _results.push(box);
//                    }
//                    return _results;
//                }).call(this);
//                if (!this.boxes.length) {
//                    return this.stop();
//                }
//            }
//        };

//        WOW.prototype.offsetTop = function (element) {
//            var top;
//            top = element.offsetTop;
//            while (element = element.offsetParent) {
//                top += element.offsetTop;
//            }
//            return top;
//        };

//        WOW.prototype.isVisible = function (box) {
//            var bottom, offset, top, viewBottom, viewTop;
//            offset = box.getAttribute('data-wow-offset') || this.config.offset;
//            viewTop = window.pageYOffset;
//            viewBottom = viewTop + this.element.clientHeight - offset;
//            top = this.offsetTop(box);
//            bottom = top + box.clientHeight;
//            return top <= viewBottom && bottom >= viewTop;
//        };

//        WOW.prototype.util = function () {
//            return this._util || (this._util = new Util());
//        };

//        WOW.prototype.disabled = function () {
//            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
//        };

//        return WOW;

//    })();

//}).call(this);


//wow = new WOW(
//    {
//        animateClass: 'animated',
//        offset: 100
//    }
//);
//wow.init();



window.$zopim || (function (g, a) {
    var f = $zopim = function (d) {
        f._.push(d)
    },
        b = f.s = g.createElement(a),
        c = g.getElementsByTagName(a)[0];
    f.set = function (d) {
        f.set._.push(d)
    };
    f._ = [];
    f.set._ = [];
    b.async = !0;
    b.setAttribute("charset", "utf-8");
    b.src = "//v2.zopim.com/?2F4uasrDz8AwB7cxrCz3igHZtZovK0w4";
    f.t = +new Date;
    b.type = "text/javascript";
    c.parentNode.insertBefore(b, c)
})(document, "script");
$zopim(function () {
    $zopim.livechat.button.setOffsetVerticalMobile(55);
    $zopim.livechat.button.setOffsetHorizontalMobile(10)
})