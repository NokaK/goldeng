
// window.changePersonalOrCorporate = (checkmark) => {

//     let countries = `<option value="26"> Albania </option>
//     <option value="102"> Algeria </option>
//     <option value="27"> American Samoa </option>
//     <option value="162"> Andorra </option>
//     <option value="234"> Angola </option>
//     <option value="1"> Anguilla </option>
//     <option value="28"> Antarctica </option>
//     <option value="29"> Antigua and Barbuda </option>
//     <option value="30"> Argentina </option>
//     <option value="31"> Armenia </option>
//     <option value="32"> Aruba </option>
//     <option value="33"> Australia </option>
//     <option value="34"> Austria </option>
//     <option value="35"> Azerbaijan </option>
//     <option value="36"> Bahrain </option>
//     <option value="235"> Bangladesh </option>
//     <option value="13"> Barbados </option>
//     <option value="37"> Belarus </option>
//     <option value="38"> Belgium </option>
//     <option value="3"> Belize </option>
//     <option value="161"> Benin </option>
//     <option value="39"> Bermuda </option>
//     <option value="40"> Bhutan </option>
//     <option value="41"> Bolivia </option>
//     <option value="42"> Bosnia and Herzegovina </option>
//     <option value="163"> Botswana </option>
//     <option value="43"> Brazil </option>
//     <option value="4"> British Virgin Islands </option>
//     <option value="5"> Brunei </option>
//     <option value="44"> Bulgaria </option>
//     <option value="164"> Burkina Faso </option>
//     <option value="166"> Burundi </option>
//     <option value="45"> Cambodia </option>
//     <option value="167"> Cameroon </option>
//     <option value="46"> Canada </option>
//     <option value="168"> Cape Verde </option>
//     <option value="14"> Cayman Islands </option>
//     <option value="169"> Central African Republic </option>
//     <option value="170"> Chad </option>
//     <option value="47"> Chile </option>
//     <option value="48"> China </option>
//     <option value="49"> Christmas Island </option>
//     <option value="50"> Cocos (Keeling) Islands </option>
//     <option value="51"> Colombia </option>
//     <option value="171"> Comoros </option>
//     <option value="52"> Cook Islands </option>
//     <option value="53"> Costa Rica </option>
//     <option value="54"> Cote d'Ivoire </option>
//     <option value="55"> Croatia </option>
//     <option value="56"> Cuba </option>
//     <option value="174"> Curacao </option>
//     <option value="15"> Cyprus </option>
//     <option value="57"> Czech Republic </option>
//     <option value="6"> Delaware (United States of America) </option>
//     <option value="172"> Democratic Republic of the Congo </option>
//     <option value="58"> Denmark </option>
//     <option value="59"> Djibouti </option>
//     <option value="7"> Dominica </option>
//     <option value="60"> Dominican Republic </option>
//     <option value="61"> East Timor </option>
//     <option value="62"> Ecuador </option>
//     <option value="175"> Egypt </option>
//     <option value="63"> El Salvador </option>
//     <option value="176"> Equatorial Guinea </option>
//     <option value="177"> Eritrea </option>
//     <option value="64"> Estonia </option>
//     <option value="178"> Ethiopia </option>
//     <option value="65"> Falkland Islands </option>
//     <option value="66"> Faroe Islands </option>
//     <option value="106"> Federated States of Micronesia </option>
//     <option value="67"> Fiji </option>
//     <option value="68"> Finland </option>
//     <option value="69"> France </option>
//     <option value="236"> French Guiana </option>
//     <option value="237"> French Polynesia </option>
//     <option value="70"> French Southern Territories </option>
//     <option value="179"> Gabon </option>
//     <option value="180"> Gambia </option>
//     <option value="71"> Georgia </option>
//     <option value="72"> Germany </option>
//     <option value="181"> Ghana </option>
//     <option value="16"> Gibraltar </option>
//     <option value="74"> Greece </option>
//     <option value="75"> Greenland </option>
//     <option value="76"> Grenada </option>
//     <option value="77"> Guadeloupe </option>
//     <option value="78"> Guam </option>
//     <option value="79"> Guatemala </option>
//     <option value="182"> Guinea </option>
//     <option value="183"> Guinea-Bissau </option>
//     <option value="73"> Guyana </option>
//     <option value="80"> Haiti </option>
//     <option value="81"> Heard Island and Mcdonald Islands </option>
//     <option value="82"> Honduras </option>
//     <option value="17"> Hong Kong </option>
//     <option value="83"> Hungary </option>
//     <option value="84"> Iceland </option>
//     <option value="85"> India </option>
//     <option value="86"> Indonesia </option>
//     <option value="185"> Iran </option>
//     <option value="186"> Iraq </option>
//     <option value="87"> Ireland </option>
//     <option value="88"> Israel </option>
//     <option value="89"> Italy </option>
//     <option value="187"> Jamaica </option>
//     <option value="90"> Japan </option>
//     <option value="245"> Jersey </option>
//     <option value="188"> Jordan </option>
//     <option value="189"> Kazakhstan </option>
//     <option value="190"> Kenya </option>
//     <option value="191"> Kiribati </option>
//     <option value="91"> Korea, North </option>
//     <option value="192"> Kosovo </option>
//     <option value="193"> Kuwait </option>
//     <option value="93"> Kyrgyzstan </option>
//     <option value="18"> Labuan, Malaysia </option>
//     <option value="94"> Laos </option>
//     <option value="95"> Latvia </option>
//     <option value="194"> Lebanon </option>
//     <option value="195"> Lesotho </option>
//     <option value="196"> Liberia </option>
//     <option value="197"> Libya </option>
//     <option value="96"> Liechtenstein </option>
//     <option value="97"> Lithuania </option>
//     <option value="98"> Luxembourg </option>
//     <option value="99"> Macau </option>
//     <option value="100"> Macedonia </option>
//     <option value="198"> Madagascar </option>
//     <option value="199"> Malawi </option>
//     <option value="101"> Malaysia </option>
//     <option value="103"> Maldives </option>
//     <option value="104"> Mali </option>
//     <option value="19"> Malta </option>
//     <option value="8"> Marshall Islands </option>
//     <option value="200"> Mauritania </option>
//     <option value="20"> Mauritius </option>
//     <option value="241"> Mayotte </option>
//     <option value="105"> Mexico </option>
//     <option value="107"> Moldova </option>
//     <option value="201"> Monaco </option>
//     <option value="108"> Mongolia </option>
//     <option value="242"> Montenegro </option>
//     <option value="109"> Montserrat </option>
//     <option value="202"> Morocco </option>
//     <option value="203"> Mozambique </option>
//     <option value="110"> Myanmar </option>
//     <option value="204"> Namibia </option>
//     <option value="111"> Nauru </option>
//     <option value="112"> Nepal </option>
//     <option value="21"> Netherlands </option>
//     <option value="113"> Netherlands Antilles </option>
//     <option value="114"> New Caledonia </option>
//     <option value="115"> New Zealand </option>
//     <option value="116"> Nicaragua </option>
//     <option value="205"> Niger </option>
//     <option value="243"> Nigeria </option>
//     <option value="240"> Niue </option>
//     <option value="117"> Norfolk Island </option>
//     <option value="118"> Northern Mariana Islands </option>
//     <option value="119"> Norway </option>
//     <option value="206"> Oman </option>
//     <option value="207"> Pakistan </option>
//     <option value="120"> Palau </option>
//     <option value="208"> Palestinian Territories </option>
//     <option value="22"> Panama </option>
//     <option value="121"> Papua New Guinea </option>
//     <option value="122"> Paraguay </option>
//     <option value="123"> Peru </option>
//     <option value="124"> Philippines </option>
//     <option value="125"> Pitcairn Islands </option>
//     <option value="126"> Poland </option>
//     <option value="127"> Portugal </option>
//     <option value="128"> Puerto Rico (U.S. territory) </option>
//     <option value="209"> Qatar </option>
//     <option value="173"> Republic of the Congo </option>
//     <option value="129"> Réunion </option>
//     <option value="130"> Romania </option>
//     <option value="131"> Russia </option>
//     <option value="210"> Rwanda </option>
//     <option value="132"> Saint Helena </option>
//     <option value="133"> Saint Kitts and Nevis </option>
//     <option value="134"> Saint Lucia </option>
//     <option value="135"> Saint Pierre and Miquelon </option>
//     <option value="11"> Saint Vincent and the Grenadines </option>
//     <option value="9"> Samoa </option>
//     <option value="137"> San Marino </option>
//     <option value="211"> Sao Tome and Principe </option>
//     <option value="212"> Saudi Arabia </option>
//     <option value="213"> Senegal </option>
//     <option value="138"> Serbia </option>
//     <option value="10"> Seychelles </option>
//     <option value="214"> Sierra Leone </option>
//     <option value="23"> Singapore </option>
//     <option value="215"> Sint Maarten </option>
//     <option value="139"> Slovakia </option>
//     <option value="140"> Slovenia </option>
//     <option value="141"> Solomon Islands </option>
//     <option value="216"> Somalia </option>
//     <option value="142"> South Africa </option>
//     <option value="143"> South Georgia and the South Sandwich Islands </option>
//     <option value="92"> South Korea </option>
//     <option value="217"> South Sudan </option>
//     <option value="144"> Spain </option>
//     <option value="218"> Sri Lanka </option>
//     <option value="219"> Sudan </option>
//     <option value="145"> Suriname </option>
//     <option value="220"> Swaziland </option>
//     <option value="146"> Sweden </option>
//     <option value="147"> Switzerland </option>
//     <option value="221"> Syria </option>
//     <option value="148"> Taiwan </option>
//     <option value="222"> Tajikistan </option>
//     <option value="223"> Tanzania </option>
//     <option value="149"> Thailand </option>
//     <option value="2"> The Bahamas </option>
//     <option value="224"> Togo </option>
//     <option value="150"> Tonga </option>
//     <option value="151"> Trinidad and Tobago </option>
//     <option value="225"> Tunisia </option>
//     <option value="226"> Turkey </option>
//     <option value="227"> Turkmenistan </option>
//     <option value="152"> Turks and Caicos Islands </option>
//     <option value="153"> Tuvalu </option>
//     <option value="154"> U.S. Virgin Islands </option>
//     <option value="228"> Uganda </option>
//     <option value="155"> Ukraine </option>
//     <option value="12"> United Arab Emirates (UAE) </option>
//     <option value="24"> United Kingdom </option>
//     <option value="246"> United States of America </option>
//     <option value="156"> Uruguay </option>
//     <option value="230"> Uzbekistan </option>
//     <option value="157"> Vanuatu </option>
//     <option value="158"> Vatican City </option>
//     <option value="159"> Venezuela </option>
//     <option value="160"> Vietnam </option>
//     <option value="238"> Wallis and Futuna Islands </option>
//     <option value="239"> Western Sahara </option>
//     <option value="231"> Yemen </option>
//     <option value="232"> Zambia </option>
//     <option value="233"> Zimbabwe </option>`

