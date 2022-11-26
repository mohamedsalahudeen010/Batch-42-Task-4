// Step 1:
let request=new XMLHttpRequest;
// Step 2 :
request.open("GET","https://restcountries.com/v3.1/all");
//Step 3:
request.send();
//Step 4:

request.onload=()=>{
    let data=request.response;
    let result=JSON.parse(data);
   
    console.log("Country Name:"+ result[31].name.common +" | " + "Region:"+ result[31].region + " | " +"SubRegion:" + result[31].subregion +" | " +"Population:" + result[31].population)
    

    //For Loop
    // for(let i=0;i<result.length;i++){
    //     console.log("Country Name:"+ result[i].name.common +" | " + "Region:"+ result[i].region + " | " +"SubRegion:" + result[i].subregion +" | " +"Population:" + result[i].population)
    // }

    //For In Loop
//    for(let key in result){
//     console.log("Country Name:"+ result[key].name.common+" | " + "Region:"+ result[key].region + " | " +"SubRegion:" + result[key].subregion+" | " +"Population:" + result[key].population)
//    }

// //For Of Loop
for(let key of result){
    console.log("Country Name:"+ key.name.common+" | " + "Region:"+ key.region + " | " +"SubRegion:" + key.subregion+" | " +"Population:" + key.population)
}

}

