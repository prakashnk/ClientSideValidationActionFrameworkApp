/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var l = {
    "GIN_CONAKRY": [null, "\u039A\u03BF\u03BD\u03AC\u03BA\u03C1\u03B9"],
    "AGO_LUANDA": [null, "\u039B\u03BF\u03C5\u03AC\u03BD\u03C4\u03B1"],
    "ZAF_VEREENIGING": [null, "\u0392\u03B5\u03C1\u03AF\u03BD\u03B9\u03B3\u03BA\u03B9\u03B3\u03BA"],
    "BFA_OUAGADOUGOU": [null, "\u039F\u03C5\u03B1\u03B3\u03BA\u03B1\u03BD\u03C4\u03BF\u03C5\u03B3\u03BA\u03BF\u03CD"],
    "MRT_NOUAKCHOTT": [null, "\u039D\u03BF\u03C5\u03B1\u03BA\u03CC\u03C4"],
    "MDG_ANTANANARIVO": [null, "\u0391\u03BD\u03C4\u03B1\u03BD\u03B1\u03BD\u03B1\u03C1\u03AF\u03B2\u03BF"],
    "NGA_MAIDUGURI": [null, "\u039C\u03B1\u03CA\u03BD\u03C4\u03BF\u03C5\u03B3\u03BA\u03BF\u03CD\u03C1\u03B9"],
    "ZMB_LUSAKA": [null, "\u039B\u03BF\u03C5\u03C3\u03AC\u03BA\u03B1"],
    "TGO_LOME": [null, "\u039B\u03BF\u03BC\u03AD"],
    "MOZ_MAPUTO": [null, "\u039C\u03B1\u03C0\u03BF\u03CD\u03C4\u03BF"],
    "BEN_COTONOU": [null, "\u039A\u03BF\u03C4\u03BF\u03BD\u03BF\u03CD"],
    "MAR_RABAT": [null, "\u03A1\u03B1\u03BC\u03C0\u03AC\u03C4"],
    "SOM_MOGADISHU": [null, "\u039C\u03BF\u03B3\u03BA\u03B1\u03BD\u03C4\u03AF\u03C3\u03BF\u03C5"],
    "ZAF_CAPE_TOWN": [null, "\u039A\u03AD\u03B9\u03C0 \u03A4\u03AC\u03BF\u03C5\u03BD"],
    "ERI_ASMARA": [null, "\u0391\u03C3\u03BC\u03AC\u03C1\u03B1"],
    "NGA_ABUJA": [null, "\u0391\u03BC\u03C0\u03BF\u03CD\u03C4\u03B6\u03B1"],
    "LSO_MASERU": [null, "\u039C\u03B1\u03C3\u03AD\u03C1\u03BF\u03C5"],
    "DZA_ORAN": [null, "\u039F\u03C1\u03AC\u03BD"],
    "GNQ_MALABO": [null, "\u039C\u03B1\u03BB\u03AC\u03BC\u03C0\u03BF"],
    "CAF_BANGUI": [null, "\u039C\u03C0\u03B1\u03BD\u03B3\u03BA\u03BF\u03CD\u03B9"],
    "ZAF_PRETORIA": [null, "\u03A0\u03C1\u03B5\u03C4\u03CC\u03C1\u03B9\u03B1"],
    "DZA_ALGIERS": [null, "\u0391\u03BB\u03B3\u03AD\u03C1\u03B9"],
    "BDI_BUJUMBURA": [null, "\u039C\u03C0\u03BF\u03C5\u03C4\u03B6\u03BF\u03CD\u03BC\u03C0\u03BF\u03C5\u03C1\u03B1"],
    "BWA_GABORONE": [null, "\u0393\u03BA\u03B1\u03BC\u03C0\u03BF\u03C1\u03CC\u03BD\u03B5"],
    "EGY_CAIRO": [null, "\u039A\u03AC\u03B9\u03C1\u03BF"],
    "RWA_KIGALI": [null, "\u039A\u03B9\u03B3\u03BA\u03AC\u03BB\u03B9"],
    "ZAF_DURBAN": [null, "\u039D\u03C4\u03BF\u03C5\u03C1\u03BC\u03C0\u03AC\u03BD"],
    "COG_BRAZZAVILLE": [null, "\u039C\u03C0\u03C1\u03B1\u03B6\u03B1\u03B2\u03AF\u03BB"],
    "LBR_MONROVIA": [null, "\u039C\u03BF\u03BD\u03C1\u03BF\u03B2\u03AF\u03B1"],
    "ZAF_PORT_ELIZABETH": [null, "\u03A0\u03BF\u03C1\u03C4 \u0395\u03BB\u03AF\u03B6\u03B1\u03BC\u03C0\u03B5\u03B8"],
    "GHA_ACCRA": [null, "\u0386\u03BA\u03BA\u03C1\u03B1"],
    "TUN_TUNIS": [null, "\u03A4\u03C5\u03BD\u03B7\u03C3\u03AF\u03B1"],
    "TCD_N_DJAMENA": [null, "\u03A4\u03B6\u03B1\u03BC\u03AD\u03BD\u03B1"],
    "NAM_WINDHOEK": [null, "\u0392\u03AF\u03BD\u03C4\u03C7\u03BF\u03C5\u03BA"],
    "CIV_YAMOUSSOUKRO": [null, "\u0393\u03B9\u03B1\u03BC\u03BF\u03C5\u03C3\u03BF\u03CD\u03BA\u03C1\u03BF"],
    "NGA_LAGOS": [null, "\u039B\u03AC\u03B3\u03BF\u03C2"],
    "COD_KINSHASA": [null, "\u039A\u03B9\u03BD\u03C3\u03AC\u03C3\u03B1"],
    "BEN_PORTO_NOVO": [null, "\u03A0\u03CC\u03C1\u03C4\u03BF \u039D\u03CC\u03B2\u03BF"],
    "ZAF_JOHANNESBURG_EKURHULENI": [null, "\u0393\u03B9\u03BF\u03C7\u03AC\u03BD\u03B5\u03C3\u03BC\u03C0\u03BF\u03C5\u03C1\u03B3\u03BA-\u0395\u03BA\u03BF\u03C5\u03C1\u03C7\u03BF\u03C5\u03BB\u03AD\u03BD\u03B9"],
    "EGY_ALEXANDRIA": [null, "\u0391\u03BB\u03B5\u03BE\u03AC\u03BD\u03B4\u03C1\u03B9\u03B1"],
    "ZWE_HARARE": [null, "\u03A7\u03B1\u03C1\u03AC\u03C1\u03B5"],
    "SEN_DAKAR": [null, "\u039D\u03C4\u03B1\u03BA\u03AC\u03C1"],
    "MAR_CASABLANCA": [null, "\u039A\u03B1\u03B6\u03B1\u03BC\u03C0\u03BB\u03AC\u03BD\u03BA\u03B1"],
    "GNB_BISSAU": [null, "\u039C\u03C0\u03B9\u03C3\u03AC\u03BF\u03C5"],
    "KEN_NAIROBI": [null, "\u039D\u03B1\u03CA\u03C1\u03CC\u03BC\u03C0\u03B9"],
    "SLE_FREETOWN": [null, "\u03A6\u03C1\u03B9\u03C4\u03AC\u03BF\u03C5\u03BD"],
    "TZA_DAR_ES_SALAAM": [null, "\u039D\u03C4\u03B1\u03C1 \u0395\u03C2 \u03A3\u03B1\u03BB\u03AC\u03BC"],
    "TZA_DODOMA": [null, "\u039D\u03C4\u03BF\u03BD\u03C4\u03CC\u03BC\u03B1"],
    "MLI_BAMAKO": [null, "\u039C\u03C0\u03B1\u03BC\u03AC\u03BA\u03BF"],
    "CMR_YAOUNDE": [null, "\u0393\u03B9\u03B1\u03BF\u03C5\u03BD\u03C4\u03AD"],
    "NGA_IBADAN": [null, "\u0399\u03BC\u03C0\u03B1\u03BD\u03C4\u03AC\u03BD"],
    "CMR_DOUALA": [null, "\u039D\u03C4\u03BF\u03C5\u03AC\u03BB\u03B1"],
    "SDN_KHARTOUM": [null, "\u03A7\u03B1\u03C1\u03C4\u03BF\u03CD\u03BC"],
    "NGA_KANO": [null, "\u039A\u03B1\u03BD\u03CC"],
    "SDN_KHARTOUM_UMM_DURMAN": [null, "\u03A7\u03B1\u03C1\u03C4\u03BF\u03CD\u03BC-\u039F\u03BC\u03BD\u03C4\u03BF\u03C5\u03C1\u03BC\u03AC\u03BD"],
    "UGA_KAMPALA": [null, "\u039A\u03B1\u03BC\u03C0\u03AC\u03BB\u03B1"],
    "NGA_PORT_HARCOURT": [null, "\u03A0\u03BF\u03C1\u03C4 \u03A7\u03B1\u03C1\u03BA\u03BF\u03CD\u03C1\u03C4"],
    "GHA_KUMASI": [null, "\u039A\u03BF\u03C5\u03BC\u03AC\u03C3\u03B9"],
    "SWZ_MBABANE": [null, "\u039C\u03C0\u03B1\u03BC\u03C0\u03B5\u03AF\u03BD"],
    "NGA_KADUNA": [null, "\u039A\u03B1\u03BD\u03C4\u03BF\u03CD\u03BD\u03B1"],
    "LBY_TRIPOLI": [null, "\u03A4\u03C1\u03AF\u03C0\u03BF\u03BB\u03B7"],
    "LBY_BANGHAZI": [null, "\u039C\u03C0\u03B1\u03BD\u03B3\u03BA\u03AC\u03B6\u03B9"],
    "GAB_LIBREVILLE": [null, "\u039B\u03B9\u03BC\u03C0\u03C1\u03B5\u03B2\u03AF\u03BB"],
    "NGA_ZARIA": [null, "\u0396\u03AC\u03C1\u03B9\u03B1"],
    "ETH_ADDIS_ABABA": [null, "\u0391\u03BD\u03C4\u03AF\u03C2 \u0391\u03BC\u03C0\u03AD\u03BC\u03C0\u03B1"],
    "NER_NIAMEY": [null, "\u039D\u03B9\u03B1\u03BC\u03AD\u03B9"]
};
(this ? this : window)['DvtBaseMapManager']['_UNPROCESSED_MAPS'][2].push(["africa", "cities", l]);