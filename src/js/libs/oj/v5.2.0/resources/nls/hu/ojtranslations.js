define({
    "oj-message": {
        fatal: "Súlyos",
        error: "Hiba",
        warning: "Figyelmeztetés",
        info: "Tájékoztatás",
        confirmation: "Jóváhagyás",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "Az érték nem a várt formátumú.",
        detail: "Adjon meg értéket a várt formátumban.",
        "plural-separator": ", ",
        hint: {
            summary: "Példa: {exampleValue}",
            detail: "A következő példában használt formátum szerint adja meg az értéket: '{exampleValue}'.",
            "detail-plural": "A következő példákban használt formátum szerint adja meg az értéket: '{exampleValue}'."
        },
        optionHint: {
            detail: "A(z) '{propertyName}' beállítás elfogadott értéke: '{propertyValueValid}'.",
            "detail-plural": "A(z) '{propertyName}' beállítás elfogadott értékei: '{propertyValueValid}'."
        },
        optionTypesMismatch: {
            summary: "A(z) '{requiredPropertyName}' beállítás értékének megadása kötelező, ha a(z) '{propertyName}' beállítás értéke '{propertyValue}'."
        },
        optionTypeInvalid: {
            summary: "A(z) '{propertyName}' beállítás várt típusú értéke nem lett megadva."
        },
        optionOutOfRange: {
            summary: "A(z) {propertyValue} érték a megengedett tartományon kívüli a(z) '{propertyName}' beállításnál."
        },
        optionValueInvalid: {
            summary: "Érvénytelen '{propertyValue}' érték lett megadva a(z) '{propertyName}' beállításhoz."
        },
        number: {
            decimalFormatMismatch: {
                summary: "A(z) '{value}' nem a várt számformátumú."
            },
            shortLongUnsupportedParse: {
                summary: "a 'short' és a 'long' nem támogatott az átalakítás célú elemzéskor.",
                detail: "Módosítsa az összetevőt readonly típusúra. A readonly mezők nem hívják meg az átalakító parse funkcióját."
            },
            currencyFormatMismatch: {
                summary: "A(z) '{value}' nem a várt pénznemformátumú."
            },
            percentFormatMismatch: {
                summary: "A(z) '{value}' nem a várt százalékformátumú."
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "A(z) '{value}' érték a megengedett tartományon kívüli a(z) '{propertyName}' beállításnál.",
                detail: "Adjon meg '{minValue}' és '{maxValue}' közötti értéket.",
                hour: "óra",
                minute: "perc",
                second: "másodperc",
                millisec: "ezredmásodperc",
                month: "hónap",
                day: "nap",
                year: "év",
                "month name": "hónapnév",
                weekday: "hétköznap"
            },
            dateFormatMismatch: {
                summary: "A(z) '{value}' nem a várt dátumformátumú."
            },
            invalidTimeZoneID: {
                summary: "Érvénytelen a megadott {timeZoneID} időzóna-azonosító."
            },
            nonExistingTime: {
                summary: "A bemeneti időpont nem létezik, mert a nyári időszámításra átállás idejére esik."
            },
            missingTimeZoneData: {
                summary: "A TimeZone adata hiányzik. A TimeZone adatának betöltéséhez hívja az 'ojs/ojtimezonedata' kérelmet."
            },
            timeFormatMismatch: {
                summary: "A(z) '{value}' nem a várt időformátumú."
            },
            datetimeFormatMismatch: {
                summary: "A(z) '{value}' nem a várt dátum- és időformátumú."
            },
            dateToWeekdayMismatch: {
                summary: "A(z) '{date}' nem '{weekday}'.",
                detail: "A dátumnak megfelelő hétköznapot adjon meg."
            },
            invalidISOString: {
                summary: "A megadott '{isoStr}' karakterlánc nem felel meg az ISO 8601 szerinti karakterláncoknak.",
                detail: "Adjon meg egy ISO 8601 szerinti követelményeknek megfelelő karakterláncot."
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "Legalább {min} karaktert adjon meg.",
                max: "Legfeljebb {max} karaktert adjon meg.",
                inRange: "Adjon meg legalább {min}, de legfeljebb {max} karaktert.",
                exact: "{length} karaktert adjon meg."
            },
            messageDetail: {
                tooShort: "Legalább {min} karaktert adjon meg, ne kevesebbet.",
                tooLong: "Legfeljebb {max} karaktert adjon meg, ne többet."
            },
            messageSummary: {
                tooShort: "Túl kevés a karakter.",
                tooLong: "Túl sok a karakter."
            }
        },
        range: {
            number: {
                hint: {
                    min: "Adjon meg a(z) {min} értéknél nem kisebb számot.",
                    max: "Adjon meg a(z) {max} értéknél nem nagyobb számot.",
                    inRange: "Adjon meg egy {min} és {max} közötti számot.",
                    exact: "Adja meg a számot {num}."
                },
                messageDetail: {
                    rangeUnderflow: "A számnak nagyobbnak vagy egyenlőnek kell lennie a(z) {min} értéknél.",
                    rangeOverflow: "A számnak kisebbnek vagy egyenlőnek kell lennie a következővel: {max}.",
                    exact: "A szám csak {num} lehet."
                },
                messageSummary: {
                    rangeUnderflow: "A szám túl kicsi.",
                    rangeOverflow: "A szám túl nagy."
                }
            },
            datetime: {
                hint: {
                    min: "Adjon meg a(z) {min} értéknél nem korábbi dátumot és időpontot.",
                    max: "Adjon meg a(z) {max} értéknél nem későbbi dátumot és időpontot.",
                    inRange: "Adjon meg egy {min} és {max} közötti dátumot és időpontot."
                },
                messageDetail: {
                    rangeUnderflow: "A dátum és az időpont nem lehet korábbi a(z) {min} értéknél.",
                    rangeOverflow: "A dátum és az időpont nem lehet későbbi a(z) {max} értéknél."
                },
                messageSummary: {
                    rangeUnderflow: "A dátum és az időpont korábbi a minimális dátum- és időértéknél.",
                    rangeOverflow: "A dátum és az időpont későbbi a maximális dátum- és időértéknél."
                }
            },
            date: {
                hint: {
                    min: "Adjon meg a(z) {min} dátumnál nem korábbi dátumot.",
                    max: "Adjon meg a(z) {max} dátumnál nem későbbi dátumot.",
                    inRange: "Adjon meg {min} és {max} közötti dátumot."
                },
                messageDetail: {
                    rangeUnderflow: "A dátum nem lehet korábbi a(z) {min} értéknél.",
                    rangeOverflow: "A dátum nem lehet későbbi a(z) {max} értéknél."
                },
                messageSummary: {
                    rangeUnderflow: "A dátum korábbi a minimális dátumértéknél.",
                    rangeOverflow: "A dátum későbbi a maximális dátumértéknél."
                }
            },
            time: {
                hint: {
                    min: "Adjon meg a(z) {min} időpontnál nem korábbi időpontot.",
                    max: "Adjon meg a(z) {max} időpontnál nem későbbi időpontot.",
                    inRange: "Adjon meg {min} és {max} közötti időpontot."
                },
                messageDetail: {
                    rangeUnderflow: "Az időpont nem lehet korábbi a(z) {min} értéknél.",
                    rangeOverflow: "Az időpont nem lehet későbbi a(z) {max} értéknél."
                },
                messageSummary: {
                    rangeUnderflow: "Az időpont korábbi a minimális időpontnál.",
                    rangeOverflow: "Az időpont későbbi a maximális időpontnál."
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "A(z) {value} dátum nem engedélyezett bejegyzés.",
                messageDetail: "A(z) {value} dátum nem lehet letiltott bejegyzés."
            }
        },
        regExp: {
            summary: "Helytelen a formátum.",
            detail: "A(z) '{value}' értéknek meg kell felelnie a következő mintának: '{pattern}'."
        },
        required: {
            summary: "Érték szükséges.",
            detail: "Értéket kell megadnia."
        }
    },
    "oj-ojInputDate": {
        done: "Kész",
        cancel: "Mégse",
        prevText: "Előző",
        nextText: "Következő",
        currentText: "Ma",
        weekHeader: "Hét",
        tooltipCalendar: "Dátum kijelölése.",
        tooltipCalendarTime: "Dátum és időpont kiválasztása.",
        tooltipCalendarDisabled: "Dátumkijelölés letiltva.",
        tooltipCalendarTimeDisabled: "Dátum és időpont kiválasztása letiltva.",
        picker: "Választó",
        weekText: "Hét",
        datePicker: "Dátumválasztó",
        inputHelp: "A naptár eléréséhez nyomja meg a LE vagy a FEL billentyűt.",
        inputHelpBoth: "A naptár eléréséhez nyomja meg a LE vagy a FEL billentyűt, míg az időpont legördülő lista eléréséhez használja a Shift + LE vagy a Shift + FEL billentyűkombinációt.",
        dateTimeRange: {
            hint: {
                min: "",
                max: "",
                inRange: ""
            },
            messageDetail: {
                rangeUnderflow: "",
                rangeOverflow: ""
            },
            messageSummary: {
                rangeUnderflow: "",
                rangeOverflow: ""
            }
        },
        dateRestriction: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        }
    },
    "oj-ojInputTime": {
        cancelText: "Mégse",
        okText: "OK",
        currentTimeText: "Most",
        hourWheelLabel: "Óra",
        minuteWheelLabel: "Perc",
        ampmWheelLabel: "de.du.",
        tooltipTime: "Idő kijelölése.",
        tooltipTimeDisabled: "Időkijelölés letiltva.",
        inputHelp: "Az időpont legördülő lista eléréséhez nyomja meg a LE vagy a FEL billentyűt.",
        dateTimeRange: {
            hint: {
                min: "",
                max: "",
                inRange: ""
            },
            messageDetail: {
                rangeUnderflow: "",
                rangeOverflow: ""
            },
            messageSummary: {
                rangeUnderflow: "",
                rangeOverflow: ""
            }
        }
    },
    "oj-inputBase": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        regexp: {
            messageSummary: "",
            messageDetail: ""
        }
    },
    "oj-ojInputPassword": {
        regexp: {
            messageDetail: "Az értéknek meg kell felelnie a következő mintának: '{pattern}'."
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "{pageIndex} oldal megjelenítése {pageCount} oldalból",
        labelAccArrowNextPage: "A következő oldal megjelenítéséhez válassza a Következő elemet",
        labelAccArrowPreviousPage: "Az előző oldal megjelenítéséhez válassza az Előző elemet",
        tipArrowNextPage: "Következő",
        tipArrowPreviousPage: "Előző"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "A(z) {id} növekvő sorrendben rendezve",
        accessibleSortDescending: "A(z) {id} csökkenő sorrendben rendezve",
        accessibleActionableMode: "Váltás művelet-végrehajtási üzemmódba.",
        accessibleNavigationMode: "Váltás navigációs üzemmódba: nyomja meg az F2 gombot a szerkesztési vagy a művelet-végrehajtási üzemmódba lépéshez.",
        accessibleEditableMode: "Váltás szerkeszthető módba: nyomja meg az Esc billenytűt az adatrácson kívülre navigáláshoz.",
        accessibleSummaryExact: "Ez olyan adatrács, amely {rownum} sort és {colnum} oszlopot tartalmaz",
        accessibleSummaryEstimate: "Ez ismeretlen számú sorból és oszlopból álló adatrács",
        accessibleSummaryExpanded: "Jelenleg {num} sor van kibontva",
        accessibleRowExpanded: "Sor kibontva",
        accessibleRowCollapsed: "Sor összecsukva",
        accessibleRowSelected: "Ez a sor kijelölve: {row}",
        accessibleColumnSelected: "Ez az oszlop kijelölve: {column}",
        accessibleStateSelected: "kijelölve",
        accessibleMultiCellSelected: "{num} cella kijelölve",
        accessibleColumnSpanContext: "{extent} széles",
        accessibleRowSpanContext: "{extent} magas",
        accessibleRowContext: "Sor: {index}",
        accessibleColumnContext: "Oszlop: {index}",
        accessibleRowHeaderContext: "Sor fejléce {index}",
        accessibleColumnHeaderContext: "Oszlop fejléce {index}",
        accessibleRowEndHeaderContext: "Sor záró fejléce {index}",
        accessibleColumnEndHeaderContext: "Oszlop záró fejléce {index}",
        accessibleLevelContext: "Szint: {level}",
        accessibleRangeSelectModeOn: "A kijelölt cellatartomány hozzáadásának üzemmódja bekapcsolva.",
        accessibleRangeSelectModeOff: "A kijelölt cellatartomány hozzáadásának üzemmódja kikapcsolva.",
        accessibleFirstRow: "Elérte az első sort.",
        accessibleLastRow: "Elérte az utolsó sort.",
        accessibleFirstColumn: "Elérte az első oszlopot",
        accessibleLastColumn: "Elérte az utolsó oszlopot.",
        accessibleSelectionAffordanceTop: "Felső kijelöléskezelő.",
        accessibleSelectionAffordanceBottom: "Alsó kijelöléskezelő.",
        msgFetchingData: "Adatok behívása...",
        msgNoData: "Nincsenek megjeleníthető elemek.",
        labelResize: "Átméretezés",
        labelResizeWidth: "Szélesség módosítása",
        labelResizeHeight: "Magasság módosítása",
        labelSortRow: "Sorok rendezése",
        labelSortRowAsc: "Sorok rendezése növekvő sorrendben",
        labelSortRowDsc: "Sorok rendezése csökkenő sorrendben",
        labelSortCol: "Oszlopok rendezése",
        labelSortColAsc: "Oszlopok rendezése növekvő sorrendben",
        labelSortColDsc: "Oszlopok rendezése csökkenő sorrendben",
        labelCut: "Kivágás",
        labelPaste: "Beillesztés",
        labelEnableNonContiguous: "Nem összefüggő kijelölés engedélyezése",
        labelDisableNonContiguous: "Nem összefüggő kijelölés letiltása",
        labelResizeDialogSubmit: "OK"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "Szint: {level}",
        accessibleRowDescription: "Szint: {level}, sor: {num}, összesen: {total}",
        accessibleRowExpanded: "Sor kibontva",
        accessibleRowCollapsed: "Sor összecsukva",
        accessibleStateExpanded: "kibontva",
        accessibleStateCollapsed: "összecsukva"
    },
    "oj-ojListView": {
        msgFetchingData: "Adatok behívása...",
        msgNoData: "Nincsenek megjeleníthető elemek.",
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        accessibleReorderTouchInstructionText: "Érintse meg duplán, és tartsa. Várja meg a hangjelzést, majd húzással hajtsa végre az átrendezést.",
        accessibleReorderBeforeItem: "{item} elé",
        accessibleReorderAfterItem: "{item} után",
        accessibleReorderInsideItem: "Bele {item}",
        accessibleNavigateSkipItems: "Kihagyott elemek száma {numSkip}",
        labelCut: "Kivágás",
        labelCopy: "Másolás",
        labelPaste: "Beillesztés",
        labelPasteBefore: "Beillesztés elé",
        labelPasteAfter: "Beillesztés mögé"
    },
    "oj-_ojLabel": {
        tooltipHelp: "Súgó",
        tooltipRequired: "Kötelező"
    },
    "oj-ojLabel": {
        tooltipHelp: "Súgó",
        tooltipRequired: "Kötelező"
    },
    "oj-ojInputNumber": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        numberRange: {
            hint: {
                min: "",
                max: "",
                inRange: "",
                exact: ""
            },
            messageDetail: {
                rangeUnderflow: "",
                rangeOverflow: "",
                exact: ""
            },
            messageSummary: {
                rangeUnderflow: "",
                rangeOverflow: ""
            }
        },
        tooltipDecrement: "Csökkentés",
        tooltipIncrement: "Növelés"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "Felső kijelöléskezelő",
        labelAccSelectionAffordanceBottom: "Alsó kijelöléskezelő",
        labelEnableNonContiguousSelection: "Nem összefüggő kijelölés engedélyezése",
        labelDisableNonContiguousSelection: "Nem összefüggő kijelölés letiltása",
        labelResize: "Átméretezés",
        labelResizePopupSubmit: "OK",
        labelResizePopupSpinner: "Oszlop átméretezése",
        labelSelectRow: "Sor kijelölése",
        labelEditRow: "Sor szerkesztése",
        labelSelectAndEditRow: "Sor kijelölése és szerkesztése",
        labelSelectColumn: "Oszlop kijelölése",
        labelSort: "Rendezés",
        labelSortAsc: "Rendezés növekvő sorrendben",
        labelSortDsc: "Rendezés csökkenő sorrendben",
        msgFetchingData: "Adatok behívása...",
        msgNoData: "Nincs megjeleníthető adat.",
        msgInitializing: "Inicializálás...",
        msgColumnResizeWidthValidation: "A szélességérték csak egész szám lehet.",
        msgScrollPolicyMaxCountSummary: "Túllépték a tábla görgetéséhez engedélyezett sorok maximális számát.",
        msgScrollPolicyMaxCountDetail: "Kérjü, töltse be újra, kisebb adatkészlettel.",
        msgStatusSortAscending: "A(z) {0} növekvő sorrendben rendezve.",
        msgStatusSortDescending: "A(z) {0} csökkenő sorrendben rendezve."
    },
    "oj-ojTabs": {
        labelCut: "Kivágás",
        labelPasteBefore: "Beillesztés elé",
        labelPasteAfter: "Beillesztés mögé",
        labelRemove: "Eltávolítás",
        labelReorder: "Újrarendezés",
        removeCueText: "Eltávolítható"
    },
    "oj-ojCheckboxset": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        }
    },
    "oj-ojRadioset": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        }
    },
    "oj-ojSelect": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        searchField: "Keresőmező",
        noMatchesFound: "Nincs találat",
        oneMatchesFound: "Egy egyezés található",
        moreMatchesFound: "{num} egyezés található",
        filterFurther: "Több találat megjelenítéséhez szűrjön tovább."
    },
    "oj-ojSwitch": {
        SwitchON: "Be",
        SwitchOFF: "Ki"
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "Nincs találat",
        filterFurther: "Több találat megjelenítéséhez szűrjön tovább."
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "Nincs találat",
        oneMatchesFound: "Egy egyezés található",
        moreMatchesFound: "{num} egyezés található"
    },
    "oj-ojTree": {
        stateLoading: "Betöltés...",
        labelNewNode: "Új csomópont",
        labelMultiSelection: "Több elem kijelölése",
        labelEdit: "Szerkesztés",
        labelCreate: "Létrehozás",
        labelCut: "Kivágás",
        labelCopy: "Másolás",
        labelPaste: "Beillesztés",
        labelPasteAfter: "Beillesztés mögé",
        labelPasteBefore: "Beillesztés elé",
        labelRemove: "Eltávolítás",
        labelRename: "Átnevezés",
        labelNoData: "Nincs adat."
    },
    "oj-ojPagingControl": {
        labelAccPaging: "Oldalakra tördelés",
        labelAccNavFirstPage: "Első oldal",
        labelAccNavLastPage: "Utolsó oldal",
        labelAccNavNextPage: "Következő oldal",
        labelAccNavPreviousPage: "Előző oldal",
        labelAccNavPage: "Oldal",
        labelLoadMore: "Továbbiak megjelenítése...",
        labelLoadMoreMaxRows: "Elérte a legfeljebb megengedett {maxRows} sort",
        labelNavInputPage: "Oldal",
        labelNavInputPageMax: "/ {pageMax}",
        msgItemRangeCurrent: "{pageFrom}-{pageTo}",
        msgItemRangeCurrentSingle: "{pageFrom}",
        msgItemRangeOf: "/",
        msgItemRangeOfAtLeast: "/ min.",
        msgItemRangeOfApprox: "/ kb.",
        msgItemRangeItems: "elem",
        tipNavInputPage: "Ugrás oldalra",
        tipNavPageLink: "Ugrás a(z) {pageNum}. oldalra",
        tipNavNextPage: "Következő",
        tipNavPreviousPage: "Előző",
        tipNavFirstPage: "Első",
        tipNavLastPage: "Utolsó",
        pageInvalid: {
            summary: "Az oldal megadott értéke érvénytelen.",
            detail: "Nullánál nagyobb értéket írjon be."
        },
        maxPageLinksInvalid: {
            summary: "A maxPageLinks értéke érvénytelen.",
            detail: "4-nél nagyobb értéket adjon meg."
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "Kivágás",
        labelPasteBefore: "Beillesztés elé",
        labelPasteAfter: "Beillesztés mögé"
    },
    "oj-panel": {
        labelAccButtonExpand: "Kibontás",
        labelAccButtonCollapse: "Becsukás",
        labelAccButtonRemove: "Eltávolítás"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "{0} csoport",
        labelSeries: "Adatsor",
        labelGroup: "Csoport",
        labelDate: "Dátum",
        labelValue: "Érték",
        labelTargetValue: "Cél",
        labelX: "X",
        labelY: "Y",
        labelZ: "Z",
        labelPercentage: "Százalék",
        labelLow: "Min.",
        labelHigh: "Max.",
        labelOpen: "Nyitó",
        labelClose: "Záró",
        labelVolume: "Forgalom",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "Min.",
        labelMax: "Max.",
        labelOther: "Egyéb",
        tooltipPan: "Eltolás",
        tooltipSelect: "Futószöveg kijelölése",
        tooltipZoom: "Kijelölés nagyítása",
        componentName: "Diagram"
    },
    "oj-dvtBaseGauge": {
        componentName: "Mérő"
    },
    "oj-ojDiagram": {
        promotedLink: "{0} hivatkozás",
        promotedLinks: "{0} hivatkozás",
        promotedLinkAriaDesc: "Közvetett",
        componentName: "Diagram"
    },
    "oj-ojGantt": {
        componentName: "Gantt",
        accessibleDurationDays: "{0} nap",
        accessibleDurationHours: "{0} óra",
        accessibleTaskInfo: "A kezdési időpont {0}, a befejezési időpont {1}, az időtartam {2}",
        accessibleMilestoneInfo: "Az idő {0}",
        accessibleRowInfo: "Sor: {0}",
        accessibleTaskTypeMilestone: "Mérföldkő",
        accessibleTaskTypeSummary: "Összegzés",
        accessiblePredecessorInfo: "{0} elődök",
        accessibleSuccessorInfo: "{0} utódok",
        accessibleDependencyInfo: "{0} függőségi típus, összekapcsolja a(z) {1} elemet a(z) {2} elemmel",
        startStartDependencyAriaDesc: "kezdéstől kezdésig",
        startFinishDependencyAriaDesc: "kezdéstől zárásig",
        finishStartDependencyAriaDesc: "zárástól kezdésig",
        finishFinishDependencyAriaDesc: "zárástól zárásig",
        tooltipZoomIn: "Nagyítás",
        tooltipZoomOut: "Kicsinyítés",
        labelRow: "Sor",
        labelStart: "Kezdés",
        labelEnd: "Vége",
        labelDate: "Dátum",
        labelBaselineStart: "Alapérték kezdete",
        labelBaselineEnd: "Alapérték vége ",
        labelBaselineDate: "Alapérték dátuma",
        labelLabel: "Címke",
        labelProgress: "Folyamat",
        labelMoveBy: "Áthelyezés",
        taskMoveInitiated: "Feladat áthelyezése elindítva",
        taskMoveSelectionInfo: "{0} további kiválasztva",
        taskMoveInitiatedInstruction: "Az áthelyezéshez használja a nyílbillentyűket",
        taskMoveFinalized: "Feladat áthelyezése megtörtént",
        taskMoveCancelled: "Feladat áthelyezése megszakítva"
    },
    "oj-ojLegend": {
        componentName: "Jelmagyarázat"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "Egyéb",
        labelGroup: "Csoport",
        labelSize: "Méret",
        labelAdditionalData: "Kiegészítő adatok",
        componentName: "NBox"
    },
    "oj-ojPictoChart": {
        componentName: "Képdiagram"
    },
    "oj-ojSparkChart": {
        componentName: "Diagram"
    },
    "oj-ojSunburst": {
        labelColor: "Szín",
        labelSize: "Méret",
        tooltipExpand: "Kibontás",
        tooltipCollapse: "Becsukás",
        componentName: "Gyűrűdiagram"
    },
    "oj-ojTagCloud": {
        componentName: "Címkefelhő"
    },
    "oj-ojThematicMap": {
        componentName: "Tematikus térkép"
    },
    "oj-ojTimeAxis": {
        componentName: "Időtengely"
    },
    "oj-ojTimeline": {
        componentName: "Idősor",
        accessibleItemDesc: "A leírás {0}.",
        accessibleItemEnd: "A záró időpont {0}.",
        accessibleItemStart: "A kezdő időpont {0}.",
        accessibleItemTitle: "A cím {0}.",
        labelSeries: "Adatsor",
        tooltipZoomIn: "Nagyítás",
        tooltipZoomOut: "Kicsinyítés"
    },
    "oj-ojTreemap": {
        labelColor: "Szín",
        labelSize: "Méret",
        tooltipIsolate: "Elkülönítés",
        tooltipRestore: "Visszaállítás",
        componentName: "Fatérkép"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "E",
        labelScalingSuffixMillion: "M",
        labelScalingSuffixBillion: "MD",
        labelScalingSuffixTrillion: "B",
        labelScalingSuffixQuadrillion: "Q",
        labelInvalidData: "Érvénytelen adatok",
        labelNoData: "Nincs megjeleníthető adat",
        labelClearSelection: "Kijelölés megszüntetése",
        labelDataVisualization: "Adatábrázolás",
        stateSelected: "Kijelölt",
        stateUnselected: "Nem kijelölt",
        stateMaximized: "Teljes méretű",
        stateMinimized: "Kis méretű",
        stateExpanded: "Kibontott",
        stateCollapsed: "Összecsukott",
        stateIsolated: "Elkülönített",
        stateHidden: "Rejtett",
        stateVisible: "Látható",
        stateDrillable: "részletezhető",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "{0} / {1}"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "Navigációs lista",
        hierMenuBtnLabel: "Hierarchikus menü gomb",
        selectedLabel: "kijelölve",
        previousIcon: "Előző",
        msgFetchingData: "Adatok behívása...",
        msgNoData: "Nincsenek megjeleníthető elemek.",
        overflowItemLabel: "További",
        accessibleReorderTouchInstructionText: "Érintse meg duplán, és tartsa. Várja meg a hangjelzést, majd húzással hajtsa végre az átrendezést.",
        accessibleReorderBeforeItem: "{item} elé",
        accessibleReorderAfterItem: "{item} után",
        labelCut: "Kivágás",
        labelPasteBefore: "Beillesztés elé",
        labelPasteAfter: "Beillesztés mögé",
        labelRemove: "Eltávolítás",
        removeCueText: "Eltávolítható"
    },
    "oj-ojSlider": {
        noValue: "Az ojSlider érték nélküli",
        maxMin: "A maximum érték nem lehet egyenlő a minimum értékkel és nem lehet annál kisebb sem.",
        valueRange: "Az érték csak a min és max közötti lehet",
        optionNum: "A(z) {option} opció nem szám",
        invalidStep: "Érvénytelen lépés; a lépés csak > 0 lehet"
    },
    "oj-ojDialog": {
        labelCloseIcon: "Záró"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "Belépés előugró ablakba. Az F6 billentyűvel válthat át az előugró ablak és a társított vezérlőelem között.",
        ariaLiveRegionInitialFocusNone: "Előugró ablak megnyitva. Az F6 billentyűvel válthat át az előugró ablak és a társított vezérlőelem között.",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "Belépés előugró ablakba. Az előugró ablak bezárásához navigáljon az előugró ablakon belüli utolsó hivatkozásra.",
        ariaLiveRegionInitialFocusNoneTouch: "Előugró ablak megnyitva. Az előugró ablakon belüli fókusz létrehozásához navigáljon a következő hivatkozásra.",
        ariaFocusSkipLink: "A megnyitott előugró ablakra navigáláshoz érintse meg duplán.",
        ariaCloseSkipLink: "A megnyitott előugró ablak bezárásához érintse meg duplán."
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "A tartalom frissítéséhez aktiválja a hivatkozást",
        ariaRefreshingLink: "Tartalom frissítése",
        ariaRefreshCompleteLink: "A frissítés kész."
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "Indítási műveletek megjelenítése",
        ariaShowEndActionsDescription: "Befejezési műveletek megjelenítése",
        ariaHideActionsDescription: "Műveletek elrejtése"
    },
    "oj-ojIndexer": {
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        indexerOthers: "#",
        ariaDisabledLabel: "Nincs egyező csoportfejléc",
        ariaOthersLabel: "szám",
        ariaInBetweenText: "{first} és {second} között",
        ariaKeyboardInstructionText: "Az érték kiválasztéséhoz nyomja meg az Enter billentyűt.",
        ariaTouchInstructionText: "A gesztus módba belépéshez dupla bökés és megtartás, majd lefelé vagy felfelé húzvás az érték beállításához."
    },
    "oj-ojMenu": {
        labelCancel: "Mégse"
    },
    "oj-ojColorSpectrum": {
        labelHue: "Színárnyalat",
        labelOpacity: "Átlátszatlanság",
        labelSatLum: "Színtelítettség/Fényesség",
        labelThumbDesc: "Színtartomány négyirányú navigációs csúszkája"
    },
    "oj-ojColorPalette": {
        labelNone: "Nincs"
    },
    "oj-ojColorPicker": {
        labelSwatches: "Órák",
        labelCustomColors: "Egyéni színek",
        labelPrevColor: "Előző szín",
        labelDefColor: "Alapértelmezett szín",
        labelDelete: "Törlés",
        labelDeleteQ: "Törli?",
        labelAdd: "Hozzáadás",
        labelAddColor: "Szín hozzáadása",
        labelMenuHex: "HEX",
        labelMenuRgba: "RGBa",
        labelMenuHsla: "HSLa",
        labelSliderHue: "Színárnyalat",
        labelSliderSaturation: "Telítettség",
        labelSliderSat: "Tel.",
        labelSliderLightness: "Világosság",
        labelSliderLum: "Fényerő",
        labelSliderAlpha: "Alfa",
        labelOpacity: "Átlátszatlanság",
        labelSliderRed: "Piros",
        labelSliderGreen: "Zöld",
        labelSliderBlue: "Kék"
    },
    "oj-ojFilePicker": {
        dropzoneText: "Húzza át ide a fájlokat és kattintson a feltöltésükhöz."
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "Folyamatban"
    },
    "oj-ojMessage": {
        labelCloseIcon: "Záró",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "Üzenetek",
        ariaLiveRegion: {
            navigationFromKeyboard: "Belépés az üzenetek régióba. Az F6 billentyűvel léphet a korábban kijelölt elemhez.",
            navigationToTouch: "Az üzenetek régióban új üzenetek találhatók. A hangátvitel forgó elemével léphet az üzenetek irányítópontjához.",
            navigationToKeyboard: "Az üzenetek régióban új üzenetek találhatók. Az F6 billentyűvel léphet a legutóbbi üzenetrégióhoz.",
            newMessage: "{category} üzenetkategória. {summary}."
        }
    }
});