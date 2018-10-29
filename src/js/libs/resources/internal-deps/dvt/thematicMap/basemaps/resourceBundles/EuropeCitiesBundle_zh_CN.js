/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var l = {
    "IRL_DUBLIN": [null, "\u90FD\u67CF\u6797"],
    "GBR_WEST_YORKSHIRE": [null, "\u897F\u7EA6\u514B\u90E1"],
    "ITA_MILAN": [null, "\u7C73\u5170"],
    "GBR_MANCHESTER": [null, "\u66FC\u5F7B\u65AF\u7279"],
    "SVK_BRATISLAVA": [null, "\u5E03\u62C9\u8FEA\u65AF\u62C9\u53D1"],
    "FIN_HELSINKI": [null, "\u8D6B\u5C14\u8F9B\u57FA"],
    "IMN_DOUGLAS": [null, "\u9053\u683C\u62C9\u65AF"],
    "ITA_NAPLES": [null, "\u90A3\u4E0D\u52D2\u65AF"],
    "DEU_COLOGNE": [null, "\u79D1\u9686"],
    "SWE_STOCKHOLM": [null, "\u65AF\u5FB7\u54E5\u5C14\u6469"],
    "ESP_BARCELONA": [null, "\u5DF4\u585E\u7F57\u7EB3"],
    "GRL_NUUK": [null, "\u52AA\u514B"],
    "DNK_COPENHAGEN": [null, "\u54E5\u672C\u54C8\u6839"],
    "UKR_KHARKIV": [null, "\u54C8\u5C14\u79D1\u592B"],
    "LTU_VILNIUS": [null, "\u7EF4\u5C14\u7EBD\u65AF"],
    "ALB_TIRANA": [null, "\u5730\u62C9\u90A3"],
    "HUN_BUDAPEST": [null, "\u5E03\u8FBE\u4F69\u65AF"],
    "AZE_BAKU": [null, "\u5DF4\u5E93"],
    "DEU_HAMBURG": [null, "\u6C49\u5821"],
    "FRA_LYON": [null, "\u91CC\u6602"],
    "ISL_REYKJAVIK": [null, "\u96F7\u514B\u96C5\u672A\u514B"],
    "GGY_ST__PETER_PORT": [null, "\u5723\u5F7C\u5F97\u6E2F"],
    "ITA_ROME": [null, "\u7F57\u9A6C"],
    "SVN_LJUBLJANA": [null, "\u5362\u5E03\u5C14\u96C5\u90A3"],
    "PRT_LISBON": [null, "\u91CC\u65AF\u672C"],
    "PRT_PORTO": [null, "\u6CE2\u5C14\u56FE"],
    "CHE_ZURICH": [null, "\u82CF\u9ECE\u4E16"],
    "FRA_MARSEILLE": [null, "\u9A6C\u8D5B"],
    "VAT_VATICAN_CITY": [null, "\u68B5\u8482\u5188\u57CE"],
    "NOR_OSLO": [null, "\u5965\u65AF\u9646"],
    "GBR_LONDON": [null, "\u4F26\u6566"],
    "LUX_LUXEMBOURG": [null, "\u5362\u68EE\u5821"],
    "ARM_YEREVAN": [null, "\u57C3\u91CC\u6E29"],
    "MCO_MONACO": [null, "\u6469\u7EB3\u54E5"],
    "GBR_SAINT_HELIER": [null, "\u5723\u8D6B\u5229\u5C14"],
    "GRC_ATHENS": [null, "\u96C5\u5178"],
    "LIE_VADUZ": [null, "\u74E6\u675C\u5179"],
    "CHE_BERNE": [null, "\u4F2F\u5C14\u5C3C"],
    "GBR_GLASGOW": [null, "\u683C\u62C9\u65AF\u54E5"],
    "NLD_AMSTERDAM": [null, "\u963F\u59C6\u65AF\u7279\u4E39"],
    "FRA_PARIS": [null, "\u5DF4\u9ECE"],
    "MDA_CHISINAU": [null, "\u57FA\u5E0C\u8BB7\u4E4C"],
    "POL_WARSAW": [null, "\u534E\u6C99"],
    "ESP_MADRID": [null, "\u9A6C\u5FB7\u91CC"],
    "AUT_VIENNA": [null, "\u7EF4\u4E5F\u7EB3"],
    "BGR_SOFIA": [null, "\u7D22\u975E\u4E9A"],
    "UKR_DNIPROPETROVSK": [null, "\u7B2C\u8042\u4F2F\u7F57\u5F7C\u5F97\u7F57\u592B\u65AF\u514B"],
    "MLT_VALLETTA": [null, "\u74E6\u83B1\u5854"],
    "CYP_NICOSIA": [null, "\u5C3C\u79D1\u897F\u4E9A"],
    "EST_TALLINN": [null, "\u5854\u6797"],
    "SRB_BELGRADE": [null, "\u8D1D\u5C14\u683C\u83B1\u5FB7"],
    "SMR_SAN_MARINO": [null, "\u5723\u9A6C\u529B\u8BFA"],
    "BIH_SARAJEVO": [null, "\u8428\u62C9\u70ED\u7A9D"],
    "LVA_RIGA": [null, "\u91CC\u52A0"],
    "MKD_SKOPJE": [null, "\u65AF\u79D1\u666E\u91CC"],
    "AND_ANDORRA_LA_VELLA": [null, "\u5B89\u9053\u5C14"],
    "CZE_PRAGUE": [null, "\u5E03\u62C9\u683C"],
    "BEL_BRUSSELS": [null, "\u5E03\u9C81\u585E\u5C14"],
    "NLD_ROTTERDAM": [null, "\u9E7F\u7279\u4E39"],
    "BLR_MINSK": [null, "\u660E\u65AF\u514B"],
    "DEU_MUNICH": [null, "\u6155\u5C3C\u9ED1"],
    "ROU_BUCHAREST": [null, "\u5E03\u52A0\u52D2\u65AF\u7279"],
    "HRV_ZAGREB": [null, "\u8428\u683C\u52D2\u5E03"],
    "UKR_KIEV": [null, "\u57FA\u8F85"],
    "ITA_TURIN": [null, "\u90FD\u7075"],
    "DEU_BERLIN": [null, "\u67CF\u6797"],
    "MNE_PODGORICA": [null, "\u6CE2\u5FB7\u6208\u91CC\u5BDF"],
    "TUR_ANKARA": [null, "\u5B89\u5361\u62C9"],
    "GBR_BIRMINGHAM": [null, "\u4F2F\u660E\u7FF0"],
    "TUR_ISTANBUL": [null, "\u4F0A\u65AF\u5766\u5E03\u5C14"]
};
(this ? this : window)['DvtBaseMapManager']['_UNPROCESSED_MAPS'][2].push(["europe", "cities", l]);