/*
DevTools failed to load source map: Could not load content for chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/sourceMap/chrome/scripts/iframe_form_check.map: System error: net::ERR_BLOCKED_BY_CLIENT
all.script.js:13 Country Name:Qatar | Region:Asia | SubRegion:Western Asia | Population:2881060
all.script.js:23 Country Name:Mauritania | Region:Africa | SubRegion:Western Africa | Population:4649660
all.script.js:23 Country Name:Aruba | Region:Americas | SubRegion:Caribbean | Population:106766
all.script.js:23 Country Name:Argentina | Region:Americas | SubRegion:South America | Population:45376763
all.script.js:23 Country Name:Sweden | Region:Europe | SubRegion:Northern Europe | Population:10353442
all.script.js:23 Country Name:Maldives | Region:Asia | SubRegion:Southern Asia | Population:540542
​ Country Name:Mexico | Region:Americas | SubRegion:North America | Population:128932753
​ Country Name:New Zealand | Region:Oceania | SubRegion:Australia and New Zealand | Population:5084300
​ Country Name:Ecuador | Region:Americas | SubRegion:South America | Population:17643060
​ Country Name:Wallis and Futuna | Region:Oceania | SubRegion:Polynesia | Population:11750
​ Country Name:Åland Islands | Region:Europe | SubRegion:Northern Europe | Population:29458
​ Country Name:Montenegro | Region:Europe | SubRegion:Southeast Europe | Population:621718
​ Country Name:Pakistan | Region:Asia | SubRegion:Southern Asia | Population:220892331
​ Country Name:Pitcairn Islands | Region:Oceania | SubRegion:Polynesia | Population:56
​ Country Name:Zambia | Region:Africa | SubRegion:Eastern Africa | Population:18383956
​ Country Name:Seychelles | Region:Africa | SubRegion:Eastern Africa | Population:98462
​ Country Name:Malaysia | Region:Asia | SubRegion:South-Eastern Asia | Population:32365998
​ Country Name:Norway | Region:Europe | SubRegion:Northern Europe | Population:5379475
​ Country Name:Uzbekistan | Region:Asia | SubRegion:Central Asia | Population:34232050
​ Country Name:Vanuatu | Region:Oceania | SubRegion:Melanesia | Population:307150
​ Country Name:French Southern and Antarctic Lands | Region:Antarctic | SubRegion:undefined | Population:400
​ Country Name:Christmas Island | Region:Oceania | SubRegion:Australia and New Zealand | Population:2072
​ Country Name:Singapore | Region:Asia | SubRegion:South-Eastern Asia | Population:5685807
​ Country Name:Suriname | Region:Americas | SubRegion:South America | Population:586634
​ Country Name:Western Sahara | Region:Africa | SubRegion:Northern Africa | Population:510713
​ Country Name:Saint Martin | Region:Americas | SubRegion:Caribbean | Population:38659
​ Country Name:Costa Rica | Region:Americas | SubRegion:Central America | Population:5094114
​ Country Name:Heard Island and McDonald Islands | Region:Antarctic | SubRegion:undefined | Population:0
​ Country Name:Ireland | Region:Europe | SubRegion:Northern Europe | Population:4994724
​ Country Name:Antarctica | Region:Antarctic | SubRegion:undefined | Population:1000
​ Country Name:Australia | Region:Oceania | SubRegion:Australia and New Zealand | Population:25687041
​ Country Name:Libya | Region:Africa | SubRegion:Northern Africa | Population:6871287
​ Country Name:Qatar | Region:Asia | SubRegion:Western Asia | Population:2881060
​ Country Name:Greenland | Region:Americas | SubRegion:North America | Population:56367
​ Country Name:Mauritius | Region:Africa | SubRegion:Eastern Africa | Population:1265740
​ Country Name:Kazakhstan | Region:Asia | SubRegion:Central Asia | Population:18754440
​ Country Name:British Indian Ocean Territory | Region:Africa | SubRegion:Eastern Africa | Population:3000
​ Country Name:Albania | Region:Europe | SubRegion:Southeast Europe | Population:2837743
​ Country Name:Bahrain | Region:Asia | SubRegion:Western Asia | Population:1701583
​ Country Name:Papua New Guinea | Region:Oceania | SubRegion:Melanesia | Population:8947027
​ Country Name:Burundi | Region:Africa | SubRegion:Eastern Africa | Population:11890781
​ Country Name:India | Region:Asia | SubRegion:Southern Asia | Population:1380004385
​ Country Name:Uruguay | Region:Americas | SubRegion:South America | Population:3473727
​ Country Name:Saint Lucia | Region:Americas | SubRegion:Caribbean | Population:183629
​ Country Name:Barbados | Region:Americas | SubRegion:Caribbean | Population:287371
​ Country Name:New Caledonia | Region:Oceania | SubRegion:Melanesia | Population:271960
all.script.js:23 Country Name:Latvia | Region:Europe | SubRegion:Northern Europe | Population:1901548
all.script.js:23 Country Name:Estonia | Region:Europe | SubRegion:Northern Europe | Population:1331057
all.script.js:23 Country Name:Niue | Region:Oceania | SubRegion:Polynesia | Population:1470
all.script.js:23 Country Name:Saint Barthélemy | Region:Americas | SubRegion:Caribbean | Population:4255
all.script.js:23 Country Name:Puerto Rico | Region:Americas | SubRegion:Caribbean | Population:3194034
all.script.js:23 Country Name:Grenada | Region:Americas | SubRegion:Caribbean | Population:112519
all.script.js:23 Country Name:Macau | Region:Asia | SubRegion:Eastern Asia | Population:649342
all.script.js:23 Country Name:Cyprus | Region:Europe | SubRegion:Southern Europe | Population:1207361
all.script.js:23 Country Name:Isle of Man | Region:Europe | SubRegion:Northern Europe | Population:85032
all.script.js:23 Country Name:Greece | Region:Europe | SubRegion:Southern Europe | Population:10715549
all.script.js:23 Country Name:Syria | Region:Asia | SubRegion:Western Asia | Population:17500657
all.script.js:23 Country Name:Lithuania | Region:Europe | SubRegion:Northern Europe | Population:2794700
all.script.js:23 Country Name:Curaçao | Region:Americas | SubRegion:Caribbean | Population:155014
all.script.js:23 Country Name:Dominica | Region:Americas | SubRegion:Caribbean | Population:71991
all.script.js:23 Country Name:Niger | Region:Africa | SubRegion:Western Africa | Population:24206636
all.script.js:23 Country Name:Kyrgyzstan | Region:Asia | SubRegion:Central Asia | Population:6591600
all.script.js:23 Country Name:Trinidad and Tobago | Region:Americas | SubRegion:Caribbean | Population:1399491
all.script.js:23 Country Name:Togo | Region:Africa | SubRegion:Western Africa | Population:8278737
all.script.js:23 Country Name:Palestine | Region:Asia | SubRegion:Western Asia | Population:4803269
all.script.js:23 Country Name:Madagascar | Region:Africa | SubRegion:Eastern Africa | Population:27691019
all.script.js:23 Country Name:Croatia | Region:Europe | SubRegion:Southeast Europe | Population:4047200
all.script.js:23 Country Name:Faroe Islands | Region:Europe | SubRegion:Northern Europe | Population:48865
all.script.js:23 Country Name:Haiti | Region:Americas | SubRegion:Caribbean | Population:11402533
all.script.js:23 Country Name:Montserrat | Region:Americas | SubRegion:Caribbean | Population:4922
all.script.js:23 Country Name:Cook Islands | Region:Oceania | SubRegion:Polynesia | Population:18100
all.script.js:23 Country Name:Timor-Leste | Region:Asia | SubRegion:South-Eastern Asia | Population:1318442
all.script.js:23 Country Name:Martinique | Region:Americas | SubRegion:Caribbean | Population:378243
all.script.js:23 Country Name:Cuba | Region:Americas | SubRegion:Caribbean | Population:11326616
all.script.js:23 Country Name:Taiwan | Region:Asia | SubRegion:Eastern Asia | Population:23503349
all.script.js:23 Country Name:Eswatini | Region:Africa | SubRegion:Southern Africa | Population:1160164
all.script.js:23 Country Name:Ukraine | Region:Europe | SubRegion:Eastern Europe | Population:44134693
all.script.js:23 Country Name:Bermuda | Region:Americas | SubRegion:North America | Population:63903
all.script.js:23 Country Name:South Korea | Region:Asia | SubRegion:Eastern Asia | Population:51780579
all.script.js:23 Country Name:Peru | Region:Americas | SubRegion:South America | Population:32971846
all.script.js:23 Country Name:Iraq | Region:Asia | SubRegion:Western Asia | Population:40222503
all.script.js:23 Country Name:Moldova | Region:Europe | SubRegion:Eastern Europe | Population:2617820
all.script.js:23 Country Name:San Marino | Region:Europe | SubRegion:Southern Europe | Population:33938
all.script.js:23 Country Name:Venezuela | Region:Americas | SubRegion:South America | Population:28435943
all.script.js:23 Country Name:Guyana | Region:Americas | SubRegion:South America | Population:786559
all.script.js:23 Country Name:Cayman Islands | Region:Americas | SubRegion:Caribbean | Population:65720
all.script.js:23 Country Name:Cambodia | Region:Asia | SubRegion:South-Eastern Asia | Population:16718971
all.script.js:23 Country Name:Cocos (Keeling) Islands | Region:Oceania | SubRegion:Australia and New Zealand | Population:544
all.script.js:23 Country Name:Malta | Region:Europe | SubRegion:Southern Europe | Population:525285
all.script.js:23 Country Name:Sri Lanka | Region:Asia | SubRegion:Southern Asia | Population:21919000
all.script.js:23 Country Name:Israel | Region:Asia | SubRegion:Western Asia | Population:9216900
all.script.js:23 Country Name:Sudan | Region:Africa | SubRegion:Northern Africa | Population:43849269
all.script.js:23 Country Name:United States Virgin Islands | Region:Americas | SubRegion:Caribbean | Population:106290
all.script.js:23 Country Name:Eritrea | Region:Africa | SubRegion:Eastern Africa | Population:5352000
all.script.js:23 Country Name:Mali | Region:Africa | SubRegion:Western Africa | Population:20250834
all.script.js:23 Country Name:Somalia | Region:Africa | SubRegion:Eastern Africa | Population:15893219
all.script.js:23 Country Name:Norfolk Island | Region:Oceania | SubRegion:Australia and New Zealand | Population:2302
​ Country Name:Comoros | Region:Africa | SubRegion:Eastern Africa | Population:869595
​ Country Name:Nicaragua | Region:Americas | SubRegion:Central America | Population:6624554
​ Country Name:Russia | Region:Europe | SubRegion:Eastern Europe | Population:144104080
​ Country Name:Uganda | Region:Africa | SubRegion:Eastern Africa | Population:45741000
​ Country Name:Nauru | Region:Oceania | SubRegion:Micronesia | Population:10834
​ Country Name:Switzerland | Region:Europe | SubRegion:Western Europe | Population:8654622
​ Country Name:Portugal | Region:Europe | SubRegion:Southern Europe | Population:10305564
​ Country Name:Tajikistan | Region:Asia | SubRegion:Central Asia | Population:9537642
​ Country Name:South Sudan | Region:Africa | SubRegion:Middle Africa | Population:11193729
​ Country Name:Bouvet Island | Region:Antarctic | SubRegion:undefined | Population:0
​ Country Name:Micronesia | Region:Oceania | SubRegion:Micronesia | Population:115021
​ Country Name:American Samoa | Region:Oceania | SubRegion:Polynesia | Population:55197
​ Country Name:Czechia | Region:Europe | SubRegion:Central Europe | Population:10698896
​ Country Name:Botswana | Region:Africa | SubRegion:Southern Africa | Population:2351625
​ Country Name:Tunisia | Region:Africa | SubRegion:Northern Africa | Population:11818618
​ Country Name:Anguilla | Region:Americas | SubRegion:Caribbean | Population:13452
​ Country Name:Guinea-Bissau | Region:Africa | SubRegion:Western Africa | Population:1967998
​ Country Name:Slovakia | Region:Europe | SubRegion:Central Europe | Population:5458827
​ Country Name:Marshall Islands | Region:Oceania | SubRegion:Micronesia | Population:59194
​ Country Name:Algeria | Region:Africa | SubRegion:Northern Africa | Population:44700000
​ Country Name:Jamaica | Region:Americas | SubRegion:Caribbean | Population:2961161
​ Country Name:Mozambique | Region:Africa | SubRegion:Eastern Africa | Population:31255435
​ Country Name:Spain | Region:Europe | SubRegion:Southern Europe | Population:47351567
​ Country Name:Honduras | Region:Americas | SubRegion:Central America | Population:9904608
​ Country Name:Netherlands | Region:Europe | SubRegion:Western Europe | Population:16655799
​ Country Name:South Africa | Region:Africa | SubRegion:Southern Africa | Population:59308690
​ Country Name:Azerbaijan | Region:Asia | SubRegion:Western Asia | Population:10110116
​ Country Name:North Macedonia | Region:Europe | SubRegion:Southeast Europe | Population:2077132
​ Country Name:Gambia | Region:Africa | SubRegion:Western Africa | Population:2416664
​ Country Name:Liberia | Region:Africa | SubRegion:Western Africa | Population:5057677
​ Country Name:Luxembourg | Region:Europe | SubRegion:Western Europe | Population:632275
​ Country Name:Cape Verde | Region:Africa | SubRegion:Western Africa | Population:555988
​ Country Name:Bahamas | Region:Americas | SubRegion:Caribbean | Population:393248
​ Country Name:Georgia | Region:Asia | SubRegion:Western Asia | Population:3714000
​ Country Name:Kiribati | Region:Oceania | SubRegion:Micronesia | Population:119446
​ Country Name:Tanzania | Region:Africa | SubRegion:Eastern Africa | Population:59734213
​ Country Name:China | Region:Asia | SubRegion:Eastern Asia | Population:1402112000
​ Country Name:Guatemala | Region:Americas | SubRegion:Central America | Population:16858333
​ Country Name:São Tomé and Príncipe | Region:Africa | SubRegion:Middle Africa | Population:219161
​ Country Name:Germany | Region:Europe | SubRegion:Western Europe | Population:83240525
​ Country Name:Sierra Leone | Region:Africa | SubRegion:Western Africa | Population:7976985
​ Country Name:Chad | Region:Africa | SubRegion:Middle Africa | Population:16425859
​ Country Name:United Kingdom | Region:Europe | SubRegion:Northern Europe | Population:67215293
​ Country Name:Slovenia | Region:Europe | SubRegion:Central Europe | Population:2100126
​ Country Name:Thailand | Region:Asia | SubRegion:South-Eastern Asia | Population:69799978
​ Country Name:Indonesia | Region:Asia | SubRegion:South-Eastern Asia | Population:273523621
​ Country Name:Northern Mariana Islands | Region:Oceania | SubRegion:Micronesia | Population:57557
​ Country Name:Guam | Region:Oceania | SubRegion:Micronesia | Population:168783
​ Country Name:Finland | Region:Europe | SubRegion:Northern Europe | Population:5530719
​ Country Name:Mayotte | Region:Africa | SubRegion:Eastern Africa | Population:226915
​ Country Name:Gibraltar | Region:Europe | SubRegion:Southern Europe | Population:33691
​ Country Name:Turkmenistan | Region:Asia | SubRegion:Central Asia | Population:6031187
​ Country Name:Kosovo | Region:Europe | SubRegion:Southeast Europe | Population:1775378
​ Country Name:Ivory Coast | Region:Africa | SubRegion:Western Africa | Population:26378275
​ Country Name:Morocco | Region:Africa | SubRegion:Northern Africa | Population:36910558
​ Country Name:Dominican Republic | Region:Americas | SubRegion:Caribbean | Population:10847904
​ Country Name:Ghana | Region:Africa | SubRegion:Western Africa | Population:31072945
​ Country Name:Vatican City | Region:Europe | SubRegion:Southern Europe | Population:451
​ Country Name:Jersey | Region:Europe | SubRegion:Northern Europe | Population:100800
​ Country Name:Turkey | Region:Asia | SubRegion:Western Asia | Population:84339067
​ Country Name:Tuvalu | Region:Oceania | SubRegion:Polynesia | Population:11792
​ Country Name:Iran | Region:Asia | SubRegion:Southern Asia | Population:83992953
​ Country Name:Egypt | Region:Africa | SubRegion:Northern Africa | Population:102334403
​ Country Name:Denmark | Region:Europe | SubRegion:Northern Europe | Population:5831404
​ Country Name:Kenya | Region:Africa | SubRegion:Eastern Africa | Population:53771300
​ Country Name:Bulgaria | Region:Europe | SubRegion:Southeast Europe | Population:6927288
​ Country Name:Zimbabwe | Region:Africa | SubRegion:Southern Africa | Population:14862927
​ Country Name:Angola | Region:Africa | SubRegion:Middle Africa | Population:32866268
​ Country Name:Nigeria | Region:Africa | SubRegion:Western Africa | Population:206139587
​ Country Name:Poland | Region:Europe | SubRegion:Central Europe | Population:37950802
​ Country Name:Senegal | Region:Africa | SubRegion:Western Africa | Population:16743930
​ Country Name:Saint Helena, Ascension and Tristan da Cunha | Region:Africa | SubRegion:Western Africa | Population:53192
​ Country Name:Lebanon | Region:Asia | SubRegion:Western Asia | Population:6825442
​ Country Name:Samoa | Region:Oceania | SubRegion:Polynesia | Population:198410
​ Country Name:Philippines | Region:Asia | SubRegion:South-Eastern Asia | Population:109581085
​ Country Name:Guernsey | Region:Europe | SubRegion:Northern Europe | Population:62999
​ Country Name:El Salvador | Region:Americas | SubRegion:Central America | Population:6486201
​ Country Name:Kuwait | Region:Asia | SubRegion:Western Asia | Population:4270563
​ Country Name:Tonga | Region:Oceania | SubRegion:Polynesia | Population:105697
​ Country Name:Oman | Region:Asia | SubRegion:Western Asia | Population:5106622
​ Country Name:Afghanistan | Region:Asia | SubRegion:Southern Asia | Population:40218234
​ Country Name:Saint Kitts and Nevis | Region:Americas | SubRegion:Caribbean | Population:53192
​ Country Name:Central African Republic | Region:Africa | SubRegion:Middle Africa | Population:4829764
​ Country Name:Serbia | Region:Europe | SubRegion:Southeast Europe | Population:6908224
​ Country Name:Armenia | Region:Asia | SubRegion:Western Asia | Population:2963234
​ Country Name:Bangladesh | Region:Asia | SubRegion:Southern Asia | Population:164689383
​ Country Name:Laos | Region:Asia | SubRegion:South-Eastern Asia | Population:7275556
​ Country Name:Chile | Region:Americas | SubRegion:South America | Population:19116209
​ Country Name:French Polynesia | Region:Oceania | SubRegion:Polynesia | Population:280904
​ Country Name:Panama | Region:Americas | SubRegion:Central America | Population:4314768
​ Country Name:United States | Region:Americas | SubRegion:North America | Population:329484123
​ Country Name:Nepal | Region:Asia | SubRegion:Southern Asia | Population:29136808
​ Country Name:Myanmar | Region:Asia | SubRegion:South-Eastern Asia | Population:54409794
​ Country Name:Falkland Islands | Region:Americas | SubRegion:South America | Population:2563
​ Country Name:Hungary | Region:Europe | SubRegion:Central Europe | Population:9749763
​ Country Name:Palau | Region:Oceania | SubRegion:Micronesia | Population:18092
​ Country Name:Equatorial Guinea | Region:Africa | SubRegion:Middle Africa | Population:1402985
​ Country Name:Guinea | Region:Africa | SubRegion:Western Africa | Population:13132792
​ Country Name:United Arab Emirates | Region:Asia | SubRegion:Western Asia | Population:9890400
​ Country Name:Turks and Caicos Islands | Region:Americas | SubRegion:Caribbean | Population:38718
​ Country Name:British Virgin Islands | Region:Americas | SubRegion:Caribbean | Population:30237
​ Country Name:Liechtenstein | Region:Europe | SubRegion:Western Europe | Population:38137
​ Country Name:Bosnia and Herzegovina | Region:Europe | SubRegion:Southeast Europe | Population:3280815
all.script.js:23 Country Name:Malawi | Region:Africa | SubRegion:Eastern Africa | Population:19129955
all.script.js:23 Country Name:Bhutan | Region:Asia | SubRegion:Southern Asia | Population:771612
all.script.js:23 Country Name:Cameroon | Region:Africa | SubRegion:Middle Africa | Population:26545864
all.script.js:23 Country Name:Andorra | Region:Europe | SubRegion:Southern Europe | Population:77265
all.script.js:23 Country Name:Guadeloupe | Region:Americas | SubRegion:Caribbean | Population:400132
all.script.js:23 Country Name:Republic of the Congo | Region:Africa | SubRegion:Middle Africa | Population:5657000
all.script.js:23 Country Name:Réunion | Region:Africa | SubRegion:Eastern Africa | Population:840974
all.script.js:23 Country Name:Burkina Faso | Region:Africa | SubRegion:Western Africa | Population:20903278
all.script.js:23 Country Name:Jordan | Region:Asia | SubRegion:Western Asia | Population:10203140
all.script.js:23 Country Name:DR Congo | Region:Africa | SubRegion:Middle Africa | Population:108407721
all.script.js:23 Country Name:Tokelau | Region:Oceania | SubRegion:Polynesia | Population:1411
all.script.js:23 Country Name:Vietnam | Region:Asia | SubRegion:South-Eastern Asia | Population:97338583
all.script.js:23 Country Name:Sint Maarten | Region:Americas | SubRegion:Caribbean | Population:40812
all.script.js:23 Country Name:Belgium | Region:Europe | SubRegion:Western Europe | Population:11555997
all.script.js:23 Country Name:United States Minor Outlying Islands | Region:Americas | SubRegion:North America | Population:300
all.script.js:23 Country Name:Brazil | Region:Americas | SubRegion:South America | Population:212559409
all.script.js:23 Country Name:Belize | Region:Americas | SubRegion:Central America | Population:397621
all.script.js:23 Country Name:Antigua and Barbuda | Region:Americas | SubRegion:Caribbean | Population:97928
all.script.js:23 Country Name:Paraguay | Region:Americas | SubRegion:South America | Population:7132530
all.script.js:23 Country Name:Benin | Region:Africa | SubRegion:Western Africa | Population:12123198
all.script.js:23 Country Name:Brunei | Region:Asia | SubRegion:South-Eastern Asia | Population:437483
all.script.js:23 Country Name:Bolivia | Region:Americas | SubRegion:South America | Population:11673029
all.script.js:23 Country Name:Djibouti | Region:Africa | SubRegion:Eastern Africa | Population:988002
all.script.js:23 Country Name:French Guiana | Region:Americas | SubRegion:South America | Population:254541
all.script.js:23 Country Name:Canada | Region:Americas | SubRegion:North America | Population:38005238
all.script.js:23 Country Name:Saint Pierre and Miquelon | Region:Americas | SubRegion:North America | Population:6069
all.script.js:23 Country Name:Japan | Region:Asia | SubRegion:Eastern Asia | Population:125836021
all.script.js:23 Country Name:Rwanda | Region:Africa | SubRegion:Eastern Africa | Population:12952209
all.script.js:23 Country Name:Saint Vincent and the Grenadines | Region:Americas | SubRegion:Caribbean | Population:110947
all.script.js:23 Country Name:Iceland | Region:Europe | SubRegion:Northern Europe | Population:366425
all.script.js:23 Country Name:Belarus | Region:Europe | SubRegion:Eastern Europe | Population:9398861
all.script.js:23 Country Name:Hong Kong | Region:Asia | SubRegion:Eastern Asia | Population:7500700
all.script.js:23 Country Name:Lesotho | Region:Africa | SubRegion:Southern Africa | Population:2142252
all.script.js:23 Country Name:Fiji | Region:Oceania | SubRegion:Melanesia | Population:896444
all.script.js:23 Country Name:Austria | Region:Europe | SubRegion:Central Europe | Population:8917205
all.script.js:23 Country Name:Colombia | Region:Americas | SubRegion:South America | Population:50882884
all.script.js:23 Country Name:Gabon | Region:Africa | SubRegion:Middle Africa | Population:2225728
all.script.js:23 Country Name:Saudi Arabia | Region:Asia | SubRegion:Western Asia | Population:34813867
all.script.js:23 Country Name:South Georgia | Region:Antarctic | SubRegion:undefined | Population:30
all.script.js:23 Country Name:Ethiopia | Region:Africa | SubRegion:Eastern Africa | Population:114963583
all.script.js:23 Country Name:Caribbean Netherlands | Region:Americas | SubRegion:Caribbean | Population:25987
all.script.js:23 Country Name:Monaco | Region:Europe | SubRegion:Western Europe | Population:39244
all.script.js:23 Country Name:North Korea | Region:Asia | SubRegion:Eastern Asia | Population:25778815
all.script.js:23 Country Name:Italy | Region:Europe | SubRegion:Southern Europe | Population:59554023
all.script.js:23 Country Name:Namibia | Region:Africa | SubRegion:Southern Africa | Population:2540916
all.script.js:23 Country Name:Mongolia | Region:Asia | SubRegion:Eastern Asia | Population:3278292
all.script.js:23 Country Name:Solomon Islands | Region:Oceania | SubRegion:Melanesia | Population:686878
all.script.js:23 Country Name:Yemen | Region:Asia | SubRegion:Western Asia | Population:29825968
all.script.js:23 Country Name:Romania | Region:Europe | SubRegion:Southeast Europe | Population:19286123
all.script.js:23 Country Name:Svalbard and Jan Mayen | Region:Europe | SubRegion:Northern Europe | Population:2562
all.script.js:23 Country Name:France | Region:Europe | SubRegion:Western Europe | Population:67391582
*/
