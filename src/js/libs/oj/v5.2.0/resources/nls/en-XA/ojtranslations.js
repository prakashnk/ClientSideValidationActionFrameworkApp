define({
    "oj-message": {
        fatal: "[PX][Fatal é]",
        error: "[PX][Error é]",
        warning: "[PX][Warning é]",
        info: "[PX][Info é]",
        confirmation: "[PX][Confirmation é]",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "[PX][Value is not in the expected format. éëžéë]",
        detail: "[PX][Enter a value in the expected format. éëžéëž]",
        "plural-separator": ", ",
        hint: {
            summary: "[PX][Example: {exampleValue} é]",
            detail: "[PX][Enter a value in the same format as this example: '{exampleValue}'. éëžéëžéëžéëžéëž]",
            "detail-plural": "[PX][Enter a value in the same format as these examples: '{exampleValue}'. éëžéëžéëžéëžéëž]"
        },
        optionHint: {
            detail: "[PX][An accepted value for option '{propertyName}' is '{propertyValueValid}'. éëžéëžéëžéëžéëžé]",
            "detail-plural": "[PX][Accepted values for option '{propertyName}' are '{propertyValueValid}'. éëžéëžéëžéëžéëžé]"
        },
        optionTypesMismatch: {
            summary: "[PX][A value for the option '{requiredPropertyName}' is required when the option '{propertyName}' is set to '{propertyValue}'. éëžéëžéëžéëžéëžéëžéëžéëžéëžéëžé]"
        },
        optionTypeInvalid: {
            summary: "[PX][A value of the expected type was not provided for option '{propertyName}'. éëžéëžéëžéëžéëžéë]"
        },
        optionOutOfRange: {
            summary: "[PX][Value {propertyValue} is out of range for the option '{propertyName}'. éëžéëžéëžéëžéëžé]"
        },
        optionValueInvalid: {
            summary: "[PX][An invalid value '{propertyValue}' was specified for the option '{propertyName}'. éëžéëžéëžéëžéëžéëžé]"
        },
        number: {
            decimalFormatMismatch: {
                summary: "[PX]['{value}' is not in the expected number format. éëžéëžéëž]"
            },
            shortLongUnsupportedParse: {
                summary: "[PX]['short' and 'long' are not supported for converter parsing. éëžéëžéëžéëž]",
                detail: "[PX][Change component to readonly. readonly fields do not call the converter's parse function. éëžéëžéëžéëžéëžéëžéëž]"
            },
            currencyFormatMismatch: {
                summary: "[PX]['{value}' is not in the expected currency format. éëžéëžéëž]"
            },
            percentFormatMismatch: {
                summary: "[PX]['{value}' is not in the expected percent format. éëžéëžéëž]"
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "[PX][Value '{value}' is out of range for the '{propertyName}'. éëžéëžéëžéëž]",
                detail: "[PX][Enter a value between '{minValue}' and '{maxValue}'. éëžéëžéëžé]",
                hour: "[PX][hour é]",
                minute: "[PX][minute é]",
                second: "[PX][second é]",
                millisec: "[PX][millisec é]",
                month: "[PX][month é]",
                day: "[PX][day é]",
                year: "[PX][year é]",
                "month name": "[PX][month name é]",
                weekday: "[PX][weekday é]"
            },
            dateFormatMismatch: {
                summary: "[PX]['{value}' is not in the expected date format. éëžéëžéë]"
            },
            invalidTimeZoneID: {
                summary: "[PX][Invalid timezone id {timeZoneID} provided. éëžéëžé]"
            },
            nonExistingTime: {
                summary: "[PX][The input time does not exist because it falls during the transition to daylight saving time. éëžéëžéëžéëžéëžéëžéëžé]"
            },
            missingTimeZoneData: {
                summary: "[PX][TimeZone data is missing. Please call require 'ojs/ojtimezonedata' in order to load the TimeZone data. éëžéëžéëžéëžéëžéëžéëžéëžé]"
            },
            timeFormatMismatch: {
                summary: "[PX]['{value}' is not in the expected time format. éëžéëžéë]"
            },
            datetimeFormatMismatch: {
                summary: "[PX]['{value}' is not in the expected date and time format. éëžéëžéëžéë]"
            },
            dateToWeekdayMismatch: {
                summary: "[PX][Day '{date}' does not fall on a '{weekday}'. éëžéëžéë]",
                detail: "[PX][Enter a weekday that corresponds with the date. éëžéëžéëž]"
            },
            invalidISOString: {
                summary: "[PX][The provided '{isoStr}' is not a valid ISO 8601 string. éëžéëžéëžéë]",
                detail: "[PX][Please provide valid ISO 8601 string. éëžéëž]"
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "[PX][Enter {min} or more characters. éëžé]",
                max: "[PX][Enter {max} or fewer characters. éëžé]",
                inRange: "[PX][Enter {min} or more characters, up to a maximum of {max}. éëžéëžéëžéëž]",
                exact: "[PX][Enter {length} characters. éë]"
            },
            messageDetail: {
                tooShort: "[PX][Enter {min} or more characters, not fewer. éëžéëžé]",
                tooLong: "[PX][Enter {max} or fewer characters, not more. éëžéëžé]"
            },
            messageSummary: {
                tooShort: "[PX][There are too few characters. éëž]",
                tooLong: "[PX][There are too many characters. éëžé]"
            }
        },
        range: {
            number: {
                hint: {
                    min: "[PX][Enter a number greater than or equal to {min}. éëžéëžéë]",
                    max: "[PX][Enter a number less than or equal to {max}. éëžéëžé]",
                    inRange: "[PX][Enter a number between {min} and {max}. éëžéëž]",
                    exact: "[PX][Enter the number {num}. é]"
                },
                messageDetail: {
                    rangeUnderflow: "[PX][The number must be greater than or equal to {min}. éëžéëžéëžé]",
                    rangeOverflow: "[PX][The number must be less than or equal to {max}. éëžéëžéëž]",
                    exact: "[PX][The number must be {num}. éë]"
                },
                messageSummary: {
                    rangeUnderflow: "[PX][The number is too low. é]",
                    rangeOverflow: "[PX][The number is too high. é]"
                }
            },
            datetime: {
                hint: {
                    min: "[PX][Enter a date and time on or after {min}. éëžéëžé]",
                    max: "[PX][Enter a date and time on or before {max}. éëžéëžé]",
                    inRange: "[PX][Enter a date and time between {min} and {max}. éëžéëžéë]"
                },
                messageDetail: {
                    rangeUnderflow: "[PX][Date and time must be on or later than {min}. éëžéëžéë]",
                    rangeOverflow: "[PX][Date and time must be on or sooner than {max}. éëžéëžéë]"
                },
                messageSummary: {
                    rangeUnderflow: "[PX][Date and time is earlier than the minimum date and time. éëžéëžéëžéë]",
                    rangeOverflow: "[PX][Date and time is later than the maximum date and time. éëžéëžéëžéë]"
                }
            },
            date: {
                hint: {
                    min: "[PX][Enter a date on or after {min}. éëžé]",
                    max: "[PX][Enter a date on or before {max}. éëžé]",
                    inRange: "[PX][Enter a date between {min} and {max}. éëžéëž]"
                },
                messageDetail: {
                    rangeUnderflow: "[PX][Date must be on or later than {min}. éëžéë]",
                    rangeOverflow: "[PX][Date must be on or sooner than {max}. éëžéëž]"
                },
                messageSummary: {
                    rangeUnderflow: "[PX][Date is earlier than the minimum date. éëžéëž]",
                    rangeOverflow: "[PX][Date is later than the maximum date. éëžéë]"
                }
            },
            time: {
                hint: {
                    min: "[PX][Enter a time on or after {min}. éëžé]",
                    max: "[PX][Enter a time on or before {max}. éëžé]",
                    inRange: "[PX][Enter a time between {min} and {max}. éëžéëž]"
                },
                messageDetail: {
                    rangeUnderflow: "[PX][Time must be on or later than {min}. éëžéë]",
                    rangeOverflow: "[PX][Time must be on or sooner than {max}. éëžéëž]"
                },
                messageSummary: {
                    rangeUnderflow: "[PX][Time is earlier than the minimum time. éëžéëž]",
                    rangeOverflow: "[PX][Time is later than the maximum time. éëžéë]"
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "[PX][Date {value} is of a disabled entry. éëžéë]",
                messageDetail: "[PX][Date {value} should not be of a disabled entry. éëžéëžéëž]"
            }
        },
        regExp: {
            summary: "[PX][Format is incorrect. é]",
            detail: "[PX][Value '{value}' must match this pattern: '{pattern}'. éëžéëžéëžé]"
        },
        required: {
            summary: "[PX][Value is required. é]",
            detail: "[PX][You must enter a value. é]"
        }
    },
    "oj-ojInputDate": {
        done: "[PX][Done é]",
        cancel: "[PX][Cancel é]",
        prevText: "[PX][Prev é]",
        nextText: "[PX][Next é]",
        currentText: "[PX][Today é]",
        weekHeader: "[PX][Wk é]",
        tooltipCalendar: "[PX][Select Date. é]",
        tooltipCalendarTime: "[PX][Select Date Time. é]",
        tooltipCalendarDisabled: "[PX][Select Date Disabled. é]",
        tooltipCalendarTimeDisabled: "[PX][Select Date Time Disabled. éë]",
        picker: "[PX][Picker é]",
        weekText: "[PX][Week é]",
        datePicker: "[PX][Date Picker é]",
        inputHelp: "[PX][Press Key down or Key up for access to Calendar. éëžéëžéëž]",
        inputHelpBoth: "[PX][Press Key down or Key up for access to Calendar and Shift + Key down or Shift Key up for access to time drop down. éëžéëžéëžéëžéëžéëžéëžéëžéëžéë]",
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
        cancelText: "[PX][Cancel é]",
        okText: "[PX][OK é]",
        currentTimeText: "[PX][Now é]",
        hourWheelLabel: "[PX][Hour é]",
        minuteWheelLabel: "[PX][Minute é]",
        ampmWheelLabel: "[PX][AMPM é]",
        tooltipTime: "[PX][Select Time. é]",
        tooltipTimeDisabled: "[PX][Select Time Disabled. é]",
        inputHelp: "[PX][Press Key down or Key up for access to time drop down. éëžéëžéëžéë]",
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
            messageDetail: "[PX][Value must match this pattern: '{pattern}'. éëžéëžé]"
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "[PX][Displaying page {pageIndex} of {pageCount} éëžéëžé]",
        labelAccArrowNextPage: "[PX][Select Next to display next page éëžé]",
        labelAccArrowPreviousPage: "[PX][Select Previous to display previous page éëžéëžé]",
        tipArrowNextPage: "[PX][Next é]",
        tipArrowPreviousPage: "[PX][Previous é]"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "[PX][{id} sorted in ascending order éëžé]",
        accessibleSortDescending: "[PX][{id} sorted in descending order éëžé]",
        accessibleActionableMode: "[PX][Enter actionable mode. é]",
        accessibleNavigationMode: "[PX][Enter navigation mode, press F2 to enter edit or actionable mode. éëžéëžéëžéëžéë]",
        accessibleEditableMode: "[PX][Enter editable mode, press escape to navigate outside the data grid. éëžéëžéëžéëžéëž]",
        accessibleSummaryExact: "[PX][This is a data grid with {rownum} rows and {colnum} columns éëžéëžéëžéëž]",
        accessibleSummaryEstimate: "[PX][This is a data grid with unknown number of rows and columns éëžéëžéëžéëž]",
        accessibleSummaryExpanded: "[PX][There are currently {num} rows expanded éëžéëž]",
        accessibleRowExpanded: "[PX][Row expanded é]",
        accessibleRowCollapsed: "[PX][Row collapsed é]",
        accessibleRowSelected: "[PX][Row {row} selected é]",
        accessibleColumnSelected: "[PX][Column {column} selected éë]",
        accessibleStateSelected: "[PX][selected é]",
        accessibleMultiCellSelected: "[PX][{num} cells selected é]",
        accessibleColumnSpanContext: "[PX][{extent} wide é]",
        accessibleRowSpanContext: "[PX][{extent} high é]",
        accessibleRowContext: "[PX][Row {index} é]",
        accessibleColumnContext: "[PX][Column {index} é]",
        accessibleRowHeaderContext: "[PX][Row Header {index} é]",
        accessibleColumnHeaderContext: "[PX][Column Header {index} é]",
        accessibleRowEndHeaderContext: "[PX][Row End Header {index} é]",
        accessibleColumnEndHeaderContext: "[PX][Column End Header {index} éë]",
        accessibleLevelContext: "[PX][Level {level} é]",
        accessibleRangeSelectModeOn: "[PX][Add selected range of cells mode on. éëžéë]",
        accessibleRangeSelectModeOff: "[PX][Add selected range of cells mode off. éëžéëž]",
        accessibleFirstRow: "[PX][You have reached the first row. éëžé]",
        accessibleLastRow: "[PX][You have reached the last row. éëžé]",
        accessibleFirstColumn: "[PX][You have reached the first column éëžé]",
        accessibleLastColumn: "[PX][You have reached the last column. éëžé]",
        accessibleSelectionAffordanceTop: "[PX][Top selection handle. é]",
        accessibleSelectionAffordanceBottom: "[PX][Bottom selection handle. éë]",
        msgFetchingData: "[PX][Fetching Data... é]",
        msgNoData: "[PX][No items to display. é]",
        labelResize: "[PX][Resize é]",
        labelResizeWidth: "[PX][Resize Width é]",
        labelResizeHeight: "[PX][Resize Height é]",
        labelSortRow: "[PX][Sort Row é]",
        labelSortRowAsc: "[PX][Sort Row Ascending é]",
        labelSortRowDsc: "[PX][Sort Row Descending é]",
        labelSortCol: "[PX][Sort Column é]",
        labelSortColAsc: "[PX][Sort Column Ascending é]",
        labelSortColDsc: "[PX][Sort Column Descending é]",
        labelCut: "[PX][Cut é]",
        labelPaste: "[PX][Paste é]",
        labelEnableNonContiguous: "[PX][Enable Non-Contiguous Selection éëžé]",
        labelDisableNonContiguous: "[PX][Disable Non-Contiguous Selection éëžé]",
        labelResizeDialogSubmit: "[PX][OK é]"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "[PX][Level {level} é]",
        accessibleRowDescription: "[PX][Level {level}, Row {num} of {total} éëžéë]",
        accessibleRowExpanded: "[PX][Row expanded é]",
        accessibleRowCollapsed: "[PX][Row collapsed é]",
        accessibleStateExpanded: "[PX][expanded é]",
        accessibleStateCollapsed: "[PX][collapsed é]"
    },
    "oj-ojListView": {
        msgFetchingData: "[PX][Fetching Data... é]",
        msgNoData: "[PX][No items to display. é]",
        indexerCharacters: "[PX][A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z éëžéëžéëžé]",
        accessibleReorderTouchInstructionText: "[PX][Double tap and hold.  Wait for the sound then drag to rearrange. éëžéëžéëžéëžéë]",
        accessibleReorderBeforeItem: "[PX][Before {item} é]",
        accessibleReorderAfterItem: "[PX][After {item} é]",
        accessibleReorderInsideItem: "[PX][Into {item} é]",
        accessibleNavigateSkipItems: "[PX][Skipping {numSkip} items éë]",
        labelCut: "[PX][Cut é]",
        labelCopy: "[PX][Copy é]",
        labelPaste: "[PX][Paste é]",
        labelPasteBefore: "[PX][Paste Before é]",
        labelPasteAfter: "[PX][Paste After é]"
    },
    "oj-_ojLabel": {
        tooltipHelp: "[PX][Help é]",
        tooltipRequired: "[PX][Required é]"
    },
    "oj-ojLabel": {
        tooltipHelp: "[PX][Help é]",
        tooltipRequired: "[PX][Required é]"
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
        tooltipDecrement: "[PX][Decrement é]",
        tooltipIncrement: "[PX][Increment é]"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "[PX][Top selection handle é]",
        labelAccSelectionAffordanceBottom: "[PX][Bottom selection handle é]",
        labelEnableNonContiguousSelection: "[PX][Enable Non-Contiguous Selection éëžé]",
        labelDisableNonContiguousSelection: "[PX][Disable Non-Contiguous Selection éëžé]",
        labelResize: "[PX][Resize é]",
        labelResizePopupSubmit: "[PX][OK é]",
        labelResizePopupSpinner: "[PX][Resize Column é]",
        labelSelectRow: "[PX][Select Row é]",
        labelEditRow: "[PX][Edit Row é]",
        labelSelectAndEditRow: "[PX][Select And Edit Row é]",
        labelSelectColumn: "[PX][Select Column é]",
        labelSort: "[PX][Sort é]",
        labelSortAsc: "[PX][Sort Ascending é]",
        labelSortDsc: "[PX][Sort Descending é]",
        msgFetchingData: "[PX][Fetching Data... é]",
        msgNoData: "[PX][No data to display. é]",
        msgInitializing: "[PX][Initializing... é]",
        msgColumnResizeWidthValidation: "[PX][Width value must be an integer. éëžé]",
        msgScrollPolicyMaxCountSummary: "[PX][Exceeded maximum rows for table scrolling. éëžéëžé]",
        msgScrollPolicyMaxCountDetail: "[PX][Please reload with smaller data set. éëžéë]",
        msgStatusSortAscending: "[PX][{0} sorted in ascending order. éëžé]",
        msgStatusSortDescending: "[PX][{0} sorted in descending order. éëžé]"
    },
    "oj-ojTabs": {
        labelCut: "[PX][Cut é]",
        labelPasteBefore: "[PX][Paste Before é]",
        labelPasteAfter: "[PX][Paste After é]",
        labelRemove: "[PX][Remove é]",
        labelReorder: "[PX][Reorder é]",
        removeCueText: "[PX][Removable é]"
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
        searchField: "[PX][Search field é]",
        noMatchesFound: "[PX][No matches found é]",
        oneMatchesFound: "[PX][One match found é]",
        moreMatchesFound: "[PX][{num} matches found é]",
        filterFurther: "[PX][More results available, please filter further. éëžéëžéë]"
    },
    "oj-ojSwitch": {
        SwitchON: "[PX][On é]",
        SwitchOFF: "[PX][Off é]"
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "[PX][No matches found é]",
        filterFurther: "[PX][More results available, please filter further. éëžéëžéë]"
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "[PX][No matches found é]",
        oneMatchesFound: "[PX][One match found é]",
        moreMatchesFound: "[PX][{num} matches found é]"
    },
    "oj-ojTree": {
        stateLoading: "[PX][Loading... é]",
        labelNewNode: "[PX][New Node é]",
        labelMultiSelection: "[PX][Multiple Selection é]",
        labelEdit: "[PX][Edit é]",
        labelCreate: "[PX][Create é]",
        labelCut: "[PX][Cut é]",
        labelCopy: "[PX][Copy é]",
        labelPaste: "[PX][Paste é]",
        labelPasteAfter: "[PX][Paste After é]",
        labelPasteBefore: "[PX][Paste Before é]",
        labelRemove: "[PX][Remove é]",
        labelRename: "[PX][Rename é]",
        labelNoData: "[PX][No data é]"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "[PX][Pagination é]",
        labelAccNavFirstPage: "[PX][First Page é]",
        labelAccNavLastPage: "[PX][Last Page é]",
        labelAccNavNextPage: "[PX][Next Page é]",
        labelAccNavPreviousPage: "[PX][Previous Page é]",
        labelAccNavPage: "[PX][Page é]",
        labelLoadMore: "[PX][Show More... é]",
        labelLoadMoreMaxRows: "[PX][Reached Maximum Limit of {maxRows} rows éëžéëž]",
        labelNavInputPage: "[PX][Page é]",
        labelNavInputPageMax: "[PX][of {pageMax} é]",
        msgItemRangeCurrent: "[PX][{pageFrom}-{pageTo} é]",
        msgItemRangeCurrentSingle: "[PX][{pageFrom} é]",
        msgItemRangeOf: "[PX][of é]",
        msgItemRangeOfAtLeast: "[PX][of at least é]",
        msgItemRangeOfApprox: "[PX][of approx. é]",
        msgItemRangeItems: "[PX][items é]",
        tipNavInputPage: "[PX][Go To Page é]",
        tipNavPageLink: "[PX][Go To Page {pageNum} é]",
        tipNavNextPage: "[PX][Next é]",
        tipNavPreviousPage: "[PX][Previous é]",
        tipNavFirstPage: "[PX][First é]",
        tipNavLastPage: "[PX][Last é]",
        pageInvalid: {
            summary: "[PX][The page value entered is invalid. éëžéë]",
            detail: "[PX][Please enter a value greater than 0. éëžéë]"
        },
        maxPageLinksInvalid: {
            summary: "[PX][Value for maxPageLinks is invalid. éëžéë]",
            detail: "[PX][Please enter a value greater than 4. éëžéë]"
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "[PX][Cut é]",
        labelPasteBefore: "[PX][Paste Before é]",
        labelPasteAfter: "[PX][Paste After é]"
    },
    "oj-panel": {
        labelAccButtonExpand: "[PX][Expand é]",
        labelAccButtonCollapse: "[PX][Collapse é]",
        labelAccButtonRemove: "[PX][Remove é]"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "[PX][Group {0} é]",
        labelSeries: "[PX][Series é]",
        labelGroup: "[PX][Group é]",
        labelDate: "[PX][Date é]",
        labelValue: "[PX][Value é]",
        labelTargetValue: "[PX][Target é]",
        labelX: "[PX][X é]",
        labelY: "[PX][Y é]",
        labelZ: "[PX][Z é]",
        labelPercentage: "[PX][Percentage é]",
        labelLow: "[PX][Low é]",
        labelHigh: "[PX][High é]",
        labelOpen: "[PX][Open é]",
        labelClose: "[PX][Close é]",
        labelVolume: "[PX][Volume é]",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "[PX][Min é]",
        labelMax: "[PX][Max é]",
        labelOther: "[PX][Other é]",
        tooltipPan: "[PX][Pan é]",
        tooltipSelect: "[PX][Marquee select é]",
        tooltipZoom: "[PX][Marquee zoom é]",
        componentName: "[PX][Chart é]"
    },
    "oj-dvtBaseGauge": {
        componentName: "[PX][Gauge é]"
    },
    "oj-ojDiagram": {
        promotedLink: "[PX][{0} link é]",
        promotedLinks: "[PX][{0} links é]",
        promotedLinkAriaDesc: "[PX][Indirect é]",
        componentName: "[PX][Diagram é]"
    },
    "oj-ojGantt": {
        componentName: "[PX][Gantt é]",
        accessibleDurationDays: "[PX][{0} days é]",
        accessibleDurationHours: "[PX][{0} hours é]",
        accessibleTaskInfo: "[PX][Start time is {0}, end time is {1}, duration is {2} éëžéëžéëžé]",
        accessibleMilestoneInfo: "[PX][Time is {0} é]",
        accessibleRowInfo: "[PX][Row {0} é]",
        accessibleTaskTypeMilestone: "[PX][Milestone é]",
        accessibleTaskTypeSummary: "[PX][Summary é]",
        accessiblePredecessorInfo: "[PX][{0} predecessors é]",
        accessibleSuccessorInfo: "[PX][{0} successors é]",
        accessibleDependencyInfo: "[PX][Dependency type {0}, connects {1} to {2} éëžéëžé]",
        startStartDependencyAriaDesc: "[PX][start to start é]",
        startFinishDependencyAriaDesc: "[PX][start to finish é]",
        finishStartDependencyAriaDesc: "[PX][finish to start é]",
        finishFinishDependencyAriaDesc: "[PX][finish to finish é]",
        tooltipZoomIn: "[PX][Zoom In é]",
        tooltipZoomOut: "[PX][Zoom Out é]",
        labelRow: "[PX][Row é]",
        labelStart: "[PX][Start é]",
        labelEnd: "[PX][End é]",
        labelDate: "[PX][Date é]",
        labelBaselineStart: "[PX][Baseline Start é]",
        labelBaselineEnd: "[PX][Baseline End é]",
        labelBaselineDate: "[PX][Baseline Date é]",
        labelLabel: "[PX][Label é]",
        labelProgress: "[PX][Progress é]",
        labelMoveBy: "[PX][Move By é]",
        taskMoveInitiated: "[PX][Task move initiated é]",
        taskMoveSelectionInfo: "[PX][{0} others selected é]",
        taskMoveInitiatedInstruction: "[PX][Use the arrow keys to move éë]",
        taskMoveFinalized: "[PX][Task move finalized é]",
        taskMoveCancelled: "[PX][Task move cancelled é]"
    },
    "oj-ojLegend": {
        componentName: "[PX][Legend é]"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "[PX][Other é]",
        labelGroup: "[PX][Group é]",
        labelSize: "[PX][Size é]",
        labelAdditionalData: "[PX][Additional Data é]",
        componentName: "[PX][NBox é]"
    },
    "oj-ojPictoChart": {
        componentName: "[PX][Picture Chart é]"
    },
    "oj-ojSparkChart": {
        componentName: "[PX][Chart é]"
    },
    "oj-ojSunburst": {
        labelColor: "[PX][Color é]",
        labelSize: "[PX][Size é]",
        tooltipExpand: "[PX][Expand é]",
        tooltipCollapse: "[PX][Collapse é]",
        componentName: "[PX][Sunburst é]"
    },
    "oj-ojTagCloud": {
        componentName: "[PX][Tag Cloud é]"
    },
    "oj-ojThematicMap": {
        componentName: "[PX][Thematic Map é]"
    },
    "oj-ojTimeAxis": {
        componentName: "[PX][Time Axis é]"
    },
    "oj-ojTimeline": {
        componentName: "[PX][Timeline é]",
        accessibleItemDesc: "[PX][Description is {0}. é]",
        accessibleItemEnd: "[PX][End time is {0}. é]",
        accessibleItemStart: "[PX][Start time is {0}. é]",
        accessibleItemTitle: "[PX][Title is {0}. é]",
        labelSeries: "[PX][Series é]",
        tooltipZoomIn: "[PX][Zoom In é]",
        tooltipZoomOut: "[PX][Zoom Out é]"
    },
    "oj-ojTreemap": {
        labelColor: "[PX][Color é]",
        labelSize: "[PX][Size é]",
        tooltipIsolate: "[PX][Isolate é]",
        tooltipRestore: "[PX][Restore é]",
        componentName: "[PX][Treemap é]"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "[PX][K é]",
        labelScalingSuffixMillion: "[PX][M é]",
        labelScalingSuffixBillion: "[PX][B é]",
        labelScalingSuffixTrillion: "[PX][T é]",
        labelScalingSuffixQuadrillion: "[PX][Q é]",
        labelInvalidData: "[PX][Invalid data é]",
        labelNoData: "[PX][No data to display é]",
        labelClearSelection: "[PX][Clear Selection é]",
        labelDataVisualization: "[PX][Data Visualization é]",
        stateSelected: "[PX][Selected é]",
        stateUnselected: "[PX][Unselected é]",
        stateMaximized: "[PX][Maximized é]",
        stateMinimized: "[PX][Minimized é]",
        stateExpanded: "[PX][Expanded é]",
        stateCollapsed: "[PX][Collapsed é]",
        stateIsolated: "[PX][Isolated é]",
        stateHidden: "[PX][Hidden é]",
        stateVisible: "[PX][Visible é]",
        stateDrillable: "[PX][Drillable é]",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "[PX][{0} of {1} é]"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "[PX][Navigation List é]",
        hierMenuBtnLabel: "[PX][Hierarchical Menu button éë]",
        selectedLabel: "[PX][selected é]",
        previousIcon: "[PX][Previous é]",
        msgFetchingData: "[PX][Fetching Data... é]",
        msgNoData: "[PX][No items to display. é]",
        overflowItemLabel: "[PX][More é]",
        accessibleReorderTouchInstructionText: "[PX][Double tap and hold.  Wait for the sound then drag to rearrange. éëžéëžéëžéëžéë]",
        accessibleReorderBeforeItem: "[PX][Before {item} é]",
        accessibleReorderAfterItem: "[PX][After {item} é]",
        labelCut: "[PX][Cut é]",
        labelPasteBefore: "[PX][Paste Before é]",
        labelPasteAfter: "[PX][Paste After é]",
        labelRemove: "[PX][Remove é]",
        removeCueText: "[PX][Removable é]"
    },
    "oj-ojSlider": {
        noValue: "[PX][ojSlider has no value é]",
        maxMin: "[PX][Max must not be less than or equal to min éëžéëžé]",
        valueRange: "[PX][Value must be within min to max range éëžéëž]",
        optionNum: "[PX][{option} option is not a number éëžé]",
        invalidStep: "[PX][Invalid step; step must be > 0 éëžé]"
    },
    "oj-ojDialog": {
        labelCloseIcon: "[PX][Close é]"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "[PX][Entering pop-up. Press F6 to navigate between the pop-up and associated control. éëžéëžéëžéëžéëžéëžé]",
        ariaLiveRegionInitialFocusNone: "[PX][Pop-up opened. Press F6 to navigate between the pop-up and associated control. éëžéëžéëžéëžéëžéëž]",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "[PX][Entering pop-up. Pop-up can be closed by navigating to the last link within the pop-up. éëžéëžéëžéëžéëžéëžéëž]",
        ariaLiveRegionInitialFocusNoneTouch: "[PX][Pop-up opened.  Navigate to the next link to establish focus within the pop-up. éëžéëžéëžéëžéëžéëž]",
        ariaFocusSkipLink: "[PX][Double tap to navigate to the open pop-up. éëžéëžé]",
        ariaCloseSkipLink: "[PX][Double tap to close the open pop-up. éëžéë]"
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "[PX][Activate link to refresh content éëžé]",
        ariaRefreshingLink: "[PX][Refreshing content é]",
        ariaRefreshCompleteLink: "[PX][Refresh complete é]"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "[PX][Show start actions é]",
        ariaShowEndActionsDescription: "[PX][Show end actions é]",
        ariaHideActionsDescription: "[PX][Hide actions é]"
    },
    "oj-ojIndexer": {
        indexerCharacters: "[PX][A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z éëžéëžéëžé]",
        indexerOthers: "#",
        ariaDisabledLabel: "[PX][No matching group header éë]",
        ariaOthersLabel: "[PX][number é]",
        ariaInBetweenText: "[PX][Between {first} and {second} éëž]",
        ariaKeyboardInstructionText: "[PX][Press enter to select value. éëž]",
        ariaTouchInstructionText: "[PX][Double tap and hold to enter gesture mode, then drag up or down to adjust value. éëžéëžéëžéëžéëžéëžé]"
    },
    "oj-ojMenu": {
        labelCancel: "[PX][Cancel é]"
    },
    "oj-ojColorSpectrum": {
        labelHue: "[PX][Hue é]",
        labelOpacity: "[PX][Opacity é]",
        labelSatLum: "[PX][Saturation/Luminance é]",
        labelThumbDesc: "[PX][Color spectrum four way slider. éëžé]"
    },
    "oj-ojColorPalette": {
        labelNone: "[PX][None é]"
    },
    "oj-ojColorPicker": {
        labelSwatches: "[PX][Swatches é]",
        labelCustomColors: "[PX][Custom Colors é]",
        labelPrevColor: "[PX][Previous Color é]",
        labelDefColor: "[PX][Default Color é]",
        labelDelete: "[PX][Delete é]",
        labelDeleteQ: "[PX][Delete? é]",
        labelAdd: "[PX][Add é]",
        labelAddColor: "[PX][Add color é]",
        labelMenuHex: "[PX][HEX é]",
        labelMenuRgba: "[PX][RGBa é]",
        labelMenuHsla: "[PX][HSLa é]",
        labelSliderHue: "[PX][Hue é]",
        labelSliderSaturation: "[PX][Saturation é]",
        labelSliderSat: "[PX][Sat é]",
        labelSliderLightness: "[PX][Lightness é]",
        labelSliderLum: "[PX][Luminosity é]",
        labelSliderAlpha: "[PX][Alpha é]",
        labelOpacity: "[PX][Opacity é]",
        labelSliderRed: "[PX][Red é]",
        labelSliderGreen: "[PX][Green é]",
        labelSliderBlue: "[PX][Blue é]"
    },
    "oj-ojFilePicker": {
        dropzoneText: "[PX][Drop files here or click to upload éëžéë]"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "[PX][In Progress é]"
    },
    "oj-ojMessage": {
        labelCloseIcon: "[PX][Close é]",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "[PX][Messages é]",
        ariaLiveRegion: {
            navigationFromKeyboard: "[PX][Entering messages region. Press F6 to navigate back to prior focused element. éëžéëžéëžéëžéëžéëž]",
            navigationToTouch: "[PX][Messages region has new messages. Use the voice-over rotor to navigate to the messages landmark. éëžéëžéëžéëžéëžéëžéëžéë]",
            navigationToKeyboard: "[PX][Messages region has new messages.  Press F6 to navigate to the most recent message region. éëžéëžéëžéëžéëžéëžéëžé]",
            newMessage: "[PX][Message category {category}. {summary}. éëžéëž]"
        }
    }
});