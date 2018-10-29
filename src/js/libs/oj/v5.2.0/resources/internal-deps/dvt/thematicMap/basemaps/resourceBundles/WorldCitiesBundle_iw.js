/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var l = {
    "USA_SEATTLE": [null, "\u05E1\u05D9\u05D0\u05D8\u05DC"],
    "MRT_NOUAKCHOTT": [null, "\u05E0\u05D5\u05D0\u05E7\u05E9\u05D5\u05D8"],
    "TJK_DUSHANBE": [null, "\u05D3\u05D5\u05E9\u05E0\u05D1\u05D4"],
    "GBR_MANCHESTER": [null, "\u05DE\u05E0\u05E6'\u05E1\u05D8\u05E8"],
    "RUS_UFA": [null, "\u05D0\u05D5\u05E4\u05D4"],
    "ITA_NAPLES": [null, "\u05E0\u05D0\u05E4\u05D5\u05DC\u05D9"],
    "SWE_STOCKHOLM": [null, "\u05E9\u05D8\u05D5\u05E7\u05D4\u05D5\u05DC\u05DD"],
    "DNK_COPENHAGEN": [null, "\u05E7\u05D5\u05E4\u05E0\u05D4\u05D2\u05DF"],
    "CHL_SANTIAGO": [null, "\u05E1\u05E0\u05D8\u05D9\u05D0\u05D2\u05D5"],
    "MAR_RABAT": [null, "\u05E8\u05D1\u05D0\u05D8"],
    "RUS_MOSCOW": [null, "\u05DE\u05D5\u05E1\u05E7\u05D1\u05D4"],
    "PAK_KARACHI": [null, "\u05E7\u05E8\u05D0\u05E6'\u05D9"],
    "SOM_MOGADISHU": [null, "\u05DE\u05D5\u05D2\u05D3\u05D9\u05E9\u05D5"],
    "JPN_TOKYO": [null, "\u05D8\u05D5\u05E7\u05D9\u05D5"],
    "IND_AHMEDABAD": [null, "\u05D0\u05D7\u05DE\u05D3\u05D0\u05D1\u05D0\u05D3"],
    "BOL_SUCRE": [null, "\u05E1\u05D5\u05DB\u05E8\u05D4"],
    "RUS_ROSTOV_ON_DON": [null, "\u05E8\u05D5\u05E1\u05D8\u05D5\u05D1 \u05E2\u05DC \u05D4\u05D3\u05D5\u05DF"],
    "ALB_TIRANA": [null, "\u05D8\u05D9\u05E8\u05E0\u05D4"],
    "ARG_BUENOS_AIRES": [null, "\u05D1\u05D5\u05D0\u05E0\u05D5\u05E1 \u05D0\u05D9\u05D9\u05E8\u05E1"],
    "UZB_TASHKENT": [null, "\u05D8\u05E9\u05E7\u05E0\u05D8"],
    "CAN_TORONTO": [null, "\u05D8\u05D5\u05E8\u05D5\u05E0\u05D8\u05D5"],
    "BHR_MANAMA": [null, "\u05DE\u05D0\u05E0\u05DE\u05D4"],
    "BRA_RECIFE": [null, "\u05E8\u05E1\u05D9\u05E4\u05D4"],
    "BRA_SALVADOR": [null, "\u05E1\u05DC\u05D1\u05D3\u05D5\u05E8"],
    "BRA_SAO_PAULO": [null, "\u05E1\u05D0\u05D5 \u05E4\u05D0\u05D5\u05DC\u05D5"],
    "BRA_CURITIBA": [null, "\u05E7\u05D5\u05E8\u05D9\u05D8\u05D9\u05D1\u05D4"],
    "USA_NEW_YORK": [null, "\u05E0\u05D9\u05D5 \u05D9\u05D5\u05E8\u05E7"],
    "COL_MEDELLIN": [null, "\u05DE\u05D3\u05D9\u05D9\u05DF"],
    "YEM_SANA_A": [null, "\u05E6\u05E0\u05E2\u05D0"],
    "COG_BRAZZAVILLE": [null, "\u05D1\u05E8\u05D6\u05D5\u05D5\u05D9\u05DC"],
    "LBR_MONROVIA": [null, "\u05DE\u05D5\u05E0\u05E8\u05D5\u05D1\u05D9\u05D4"],
    "USA_HOUSTON": [null, "\u05D9\u05D5\u05E1\u05D8\u05D5\u05DF"],
    "GHA_ACCRA": [null, "\u05D0\u05E7\u05E8\u05D4"],
    "TCD_N_DJAMENA": [null, "\u05E0\u05D2'\u05DE\u05E0\u05D4"],
    "TUN_TUNIS": [null, "\u05D8\u05D5\u05E0\u05D9\u05E1"],
    "ARM_YEREVAN": [null, "\u05D9\u05E8\u05D5\u05D5\u05D0\u05DF"],
    "MCO_MONACO": [null, "\u05DE\u05D5\u05E0\u05E7\u05D5"],
    "LIE_VADUZ": [null, "\u05D5\u05D0\u05D3\u05D5\u05D6"],
    "FRA_PARIS": [null, "\u05E4\u05E8\u05D9\u05D6"],
    "NAM_WINDHOEK": [null, "\u05D5\u05D9\u05E0\u05D3\u05D4\u05D5\u05E7"],
    "NCL_NOUMEA": [null, "\u05E0\u05D5\u05DE\u05D9\u05D0\u05D4"],
    "NGA_LAGOS": [null, "\u05DC\u05D0\u05D2\u05D5\u05E1"],
    "IRQ_BAGHDAD": [null, "\u05D1\u05D2\u05D3\u05D3"],
    "PRK_PYONGYANG": [null, "\u05E4\u05D9\u05D5\u05E0\u05D2\u05D9\u05D0\u05E0\u05D2"],
    "AUT_VIENNA": [null, "\u05D5\u05D9\u05E0\u05D4"],
    "ZWE_HARARE": [null, "\u05D4\u05E8\u05D0\u05E8\u05D4"],
    "BGR_SOFIA": [null, "\u05E1\u05D5\u05E4\u05D9\u05D4"],
    "RUS_SAINT_PETERSBURG": [null, "\u05E1\u05E0\u05D8 \u05E4\u05D8\u05E8\u05E1\u05D1\u05D5\u05E8\u05D2"],
    "SEN_DAKAR": [null, "\u05D3\u05E7\u05E8"],
    "MLT_VALLETTA": [null, "\u05D5\u05DC\u05D8\u05D4"],
    "GNB_BISSAU": [null, "\u05D1\u05D9\u05E1\u05D0\u05D5"],
    "FLK_STANLEY": [null, "\u05E1\u05D8\u05E0\u05DC\u05D9"],
    "CRI_SAN_JOSE": [null, "\u05E1\u05DF \u05D7\u05D5\u05D6\u05D4"],
    "SLE_FREETOWN": [null, "\u05E4\u05E8\u05D9\u05D8\u05D0\u05D5\u05DF"],
    "BIH_SARAJEVO": [null, "\u05E1\u05E8\u05D0\u05D9\u05D9\u05D1\u05D5"],
    "PER_LIMA": [null, "\u05DC\u05D9\u05DE\u05D4"],
    "MKD_SKOPJE": [null, "\u05E1\u05E7\u05D5\u05E4\u05D9\u05D9\u05D4"],
    "THA_BANGKOK": [null, "\u05D1\u05E0\u05D2\u05E7\u05D5\u05E7"],
    "BEL_BRUSSELS": [null, "\u05D1\u05E8\u05D9\u05E1\u05DC"],
    "CMR_YAOUNDE": [null, "\u05D9\u05D0\u05D5\u05E0\u05D3\u05D4"],
    "NLD_ROTTERDAM": [null, "\u05E8\u05D5\u05D8\u05E8\u05D3\u05DD"],
    "USA_PHOENIX": [null, "\u05E4\u05E0\u05D9\u05E7\u05E1"],
    "IND_NEW_DELHI": [null, "\u05E0\u05D9\u05D5-\u05D3\u05DC\u05D4\u05D9"],
    "NGA_PORT_HARCOURT": [null, "\u05E4\u05D5\u05E8\u05D8 \u05D4\u05E8\u05E7\u05D5\u05E8\u05D8"],
    "NGA_KADUNA": [null, "\u05E7\u05D3\u05D5\u05E0\u05D4"],
    "TUR_ANKARA": [null, "\u05D0\u05E0\u05E7\u05E8\u05D4"],
    "CHN_SHENZHEN": [null, "\u05E9\u05E0\u05D2'\u05DF"],
    "AGO_LUANDA": [null, "\u05DC\u05D5\u05D0\u05E0\u05D3\u05D4"],
    "ANT_WILLEMSTAD": [null, "\u05D5\u05D9\u05DC\u05DE\u05E1\u05D8\u05D0\u05D3"],
    "PRI_SAN_JUAN": [null, "\u05E1\u05DF \u05D7\u05D5\u05D0\u05DF"],
    "IND_CHENNAI": [null, "\u05E6'\u05E0\u05D0\u05D9"],
    "USA_BALTIMORE": [null, "\u05D1\u05DC\u05D8\u05D9\u05DE\u05D5\u05E8"],
    "BGD_DHAKA": [null, "\u05D3\u05E7\u05D4"],
    "DEU_COLOGNE": [null, "\u05E7\u05D5\u05DC\u05D5\u05DF"],
    "ECU_QUITO": [null, "\u05E7\u05D5\u05D5\u05D9\u05D8\u05D5"],
    "KOR_SEOUL": [null, "\u05E1\u05D9\u05D0\u05D5\u05DC"],
    "FJI_SUVA": [null, "\u05E1\u05D5\u05D1\u05D4"],
    "BOL_LA_PAZ": [null, "\u05DC\u05D4 \u05E4\u05D6"],
    "ESP_BARCELONA": [null, "\u05D1\u05E8\u05E6\u05DC\u05D5\u05E0\u05D4"],
    "VEN_MARACAIBO": [null, "\u05DE\u05D0\u05E8\u05E7\u05D0\u05D9\u05D1\u05D5"],
    "GEO_TBILISI": [null, "\u05D8\u05D9\u05D1\u05D9\u05DC\u05D9\u05E1\u05D9"],
    "SLB_HONIARA": [null, "\u05D4\u05D5\u05E0\u05D9\u05D0\u05E8\u05D4"],
    "OMN_MUSCAT": [null, "\u05DE\u05D5\u05E1\u05E7\u05D8"],
    "TLS_DILI": [null, "\u05D3\u05D9\u05DC\u05D9"],
    "IND_BANGALORE": [null, "\u05D1\u05E0\u05D2\u05DC\u05D5\u05E8"],
    "FRA_LYON": [null, "\u05DC\u05D9\u05D5\u05DF"],
    "RUS_NIZHNIY_NOVGOROD": [null, "\u05E0\u05D9\u05D6'\u05E0\u05D9 \u05E0\u05D5\u05D1\u05D2\u05E8\u05D5\u05D3"],
    "AFG_KABUL": [null, "\u05E7\u05D0\u05D1\u05D5\u05DC"],
    "ABW_ORANJESTAD": [null, "\u05D0\u05D5\u05E8\u05E0\u05D2'\u05E1\u05D8\u05D0\u05D3"],
    "CAF_BANGUI": [null, "\u05D1\u05E0\u05D2\u05D5\u05D0\u05D9"],
    "ISL_REYKJAVIK": [null, "\u05E8\u05D9\u05D9\u05E7\u05D9\u05D0\u05D5\u05D5\u05D9\u05E7"],
    "AUS_CANBERRA": [null, "\u05E7\u05E0\u05D1\u05E8\u05D4"],
    "ZAF_PRETORIA": [null, "\u05E4\u05E8\u05D8\u05D5\u05E8\u05D9\u05D4"],
    "DZA_ALGIERS": [null, "\u05D0\u05DC\u05D2'\u05D9\u05E8"],
    "BWA_GABORONE": [null, "\u05D2\u05D0\u05D1\u05D5\u05E8\u05D5\u05DF"],
    "ISR_JERUSALEM": [null, "\u05D9\u05E8\u05D5\u05E9\u05DC\u05D9\u05DD"],
    "USA_LOS_ANGELES": [null, "\u05DC\u05D5\u05E1 \u05D0\u05E0\u05D2'\u05DC\u05E1"],
    "NZL_WELLINGTON": [null, "\u05D5\u05D5\u05DC\u05D9\u05E0\u05D2\u05D8\u05D5\u05DF"],
    "GRC_ATHENS": [null, "\u05D0\u05EA\u05D5\u05E0\u05D4"],
    "CAN_MONTREAL": [null, "\u05DE\u05D5\u05E0\u05D8\u05E8\u05D9\u05D0\u05D5\u05DC"],
    "MYS_KUALA_LUMPUR": [null, "\u05E7\u05D5\u05D0\u05DC\u05D4 \u05DC\u05D5\u05DE\u05E4\u05D5\u05E8"],
    "CHE_BERNE": [null, "\u05D1\u05E8\u05DF"],
    "KWT_KUWAIT_CITY": [null, "\u05DB\u05D5\u05D5\u05D9\u05EA \u05E1\u05D9\u05D8\u05D9"],
    "RUS_KAZAN": [null, "\u05E7\u05D0\u05D6\u05D0\u05DF"],
    "MDA_CHISINAU": [null, "\u05E7\u05D9\u05E9\u05D9\u05E0\u05D1"],
    "URY_MONTEVIDEO": [null, "\u05DE\u05D5\u05E0\u05D8\u05D1\u05D9\u05D3\u05D0\u05D5"],
    "PHL_MANILA": [null, "\u05DE\u05E0\u05D9\u05DC\u05D4"],
    "POL_WARSAW": [null, "\u05D5\u05E8\u05E9\u05D4"],
    "QAT_AL_DOHA": [null, "\u05D3\u05D5\u05D7\u05D4"],
    "CYP_NICOSIA": [null, "\u05E0\u05D9\u05E7\u05D5\u05E1\u05D9\u05D4"],
    "MAR_CASABLANCA": [null, "\u05E7\u05D6\u05D1\u05DC\u05E0\u05E7\u05D4"],
    "LBN_BEIRUT": [null, "\u05D1\u05D9\u05D9\u05E8\u05D5\u05EA"],
    "YEM_ADEN": [null, "\u05E2\u05D3\u05DF"],
    "TZA_DAR_ES_SALAAM": [null, "\u05D3\u05D0\u05E8 \u05D0-\u05E1\u05DC\u05D0\u05DD"],
    "SMR_SAN_MARINO": [null, "\u05E1\u05DF \u05DE\u05E8\u05D9\u05E0\u05D5"],
    "USA_DETROIT": [null, "\u05D3\u05D8\u05E8\u05D5\u05D9\u05D8"],
    "LVA_RIGA": [null, "\u05E8\u05D9\u05D2\u05D4"],
    "SGP_SINGAPORE": [null, "\u05E1\u05D9\u05E0\u05D2\u05E4\u05D5\u05E8"],
    "TZA_DODOMA": [null, "\u05D3\u05D5\u05D3\u05D5\u05DE\u05D4"],
    "BLR_MINSK": [null, "\u05DE\u05D9\u05E0\u05E1\u05E7"],
    "CMR_DOUALA": [null, "\u05D3\u05D5\u05D0\u05DC\u05D4"],
    "DEU_MUNICH": [null, "\u05DE\u05D9\u05E0\u05DB\u05DF"],
    "IND_DELHI": [null, "\u05D3\u05DC\u05D4\u05D9"],
    "JAM_KINGSTON": [null, "\u05E7\u05D9\u05E0\u05D2\u05E1\u05D8\u05D5\u05DF"],
    "UKR_KIEV": [null, "\u05E7\u05D9\u05D9\u05D1"],
    "CAN_OTTAWA": [null, "\u05D0\u05D5\u05D8\u05D5\u05D5\u05D4"],
    "GHA_KUMASI": [null, "\u05E7\u05D5\u05DE\u05E1\u05D9"],
    "BRA_PORTO_ALEGRE": [null, "\u05E4\u05D5\u05E8\u05D8\u05D5 \u05D0\u05DC\u05D2\u05E8\u05D4"],
    "CHN_GUANGZHOU": [null, "\u05D2\u05D5\u05D0\u05E0\u05D2\u05D2'\u05D5\u05D0\u05D5"],
    "USA_DENVER": [null, "\u05D3\u05E0\u05D5\u05D5\u05E8"],
    "NGA_ZARIA": [null, "\u05D6\u05E8\u05D9\u05D4"],
    "GAB_LIBREVILLE": [null, "\u05DC\u05D9\u05D1\u05E8\u05D5\u05D5\u05D9\u05DC"],
    "CHN_SHENYANG": [null, "\u05E9\u05DF-\u05D9\u05D0\u05E0\u05D2"],
    "ETH_ADDIS_ABABA": [null, "\u05D0\u05D3\u05D9\u05E1 \u05D0\u05D1\u05D1\u05D4"],
    "NER_NIAMEY": [null, "\u05E0\u05D9\u05D0\u05DE\u05D9"],
    "JPN_NAGOYA": [null, "\u05E0\u05D2\u05D5\u05D9\u05D4"],
    "ITA_MILAN": [null, "\u05DE\u05D9\u05DC\u05E0\u05D5"],
    "MEX_PUEBLA": [null, "\u05E4\u05D5\u05D0\u05D1\u05DC\u05D4"],
    "SVK_BRATISLAVA": [null, "\u05D1\u05E8\u05D8\u05D9\u05E1\u05DC\u05D1\u05D4"],
    "FIN_HELSINKI": [null, "\u05D4\u05DC\u05E1\u05D9\u05E0\u05E7\u05D9"],
    "MDG_ANTANANARIVO": [null, "\u05D0\u05E0\u05D8\u05E0\u05E0\u05E8\u05D9\u05D1\u05D5"],
    "USA_MIAMI": [null, "\u05DE\u05D9\u05D0\u05DE\u05D9"],
    "BRA_BRASILIA": [null, "\u05D1\u05E8\u05D6\u05D9\u05DC\u05D9\u05D4"],
    "IMN_DOUGLAS": [null, "\u05D3\u05D0\u05D2\u05DC\u05E1"],
    "MOZ_MAPUTO": [null, "\u05DE\u05D0\u05E4\u05D5\u05D8\u05D5"],
    "SYR_DAMASCUS": [null, "\u05D3\u05DE\u05E9\u05E7"],
    "GRL_NUUK": [null, "\u05E0\u05D0\u05D5\u05E7"],
    "UKR_KHARKIV": [null, "\u05D7\u05E8\u05E7\u05D9\u05D1"],
    "MNG_ULAN_BATOR": [null, "\u05D0\u05D5\u05DC\u05DF \u05D1\u05D8\u05D5\u05E8"],
    "VEN_CARACAS": [null, "\u05E7\u05E8\u05E7\u05D0\u05E1"],
    "SLV_SAN_SALVADOR": [null, "\u05E1\u05D0\u05DF \u05E1\u05DC\u05D5\u05D5\u05D3\u05D5\u05E8"],
    "CUB_HAVANA": [null, "\u05D4\u05D5\u05D5\u05D0\u05E0\u05D4"],
    "ZAF_CAPE_TOWN": [null, "\u05E7\u05D9\u05D9\u05E4\u05D8\u05D0\u05D5\u05DF"],
    "LTU_VILNIUS": [null, "\u05D5\u05D9\u05DC\u05E0\u05D4"],
    "AZE_BAKU": [null, "\u05D1\u05D0\u05E7\u05D5"],
    "HUN_BUDAPEST": [null, "\u05D1\u05D5\u05D3\u05E4\u05E9\u05D8"],
    "DEU_HAMBURG": [null, "\u05D4\u05DE\u05D1\u05D5\u05E8\u05D2"],
    "LSO_MASERU": [null, "\u05DE\u05E1\u05E8\u05D5"],
    "LKA_SRI_JAYAWARDENAPURA_KOTTE": [null, "\u05E1\u05E8\u05D9 \u05D2'\u05D9\u05D9\u05D5\u05D5\u05E8\u05D3\u05E0\u05E4\u05D5\u05E8\u05D4-\u05E7\u05D5\u05D8\u05D4"],
    "GGY_ST__PETER_PORT": [null, "\u05E1\u05E0\u05D8 \u05E4\u05D9\u05D8\u05E8 \u05E4\u05D5\u05E8\u05D8"],
    "SVN_LJUBLJANA": [null, "\u05DC\u05D5\u05D1\u05DC\u05D9\u05D0\u05E0\u05D4"],
    "CHE_ZURICH": [null, "\u05E6\u05D9\u05E8\u05D9\u05DA"],
    "EGY_CAIRO": [null, "\u05E7\u05D4\u05D9\u05E8"],
    "FRA_MARSEILLE": [null, "\u05DE\u05E8\u05E1\u05D9\u05D9"],
    "VAT_VATICAN_CITY": [null, "\u05E2\u05D9\u05E8 \u05D4\u05D5\u05D5\u05EA\u05D9\u05E7\u05D0\u05DF"],
    "ZAF_PORT_ELIZABETH": [null, "\u05E4\u05D5\u05E8\u05D8 \u05D0\u05DC\u05D9\u05D6\u05D1\u05EA"],
    "GBR_LONDON": [null, "\u05DC\u05D5\u05E0\u05D3\u05D5\u05DF"],
    "GUY_GEORGETOWN": [null, "\u05D2'\u05D5\u05E8\u05D2'\u05D8\u05D0\u05D5\u05DF"],
    "IND_HYDERABAD": [null, "\u05D4\u05D9\u05D3\u05E8\u05D0\u05D1\u05D0\u05D3"],
    "GBR_SAINT_HELIER": [null, "\u05E1\u05E0\u05D8 \u05D4\u05DC\u05D9\u05D4"],
    "HTI_PORT_AU_PRINCE": [null, "\u05E4\u05D5\u05E8\u05D8-\u05D0\u05D5-\u05E4\u05E8\u05E0\u05E1"],
    "JPN_OSAKA": [null, "\u05D0\u05D5\u05E1\u05E7\u05D4"],
    "COD_KINSHASA": [null, "\u05E7\u05D9\u05E0\u05E9\u05D0\u05E1\u05D4"],
    "BEN_PORTO_NOVO": [null, "\u05E4\u05D5\u05E8\u05D8\u05D5 \u05E0\u05D5\u05D1\u05D5"],
    "CHN_TIANJIN": [null, "\u05D8\u05D9\u05D9\u05E0\u05D2'\u05D9\u05DF"],
    "ZAF_JOHANNESBURG_EKURHULENI": [null, "\u05D9\u05D5\u05D4\u05E0\u05E1\u05D1\u05D5\u05E8\u05D2-\u05D0\u05E7\u05D5\u05E8\u05D4\u05D5\u05DC\u05E0\u05D9"],
    "EGY_ALEXANDRIA": [null, "\u05D0\u05DC\u05DB\u05E1\u05E0\u05D3\u05E8\u05D9\u05D9\u05D4"],
    "COL_BOGOTA": [null, "\u05D1\u05D5\u05D2\u05D5\u05D8\u05D4"],
    "KEN_NAIROBI": [null, "\u05E0\u05D9\u05D9\u05E8\u05D5\u05D1\u05D9"],
    "DOM_SANTO_DOMINGO": [null, "\u05E1\u05E0\u05D8\u05D5 \u05D3\u05D5\u05DE\u05D9\u05E0\u05D2\u05D5"],
    "EST_TALLINN": [null, "\u05D8\u05D0\u05DC\u05D9\u05DF"],
    "USA_BOSTON": [null, "\u05D1\u05D5\u05E1\u05D8\u05D5\u05DF"],
    "AND_ANDORRA_LA_VELLA": [null, "\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4 \u05DC\u05D4 \u05D5\u05D9\u05D9\u05D4"],
    "CZE_PRAGUE": [null, "\u05E4\u05E8\u05D0\u05D2"],
    "GTM_GUATEMALA_CITY": [null, "\u05D2\u05D5\u05D0\u05D8\u05DE\u05DC\u05D4 \u05E1\u05D9\u05D8\u05D9"],
    "MLI_BAMAKO": [null, "\u05D1\u05D0\u05DE\u05D0\u05E7\u05D5"],
    "BRA_FORTALEZA": [null, "\u05E4\u05D5\u05E8\u05D8\u05DC\u05D6\u05D4"],
    "USA_RIVERSIDE_SAN_BERNARDINO": [null, "\u05E8\u05D9\u05D1\u05E8\u05E1\u05D9\u05D9\u05D3-\u05E1\u05DF \u05D1\u05E8\u05E0\u05E8\u05D3\u05D9\u05E0\u05D5"],
    "HRV_ZAGREB": [null, "\u05D6\u05D2\u05E8\u05D1"],
    "LAO_VIENTIANE": [null, "\u05D5\u05D5\u05D9\u05E0\u05D8\u05D9\u05D0\u05DF"],
    "NGA_KANO": [null, "\u05E7\u05E0\u05D5"],
    "ITA_TURIN": [null, "\u05D8\u05D5\u05E8\u05D9\u05E0\u05D5"],
    "MNE_PODGORICA": [null, "\u05E4\u05D5\u05D3\u05D2\u05D5\u05E8\u05D9\u05E6\u05D4"],
    "LBY_BANGHAZI": [null, "\u05D1\u05E0\u05D2\u05D0\u05D6\u05D9"],
    "IDN_JAKARTA": [null, "\u05D2'\u05E7\u05E8\u05D8\u05D4"],
    "CHN_CHONGQING": [null, "\u05E6'\u05D5\u05E0\u05D2\u05E7\u05D9\u05E0\u05D2"],
    "GUF_CAYENNE": [null, "\u05E7\u05D0\u05D9\u05D9\u05DF"],
    "TUR_ISTANBUL": [null, "\u05D0\u05D9\u05E1\u05D8\u05E0\u05D1\u05D5\u05DC"],
    "GBR_WEST_YORKSHIRE": [null, "\u05D9\u05D5\u05E8\u05E7\u05E9\u05D9\u05D9\u05E8 \u05DE\u05E2\u05E8\u05D1"],
    "IRL_DUBLIN": [null, "\u05D3\u05D1\u05DC\u05D9\u05DF"],
    "GIN_CONAKRY": [null, "\u05E7\u05D5\u05E0\u05D0\u05E7\u05E8\u05D9"],
    "ZAF_VEREENIGING": [null, "\u05E4\u05E8\u05D9\u05E0\u05D9\u05D2\u05D9\u05E0\u05D2"],
    "BFA_OUAGADOUGOU": [null, "\u05D5\u05D5\u05D0\u05D2\u05D0\u05D3\u05D5\u05D2\u05D5"],
    "KGZ_BISHKEK": [null, "\u05D1\u05D9\u05E9\u05E7\u05E7"],
    "USA_PITTSBURGH": [null, "\u05E4\u05D9\u05D8\u05E1\u05D1\u05D5\u05E8\u05D2"],
    "SUR_PARAMARIBO": [null, "\u05E4\u05E8\u05DE\u05E8\u05D9\u05D1\u05D5"],
    "NGA_MAIDUGURI": [null, "\u05DE\u05D9\u05D9\u05D3\u05D5\u05D2\u05D5\u05E8\u05D9"],
    "USA_PHILADELPHIA": [null, "\u05E4\u05D9\u05DC\u05D3\u05DC\u05E4\u05D9\u05D4"],
    "ZMB_LUSAKA": [null, "\u05DC\u05D5\u05E1\u05D0\u05E7\u05D4"],
    "TGO_LOME": [null, "\u05DC\u05D5\u05DD"],
    "USA_SAN_FRANCISCO": [null, "\u05E1\u05DF \u05E4\u05E8\u05E0\u05E1\u05D9\u05E1\u05E7\u05D5"],
    "ECU_GUAYAQUIL": [null, "\u05D2\u05D5\u05D0\u05D9\u05D0\u05E7\u05D9\u05DC"],
    "BEN_COTONOU": [null, "\u05E7\u05D5\u05D8\u05D5\u05E0\u05D5"],
    "NPL_KATHMANDU": [null, "\u05E7\u05D8\u05DE\u05E0\u05D3\u05D5"],
    "USA_CHICAGO": [null, "\u05E9\u05D9\u05E7\u05D2\u05D5"],
    "USA_TAMPA": [null, "\u05D8\u05DE\u05E4\u05D4"],
    "ROC_TAIPEI": [null, "\u05D8\u05D0\u05D9\u05E4\u05D4"],
    "ARE_ABU_DHABI": [null, "\u05D0\u05D1\u05D5-\u05D3\u05D0\u05D1\u05D9"],
    "JOR_AMMAN": [null, "\u05E8\u05D1\u05EA \u05E2\u05DE\u05D5\u05DF"],
    "ERI_ASMARA": [null, "\u05D0\u05E1\u05DE\u05E8\u05D4"],
    "MMR_NAYPYIDAW": [null, "\u05E0\u05D9\u05D9\u05E4\u05D9\u05D3\u05D0\u05D5"],
    "NGA_ABUJA": [null, "\u05D0\u05D1\u05D5\u05D2'\u05D4"],
    "TTO_PORT_OF_SPAIN": [null, "\u05E4\u05D5\u05E8\u05D8 \u05D0\u05D5\u05E3 \u05E1\u05E4\u05D9\u05D9\u05DF"],
    "CHN_SHANGHAI": [null, "\u05E9\u05E0\u05D7\u05D0\u05D9"],
    "GNQ_MALABO": [null, "\u05DE\u05DC\u05D0\u05D1\u05D5"],
    "DZA_ORAN": [null, "\u05D0\u05D5\u05E8\u05D0\u05DF"],
    "ITA_ROME": [null, "\u05E8\u05D5\u05DE\u05D0"],
    "BDI_BUJUMBURA": [null, "\u05D1\u05D5\u05D2'\u05D5\u05DE\u05D1\u05D5\u05E8\u05D4"],
    "BRA_RIO_DE_JANEIRO": [null, "\u05E8\u05D9\u05D5 \u05D3\u05D4 \u05D6'\u05E0\u05E8\u05D5"],
    "PRT_LISBON": [null, "\u05DC\u05D9\u05E1\u05D1\u05D5\u05DF"],
    "PRT_PORTO": [null, "\u05E4\u05D5\u05E8\u05D8\u05D5"],
    "NIC_MANAGUA": [null, "\u05DE\u05E0\u05D0\u05D2\u05D5\u05D0\u05D4"],
    "MEX_MONTERREY": [null, "\u05DE\u05D5\u05E0\u05D8\u05E8\u05D9\u05D9"],
    "RWA_KIGALI": [null, "\u05E7\u05D9\u05D2\u05D0\u05DC\u05D9"],
    "USA_ATLANTA": [null, "\u05D0\u05D8\u05DC\u05E0\u05D8\u05D4"],
    "ZAF_DURBAN": [null, "\u05D3\u05E8\u05D1\u05DF"],
    "NOR_OSLO": [null, "\u05D0\u05D5\u05E1\u05DC\u05D5"],
    "USA_ST__LOUIS": [null, "\u05E1\u05E0\u05D8 \u05DC\u05D5\u05D0\u05D9\u05E1"],
    "PRY_ASUNCION": [null, "\u05D0\u05E1\u05D5\u05E0\u05E1\u05D9\u05D5\u05DF"],
    "USA_WASHINGTON": [null, "\u05D5\u05D5\u05E9\u05D9\u05E0\u05D2\u05D8\u05D5\u05DF"],
    "IND_KOLKATA": [null, "\u05E7\u05D5\u05DC\u05E7\u05D8\u05D4"],
    "SAU_RIYADH": [null, "\u05E8\u05D9\u05D0\u05D3"],
    "CHN_BEIJING": [null, "\u05D1\u05D9\u05D9\u05D2'\u05D9\u05DF"],
    "USA_SAN_DIEGO": [null, "\u05E1\u05DF \u05D3\u05D9\u05D0\u05D2\u05D5"],
    "LUX_LUXEMBOURG": [null, "\u05DC\u05D5\u05E7\u05E1\u05DE\u05D1\u05D5\u05E8\u05D2"],
    "RUS_SAMARA": [null, "\u05E1\u05DE\u05D0\u05E8\u05D4"],
    "PNG_PORT_MORESBY": [null, "\u05E4\u05D5\u05E8\u05D8 \u05DE\u05D5\u05E8\u05E1\u05D1\u05D9"],
    "BTN_THIMPHU": [null, "\u05EA'\u05D9\u05DE\u05E4\u05D5"],
    "KAZ_ASTANA": [null, "\u05D0\u05E1\u05D8\u05E0\u05D4"],
    "BRA_CAMPINAS": [null, "\u05E7\u05DE\u05E4\u05D9\u05E0\u05E1"],
    "GBR_GLASGOW": [null, "\u05D2\u05DC\u05D6\u05D2\u05D5"],
    "NLD_AMSTERDAM": [null, "\u05D0\u05DE\u05E1\u05D8\u05E8\u05D3\u05DD"],
    "MEX_MEXICO_CITY": [null, "\u05DE\u05E7\u05E1\u05D9\u05E7\u05D5 \u05E1\u05D9\u05D8\u05D9"],
    "HND_TEGUCIGALPA": [null, "\u05D8\u05D2\u05D5\u05E1\u05D9\u05D2\u05DC\u05E4\u05D4"],
    "IRN_TEHRAN": [null, "\u05D8\u05D4\u05E8\u05DF"],
    "CHN_WUHAN": [null, "\u05D5\u05D5\u05D4\u05DF"],
    "BRN_BANDAR_SERI_BEGAWAN": [null, "\u05D1\u05E0\u05D3\u05D0\u05E8 \u05E1\u05E8\u05D9 \u05D1\u05D2\u05D0\u05D5\u05D5\u05D0\u05DF"],
    "TKM_ASHGABAT": [null, "\u05D0\u05E9\u05E7\u05D0\u05D1\u05D3"],
    "CIV_YAMOUSSOUKRO": [null, "\u05D9\u05D0\u05DE\u05D5\u05E1\u05D5\u05E7\u05E8\u05D5"],
    "ESP_MADRID": [null, "\u05DE\u05D3\u05E8\u05D9\u05D3"],
    "UKR_DNIPROPETROVSK": [null, "\u05D3\u05E0\u05D9\u05E4\u05E8\u05D5\u05E4\u05D8\u05E8\u05D5\u05D1\u05E1\u05E7"],
    "HKG_HONG_KONG": [null, "\u05D4\u05D5\u05E0\u05D2 \u05E7\u05D5\u05E0\u05D2"],
    "COL_CALI": [null, "\u05E7\u05D0\u05DC\u05D9"],
    "SRB_BELGRADE": [null, "\u05D1\u05DC\u05D2\u05E8\u05D3"],
    "IND_MUMBAI": [null, "\u05DE\u05D5\u05DE\u05D1\u05D9\u05D9"],
    "MAC_MACAU": [null, "\u05DE\u05E7\u05D0\u05D5"],
    "KHM_PHNOM_PENH": [null, "\u05E4\u05E0\u05D5\u05DD \u05E4\u05DF"],
    "USA_MINNEAPOLIS": [null, "\u05DE\u05D9\u05E0\u05D0\u05E4\u05D5\u05DC\u05D9\u05E1"],
    "NGA_IBADAN": [null, "\u05D0\u05D9\u05D1\u05D0\u05D3\u05D0\u05DF"],
    "ROU_BUCHAREST": [null, "\u05D1\u05D5\u05E7\u05E8\u05E9\u05D8"],
    "SDN_KHARTOUM": [null, "\u05D7\u05E8\u05D8\u05D5\u05DD"],
    "VNM_HANOI": [null, "\u05D4\u05D0\u05E0\u05D5\u05D9"],
    "BRA_BELO_HORIZONTE": [null, "\u05D1\u05DC\u05D5 \u05D4\u05D5\u05E8\u05D9\u05D6\u05D5\u05E0\u05D8\u05D4"],
    "SDN_KHARTOUM_UMM_DURMAN": [null, "\u05D7\u05E8\u05D8\u05D5\u05DD-\u05D0\u05D5\u05DD \u05D3\u05D5\u05E8\u05DE\u05DF"],
    "PAN_PANAMA_CITY": [null, "\u05E4\u05E0\u05DE\u05D4 \u05E1\u05D9\u05D8\u05D9"],
    "UGA_KAMPALA": [null, "\u05E7\u05DE\u05E4\u05DC\u05D4"],
    "PAK_LAHORE": [null, "\u05DC\u05D0\u05D4\u05D5\u05E8"],
    "SWZ_MBABANE": [null, "\u05D0\u05DE\u05D1\u05D0\u05D1\u05D0\u05E0\u05D4"],
    "MEX_GUADALAJARA": [null, "\u05D2\u05D5\u05D5\u05D3\u05DC\u05D7\u05E8\u05D4"],
    "VNM_HO_CHI_MINH_CITY": [null, "\u05D4\u05D5 \u05E6'\u05D9 \u05DE\u05D9\u05DF \u05E1\u05D9\u05D8\u05D9"],
    "DEU_BERLIN": [null, "\u05D1\u05E8\u05DC\u05D9\u05DF"],
    "BLZ_BELMOPAN": [null, "\u05D1\u05DC\u05DE\u05D5\u05E4\u05DF"],
    "LBY_TRIPOLI": [null, "\u05D8\u05E8\u05D9\u05E4\u05D5\u05DC\u05D9"],
    "USA_DALLAS": [null, "\u05D3\u05D0\u05DC\u05D0\u05E1"],
    "GBR_BIRMINGHAM": [null, "\u05D1\u05D9\u05E8\u05DE\u05D9\u05E0\u05D2\u05D4\u05DD"],
    "PAK_ISLAMABAD": [null, "\u05D0\u05D9\u05E1\u05DC\u05D0\u05DE\u05D1\u05D0\u05D3"]
};
(this ? this : window)['DvtBaseMapManager']['_UNPROCESSED_MAPS'][2].push(["world", "cities", l]);