//     let container = checkmark.parentElement.parentElement.parentElement.parentElement
//     let inputContainer = container.querySelector('.service_feature_inputs_container');
//     inputContainer.innerHTML = ""



//     let shares
//     for (let i = 0; i <= 100; i++) {
//         shares += `<option value="${i}" selected="">${i}</option>`
//     }

    
//     if (container.querySelector('select[name="amount-of-shares"]')) {
//         localStorage.setItem('shares', 100);
//         isShareHolder = `<label for="share-Personal-shareholder-0">Percentage (%) of
//                             the
//                             shares will own <span class="pt-popover" data-toggle="popover"
//                                 data-placement="right"
//                                 data-original-title="Percentage (%) of the shares will own"><strong>[ ? ]</strong> </span> </label>
                            
//                             <select name="amount-of-shares" onchange="changeShare(this)" data-id="0" class="form-control" name="shareholder[0][Personal][share]" id="share-Personal-shareholder-0">
//                             <option value="">Please select</option>
//                             ${shares}
//                         </select>`

//     } else {
//         isShareHolder = "";
//     }

//     if (checkmark.value == 1) {
//         inputContainer.innerHTML = `
//                                    <div class="group-form-group" data-service-feature-id="${featureIdsAndQuantityArray[i].id}" >
//                     <div class="form-group">
//                         <label style="margin-top: 4rem;"  >${servicefeatureNamesArray[i]} ${j + 1}</label>
//                         <div class="radio flex_radio" style="padding:0; margin: 0.5rem 0">

