/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
var l = {
    "COL_BOGOTA": [null, "Bogota"],
    "PRY_ASUNCION": [null, "Asuncion"],
    "BRA_CAMPINAS": [null, "Campinas"],
    "BRA_SAO_PAULO": [null, "Sao Paulo"],
    "BRA_BELO_HORIZONTE": [null, "Belo Horizonte"],
    "CHL_SANTIAGO": [null, "Santiago"],
    "ECU_GUAYAQUIL": [null, "Guayaquil"],
    "VEN_CARACAS": [null, "Caracas"],
    "ANT_WILLEMSTAD": [null, "Willemstad"],
    "ECU_QUITO": [null, "Quito"],
    "ARG_BUENOS_AIRES": [null, "Buenos Aires"],
    "TTO_PORT_OF_SPAIN": [null, "Port of Spain"],
    "BRA_CURITIBA": [null, "Curitiba"],
    "BRA_PORTO_ALEGRE": [null, "Porto Alegre"],
    "BOL_SUCRE": [null, "Sucre"],
    "BRA_SALVADOR": [null, "Salvador"],
    "GUY_GEORGETOWN": [null, "Georgetown"],
    "BRA_RIO_DE_JANEIRO": [null, "Rio de Janeiro"],
    "FLK_STANLEY": [null, "Stanley"],
    "PER_LIMA": [null, "Lima"],
    "COL_MEDELLIN": [null, "Medellin"],
    "BRA_BRASILIA": [null, "Brasilia"],
    "VEN_MARACAIBO": [null, "Maracaibo"],
    "URY_MONTEVIDEO": [null, "Montevideo"],
    "COL_CALI": [null, "Cali"],
    "BRA_FORTALEZA": [null, "Fortaleza"],
    "BRA_RECIFE": [null, "Recife"],
    "GUF_CAYENNE": [null, "Cayenne"],
    "BOL_LA_PAZ": [null, "La Paz"],
    "SUR_PARAMARIBO": [null, "Paramaribo"]
};
var r = {
    "COL_BOGOTA": [2738, 600],
    "PRY_ASUNCION": [4155, 2717],
    "BRA_SAO_PAULO": [4961, 2516],
    "BRA_CAMPINAS": [4926, 2470],
    "CHL_SANTIAGO": [3241, 3407],
    "BRA_BELO_HORIZONTE": [5140, 2230],
    "ECU_GUAYAQUIL": [2350, 1144],
    "VEN_CARACAS": [3234, 115],
    "ANT_WILLEMSTAD": [3075, 9],
    "ECU_QUITO": [2439, 988],
    "ARG_BUENOS_AIRES": [4161, 3414],
    "TTO_PORT_OF_SPAIN": [3636, 68],
    "BRA_CURITIBA": [4778, 2673],
    "BRA_PORTO_ALEGRE": [4663, 3027],
    "BOL_SUCRE": [3548, 2301],
    "BRA_SALVADOR": [5498, 1675],
    "GUY_GEORGETOWN": [3908, 332],
    "BRA_RIO_DE_JANEIRO": [5215, 2450],
    "FLK_STANLEY": [4312, 4682],
    "PER_LIMA": [2628, 1857],
    "COL_MEDELLIN": [2615, 488],
    "BRA_BRASILIA": [4818, 1947],
    "VEN_MARACAIBO": [2880, 128],
    "COL_CALI": [2564, 702],
    "URY_MONTEVIDEO": [4327, 3420],
    "BRA_FORTALEZA": [5435, 988],
    "BRA_RECIFE": [5737, 1286],
    "GUF_CAYENNE": [4354, 434],
    "BOL_LA_PAZ": [3317, 2131],
    "SUR_PARAMARIBO": [4136, 386]
};
var self = (this ? this : window);
if (!self['DvtBaseMapManager']) self['DvtBaseMapManager'] = {
    '_UNPROCESSED_MAPS': [
        [],
        [],
        []
    ]
};
self['DvtBaseMapManager']['_UNPROCESSED_MAPS'][0].push(["southAmerica", "cities", l, r, null, null, 4, [2260, 0, 3477, 4990]]);