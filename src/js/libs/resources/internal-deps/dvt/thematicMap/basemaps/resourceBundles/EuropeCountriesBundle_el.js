/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var l = {
    "DNK": ["DNK", "\u0394\u03B1\u03BD\u03AF\u03B1"],
    "FRO": ["FRO", "\u039D\u03AE\u03C3\u03BF\u03B9 \u03A6\u03B5\u03C1\u03CC\u03B5\u03C2"],
    "POL": ["POL", "\u03A0\u03BF\u03BB\u03C9\u03BD\u03AF\u03B1"],
    "SMR": ["SMR", "\u0386\u03B3\u03B9\u03BF\u03C2 \u039C\u03B1\u03C1\u03AF\u03BD\u03BF\u03C2"],
    "IRL": ["IRL", "\u0399\u03C1\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1"],
    "NLD": ["NLD", "\u039F\u03BB\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1"],
    "SVK": ["SVK", "\u03A3\u03BB\u03BF\u03B2\u03B1\u03BA\u03AF\u03B1"],
    "BLR": ["BLR", "\u039B\u03B5\u03C5\u03BA\u03BF\u03C1\u03C9\u03C3\u03AF\u03B1"],
    "SVN": ["SVN", "\u03A3\u03BB\u03BF\u03B2\u03B5\u03BD\u03AF\u03B1"],
    "SWE": ["SWE", "\u03A3\u03BF\u03C5\u03B7\u03B4\u03AF\u03B1"],
    "ESP": ["ESP", "\u0399\u03C3\u03C0\u03B1\u03BD\u03AF\u03B1"],
    "ISL": ["ISL", "\u0399\u03C3\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1"],
    "MKD": ["MKD", "\u03A0\u03C1\u03CE\u03B7\u03BD \u0393\u03B9\u03BF\u03C5\u03B3\u03BA\u03BF\u03C3\u03BB\u03B1\u03B2\u03B9\u03BA\u03AE \u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1 \u03C4\u03B7\u03C2 \u039C\u03B1\u03BA\u03B5\u03B4\u03BF\u03BD\u03AF\u03B1\u03C2"],
    "EST": ["EST", "\u0395\u03C3\u03B8\u03BF\u03BD\u03AF\u03B1"],
    "BEL": ["BEL", "\u0392\u03AD\u03BB\u03B3\u03B9\u03BF"],
    "LIE": ["LIE", "\u039B\u03AF\u03C7\u03C4\u03B5\u03BD\u03C3\u03C4\u03B1\u03CA\u03BD"],
    "ITA": ["ITA", "\u0399\u03C4\u03B1\u03BB\u03AF\u03B1"],
    "ALB": ["ALB", "\u0391\u03BB\u03B2\u03B1\u03BD\u03AF\u03B1"],
    "MCO": ["MCO", "\u039C\u03BF\u03BD\u03B1\u03BA\u03CC"],
    "UKR": ["UKR", "\u039F\u03C5\u03BA\u03C1\u03B1\u03BD\u03AF\u03B1"],
    "CHE": ["CHE", "\u0395\u03BB\u03B2\u03B5\u03C4\u03AF\u03B1"],
    "MDA": ["MDA", "\u039C\u03BF\u03BB\u03B4\u03B1\u03B2\u03AF\u03B1"],
    "HRV": ["HRV", "\u039A\u03C1\u03BF\u03B1\u03C4\u03AF\u03B1"],
    "PRT": ["PRT", "\u03A0\u03BF\u03C1\u03C4\u03BF\u03B3\u03B1\u03BB\u03AF\u03B1"],
    "MLT": ["MLT", "\u039C\u03AC\u03BB\u03C4\u03B1"],
    "CYP": ["CYP", "\u039A\u03CD\u03C0\u03C1\u03BF\u03C2"],
    "AUT": ["AUT", "\u0391\u03C5\u03C3\u03C4\u03C1\u03AF\u03B1"],
    "GIB": ["GIB", "\u0393\u03B9\u03B2\u03C1\u03B1\u03BB\u03C4\u03AC\u03C1"],
    "BGR": ["BGR", "\u0392\u03BF\u03C5\u03BB\u03B3\u03B1\u03C1\u03AF\u03B1"],
    "CZE": ["CZE", "\u0394\u03B7\u03BC\u03BF\u03BA\u03C1\u03B1\u03C4\u03AF\u03B1 \u03C4\u03B7\u03C2 \u03A4\u03C3\u03B5\u03C7\u03AF\u03B1\u03C2"],
    "NOR": ["NOR", "\u039D\u03BF\u03C1\u03B2\u03B7\u03B3\u03AF\u03B1"],
    "AND": ["AND", "\u0391\u03BD\u03B4\u03CC\u03C1\u03B1"],
    "GRC": ["GRC", "\u0395\u03BB\u03BB\u03AC\u03B4\u03B1"],
    "ROU": ["ROU", "\u03A1\u03BF\u03C5\u03BC\u03B1\u03BD\u03AF\u03B1"],
    "MNE": ["MNE", "\u039C\u03B1\u03C5\u03C1\u03BF\u03B2\u03BF\u03CD\u03BD\u03B9\u03BF"],
    "LTU": ["LTU", "\u039B\u03B9\u03B8\u03BF\u03C5\u03B1\u03BD\u03AF\u03B1"],
    "GBR": ["GBR", "\u0397\u03BD\u03C9\u03BC\u03AD\u03BD\u03BF \u0392\u03B1\u03C3\u03AF\u03BB\u03B5\u03B9\u03BF"],
    "BIH": ["BIH", "\u0392\u03BF\u03C3\u03BD\u03AF\u03B1 \u0395\u03C1\u03B6\u03B5\u03B3\u03BF\u03B2\u03AF\u03BD\u03B7"],
    "HUN": ["HUN", "\u039F\u03C5\u03B3\u03B3\u03B1\u03C1\u03AF\u03B1"],
    "FIN": ["FIN", "\u03A6\u03B9\u03BD\u03BB\u03B1\u03BD\u03B4\u03AF\u03B1"],
    "LUX": ["LUX", "\u039B\u03BF\u03C5\u03BE\u03B5\u03BC\u03B2\u03BF\u03CD\u03C1\u03B3\u03BF"],
    "TUR": ["TUR", "\u03A4\u03BF\u03C5\u03C1\u03BA\u03AF\u03B1"],
    "FRA": ["FRA", "\u0393\u03B1\u03BB\u03BB\u03AF\u03B1"],
    "DEU": ["DEU", "\u0393\u03B5\u03C1\u03BC\u03B1\u03BD\u03AF\u03B1"],
    "LVA": ["LVA", "\u039B\u03B5\u03C4\u03BF\u03BD\u03AF\u03B1"],
    "SCG": ["SCG", "\u03A3\u03B5\u03C1\u03B2\u03AF\u03B1"]
};
(this ? this : window)['DvtBaseMapManager']['_UNPROCESSED_MAPS'][2].push(["europe", "countries", l]);