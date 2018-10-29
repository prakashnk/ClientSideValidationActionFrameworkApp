/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var l = {
    "GTM": ["GTM", "\u0413\u0432\u0430\u0442\u0435\u043C\u0430\u043B\u0430"],
    "PRI": ["PRI", "\u041F\u0443\u044D\u0440\u0442\u043E-\u0420\u0438\u043A\u043E"],
    "GLP": ["GLP", "\u0413\u0432\u0430\u0434\u0435\u043B\u0443\u043F\u0430"],
    "MTQ": ["MTQ", "\u041C\u0430\u0440\u0442\u0438\u043D\u0438\u043A\u0430"],
    "CUB": ["CUB", "\u041A\u0443\u0431\u0430"],
    "SPM": ["SPM", "\u0421\u0435\u043D-\u041F\u044C\u0435\u0440 \u0438 \u041C\u0438\u043A\u0435\u043B\u043E\u043D"],
    "CYM": ["CYM", "\u041A\u0430\u0439\u043C\u0430\u043D\u043E\u0432\u044B \u043E-\u0432\u0430"],
    "AIA": ["AIA", "\u0410\u043D\u0433\u0438\u043B\u044C\u044F"],
    "SLV": ["SLV", "\u042D\u043B\u044C-\u0421\u0430\u043B\u044C\u0432\u0430\u0434\u043E\u0440"],
    "DOM": ["DOM", "\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430"],
    "LCA": ["LCA", "\u0421\u0435\u043D\u0442-\u041B\u044E\u0441\u0438\u044F"],
    "VGB": ["VGB", "\u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 (\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F)"],
    "CAN": ["CAN", "\u041A\u0430\u043D\u0430\u0434\u0430"],
    "TCA": ["TCA", "\u0422\u0435\u0440\u043A\u0441 \u0438 \u041A\u0430\u0439\u043A\u043E\u0441 (\u043E-\u0432\u0430)"],
    "GRD": ["GRD", "\u0413\u0440\u0435\u043D\u0430\u0434\u0430"],
    "CRI": ["CRI", "\u041A\u043E\u0441\u0442\u0430-\u0420\u0438\u043A\u0430"],
    "HTI": ["HTI", "\u0413\u0430\u0438\u0442\u0438"],
    "KNA": ["KNA", "\u0421\u0435\u043D\u0442-\u041A\u0438\u0442\u0441 \u0438 \u041D\u0435\u0432\u0438\u0441"],
    "MEX": ["MEX", "\u041C\u0435\u043A\u0441\u0438\u043A\u0430"],
    "VCT": ["VCT", "\u0421\u0435\u043D\u0442-\u0412\u0438\u043D\u0441\u0435\u043D\u0442 \u0438 \u0413\u0440\u0435\u043D\u0430\u0434\u0438\u043D\u044B"],
    "BHS": ["BHS", "\u0411\u0430\u0433\u0430\u043C\u044B"],
    "BLZ": ["BLZ", "\u0411\u0435\u043B\u0438\u0437"],
    "ABW": ["ABW", "\u0410\u0440\u0443\u0431\u0430"],
    "DMA": ["DMA", "\u0414\u043E\u043C\u0438\u043D\u0438\u043A\u0430"],
    "USA": ["USA", "\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0435 \u0428\u0442\u0430\u0442\u044B \u0410\u043C\u0435\u0440\u0438\u043A\u0438"],
    "NIC": ["NIC", "\u041D\u0438\u043A\u0430\u0440\u0430\u0433\u0443\u0430"],
    "BMU": ["BMU", "\u0411\u0435\u0440\u043C\u0443\u0434\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430"],
    "MSR": ["MSR", "\u041C\u043E\u043D\u0441\u0435\u0440\u0440\u0430\u0442"],
    "BRB": ["BRB", "\u0411\u0430\u0440\u0431\u0430\u0434\u043E\u0441"],
    "ATG": ["ATG", "\u0410\u043D\u0442\u0438\u0433\u0443\u0430 \u0438 \u0411\u0430\u0440\u0431\u0443\u0434\u0430"],
    "JAM": ["JAM", "\u042F\u043C\u0430\u0439\u043A\u0430"],
    "PAN": ["PAN", "\u041F\u0430\u043D\u0430\u043C\u0430"],
    "VIR": ["VIR", "\u0412\u0438\u0440\u0433\u0438\u043D\u0441\u043A\u0438\u0435 \u043E\u0441\u0442\u0440\u043E\u0432\u0430 (\u0421\u0428\u0410)"],
    "HND": ["HND", "\u0413\u043E\u043D\u0434\u0443\u0440\u0430\u0441"]
};
(this ? this : window)['DvtBaseMapManager']['_UNPROCESSED_MAPS'][2].push(["northAmerica", "countries", l]);