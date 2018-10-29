/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var l = {
    "JPN_NAGOYA": [null, "\u540D\u53E4\u5C4B"],
    "TJK_DUSHANBE": [null, "\u30C9\u30A5\u30B7\u30E3\u30F3\u30D9"],
    "RUS_UFA": [null, "\u30A6\u30D5\u30A1"],
    "SYR_DAMASCUS": [null, "\u30C0\u30DE\u30B9\u30AB\u30B9"],
    "RUS_MOSCOW": [null, "\u30E2\u30B9\u30AF\u30EF"],
    "MNG_ULAN_BATOR": [null, "\u30A6\u30E9\u30F3\u30D0\u30FC\u30C8\u30EB"],
    "PAK_KARACHI": [null, "\u30AB\u30E9\u30C1"],
    "JPN_TOKYO": [null, "\u6771\u4EAC"],
    "IND_AHMEDABAD": [null, "\u30A2\u30FC\u30E1\u30C0\u30D0\u30FC\u30C9"],
    "RUS_ROSTOV_ON_DON": [null, "\u30ED\u30B9\u30C8\u30D5\u30FB\u30CA\u30FB\u30C9\u30CC"],
    "UZB_TASHKENT": [null, "\u30BF\u30B7\u30E5\u30B1\u30F3\u30C8"],
    "LKA_SRI_JAYAWARDENAPURA_KOTTE": [null, "\u30B9\u30EA\u30B8\u30E3\u30E4\u30EF\u30EB\u30C0\u30CA\u30D7\u30E9\u30B3\u30C3\u30C6"],
    "BHR_MANAMA": [null, "\u30DE\u30CA\u30FC\u30DE"],
    "YEM_SANA_A": [null, "\u30B5\u30CA\u30A2"],
    "IND_HYDERABAD": [null, "\u30CF\u30A4\u30C7\u30E9\u30D0\u30FC\u30C9"],
    "NCL_NOUMEA": [null, "\u30CC\u30E1\u30A2"],
    "JPN_OSAKA": [null, "\u5927\u962A"],
    "IRQ_BAGHDAD": [null, "\u30D0\u30B0\u30C0\u30C3\u30C9"],
    "CHN_TIANJIN": [null, "\u5929\u6D25"],
    "PRK_PYONGYANG": [null, "\u5E73\u58CC"],
    "RUS_SAINT_PETERSBURG": [null, "\u30B5\u30F3\u30AF\u30C8\u30DA\u30C6\u30EB\u30D6\u30EB\u30AF"],
    "THA_BANGKOK": [null, "\u30D0\u30F3\u30B3\u30AF"],
    "IND_NEW_DELHI": [null, "\u30CB\u30E5\u30FC\u30C7\u30EA\u30FC"],
    "LAO_VIENTIANE": [null, "\u30D3\u30A8\u30F3\u30C1\u30E3\u30F3"],
    "IDN_JAKARTA": [null, "\u30B8\u30E3\u30AB\u30EB\u30BF"],
    "CHN_CHONGQING": [null, "\u91CD\u6176"],
    "CHN_SHENZHEN": [null, "\u6DF1\u5DDD"],
    "KGZ_BISHKEK": [null, "\u30D3\u30B7\u30B1\u30AF"],
    "IND_CHENNAI": [null, "\u30C1\u30A7\u30F3\u30CA\u30A4"],
    "BGD_DHAKA": [null, "\u30C0\u30C3\u30AB"],
    "KOR_SEOUL": [null, "\u30BD\u30A6\u30EB"],
    "FJI_SUVA": [null, "\u30B9\u30D0"],
    "GEO_TBILISI": [null, "\u30C8\u30D3\u30EA\u30B7"],
    "SLB_HONIARA": [null, "\u30DB\u30CB\u30A2\u30E9"],
    "NPL_KATHMANDU": [null, "\u30AB\u30C8\u30DE\u30F3\u30BA"],
    "OMN_MUSCAT": [null, "\u30DE\u30B9\u30AB\u30C3\u30C8"],
    "TLS_DILI": [null, "\u30C7\u30A3\u30EA"],
    "ROC_TAIPEI": [null, "\u53F0\u5317"],
    "ARE_ABU_DHABI": [null, "\u30A2\u30D6\u30C0\u30D3"],
    "JOR_AMMAN": [null, "\u30A2\u30F3\u30DE\u30F3"],
    "MMR_NAYPYIDAW": [null, "\u30CD\u30D4\u30C9\u30FC"],
    "IND_BANGALORE": [null, "\u30D0\u30F3\u30AC\u30ED\u30FC\u30EB"],
    "RUS_NIZHNIY_NOVGOROD": [null, "\u30CB\u30FC\u30B8\u30CB\u30FC\u30CE\u30F4\u30B4\u30ED\u30C9"],
    "CHN_SHANGHAI": [null, "\u4E0A\u6D77"],
    "AFG_KABUL": [null, "\u30AB\u30D6\u30FC\u30EB"],
    "ISR_JERUSALEM": [null, "\u30A8\u30EB\u30B5\u30EC\u30E0"],
    "IND_KOLKATA": [null, "\u30B3\u30EB\u30AB\u30BF"],
    "SAU_RIYADH": [null, "\u30EA\u30E4\u30C9"],
    "CHN_BEIJING": [null, "\u5317\u4EAC"],
    "RUS_SAMARA": [null, "\u30B5\u30DE\u30E9"],
    "MYS_KUALA_LUMPUR": [null, "\u30AF\u30A2\u30E9\u30EB\u30F3\u30D7\u30FC\u30EB"],
    "PNG_PORT_MORESBY": [null, "\u30DD\u30FC\u30C8\u30E2\u30EC\u30B9\u30D3\u30FC"],
    "BTN_THIMPHU": [null, "\u30C6\u30A3\u30F3\u30D7\u30FC"],
    "KAZ_ASTANA": [null, "\u30A2\u30B9\u30BF\u30CA"],
    "IRN_TEHRAN": [null, "\u30C6\u30D8\u30E9\u30F3"],
    "KWT_KUWAIT_CITY": [null, "\u30AF\u30A6\u30A7\u30FC\u30C8\u5E02"],
    "CHN_WUHAN": [null, "\u6B66\u6F22"],
    "BRN_BANDAR_SERI_BEGAWAN": [null, "\u30D0\u30F3\u30C0\u30FC\u30EB\u30B9\u30EA\u30D6\u30AC\u30EF\u30F3"],
    "TKM_ASHGABAT": [null, "\u30A2\u30B7\u30AC\u30D0\u30FC\u30C8"],
    "RUS_KAZAN": [null, "\u30AB\u30B6\u30F3"],
    "PHL_MANILA": [null, "\u30DE\u30CB\u30E9"],
    "QAT_AL_DOHA": [null, "\u30A2\u30EB\u30FB\u30C9\u30FC\u30CF"],
    "HKG_HONG_KONG": [null, "\u9999\u6E2F"],
    "LBN_BEIRUT": [null, "\u30D9\u30A4\u30EB\u30FC\u30C8"],
    "YEM_ADEN": [null, "\u30A2\u30C7\u30F3"],
    "IND_MUMBAI": [null, "\u30E0\u30F3\u30D0\u30A4"],
    "SGP_SINGAPORE": [null, "\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB"],
    "MAC_MACAU": [null, "\u30DE\u30AB\u30AA"],
    "KHM_PHNOM_PENH": [null, "\u30D7\u30CE\u30F3\u30DA\u30F3"],
    "IND_DELHI": [null, "\u30C7\u30EA\u30FC"],
    "VNM_HANOI": [null, "\u30CF\u30CE\u30A4"],
    "PAK_LAHORE": [null, "\u30E9\u30DB\u30FC\u30EB"],
    "VNM_HO_CHI_MINH_CITY": [null, "\u30DB\u30FC\u30C1\u30DF\u30F3\u5E02"],
    "CHN_GUANGZHOU": [null, "\u5E83\u5DDE"],
    "CHN_SHENYANG": [null, "\u700B\u967D"],
    "PAK_ISLAMABAD": [null, "\u30A4\u30B9\u30E9\u30DE\u30D0\u30FC\u30C9"]
};
(this ? this : window)['DvtBaseMapManager']['_UNPROCESSED_MAPS'][2].push(["asia", "cities", l]);