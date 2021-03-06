define({
    "oj-message": {
        fatal: "Fatal",
        error: "Fejl",
        warning: "Advarsel",
        info: "Info",
        confirmation: "Bekræftelse",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "Værdi er ikke i det forventede format.",
        detail: "Indtast en værdi i det forventede format.",
        "plural-separator": ", ",
        hint: {
            summary: "Eksempel: {exampleValue}",
            detail: "Indtast en værdi i det samme format som i dette eksempel: '{exampleValue}'.",
            "detail-plural": "Indtast en værdi i det samme format som i disse eksempler: '{exampleValue}'."
        },
        optionHint: {
            detail: "En gyldig værdi for valget '{propertyName}' er '{propertyValueValid}'.",
            "detail-plural": "Gyldig værdier for valget '{propertyName}' er '{propertyValueValid}'."
        },
        optionTypesMismatch: {
            summary: "En værdi for valget '{requiredPropertyName}' er påkrævet, når valget '{propertyName}' er sat til '{propertyValue}'."
        },
        optionTypeInvalid: {
            summary: "En værdi af den forventede type blev ikke angivet for valget '{propertyName}'."
        },
        optionOutOfRange: {
            summary: "Værdien {propertyValue} er uden for interval for valget '{propertyName}'."
        },
        optionValueInvalid: {
            summary: "En ugyldig værdi '{propertyValue}' blev angivet for valget '{propertyName}'."
        },
        number: {
            decimalFormatMismatch: {
                summary: "'{value}' er ikke i det forventede talformat."
            },
            shortLongUnsupportedParse: {
                summary: "'short' og 'long' understøttes ikke til konverteranalyse.",
                detail: "Skift komponent til readonly. readonly-felter kalder ikke konverterens analysefunktion."
            },
            currencyFormatMismatch: {
                summary: "'{value}' er ikke i det forventede valutaformat."
            },
            percentFormatMismatch: {
                summary: "'{value}' er ikke i det forventede procentformat."
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "Værdien '{value}' er uden for interval for '{propertyName}'.",
                detail: "Indtast en værdi mellem '{minValue}' og '{maxValue}'.",
                hour: "time",
                minute: "minut",
                second: "sekund",
                millisec: "millisekund",
                month: "måned",
                day: "dag",
                year: "år",
                "month name": "månedens navn",
                weekday: "ugedag"
            },
            dateFormatMismatch: {
                summary: "'{value}' er ikke i det forventede datoformat."
            },
            invalidTimeZoneID: {
                summary: "Ugyldigt tidszone-ID {timeZoneID} er angivet."
            },
            nonExistingTime: {
                summary: "Inputtiden findes ikke, fordi den ligger i overgangen til sommertid."
            },
            missingTimeZoneData: {
                summary: "TimeZone-data mangler. Kald de påkrævede 'ojs/ojtimezonedata' for at indlæse TimeZone-data."
            },
            timeFormatMismatch: {
                summary: "'{value}' er ikke i det forventede tidsformat."
            },
            datetimeFormatMismatch: {
                summary: "'{value}' er ikke i det forventede dato- og tidsformat."
            },
            dateToWeekdayMismatch: {
                summary: "Dagen '{date}' falder ikke på en '{weekday}'.",
                detail: "Indtast en ugedag, som stemmer overens med datoen."
            },
            invalidISOString: {
                summary: "Den angivne '{isoStr}' er ikke en gyldig ISO 8601-streng.",
                detail: "Angiv en gyldig ISO 8601-streng."
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "Indtast {min} eller flere tegn.",
                max: "Indtast {max} eller færre tegn.",
                inRange: "Indtast {min} eller flere tegn, op til maksimalt {max}.",
                exact: "Indtast {length} tegn."
            },
            messageDetail: {
                tooShort: "Indtast {min} eller flere tegn.",
                tooLong: "Indtast {max} eller færre tegn."
            },
            messageSummary: {
                tooShort: "Der er for få tegn.",
                tooLong: "Der er for mange tegn."
            }
        },
        range: {
            number: {
                hint: {
                    min: "Indtast et tal, der er større end eller lig med {min}.",
                    max: "Indtast et tal, der er mindre end eller lig med {max}.",
                    inRange: "Indtast et tal mellem {min} og {max}.",
                    exact: "Indtast tallet {num}."
                },
                messageDetail: {
                    rangeUnderflow: "Tallet skal være større end eller lig med {min}.",
                    rangeOverflow: "Tallet skal være mindre end eller lig med {max}.",
                    exact: "Tallet skal være {num}."
                },
                messageSummary: {
                    rangeUnderflow: "Tallet er for lavt.",
                    rangeOverflow: "Tallet er for højt."
                }
            },
            datetime: {
                hint: {
                    min: "Indtast en dato og et tidspunkt, som ligger den {min} eller efter.",
                    max: "Indtast en dato og et tidspunkt, som ligger den {max} eller før.",
                    inRange: "Indtast en dato og et tidspunkt mellem {min} og {max}."
                },
                messageDetail: {
                    rangeUnderflow: "Dato og tidspunkt skal ligge den {min} eller senere.",
                    rangeOverflow: "Dato og tidspunkt skal ligge den {max} eller tidligere."
                },
                messageSummary: {
                    rangeUnderflow: "Dato og tidspunkt ligger før minimumdato og -tidspunkt.",
                    rangeOverflow: "Dato og tidspunkt ligger efter maksimumdato og -tidspunkt."
                }
            },
            date: {
                hint: {
                    min: "Indtast en dato, der ligger den {min} eller efter.",
                    max: "Indtast en dato, der ligger den {max} eller før.",
                    inRange: "Indtast en dato, der ligger mellem {min} og {max}."
                },
                messageDetail: {
                    rangeUnderflow: "Dato skal ligge den {min} eller efter.",
                    rangeOverflow: "Dato skal ligge den {max} eller før."
                },
                messageSummary: {
                    rangeUnderflow: "Dato ligger før minimumdatoen.",
                    rangeOverflow: "Datoen ligger efter maksimumdatoen."
                }
            },
            time: {
                hint: {
                    min: "Indtast et tidspunkt, der ligger den {min} eller efter.",
                    max: "Indtast et tidspunkt, som ligger den {max} eller før.",
                    inRange: "Indtast et tidspunkt, der ligger mellem {min} og {max}."
                },
                messageDetail: {
                    rangeUnderflow: "Tidspunkt skal ligge den {min} eller efter.",
                    rangeOverflow: "Tidspunkt skal ligge den {max} eller før."
                },
                messageSummary: {
                    rangeUnderflow: "Tidspunkt ligger før minimumdatoen.",
                    rangeOverflow: "Tidspunkt ligger efter maksimumtidspunktet."
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "Datoen {value} er for en deaktiveret post.",
                messageDetail: "Datoen {value} må ikke være for en deaktiveret post."
            }
        },
        regExp: {
            summary: "Format er forkert.",
            detail: "Værdien '{value}' skal matche dette mønster: '{pattern}'."
        },
        required: {
            summary: "Værdi er påkrævet.",
            detail: "Du skal indtaste en værdi."
        }
    },
    "oj-ojInputDate": {
        done: "Udført",
        cancel: "Annuller",
        prevText: "Forrige",
        nextText: "Næste",
        currentText: "I dag",
        weekHeader: "Uge",
        tooltipCalendar: "Vælg dato.",
        tooltipCalendarTime: "Vælg dato/klokkeslæt.",
        tooltipCalendarDisabled: "Vælg dato for deaktivering.",
        tooltipCalendarTimeDisabled: "Vælg dato/klokkeslæt for deaktivering.",
        picker: "Vælger",
        weekText: "Uge",
        datePicker: "Datovælger",
        inputHelp: "Tryk på pil ned eller pil op for at få adgang til kalenderen.",
        inputHelpBoth: "Tryk på pil ned eller pil op for at få adgang til kalenderen og Shift + pil ned eller Shift + pil op for at få adgang til tidsrullelisten.",
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
        cancelText: "Annuller",
        okText: "OK",
        currentTimeText: "Nu",
        hourWheelLabel: "Time",
        minuteWheelLabel: "Minut",
        ampmWheelLabel: "AM/PM",
        tooltipTime: "Vælg klokkeslæt.",
        tooltipTimeDisabled: "Vælg tidspunkt for deaktivering.",
        inputHelp: "Tryk på pil ned eller pil op for at få adgang til tidsrullelisten.",
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
            messageDetail: "Værdien skal matche dette mønster: '{pattern}'."
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "Viser siden {pageIndex} fra {pageCount}",
        labelAccArrowNextPage: "Vælg Næste for at vise næste side",
        labelAccArrowPreviousPage: "Vælg Forrige for at vise forrige side",
        tipArrowNextPage: "Næste",
        tipArrowPreviousPage: "Forrige"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "{id} sorteret i stigende rækkefølge",
        accessibleSortDescending: "{id} sorteret i faldende rækkefølge",
        accessibleActionableMode: "Åbn handlingsorienteret tilstand.",
        accessibleNavigationMode: "Åbn navigeringstilstand, tryk på F2 for at åbne redigeringstilstand eller handlingsorienteret tilstand.",
        accessibleEditableMode: "Åbn redigeringsorienteret tilstand, tryk på Esc for at navigere uden for datagitteret.",
        accessibleSummaryExact: "Dette er et datagitter med {rownum} rækker og {colnum} kolonner",
        accessibleSummaryEstimate: "Dette er et datagitter med ukendt antal rækker og kolonner",
        accessibleSummaryExpanded: "Der er p.t. {num} udvidede rækker",
        accessibleRowExpanded: "Række udvidet",
        accessibleRowCollapsed: "Række skjult",
        accessibleRowSelected: "Række {row} valgt",
        accessibleColumnSelected: "Kolonne {column} valgt",
        accessibleStateSelected: "valgt",
        accessibleMultiCellSelected: "{num} valgte celler",
        accessibleColumnSpanContext: "{extent} bred",
        accessibleRowSpanContext: "{extent} høj",
        accessibleRowContext: "Række {index}",
        accessibleColumnContext: "Kolonne {index}",
        accessibleRowHeaderContext: "Rækkeoverskrift {index}",
        accessibleColumnHeaderContext: "Kolonneoverskrift {index}",
        accessibleRowEndHeaderContext: "Rækkeslutoverskrift {index}",
        accessibleColumnEndHeaderContext: "Kolonneslutoverskrift {index}",
        accessibleLevelContext: "Niveau {level}",
        accessibleRangeSelectModeOn: "Tilstand for tilføjelse af valgt celleinterval er aktiveret.",
        accessibleRangeSelectModeOff: "Tilstand for tilføjelse af valgt celleinterval er deaktiveret.",
        accessibleFirstRow: "Du er nået til den første række.",
        accessibleLastRow: "Du er nået til den sidste række.",
        accessibleFirstColumn: "Du er nået til den første kolonne",
        accessibleLastColumn: "Du er nået til den sidste kolonne.",
        accessibleSelectionAffordanceTop: "Handle til topvalg.",
        accessibleSelectionAffordanceBottom: "Handle til bundvalg.",
        msgFetchingData: "Henter data...",
        msgNoData: "Ingen elementer at vise.",
        labelResize: "Tilpas",
        labelResizeWidth: "Tilpas bredde",
        labelResizeHeight: "Tilpas højde",
        labelSortRow: "Sorter række",
        labelSortRowAsc: "Sorter række i stigende rækkefølge",
        labelSortRowDsc: "Sorter række i faldende række følge",
        labelSortCol: "Sorter kolonne",
        labelSortColAsc: "Sorter kolonne i stigende rækkefølge",
        labelSortColDsc: "Sorter kolonne i faldende rækkefølge",
        labelCut: "Klip",
        labelPaste: "Sæt ind",
        labelEnableNonContiguous: "Aktiver ikke-sammenhængende valg",
        labelDisableNonContiguous: "Deaktiver ikke-sammenhængende valg",
        labelResizeDialogSubmit: "OK"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "Niveau {level}",
        accessibleRowDescription: "Niveau {level}, række {num} af {total}",
        accessibleRowExpanded: "Række udvidet",
        accessibleRowCollapsed: "Række skjult",
        accessibleStateExpanded: "udvidet",
        accessibleStateCollapsed: "skjult"
    },
    "oj-ojListView": {
        msgFetchingData: "Henter data...",
        msgNoData: "Ingen elementer at vise.",
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        accessibleReorderTouchInstructionText: "Dobbelttryk, og hold nede. Vent, indtil du hører en lyd, og træk derefter for at omarrangere.",
        accessibleReorderBeforeItem: "Før {item}",
        accessibleReorderAfterItem: "Efter {item}",
        accessibleReorderInsideItem: "Ind i {item}",
        accessibleNavigateSkipItems: "Springer {numSkip} elementer over",
        labelCut: "Klip",
        labelCopy: "Kopier",
        labelPaste: "Sæt ind",
        labelPasteBefore: "Sæt ind før",
        labelPasteAfter: "Sæt ind efter"
    },
    "oj-_ojLabel": {
        tooltipHelp: "Hjælp",
        tooltipRequired: "Påkrævet"
    },
    "oj-ojLabel": {
        tooltipHelp: "Hjælp",
        tooltipRequired: "Påkrævet"
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
        tooltipDecrement: "Formindsk",
        tooltipIncrement: "Forøg"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "Handle til topvalg",
        labelAccSelectionAffordanceBottom: "Handle til bundvalg",
        labelEnableNonContiguousSelection: "Aktiver ikke-sammenhængende valg",
        labelDisableNonContiguousSelection: "Deaktiver ikke-sammenhængende valg",
        labelResize: "Tilpas",
        labelResizePopupSubmit: "OK",
        labelResizePopupSpinner: "Tilpas størrelse på kolonne",
        labelSelectRow: "Vælg række",
        labelEditRow: "Redigér række",
        labelSelectAndEditRow: "Vælg, og rediger række",
        labelSelectColumn: "Vælg kolonne",
        labelSort: "Sorter",
        labelSortAsc: "Sorter i stigende rækkefølge",
        labelSortDsc: "Sorter i faldende rækkefølge",
        msgFetchingData: "Henter data...",
        msgNoData: "Ingen data at vise.",
        msgInitializing: "Initialiserer...",
        msgColumnResizeWidthValidation: "Breddeværdien skal være et heltal.",
        msgScrollPolicyMaxCountSummary: "Overskredet maksimum for tabelrulning",
        msgScrollPolicyMaxCountDetail: "Genindlæs med mindre datasæt",
        msgStatusSortAscending: "{0} sorteret i stigende rækkefølge.",
        msgStatusSortDescending: "{0} sorteret i faldende rækkefølge."
    },
    "oj-ojTabs": {
        labelCut: "Klip",
        labelPasteBefore: "Sæt ind før",
        labelPasteAfter: "Sæt ind efter",
        labelRemove: "Fjern\t",
        labelReorder: "Reorganiser",
        removeCueText: "Kan fjernes"
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
        searchField: "Søgefelt",
        noMatchesFound: "Ingen matchninger blev fundet",
        oneMatchesFound: "Én matchning blev fundet",
        moreMatchesFound: "{num} matches fundet",
        filterFurther: "Flere resultater er tilgængelige. Filtrer yderligere."
    },
    "oj-ojSwitch": {
        SwitchON: "Til",
        SwitchOFF: "Fra"
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "Ingen matchninger blev fundet",
        filterFurther: "Flere resultater er tilgængelige. Filtrer yderligere."
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "Ingen matchninger blev fundet",
        oneMatchesFound: "Én matchning blev fundet",
        moreMatchesFound: "{num} matches fundet"
    },
    "oj-ojTree": {
        stateLoading: "Indlæser...",
        labelNewNode: "Ny node",
        labelMultiSelection: "Flere valg",
        labelEdit: "Rediger",
        labelCreate: "Opret ",
        labelCut: "Klip",
        labelCopy: "Kopier",
        labelPaste: "Sæt ind",
        labelPasteAfter: "Sæt ind efter",
        labelPasteBefore: "Sæt ind før",
        labelRemove: "Fjern\t",
        labelRename: "Omdøb",
        labelNoData: "Ingen data"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "Sideinddeling",
        labelAccNavFirstPage: "Første side",
        labelAccNavLastPage: "Sidste side",
        labelAccNavNextPage: "Næste side",
        labelAccNavPreviousPage: "Forrige side",
        labelAccNavPage: "Side",
        labelLoadMore: "Vis flere...",
        labelLoadMoreMaxRows: "Nåede den maksimale grænse på {maxRows} rækker",
        labelNavInputPage: "Side",
        labelNavInputPageMax: "af {pageMax}",
        msgItemRangeCurrent: "{pageFrom}-{pageTo}",
        msgItemRangeCurrentSingle: "{pageFrom}",
        msgItemRangeOf: "af",
        msgItemRangeOfAtLeast: "af mindst",
        msgItemRangeOfApprox: "af cirka",
        msgItemRangeItems: "elementer",
        tipNavInputPage: "Gå til side",
        tipNavPageLink: "Gå til side {pageNum}",
        tipNavNextPage: "Næste",
        tipNavPreviousPage: "Forrige",
        tipNavFirstPage: "Første",
        tipNavLastPage: "Sidste",
        pageInvalid: {
            summary: "Den indtastede sideværdi er ugyldig.",
            detail: "Indtast en værdi, der er større end 0."
        },
        maxPageLinksInvalid: {
            summary: "Værdi for maxPageLinks er ugyldig.",
            detail: "Indtast en værdi, der er større end 4."
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "Klip",
        labelPasteBefore: "Sæt ind før",
        labelPasteAfter: "Sæt ind efter"
    },
    "oj-panel": {
        labelAccButtonExpand: "Udvid",
        labelAccButtonCollapse: "Skjul",
        labelAccButtonRemove: "Fjern\t"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "Gruppe {0}",
        labelSeries: "Serier",
        labelGroup: "Gruppe",
        labelDate: "Dato",
        labelValue: "Værdi",
        labelTargetValue: "Mål",
        labelX: "X",
        labelY: "Y",
        labelZ: "Z",
        labelPercentage: "Procent",
        labelLow: "Lav",
        labelHigh: "Høj",
        labelOpen: "Åbn",
        labelClose: "Luk",
        labelVolume: "Volumen",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "Min.",
        labelMax: "Maks.",
        labelOther: "Anden",
        tooltipPan: "Panorer",
        tooltipSelect: "Marquee-valg",
        tooltipZoom: "Marquee-zoom",
        componentName: "Diagram"
    },
    "oj-dvtBaseGauge": {
        componentName: "Måler"
    },
    "oj-ojDiagram": {
        promotedLink: "{0} link",
        promotedLinks: "{0} links",
        promotedLinkAriaDesc: "Indirekte",
        componentName: "Diagram"
    },
    "oj-ojGantt": {
        componentName: "Gantt",
        accessibleDurationDays: "{0} dage",
        accessibleDurationHours: "{0} timer",
        accessibleTaskInfo: "Starttidspunkt er {0}, sluttidspunkt er {1}, varighed er {2}",
        accessibleMilestoneInfo: "Tid er {0}",
        accessibleRowInfo: "Række {0}",
        accessibleTaskTypeMilestone: "Milepæl",
        accessibleTaskTypeSummary: "Oversigt",
        accessiblePredecessorInfo: "{0} forgængere",
        accessibleSuccessorInfo: "{0} efterfølgere",
        accessibleDependencyInfo: "Afhængighedstypen {0}, forbinder{1} med {2}",
        startStartDependencyAriaDesc: "start til start",
        startFinishDependencyAriaDesc: "start til slut",
        finishStartDependencyAriaDesc: "slut til start",
        finishFinishDependencyAriaDesc: "slut til slut",
        tooltipZoomIn: "Zoom ind",
        tooltipZoomOut: "Zoom ud",
        labelRow: "Række",
        labelStart: "Start",
        labelEnd: "Slut",
        labelDate: "Dato",
        labelBaselineStart: "Baselinestart",
        labelBaselineEnd: "Baselineslut",
        labelBaselineDate: "Baselinedato",
        labelLabel: "Label",
        labelProgress: "Status",
        labelMoveBy: "Flyt med",
        taskMoveInitiated: "Flytning af opgave igangsat",
        taskMoveSelectionInfo: "{0} andre valgt",
        taskMoveInitiatedInstruction: "Brug piletasterne til at flytte med",
        taskMoveFinalized: "Flytning af opgave afsluttet",
        taskMoveCancelled: "Flytning af opgave annulleret"
    },
    "oj-ojLegend": {
        componentName: "Forklaring"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "Anden",
        labelGroup: "Gruppe",
        labelSize: "Størrelse",
        labelAdditionalData: "Yderligere data",
        componentName: "NBox"
    },
    "oj-ojPictoChart": {
        componentName: "Billeddiagram"
    },
    "oj-ojSparkChart": {
        componentName: "Diagram"
    },
    "oj-ojSunburst": {
        labelColor: "Farve",
        labelSize: "Størrelse",
        tooltipExpand: "Udvid",
        tooltipCollapse: "Skjul",
        componentName: "Solstrålediagram"
    },
    "oj-ojTagCloud": {
        componentName: "Tag-sky"
    },
    "oj-ojThematicMap": {
        componentName: "Tematisk kort"
    },
    "oj-ojTimeAxis": {
        componentName: "Tidsakse"
    },
    "oj-ojTimeline": {
        componentName: "Tidslinje",
        accessibleItemDesc: "Beskrivelse er {0}.",
        accessibleItemEnd: "Sluttidspunkt er {0}.",
        accessibleItemStart: "Starttidspunkt er {0}.",
        accessibleItemTitle: "Titel er {0}.",
        labelSeries: "Serier",
        tooltipZoomIn: "Zoom ind",
        tooltipZoomOut: "Zoom ud"
    },
    "oj-ojTreemap": {
        labelColor: "Farve",
        labelSize: "Størrelse",
        tooltipIsolate: "Isoler",
        tooltipRestore: "Gendan",
        componentName: "Trædiagram"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "K",
        labelScalingSuffixMillion: "M",
        labelScalingSuffixBillion: "Md",
        labelScalingSuffixTrillion: "B",
        labelScalingSuffixQuadrillion: "K",
        labelInvalidData: "Ugyldige data",
        labelNoData: "Ingen data at vise",
        labelClearSelection: "Ryd valg",
        labelDataVisualization: "Datavisualisering",
        stateSelected: "Valgt",
        stateUnselected: "Ikke-valgt",
        stateMaximized: "Maksimeret",
        stateMinimized: "Minimeret",
        stateExpanded: "Udvidet",
        stateCollapsed: "Skjult",
        stateIsolated: "Isoleret",
        stateHidden: "Skjult",
        stateVisible: "Synlig",
        stateDrillable: "Kan bores",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "{0} af {1}"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "Navigationsliste",
        hierMenuBtnLabel: "Knappen Hierarkisk menu",
        selectedLabel: "valgt",
        previousIcon: "Forrige",
        msgFetchingData: "Henter data...",
        msgNoData: "Ingen elementer at vise.",
        overflowItemLabel: "Mere",
        accessibleReorderTouchInstructionText: "Dobbelttryk, og hold nede. Vent, indtil du hører en lyd, og træk derefter for at omarrangere.",
        accessibleReorderBeforeItem: "Før {item}",
        accessibleReorderAfterItem: "Efter {item}",
        labelCut: "Klip",
        labelPasteBefore: "Sæt ind før",
        labelPasteAfter: "Sæt ind efter",
        labelRemove: "Fjern\t",
        removeCueText: "Kan fjernes"
    },
    "oj-ojSlider": {
        noValue: "ojSlider har  ingen værdi",
        maxMin: "Maks. må ikke være mindre end eller lig med min.",
        valueRange: "Værdi skal være inden for min. til maks.-intervallet",
        optionNum: "Valget {option} er ikke et tal",
        invalidStep: "Ugyldigt trin, trin skal være > 0"
    },
    "oj-ojDialog": {
        labelCloseIcon: "Luk"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "Åbner pop-op. Tryk på F6 for at navigere mellem pop-op og det tilknyttede kontrolelement.",
        ariaLiveRegionInitialFocusNone: "Pop-op er åben. Tryk på F6 for at navigere mellem pop-op og det tilknyttede kontrolelement.",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "Åbner pop-op. Pop-op kan lukkes ved at navigeret til det sidste link i pop-op-vinduet.",
        ariaLiveRegionInitialFocusNoneTouch: "Pop-op er åben. Naviger til det næste link for at etablere fokus i pop-op-vinduet.",
        ariaFocusSkipLink: "Dobbelttryk for at navigere til det åbne pop-op-vindue.",
        ariaCloseSkipLink: "Dobbelttryk for at lukke det åbne pop-op-vindue."
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "Aktiver link for at opfriske indhold",
        ariaRefreshingLink: "Opfrisker indhold",
        ariaRefreshCompleteLink: "Opfriskning er fuldført"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "Vis starthandlinger",
        ariaShowEndActionsDescription: "Vis sluthandlinger",
        ariaHideActionsDescription: "Skjul handlinger"
    },
    "oj-ojIndexer": {
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        indexerOthers: "#",
        ariaDisabledLabel: "Ingen matchende gruppeoverskrift",
        ariaOthersLabel: "tal",
        ariaInBetweenText: "Mellem {first} og {second}",
        ariaKeyboardInstructionText: "Tryk på Enter for at vælge en værdi.",
        ariaTouchInstructionText: "Dobbelttryk og hold for at aktivere bevægelsestilstand. Træk derefter op eller ned for at justere værdien."
    },
    "oj-ojMenu": {
        labelCancel: "Annuller"
    },
    "oj-ojColorSpectrum": {
        labelHue: "Nuance",
        labelOpacity: "Gennemsigtighed",
        labelSatLum: "Mætning/luminans",
        labelThumbDesc: "4-vejs skyder til farvespektrum."
    },
    "oj-ojColorPalette": {
        labelNone: "Ingen"
    },
    "oj-ojColorPicker": {
        labelSwatches: "Farveprøver",
        labelCustomColors: "Tilpassede farver",
        labelPrevColor: "Forrige farve",
        labelDefColor: "Standardfarve",
        labelDelete: "Slet",
        labelDeleteQ: "Slet?",
        labelAdd: "Tilføj",
        labelAddColor: "Tilføj farve",
        labelMenuHex: "HEX",
        labelMenuRgba: "RGBa",
        labelMenuHsla: "HSLa",
        labelSliderHue: "Nuance",
        labelSliderSaturation: "Mætning",
        labelSliderSat: "Mætn.",
        labelSliderLightness: "Lyshed",
        labelSliderLum: "Lysstyrke",
        labelSliderAlpha: "Alfa",
        labelOpacity: "Gennemsigtighed",
        labelSliderRed: "Rød",
        labelSliderGreen: "Grøn",
        labelSliderBlue: "Blå"
    },
    "oj-ojFilePicker": {
        dropzoneText: "Drop filer her, eller klik for at uploade"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "I gang"
    },
    "oj-ojMessage": {
        labelCloseIcon: "Luk",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "Meddelelser",
        ariaLiveRegion: {
            navigationFromKeyboard: "Åbner meddelelsesområde. Tryk på F6 for at navigere tilbage til tidligere fokuseret element.",
            navigationToTouch: "Meddelelsesområde har nye meddelelser. Brug stemmeindtalingshjulet for at navigere til meddelelseslandemærket.",
            navigationToKeyboard: "Meddelelsesområde har nye meddelelser. Tryk på F6 for at navigere til det seneste meddelelsesområde.",
            newMessage: "Meddelelseskategori {category}. {summary}."
        }
    }
});