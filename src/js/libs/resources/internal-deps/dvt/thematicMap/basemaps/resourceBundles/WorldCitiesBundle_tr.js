/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var l = {
    "TJK_DUSHANBE": [null, "Du\u015Fanbe"],
    "ITA_NAPLES": [null, "Napoli"],
    "SWE_STOCKHOLM": [null, "Stokholm"],
    "DNK_COPENHAGEN": [null, "Kopenhag"],
    "RUS_MOSCOW": [null, "Moskova"],
    "PAK_KARACHI": [null, "Kara\u00E7i"],
    "SOM_MOGADISHU": [null, "Mogadi\u015Fu"],
    "RUS_ROSTOV_ON_DON": [null, "Rostov-na-Donu"],
    "ALB_TIRANA": [null, "Tiran"],
    "UZB_TASHKENT": [null, "Ta\u015Fkent"],
    "COL_MEDELLIN": [null, "Medelin"],
    "YEM_SANA_A": [null, "Sana"],
    "GHA_ACCRA": [null, "Akra"],
    "TCD_N_DJAMENA": [null, "N'Camena"],
    "TUN_TUNIS": [null, "Tunus"],
    "ARM_YEREVAN": [null, "Erivan"],
    "MCO_MONACO": [null, "Monako"],
    "IRQ_BAGHDAD": [null, "Ba\u011Fdat"],
    "AUT_VIENNA": [null, "Viyana"],
    "BGR_SOFIA": [null, "Sofya"],
    "BIH_SARAJEVO": [null, "Saraybosna"],
    "MKD_SKOPJE": [null, "\u00DCsk\u00FCp"],
    "BEL_BRUSSELS": [null, "Br\u00FCksel"],
    "CMR_YAOUNDE": [null, "Yaunde"],
    "NLD_ROTTERDAM": [null, "Roterdam"],
    "IND_NEW_DELHI": [null, "Yeni Delhi"],
    "BGD_DHAKA": [null, "Dakka"],
    "DEU_COLOGNE": [null, "K\u00F6ln"],
    "KOR_SEOUL": [null, "Seul"],
    "ESP_BARCELONA": [null, "Barselona"],
    "GEO_TBILISI": [null, "Tiflis"],
    "OMN_MUSCAT": [null, "Maskat"],
    "RUS_NIZHNIY_NOVGOROD": [null, "Nizniy Novgorod"],
    "AFG_KABUL": [null, "Kabil"],
    "AUS_CANBERRA": [null, "Kanberra"],
    "DZA_ALGIERS": [null, "Cezayir"],
    "ISR_JERUSALEM": [null, "Kud\u00FCs"],
    "GRC_ATHENS": [null, "Atina"],
    "CHE_BERNE": [null, "Bern"],
    "KWT_KUWAIT_CITY": [null, "Kuveyt \u015Eehri"],
    "POL_WARSAW": [null, "Var\u015Fova"],
    "QAT_AL_DOHA": [null, "Doha"],
    "CYP_NICOSIA": [null, "Lefko\u015Fa"],
    "MAR_CASABLANCA": [null, "Kazablanka"],
    "LBN_BEIRUT": [null, "Beyrut"],
    "TZA_DAR_ES_SALAAM": [null, "Dar\u00FCsselam"],
    "SGP_SINGAPORE": [null, "Singapur"],
    "DEU_MUNICH": [null, "M\u00FCnih"],
    "ITA_MILAN": [null, "Milano"],
    "SYR_DAMASCUS": [null, "\u015Eam"],
    "UKR_KHARKIV": [null, "Harkiv"],
    "MNG_ULAN_BATOR": [null, "Ulanbator"],
    "VEN_CARACAS": [null, "Karakas"],
    "LTU_VILNIUS": [null, "Viln\u00FCs"],
    "AZE_BAKU": [null, "Bak\u00FC"],
    "HUN_BUDAPEST": [null, "Budape\u015Fte"],
    "SVN_LJUBLJANA": [null, "Lyublyana"],
    "CHE_ZURICH": [null, "Z\u00FCrih"],
    "EGY_CAIRO": [null, "Kahire"],
    "FRA_MARSEILLE": [null, "Marsilya"],
    "VAT_VATICAN_CITY": [null, "Vatikan \u015Eehri"],
    "GBR_LONDON": [null, "Londra"],
    "IND_HYDERABAD": [null, "Haydarabad"],
    "EGY_ALEXANDRIA": [null, "\u0130skenderiye"],
    "EST_TALLINN": [null, "Talin"],
    "CZE_PRAGUE": [null, "Prag"],
    "GTM_GUATEMALA_CITY": [null, "Guatemala \u015Eehri"],
    "ITA_TURIN": [null, "Torino"],
    "LBY_BANGHAZI": [null, "Bingazi"],
    "IDN_JAKARTA": [null, "Cakarta"],
    "TUR_ISTANBUL": [null, "\u0130stanbul"],
    "BFA_OUAGADOUGOU": [null, "Uagadugu"],
    "KGZ_BISHKEK": [null, "Bi\u015Fkek"],
    "NPL_KATHMANDU": [null, "Katmandu"],
    "USA_CHICAGO": [null, "\u015Eikago"],
    "ARE_ABU_DHABI": [null, "Abu Dabi"],
    "CHN_SHANGHAI": [null, "\u015Eangay"],
    "ITA_ROME": [null, "Roma"],
    "PRT_LISBON": [null, "Lizbon"],
    "IND_KOLKATA": [null, "Kalk\u00FCta"],
    "SAU_RIYADH": [null, "Riyad"],
    "LUX_LUXEMBOURG": [null, "L\u00FCksemburg"],
    "MEX_MEXICO_CITY": [null, "Meksiko \u015Eehri"],
    "IRN_TEHRAN": [null, "Tahran"],
    "TKM_ASHGABAT": [null, "A\u015Fkabat"],
    "SRB_BELGRADE": [null, "Belgrad"],
    "MAC_MACAU": [null, "Makau"],
    "NGA_IBADAN": [null, "\u0130badan"],
    "ROU_BUCHAREST": [null, "B\u00FCkre\u015F"],
    "SDN_KHARTOUM": [null, "Hartum"],
    "SDN_KHARTOUM_UMM_DURMAN": [null, "Hartum-Omdurman"],
    "PAN_PANAMA_CITY": [null, "Panama \u015Eehri"],
    "PAK_LAHORE": [null, "Lahor"],
    "VNM_HO_CHI_MINH_CITY": [null, "Ho \u015Ei Minh \u015Eehri"],
    "LBY_TRIPOLI": [null, "Trablus"],
    "PAK_ISLAMABAD": [null, "\u0130slamabad"]
};
(this ? this : window)['DvtBaseMapManager']['_UNPROCESSED_MAPS'][2].push(["world", "cities", l]);