//                             <form name="service_feature_type">
//                                 <input onclick="changePersonalOrCorporate(this)" type="radio" name="choice"value="1" checked>
//                                 <label class="radio-inline" style="margin-right: 3rem; width: initial"> Personal </label>
//                                 <input onclick="changePersonalOrCorporate(this)" type="radio" name="choice"value="2">
//                                 <label class="radio-inline" style="margin-right: 3rem; width: initial"> Body Corporate </label>
//                             </form>
 
//                         </div>
//                     </div>
//                     <div  style="display: block;" class="service_feature_inputs_container">
//                         <div class="form-group"> <label for="name-Personal-director-0" style="margin-bottom:0">Full Name</label>
//                         <input name="service-feature-name" type="text" maxlength="255" class="form-control" placeholder="Type full name" name="director[0][Personal][name]"   data-id="0" value=""> </div>
//                         <div class="form-group"> <label for="country-Personal-director-0">Nationality</label>
//                             <select class="form-control" data-id="0" name="service-feature-country]" >
//                                ${countries}
//                             </select> </div>
//                         <div class="form-group"> 
//                             <label >Passport Number </label> 
//                             <input name="service-feature-id-number" type="text" maxlength="255" class="form-control" placeholder="Type passport number" data-id="0" value="">
//                         </div>
//                         ${isShareHolder}
//                     </div>
                    
//                 </div>`;

//     }

//     if (checkmark.value == 2) {
//         inputContainer.innerHTML = `
//                                          <div  style="display: block;" class="service_feature_inputs_container">
//                                             <div class="form-group"> <label for="name-Personal-director-0" style="margin-bottom:0">Full Name</label>
//                                             <input name="service-feature-name" type="text" maxlength="255" class="form-control" placeholder="Type full name" name="director[0][Personal][name]"   data-id="0" value=""> </div>
//                                             <div class="form-group"> <label for="country-Personal-director-0">Nationality</label>
//                                                 <select class="form-control" data-id="0" name="director[0][Personal][country_id]" >
//                                                    ${countries}
//                                                 </select> </div>
//                                                 <div class="form-group"> 
//                                                 <label >Passport Number </label> 
//                                                 <input name="service-feature-id-number" type="text" maxlength="255" class="form-control" placeholder="Type passport number" data-id="0" value="">
//                                             </div>
//                                             ${isShareHolder}
//                                         </div>
//                                             <!-- <div class="form-group"> <label >Taxpayer Identification Numbers
//                                                     Number</label> <input type="text" maxlength="255" class="form-control" placeholder="Type passport number" name="director[0][Personal][passport]"data-id="0" value=""> </div>
//                                         </div> -->
//                                     </div>`;
//     }


// }