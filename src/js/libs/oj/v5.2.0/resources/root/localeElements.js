define({
    root: {
        supplemental: {
            weekData: {
                firstDay: {
                    "001": 1,
                    AE: 6,
                    BH: 6,
                    BR: 0,
                    DZ: 6,
                    EG: 6,
                    IQ: 6,
                    JO: 6,
                    KW: 6,
                    LB: 1,
                    LY: 6,
                    MA: 6,
                    OM: 6,
                    QA: 6,
                    SA: 0,
                    SD: 6,
                    SY: 6,
                    TN: 0,
                    YE: 0,
                    BY: 1,
                    BG: 1,
                    ES: 1,
                    CZ: 1,
                    DK: 1,
                    AT: 1,
                    CH: 1,
                    DE: 1,
                    LU: 1,
                    CY: 1,
                    GR: 1,
                    AU: 0,
                    CA: 0,
                    GB: 1,
                    IE: 0,
                    IN: 0,
                    MT: 0,
                    NZ: 0,
                    PH: 0,
                    SG: 0,
                    US: 0,
                    ZA: 0,
                    AR: 0,
                    CL: 1,
                    CO: 0,
                    CR: 1,
                    DO: 0,
                    EC: 1,
                    GT: 0,
                    HN: 0,
                    MX: 0,
                    NI: 0,
                    PA: 0,
                    PE: 0,
                    PR: 0,
                    PY: 0,
                    SV: 0,
                    UY: 1,
                    VE: 0,
                    EE: 1,
                    FI: 1,
                    BE: 1,
                    FR: 1,
                    IL: 0,
                    HR: 1,
                    HU: 1,
                    ID: 0,
                    IS: 1,
                    IT: 1,
                    JP: 0,
                    KR: 0,
                    LT: 1,
                    LV: 1,
                    MK: 1,
                    MY: 1,
                    NO: 1,
                    NL: 1,
                    PL: 1,
                    PT: 1,
                    RO: 1,
                    RU: 1,
                    SK: 1,
                    SI: 1,
                    AL: 1,
                    BA: 1,
                    ME: 1,
                    RS: 1,
                    SE: 1,
                    TH: 0,
                    TR: 1,
                    UA: 1,
                    VN: 1,
                    CN: 0,
                    HK: 0,
                    MO: 0,
                    TW: 0
                },
                weekendStart: {
                    "001": 6,
                    AE: 5,
                    BH: 5,
                    DZ: 5,
                    EG: 5,
                    IQ: 5,
                    JO: 5,
                    KW: 5,
                    LY: 5,
                    MA: 5,
                    OM: 5,
                    QA: 5,
                    SA: 5,
                    SD: 5,
                    SY: 5,
                    TN: 5,
                    YE: 5,
                    IN: 0,
                    IL: 5
                },
                weekendEnd: {
                    "001": 0,
                    AE: 6,
                    BH: 6,
                    DZ: 6,
                    EG: 6,
                    IQ: 6,
                    JO: 6,
                    KW: 6,
                    LY: 6,
                    MA: 6,
                    OM: 6,
                    QA: 6,
                    SA: 6,
                    SD: 6,
                    SY: 6,
                    TN: 6,
                    YE: 6,
                    IL: 6
                }
            },
            prefferedHours: {
                "001": "H",
                AE: "h",
                BH: "h",
                DZ: "h",
                EG: "h",
                IQ: "h",
                JO: "h",
                KW: "h",
                LB: "h",
                LY: "h",
                MA: "H",
                OM: "h",
                QA: "h",
                SA: "h",
                SD: "h",
                SY: "h",
                TN: "h",
                YE: "h",
                BG: "H",
                ES: "H",
                CZ: "H",
                DK: "H",
                AT: "H",
                CH: "H",
                DE: "H",
                LU: "H",
                CY: "h",
                GR: "h",
                AU: "h",
                CA: "h",
                GB: "H",
                IE: "H",
                IN: "h",
                NZ: "h",
                PH: "h",
                SG: "h",
                US: "h",
                ZA: "h",
                AR: "H",
                BO: "H",
                CL: "H",
                CO: "h",
                CR: "H",
                CU: "H",
                DO: "h",
                EC: "H",
                GT: "H",
                HN: "H",
                MX: "H",
                NI: "H",
                PA: "h",
                PE: "H",
                PR: "h",
                SV: "H",
                UY: "H",
                VE: "h",
                EE: "H",
                FI: "H",
                BE: "H",
                FR: "H",
                IL: "H",
                HR: "H",
                ID: "H",
                IS: "H",
                IT: "H",
                JP: "H",
                KR: "h",
                LT: "H",
                LV: "H",
                MK: "H",
                MY: "h",
                NL: "H",
                PT: "H",
                RO: "H",
                RU: "H",
                SK: "H",
                SI: "H",
                AL: "h",
                BA: "H",
                ME: "H",
                RS: "H",
                SE: "H",
                TR: "H",
                UA: "H",
                CN: "h",
                HK: "h",
                MO: "h",
                TW: "h"
            },
            plurals: {
                ar: function(r) {
                    return 0 === r ? "zero" : 1 === r ? "one" : 2 === r ? "two" : r % 100 === Math.floor(r % 100) && r % 100 >= 3 && r % 100 <= 10 ? "few" : r % 100 === Math.floor(r % 100) && r % 100 >= 11 && r % 100 <= 99 ? "many" : "other"
                },
                as: function(r) {
                    return 0 === Math.floor(Math.abs(r)) || 1 === r ? "one" : "other"
                },
                be: function(r) {
                    return r % 10 == 1 && r % 100 != 11 ? "one" : r % 10 === Math.floor(r % 10) && r % 10 >= 2 && r % 10 <= 4 && !(r % 100 >= 12 && r % 100 <= 14) ? "few" : r % 10 == 0 || r % 10 === Math.floor(r % 10) && r % 10 >= 5 && r % 10 <= 9 || r % 100 === Math.floor(r % 100) && r % 100 >= 11 && r % 100 <= 14 ? "many" : "other"
                },
                bg: function(r) {
                    return 1 === r ? "one" : "other"
                },
                bn: function(r) {
                    return 0 === Math.floor(Math.abs(r)) || 1 === r ? "one" : "other"
                },
                bo: function(r) {
                    return "other"
                },
                brx: function(r) {
                    return 1 === r ? "one" : "other"
                },
                ca: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : "other"
                },
                cs: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : t === Math.floor(t) && t >= 2 && t <= 4 && 0 === n ? "few" : 0 !== n ? "many" : "other"
                },
                da: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = parseInt(r.toString().replace(/^[^.]*.?|0+$/g, ""), 10);
                    return 1 === r || 0 !== n && (0 === t || 1 === t) ? "one" : "other"
                },
                de: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : "other"
                },
                el: function(r) {
                    return 1 === r ? "one" : "other"
                },
                en: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : "other"
                },
                es: function(r) {
                    return 1 === r ? "one" : "other"
                },
                et: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : "other"
                },
                fi: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : "other"
                },
                fr: function(r) {
                    var t = Math.floor(Math.abs(r));
                    return 0 === t || 1 === t ? "one" : "other"
                },
                ga: function(r) {
                    return 1 === r ? "one" : 2 === r ? "two" : r === Math.floor(r) && r >= 3 && r <= 6 ? "few" : r === Math.floor(r) && r >= 7 && r <= 10 ? "many" : "other"
                },
                gu: function(r) {
                    return 0 === Math.floor(Math.abs(r)) || 1 === r ? "one" : "other"
                },
                he: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : 2 === t && 0 === n ? "two" : 0 !== n || r >= 0 && r <= 10 || r % 10 != 0 ? "other" : "many"
                },
                hi: function(r) {
                    return 0 === Math.floor(Math.abs(r)) || 1 === r ? "one" : "other"
                },
                hr: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length,
                        e = parseInt(r.toString().replace(/^[^.]*.?/, ""), 10);
                    return 0 === n && t % 10 == 1 && (t % 100 != 11 || e % 10 == 1 && e % 100 != 11) ? "one" : 0 === n && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && (!(t % 100 >= 12 && t % 100 <= 14) || e % 10 === Math.floor(e % 10) && e % 10 >= 2 && e % 10 <= 4 && !(e % 100 >= 12 && e % 100 <= 14)) ? "few" : "other"
                },
                hu: function(r) {
                    return 1 === r ? "one" : "other"
                },
                id: function(r) {
                    return "other"
                },
                is: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = parseInt(r.toString().replace(/^[^.]*.?|0+$/g, ""), 10);
                    return 0 !== n || t % 10 != 1 || t % 100 == 11 && 0 === n ? "other" : "one"
                },
                it: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : "other"
                },
                ja: function(r) {
                    return "other"
                },
                kn: function(r) {
                    return 0 === Math.floor(Math.abs(r)) || 1 === r ? "one" : "other"
                },
                ko: function(r) {
                    return "other"
                },
                kok: function(r) {
                    return "other"
                },
                ks: function(r) {
                    return 1 === r ? "one" : "other"
                },
                lt: function(r) {
                    var t = parseInt(r.toString().replace(/^[^.]*.?/, ""), 10);
                    return r % 10 != 1 || r % 100 >= 11 && r % 100 <= 19 ? r % 10 === Math.floor(r % 10) && r % 10 >= 2 && r % 10 <= 9 && !(r % 100 >= 11 && r % 100 <= 19) ? "few" : 0 !== t ? "many" : "other" : "one"
                },
                lv: function(r) {
                    var t = r.toString().replace(/^[^.]*.?/, "").length,
                        n = parseInt(r.toString().replace(/^[^.]*.?/, ""), 10);
                    return r % 10 == 0 || r % 100 === Math.floor(r % 100) && r % 100 >= 11 && r % 100 <= 19 || 2 === t && n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ? "zero" : r % 10 == 1 && (r % 100 != 11 || 2 === t && n % 10 == 1 && (n % 100 != 11 || 2 !== t && n % 10 == 1)) ? "one" : "other"
                },
                mk: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length,
                        e = parseInt(r.toString().replace(/^[^.]*.?/, ""), 10);
                    return 0 !== n || t % 10 != 1 && e % 10 != 1 ? "other" : "one"
                },
                ml: function(r) {
                    return 1 === r ? "one" : "other"
                },
                mr: function(r) {
                    return 0 === Math.floor(Math.abs(r)) || 1 === r ? "one" : "other"
                },
                ms: function(r) {
                    return "other"
                },
                mt: function(r) {
                    return 1 === r ? "one" : 0 === r || r % 100 === Math.floor(r % 100) && r % 100 >= 2 && r % 100 <= 10 ? "few" : r % 100 === Math.floor(r % 100) && r % 100 >= 11 && r % 100 <= 19 ? "many" : "other"
                },
                nb: function(r) {
                    return 1 === r ? "one" : "other"
                },
                ne: function(r) {
                    return 1 === r ? "one" : "other"
                },
                nl: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : "other"
                },
                nn: function(r) {
                    return 1 === r ? "one" : "other"
                },
                no: function(r) {
                    return 1 === r ? "one" : "other"
                },
                or: function(r) {
                    return 1 === r ? "one" : "other"
                },
                pa: function(r) {
                    return r === Math.floor(r) && r >= 0 && r <= 1 ? "one" : "other"
                },
                pl: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : 0 === n && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && !(t % 100 >= 12 && t % 100 <= 14) ? "few" : 0 === n && 1 !== t && (t % 10 === Math.floor(t % 10) && t % 10 >= 0 && t % 10 <= 1 || 0 === n && (t % 10 === Math.floor(t % 10) && t % 10 >= 5 && t % 10 <= 9 || 0 === n && t % 100 === Math.floor(t % 100) && t % 100 >= 12 && t % 100 <= 14)) ? "many" : "other"
                },
                pt: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length,
                        e = parseInt(r.toString().replace(/^[^.]*.?|0+$/g, ""), 10);
                    return 1 === t && (0 === n || 0 === t && 1 === e) ? "one" : "other"
                },
                "pt-PT": function(r) {
                    var t = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === r && 0 === t ? "one" : "other"
                },
                ro: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : 0 !== n || 0 === r || 1 !== r && r % 100 === Math.floor(r % 100) && r % 100 >= 1 && r % 100 <= 19 ? "few" : "other"
                },
                ru: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 0 === n && t % 10 == 1 && t % 100 != 11 ? "one" : 0 === n && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && !(t % 100 >= 12 && t % 100 <= 14) ? "few" : 0 === n && (t % 10 == 0 || 0 === n && (t % 10 === Math.floor(t % 10) && t % 10 >= 5 && t % 10 <= 9 || 0 === n && t % 100 === Math.floor(t % 100) && t % 100 >= 11 && t % 100 <= 14)) ? "many" : "other"
                },
                sk: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : t === Math.floor(t) && t >= 2 && t <= 4 && 0 === n ? "few" : 0 !== n ? "many" : "other"
                },
                sl: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 0 === n && t % 100 == 1 ? "one" : 0 === n && t % 100 == 2 ? "two" : 0 === n && (t % 100 === Math.floor(t % 100) && t % 100 >= 3 && t % 100 <= 4 || 0 !== n) ? "few" : "other"
                },
                sq: function(r) {
                    return 1 === r ? "one" : "other"
                },
                sr: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length,
                        e = parseInt(r.toString().replace(/^[^.]*.?/, ""), 10);
                    return 0 === n && t % 10 == 1 && (t % 100 != 11 || e % 10 == 1 && e % 100 != 11) ? "one" : 0 === n && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && (!(t % 100 >= 12 && t % 100 <= 14) || e % 10 === Math.floor(e % 10) && e % 10 >= 2 && e % 10 <= 4 && !(e % 100 >= 12 && e % 100 <= 14)) ? "few" : "other"
                },
                sv: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : "other"
                },
                ta: function(r) {
                    return 1 === r ? "one" : "other"
                },
                te: function(r) {
                    return 1 === r ? "one" : "other"
                },
                th: function(r) {
                    return "other"
                },
                tr: function(r) {
                    return 1 === r ? "one" : "other"
                },
                uk: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 0 === n && t % 10 == 1 && t % 100 != 11 ? "one" : 0 === n && t % 10 === Math.floor(t % 10) && t % 10 >= 2 && t % 10 <= 4 && !(t % 100 >= 12 && t % 100 <= 14) ? "few" : 0 === n && (t % 10 == 0 || 0 === n && (t % 10 === Math.floor(t % 10) && t % 10 >= 5 && t % 10 <= 9 || 0 === n && t % 100 === Math.floor(t % 100) && t % 100 >= 11 && t % 100 <= 14)) ? "many" : "other"
                },
                ur: function(r) {
                    var t = Math.floor(Math.abs(r)),
                        n = r.toString().replace(/^[^.]*.?/, "").length;
                    return 1 === t && 0 === n ? "one" : "other"
                },
                vi: function(r) {
                    return "other"
                },
                zh: function(r) {
                    return "other"
                }
            },
            currencyData: {
                fractions: {
                    IDR: {
                        _rounding: "0",
                        _digits: "0"
                    },
                    JPY: {
                        _rounding: "0",
                        _digits: "0"
                    },
                    KRW: {
                        _rounding: "0",
                        _digits: "0"
                    }
                }
            }
        }
    },
    ar: 1,
    "ar-AE": 1,
    "ar-BH": 1,
    "ar-DZ": 1,
    "ar-EG": 1,
    "ar-IQ": 1,
    "ar-JO": 1,
    "ar-KW": 1,
    "ar-LB": 1,
    "ar-LY": 1,
    "ar-MA": 1,
    "ar-OM": 1,
    "ar-QA": 1,
    "ar-SA": 1,
    "ar-SD": 1,
    "ar-SY": 1,
    "ar-TN": 1,
    "ar-YE": 1,
    as: 1,
    be: 1,
    "be-BY": 1,
    bg: 1,
    "bg-BG": 1,
    bn: 1,
    bo: 1,
    "bo-IN": 1,
    brx: 1,
    ca: 1,
    "ca-ES": 1,
    cs: 1,
    "cs-CZ": 1,
    da: 1,
    "da-DK": 1,
    de: 1,
    "de-AT": 1,
    "de-CH": 1,
    "de-DE": 1,
    "de-LU": 1,
    el: 1,
    "el-CY": 1,
    "el-GR": 1,
    en: 1,
    "en-AU": 1,
    "en-CA": 1,
    "en-GB": 1,
    "en-IE": 1,
    "en-IN": 1,
    "en-MT": 1,
    "en-NZ": 1,
    "en-PH": 1,
    "en-SG": 1,
    "en-US": 1,
    "en-ZA": 1,
    es: 1,
    "es-AR": 1,
    "es-BO": 1,
    "es-CL": 1,
    "es-CO": 1,
    "es-CR": 1,
    "es-CU": 1,
    "es-DO": 1,
    "es-EC": 1,
    "es-ES": 1,
    "es-GT": 1,
    "es-HN": 1,
    "es-MX": 1,
    "es-NI": 1,
    "es-PA": 1,
    "es-PE": 1,
    "es-PR": 1,
    "es-PY": 1,
    "es-SV": 1,
    "es-US": 1,
    "es-UY": 1,
    "es-VE": 1,
    et: 1,
    "et-EE": 1,
    fi: 1,
    "fi-FI": 1,
    fr: 1,
    "fr-BE": 1,
    "fr-CA": 1,
    "fr-CH": 1,
    "fr-FR": 1,
    "fr-LU": 1,
    ga: 1,
    "ga-IE": 1,
    gu: 1,
    he: 1,
    "he-IL": 1,
    hi: 1,
    "hi-IN": 1,
    hr: 1,
    "hr-HR": 1,
    hu: 1,
    "hu-HU": 1,
    id: 1,
    "id-ID": 1,
    is: 1,
    "is-IS": 1,
    it: 1,
    "it-CH": 1,
    "it-IT": 1,
    ja: 1,
    "ja-JP": 1,
    kn: 1,
    ko: 1,
    "ko-KR": 1,
    kok: 1,
    ks: 1,
    lt: 1,
    "lt-LT": 1,
    lv: 1,
    "lv-LV": 1,
    mk: 1,
    "mk-MK": 1,
    ml: 1,
    mr: 1,
    ms: 1,
    "ms-MY": 1,
    mt: 1,
    "mt-MT": 1,
    nb: 1,
    "nb-NO": 1,
    ne: 1,
    "ne-IN": 1,
    nl: 1,
    "nl-BE": 1,
    "nl-NL": 1,
    nn: 1,
    "nn-NO": 1,
    no: 1,
    "no-NO": 1,
    or: 1,
    pa: 1,
    pl: 1,
    "pl-PL": 1,
    pt: 1,
    "pt-BR": 1,
    "pt-PT": 1,
    ro: 1,
    "ro-RO": 1,
    ru: 1,
    "ru-RU": 1,
    sk: 1,
    "sk-SK": 1,
    sl: 1,
    "sl-SI": 1,
    sq: 1,
    "sq-AL": 1,
    sr: 1,
    "sr-Cyrl": 1,
    "sr-Cyrl-BA": 1,
    "sr-Cyrl-ME": 1,
    "sr-Cyrl-RS": 1,
    "sr-Latn": 1,
    "sr-Latn-BA": 1,
    "sr-Latn-ME": 1,
    "sr-Latn-RS": 1,
    sv: 1,
    "sv-SE": 1,
    ta: 1,
    te: 1,
    th: 1,
    "th-TH": 1,
    tr: 1,
    "tr-TR": 1,
    uk: 1,
    "uk-UA": 1,
    ur: 1,
    "ur-IN": 1,
    vi: 1,
    "vi-VN": 1,
    zh: 1,
    "zh-Hans": 1,
    "zh-Hans-CN": 1,
    "zh-Hans-SG": 1,
    "zh-Hant": 1,
    "zh-Hant-HK": 1,
    "zh-Hant-MO": 1,
    "zh-Hant-TW": 1,
    __noOverlay: !0,
    __defaultNoOverlayLocale: "en-US"
});