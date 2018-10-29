/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var l = {
    "DNK": ["DNK", "\u0414\u0430\u043D\u0438\u044F"],
    "FRO": ["FRO", "\u0424\u0430\u0440\u0435\u0440\u0441\u043A\u0438\u0435 \u043E-\u0432\u0430"],
    "POL": ["POL", "\u041F\u043E\u043B\u044C\u0448\u0430"],
    "SMR": ["SMR", "\u0421\u0430\u043D-\u041C\u0430\u0440\u0438\u043D\u043E"],
    "IRL": ["IRL", "\u0418\u0440\u043B\u0430\u043D\u0434\u0438\u044F"],
    "NLD": ["NLD", "\u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u044B"],
    "SVK": ["SVK", "\u0421\u043B\u043E\u0432\u0430\u043A\u0438\u044F"],
    "BLR": ["BLR", "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"],
    "SVN": ["SVN", "\u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F"],
    "SWE": ["SWE", "\u0428\u0432\u0435\u0446\u0438\u044F"],
    "ESP": ["ESP", "\u0418\u0441\u043F\u0430\u043D\u0438\u044F"],
    "ISL": ["ISL", "\u0418\u0441\u043B\u0430\u043D\u0434\u0438\u044F"],
    "MKD": ["MKD", "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u044F"],
    "EST": ["\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0435 \u043F\u043E\u044F\u0441\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F", "\u042D\u0441\u0442\u043E\u043D\u0438\u044F"],
    "BEL": ["BEL", "\u0411\u0435\u043B\u044C\u0433\u0438\u044F"],
    "LIE": ["LIE", "\u041B\u0438\u0445\u0442\u0435\u043D\u0448\u0442\u0435\u0439\u043D"],
    "ITA": ["ITA", "\u0418\u0442\u0430\u043B\u0438\u044F"],
    "ALB": ["ALB", "\u0410\u043B\u0431\u0430\u043D\u0438\u044F"],
    "MCO": ["MCO", "\u041C\u043E\u043D\u0430\u043A\u043E"],
    "UKR": ["UKR", "\u0423\u043A\u0440\u0430\u0438\u043D\u0430"],
    "CHE": ["CHE", "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044F"],
    "MDA": ["MDA", "\u041C\u043E\u043B\u0434\u043E\u0432\u0430"],
    "HRV": ["HRV", "\u0425\u043E\u0440\u0432\u0430\u0442\u0438\u044F"],
    "PRT": ["PRT", "\u041F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u0438\u044F"],
    "MLT": ["MLT", "\u041C\u0430\u043B\u044C\u0442\u0430"],
    "CYP": ["CYP", "\u041A\u0438\u043F\u0440"],
    "AUT": ["AUT", "\u0410\u0432\u0441\u0442\u0440\u0438\u044F"],
    "GIB": ["GIB", "\u0413\u0438\u0431\u0440\u0430\u043B\u0442\u0430\u0440"],
    "BGR": ["BGR", "\u0411\u043E\u043B\u0433\u0430\u0440\u0438\u044F"],
    "CZE": ["CZE", "\u0427\u0435\u0448\u0441\u043A\u0430\u044F \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430"],
    "NOR": ["NOR", "\u041D\u043E\u0440\u0432\u0435\u0433\u0438\u044F"],
    "AND": ["\u0418", "\u0410\u043D\u0434\u043E\u0440\u0440\u0430"],
    "GRC": ["GRC", "\u0413\u0440\u0435\u0446\u0438\u044F"],
    "ROU": ["ROU", "\u0420\u0443\u043C\u044B\u043D\u0438\u044F"],
    "MNE": ["MNE", "\u0427\u0435\u0440\u043D\u043E\u0433\u043E\u0440\u0438\u044F"],
    "LTU": ["LTU", "\u041B\u0438\u0442\u0432\u0430"],
    "GBR": ["GBR", "\u0412\u0435\u043B\u0438\u043A\u043E\u0431\u0440\u0438\u0442\u0430\u043D\u0438\u044F"],
    "BIH": ["BIH", "\u0411\u043E\u0441\u043D\u0438\u044F \u0438 \u0413\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430"],
    "HUN": ["HUN", "\u0412\u0435\u043D\u0433\u0440\u0438\u044F"],
    "FIN": ["FIN", "\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F"],
    "LUX": ["LUX", "\u041B\u044E\u043A\u0441\u0435\u043C\u0431\u0443\u0440\u0433"],
    "TUR": ["TUR", "\u0422\u0443\u0440\u0446\u0438\u044F"],
    "FRA": ["FRA", "\u0424\u0440\u0430\u043D\u0446\u0438\u044F"],
    "DEU": ["DEU", "\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044F"],
    "LVA": ["LVA", "\u041B\u0430\u0442\u0432\u0438\u044F"],
    "SCG": ["SCG", "\u0421\u0435\u0440\u0431\u0438\u044F"]
};
(this ? this : window)['DvtBaseMapManager']['_UNPROCESSED_MAPS'][2].push(["europe", "countries", l]);