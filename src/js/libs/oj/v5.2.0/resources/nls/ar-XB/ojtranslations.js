define({
    "oj-message": {
        fatal: "[‏‮Fatal‬‏]",
        error: "[‏‮Error‬‏]",
        warning: "[‏‮Warning‬‏]",
        info: "[‏‮Info‬‏]",
        confirmation: "[‏‮Confirmation‬‏]",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "[‏‮Value is not in the expected format.‬‏]",
        detail: "[‏‮Enter a value in the expected format.‬‏]",
        "plural-separator": ", ",
        hint: {
            summary: "[‏‮Example: {exampleValue}‬‏]",
            detail: "[‏‮Enter a value in the same format as this example: '{exampleValue}'.‬‏]",
            "detail-plural": "[‏‮Enter a value in the same format as these examples: '{exampleValue}'.‬‏]"
        },
        optionHint: {
            detail: "[‏‮An accepted value for option '{propertyName}' is '{propertyValueValid}'.‬‏]",
            "detail-plural": "[‏‮Accepted values for option '{propertyName}' are '{propertyValueValid}'.‬‏]"
        },
        optionTypesMismatch: {
            summary: "[‏‮A value for the option '{requiredPropertyName}' is required when the option '{propertyName}' is set to '{propertyValue}'.‬‏]"
        },
        optionTypeInvalid: {
            summary: "[‏‮A value of the expected type was not provided for option '{propertyName}'.‬‏]"
        },
        optionOutOfRange: {
            summary: "[‏‮Value {propertyValue} is out of range for the option '{propertyName}'.‬‏]"
        },
        optionValueInvalid: {
            summary: "[‏‮An invalid value '{propertyValue}' was specified for the option '{propertyName}'.‬‏]"
        },
        number: {
            decimalFormatMismatch: {
                summary: "[‏‮'{value}' is not in the expected number format.‬‏]"
            },
            shortLongUnsupportedParse: {
                summary: "[‏‮'short' and 'long' are not supported for converter parsing.‬‏]",
                detail: "[‏‮Change component to readonly. readonly fields do not call the converter's parse function.‬‏]"
            },
            currencyFormatMismatch: {
                summary: "[‏‮'{value}' is not in the expected currency format.‬‏]"
            },
            percentFormatMismatch: {
                summary: "[‏‮'{value}' is not in the expected percent format.‬‏]"
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "[‏‮Value '{value}' is out of range for the '{propertyName}'.‬‏]",
                detail: "[‏‮Enter a value between '{minValue}' and '{maxValue}'.‬‏]",
                hour: "[‏‮hour‬‏]",
                minute: "[‏‮minute‬‏]",
                second: "[‏‮second‬‏]",
                millisec: "[‏‮millisec‬‏]",
                month: "[‏‮month‬‏]",
                day: "[‏‮day‬‏]",
                year: "[‏‮year‬‏]",
                "month name": "[‏‮month name‬‏]",
                weekday: "[‏‮weekday‬‏]"
            },
            dateFormatMismatch: {
                summary: "[‏‮'{value}' is not in the expected date format.‬‏]"
            },
            invalidTimeZoneID: {
                summary: "[‏‮Invalid timezone id {timeZoneID} provided.‬‏]"
            },
            nonExistingTime: {
                summary: "[‏‮The input time does not exist because it falls during the transition to daylight saving time.‬‏]"
            },
            missingTimeZoneData: {
                summary: "[‏‮TimeZone data is missing. Please call require 'ojs/ojtimezonedata' in order to load the TimeZone data.‬‏]"
            },
            timeFormatMismatch: {
                summary: "[‏‮'{value}' is not in the expected time format.‬‏]"
            },
            datetimeFormatMismatch: {
                summary: "[‏‮'{value}' is not in the expected date and time format.‬‏]"
            },
            dateToWeekdayMismatch: {
                summary: "[‏‮Day '{date}' does not fall on a '{weekday}'.‬‏]",
                detail: "[‏‮Enter a weekday that corresponds with the date.‬‏]"
            },
            invalidISOString: {
                summary: "[‏‮The provided '{isoStr}' is not a valid ISO 8601 string.‬‏]",
                detail: "[‏‮Please provide valid ISO 8601 string.‬‏]"
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "[‏‮Enter {min} or more characters.‬‏]",
                max: "[‏‮Enter {max} or fewer characters.‬‏]",
                inRange: "[‏‮Enter {min} or more characters, up to a maximum of {max}.‬‏]",
                exact: "[‏‮Enter {length} characters.‬‏]"
            },
            messageDetail: {
                tooShort: "[‏‮Enter {min} or more characters, not fewer.‬‏]",
                tooLong: "[‏‮Enter {max} or fewer characters, not more.‬‏]"
            },
            messageSummary: {
                tooShort: "[‏‮There are too few characters.‬‏]",
                tooLong: "[‏‮There are too many characters.‬‏]"
            }
        },
        range: {
            number: {
                hint: {
                    min: "[‏‮Enter a number greater than or equal to {min}.‬‏]",
                    max: "[‏‮Enter a number less than or equal to {max}.‬‏]",
                    inRange: "[‏‮Enter a number between {min} and {max}.‬‏]",
                    exact: "[‏‮Enter the number {num}.‬‏]"
                },
                messageDetail: {
                    rangeUnderflow: "[‏‮The number must be greater than or equal to {min}.‬‏]",
                    rangeOverflow: "[‏‮The number must be less than or equal to {max}.‬‏]",
                    exact: "[‏‮The number must be {num}.‬‏]"
                },
                messageSummary: {
                    rangeUnderflow: "[‏‮The number is too low.‬‏]",
                    rangeOverflow: "[‏‮The number is too high.‬‏]"
                }
            },
            datetime: {
                hint: {
                    min: "[‏‮Enter a date and time on or after {min}.‬‏]",
                    max: "[‏‮Enter a date and time on or before {max}.‬‏]",
                    inRange: "[‏‮Enter a date and time between {min} and {max}.‬‏]"
                },
                messageDetail: {
                    rangeUnderflow: "[‏‮Date and time must be on or later than {min}.‬‏]",
                    rangeOverflow: "[‏‮Date and time must be on or sooner than {max}.‬‏]"
                },
                messageSummary: {
                    rangeUnderflow: "[‏‮Date and time is earlier than the minimum date and time.‬‏]",
                    rangeOverflow: "[‏‮Date and time is later than the maximum date and time.‬‏]"
                }
            },
            date: {
                hint: {
                    min: "[‏‮Enter a date on or after {min}.‬‏]",
                    max: "[‏‮Enter a date on or before {max}.‬‏]",
                    inRange: "[‏‮Enter a date between {min} and {max}.‬‏]"
                },
                messageDetail: {
                    rangeUnderflow: "[‏‮Date must be on or later than {min}.‬‏]",
                    rangeOverflow: "[‏‮Date must be on or sooner than {max}.‬‏]"
                },
                messageSummary: {
                    rangeUnderflow: "[‏‮Date is earlier than the minimum date.‬‏]",
                    rangeOverflow: "[‏‮Date is later than the maximum date.‬‏]"
                }
            },
            time: {
                hint: {
                    min: "[‏‮Enter a time on or after {min}.‬‏]",
                    max: "[‏‮Enter a time on or before {max}.‬‏]",
                    inRange: "[‏‮Enter a time between {min} and {max}.‬‏]"
                },
                messageDetail: {
                    rangeUnderflow: "[‏‮Time must be on or later than {min}.‬‏]",
                    rangeOverflow: "[‏‮Time must be on or sooner than {max}.‬‏]"
                },
                messageSummary: {
                    rangeUnderflow: "[‏‮Time is earlier than the minimum time.‬‏]",
                    rangeOverflow: "[‏‮Time is later than the maximum time.‬‏]"
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "[‏‮Date {value} is of a disabled entry.‬‏]",
                messageDetail: "[‏‮Date {value} should not be of a disabled entry.‬‏]"
            }
        },
        regExp: {
            summary: "[‏‮Format is incorrect.‬‏]",
            detail: "[‏‮Value '{value}' must match this pattern: '{pattern}'.‬‏]"
        },
        required: {
            summary: "[‏‮Value is required.‬‏]",
            detail: "[‏‮You must enter a value.‬‏]"
        }
    },
    "oj-ojInputDate": {
        done: "[‏‮Done‬‏]",
        cancel: "[‏‮Cancel‬‏]",
        prevText: "[‏‮Prev‬‏]",
        nextText: "[‏‮Next‬‏]",
        currentText: "[‏‮Today‬‏]",
        weekHeader: "[‏‮Wk‬‏]",
        tooltipCalendar: "[‏‮Select Date.‬‏]",
        tooltipCalendarTime: "[‏‮Select Date Time.‬‏]",
        tooltipCalendarDisabled: "[‏‮Select Date Disabled.‬‏]",
        tooltipCalendarTimeDisabled: "[‏‮Select Date Time Disabled.‬‏]",
        picker: "[‏‮Picker‬‏]",
        weekText: "[‏‮Week‬‏]",
        datePicker: "[‏‮Date Picker‬‏]",
        inputHelp: "[‏‮Press Key down or Key up for access to Calendar.‬‏]",
        inputHelpBoth: "[‏‮Press Key down or Key up for access to Calendar and Shift + Key down or Shift Key up for access to time drop down.‬‏]",
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
        cancelText: "[‏‮Cancel‬‏]",
        okText: "[‏‮OK‬‏]",
        currentTimeText: "[‏‮Now‬‏]",
        hourWheelLabel: "[‏‮Hour‬‏]",
        minuteWheelLabel: "[‏‮Minute‬‏]",
        ampmWheelLabel: "[‏‮AMPM‬‏]",
        tooltipTime: "[‏‮Select Time.‬‏]",
        tooltipTimeDisabled: "[‏‮Select Time Disabled.‬‏]",
        inputHelp: "[‏‮Press Key down or Key up for access to time drop down.‬‏]",
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
            messageDetail: "[‏‮Value must match this pattern: '{pattern}'.‬‏]"
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "[‏‮Displaying page {pageIndex} of {pageCount}‬‏]",
        labelAccArrowNextPage: "[‏‮Select Next to display next page‬‏]",
        labelAccArrowPreviousPage: "[‏‮Select Previous to display previous page‬‏]",
        tipArrowNextPage: "[‏‮Next‬‏]",
        tipArrowPreviousPage: "[‏‮Previous‬‏]"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "[‏‮{id} sorted in ascending order‬‏]",
        accessibleSortDescending: "[‏‮{id} sorted in descending order‬‏]",
        accessibleActionableMode: "[‏‮Enter actionable mode.‬‏]",
        accessibleNavigationMode: "[‏‮Enter navigation mode, press F2 to enter edit or actionable mode.‬‏]",
        accessibleEditableMode: "[‏‮Enter editable mode, press escape to navigate outside the data grid.‬‏]",
        accessibleSummaryExact: "[‏‮This is a data grid with {rownum} rows and {colnum} columns‬‏]",
        accessibleSummaryEstimate: "[‏‮This is a data grid with unknown number of rows and columns‬‏]",
        accessibleSummaryExpanded: "[‏‮There are currently {num} rows expanded‬‏]",
        accessibleRowExpanded: "[‏‮Row expanded‬‏]",
        accessibleRowCollapsed: "[‏‮Row collapsed‬‏]",
        accessibleRowSelected: "[‏‮Row {row} selected‬‏]",
        accessibleColumnSelected: "[‏‮Column {column} selected‬‏]",
        accessibleStateSelected: "[‏‮selected‬‏]",
        accessibleMultiCellSelected: "[‏‮{num} cells selected‬‏]",
        accessibleColumnSpanContext: "[‏‮{extent} wide‬‏]",
        accessibleRowSpanContext: "[‏‮{extent} high‬‏]",
        accessibleRowContext: "[‏‮Row {index}‬‏]",
        accessibleColumnContext: "[‏‮Column {index}‬‏]",
        accessibleRowHeaderContext: "[‏‮Row Header {index}‬‏]",
        accessibleColumnHeaderContext: "[‏‮Column Header {index}‬‏]",
        accessibleRowEndHeaderContext: "[‏‮Row End Header {index}‬‏]",
        accessibleColumnEndHeaderContext: "[‏‮Column End Header {index}‬‏]",
        accessibleLevelContext: "[‏‮Level {level}‬‏]",
        accessibleRangeSelectModeOn: "[‏‮Add selected range of cells mode on.‬‏]",
        accessibleRangeSelectModeOff: "[‏‮Add selected range of cells mode off.‬‏]",
        accessibleFirstRow: "[‏‮You have reached the first row.‬‏]",
        accessibleLastRow: "[‏‮You have reached the last row.‬‏]",
        accessibleFirstColumn: "[‏‮You have reached the first column‬‏]",
        accessibleLastColumn: "[‏‮You have reached the last column.‬‏]",
        accessibleSelectionAffordanceTop: "[‏‮Top selection handle.‬‏]",
        accessibleSelectionAffordanceBottom: "[‏‮Bottom selection handle.‬‏]",
        msgFetchingData: "[‏‮Fetching Data...‬‏]",
        msgNoData: "[‏‮No items to display.‬‏]",
        labelResize: "[‏‮Resize‬‏]",
        labelResizeWidth: "[‏‮Resize Width‬‏]",
        labelResizeHeight: "[‏‮Resize Height‬‏]",
        labelSortRow: "[‏‮Sort Row‬‏]",
        labelSortRowAsc: "[‏‮Sort Row Ascending‬‏]",
        labelSortRowDsc: "[‏‮Sort Row Descending‬‏]",
        labelSortCol: "[‏‮Sort Column‬‏]",
        labelSortColAsc: "[‏‮Sort Column Ascending‬‏]",
        labelSortColDsc: "[‏‮Sort Column Descending‬‏]",
        labelCut: "[‏‮Cut‬‏]",
        labelPaste: "[‏‮Paste‬‏]",
        labelEnableNonContiguous: "[‏‮Enable Non-Contiguous Selection‬‏]",
        labelDisableNonContiguous: "[‏‮Disable Non-Contiguous Selection‬‏]",
        labelResizeDialogSubmit: "[‏‮OK‬‏]"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "[‏‮Level {level}‬‏]",
        accessibleRowDescription: "[‏‮Level {level}, Row {num} of {total}‬‏]",
        accessibleRowExpanded: "[‏‮Row expanded‬‏]",
        accessibleRowCollapsed: "[‏‮Row collapsed‬‏]",
        accessibleStateExpanded: "[‏‮expanded‬‏]",
        accessibleStateCollapsed: "[‏‮collapsed‬‏]"
    },
    "oj-ojListView": {
        msgFetchingData: "[‏‮Fetching Data...‬‏]",
        msgNoData: "[‏‮No items to display.‬‏]",
        indexerCharacters: "[‏‮A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z‬‏]",
        accessibleReorderTouchInstructionText: "[‏‮Double tap and hold.  Wait for the sound then drag to rearrange.‬‏]",
        accessibleReorderBeforeItem: "[‏‮Before {item}‬‏]",
        accessibleReorderAfterItem: "[‏‮After {item}‬‏]",
        accessibleReorderInsideItem: "[‏‮Into {item}‬‏]",
        accessibleNavigateSkipItems: "[‏‮Skipping {numSkip} items‬‏]",
        labelCut: "[‏‮Cut‬‏]",
        labelCopy: "[‏‮Copy‬‏]",
        labelPaste: "[‏‮Paste‬‏]",
        labelPasteBefore: "[‏‮Paste Before‬‏]",
        labelPasteAfter: "[‏‮Paste After‬‏]"
    },
    "oj-_ojLabel": {
        tooltipHelp: "[‏‮Help‬‏]",
        tooltipRequired: "[‏‮Required‬‏]"
    },
    "oj-ojLabel": {
        tooltipHelp: "[‏‮Help‬‏]",
        tooltipRequired: "[‏‮Required‬‏]"
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
        tooltipDecrement: "[‏‮Decrement‬‏]",
        tooltipIncrement: "[‏‮Increment‬‏]"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "[‏‮Top selection handle‬‏]",
        labelAccSelectionAffordanceBottom: "[‏‮Bottom selection handle‬‏]",
        labelEnableNonContiguousSelection: "[‏‮Enable Non-Contiguous Selection‬‏]",
        labelDisableNonContiguousSelection: "[‏‮Disable Non-Contiguous Selection‬‏]",
        labelResize: "[‏‮Resize‬‏]",
        labelResizePopupSubmit: "[‏‮OK‬‏]",
        labelResizePopupSpinner: "[‏‮Resize Column‬‏]",
        labelSelectRow: "[‏‮Select Row‬‏]",
        labelEditRow: "[‏‮Edit Row‬‏]",
        labelSelectAndEditRow: "[‏‮Select And Edit Row‬‏]",
        labelSelectColumn: "[‏‮Select Column‬‏]",
        labelSort: "[‏‮Sort‬‏]",
        labelSortAsc: "[‏‮Sort Ascending‬‏]",
        labelSortDsc: "[‏‮Sort Descending‬‏]",
        msgFetchingData: "[‏‮Fetching Data...‬‏]",
        msgNoData: "[‏‮No data to display.‬‏]",
        msgInitializing: "[‏‮Initializing...‬‏]",
        msgColumnResizeWidthValidation: "[‏‮Width value must be an integer.‬‏]",
        msgScrollPolicyMaxCountSummary: "[‏‮Exceeded maximum rows for table scrolling.‬‏]",
        msgScrollPolicyMaxCountDetail: "[‏‮Please reload with smaller data set.‬‏]",
        msgStatusSortAscending: "[‏‮{0} sorted in ascending order.‬‏]",
        msgStatusSortDescending: "[‏‮{0} sorted in descending order.‬‏]"
    },
    "oj-ojTabs": {
        labelCut: "[‏‮Cut‬‏]",
        labelPasteBefore: "[‏‮Paste Before‬‏]",
        labelPasteAfter: "[‏‮Paste After‬‏]",
        labelRemove: "[‏‮Remove‬‏]",
        labelReorder: "[‏‮Reorder‬‏]",
        removeCueText: "[‏‮Removable‬‏]"
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
        searchField: "[‏‮Search field‬‏]",
        noMatchesFound: "[‏‮No matches found‬‏]",
        oneMatchesFound: "[‏‮One match found‬‏]",
        moreMatchesFound: "[‏‮{num} matches found‬‏]",
        filterFurther: "[‏‮More results available, please filter further.‬‏]"
    },
    "oj-ojSwitch": {
        SwitchON: "[‏‮On‬‏]",
        SwitchOFF: "[‏‮Off‬‏]"
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "[‏‮No matches found‬‏]",
        filterFurther: "[‏‮More results available, please filter further.‬‏]"
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "[‏‮No matches found‬‏]",
        oneMatchesFound: "[‏‮One match found‬‏]",
        moreMatchesFound: "[‏‮{num} matches found‬‏]"
    },
    "oj-ojTree": {
        stateLoading: "[‏‮Loading...‬‏]",
        labelNewNode: "[‏‮New Node‬‏]",
        labelMultiSelection: "[‏‮Multiple Selection‬‏]",
        labelEdit: "[‏‮Edit‬‏]",
        labelCreate: "[‏‮Create‬‏]",
        labelCut: "[‏‮Cut‬‏]",
        labelCopy: "[‏‮Copy‬‏]",
        labelPaste: "[‏‮Paste‬‏]",
        labelPasteAfter: "[‏‮Paste After‬‏]",
        labelPasteBefore: "[‏‮Paste Before‬‏]",
        labelRemove: "[‏‮Remove‬‏]",
        labelRename: "[‏‮Rename‬‏]",
        labelNoData: "[‏‮No data‬‏]"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "[‏‮Pagination‬‏]",
        labelAccNavFirstPage: "[‏‮First Page‬‏]",
        labelAccNavLastPage: "[‏‮Last Page‬‏]",
        labelAccNavNextPage: "[‏‮Next Page‬‏]",
        labelAccNavPreviousPage: "[‏‮Previous Page‬‏]",
        labelAccNavPage: "[‏‮Page‬‏]",
        labelLoadMore: "[‏‮Show More...‬‏]",
        labelLoadMoreMaxRows: "[‏‮Reached Maximum Limit of {maxRows} rows‬‏]",
        labelNavInputPage: "[‏‮Page‬‏]",
        labelNavInputPageMax: "[‏‮of {pageMax}‬‏]",
        msgItemRangeCurrent: "[‏‮{pageFrom}-{pageTo}‬‏]",
        msgItemRangeCurrentSingle: "[‏‮{pageFrom}‬‏]",
        msgItemRangeOf: "[‏‮of‬‏]",
        msgItemRangeOfAtLeast: "[‏‮of at least‬‏]",
        msgItemRangeOfApprox: "[‏‮of approx.‬‏]",
        msgItemRangeItems: "[‏‮items‬‏]",
        tipNavInputPage: "[‏‮Go To Page‬‏]",
        tipNavPageLink: "[‏‮Go To Page {pageNum}‬‏]",
        tipNavNextPage: "[‏‮Next‬‏]",
        tipNavPreviousPage: "[‏‮Previous‬‏]",
        tipNavFirstPage: "[‏‮First‬‏]",
        tipNavLastPage: "[‏‮Last‬‏]",
        pageInvalid: {
            summary: "[‏‮The page value entered is invalid.‬‏]",
            detail: "[‏‮Please enter a value greater than 0.‬‏]"
        },
        maxPageLinksInvalid: {
            summary: "[‏‮Value for maxPageLinks is invalid.‬‏]",
            detail: "[‏‮Please enter a value greater than 4.‬‏]"
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "[‏‮Cut‬‏]",
        labelPasteBefore: "[‏‮Paste Before‬‏]",
        labelPasteAfter: "[‏‮Paste After‬‏]"
    },
    "oj-panel": {
        labelAccButtonExpand: "[‏‮Expand‬‏]",
        labelAccButtonCollapse: "[‏‮Collapse‬‏]",
        labelAccButtonRemove: "[‏‮Remove‬‏]"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "[‏‮Group {0}‬‏]",
        labelSeries: "[‏‮Series‬‏]",
        labelGroup: "[‏‮Group‬‏]",
        labelDate: "[‏‮Date‬‏]",
        labelValue: "[‏‮Value‬‏]",
        labelTargetValue: "[‏‮Target‬‏]",
        labelX: "[‏‮X‬‏]",
        labelY: "[‏‮Y‬‏]",
        labelZ: "[‏‮Z‬‏]",
        labelPercentage: "[‏‮Percentage‬‏]",
        labelLow: "[‏‮Low‬‏]",
        labelHigh: "[‏‮High‬‏]",
        labelOpen: "[‏‮Open‬‏]",
        labelClose: "[‏‮Close‬‏]",
        labelVolume: "[‏‮Volume‬‏]",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "[‏‮Min‬‏]",
        labelMax: "[‏‮Max‬‏]",
        labelOther: "[‏‮Other‬‏]",
        tooltipPan: "[‏‮Pan‬‏]",
        tooltipSelect: "[‏‮Marquee select‬‏]",
        tooltipZoom: "[‏‮Marquee zoom‬‏]",
        componentName: "[‏‮Chart‬‏]"
    },
    "oj-dvtBaseGauge": {
        componentName: "[‏‮Gauge‬‏]"
    },
    "oj-ojDiagram": {
        promotedLink: "[‏‮{0} link‬‏]",
        promotedLinks: "[‏‮{0} links‬‏]",
        promotedLinkAriaDesc: "[‏‮Indirect‬‏]",
        componentName: "[‏‮Diagram‬‏]"
    },
    "oj-ojGantt": {
        componentName: "[‏‮Gantt‬‏]",
        accessibleDurationDays: "[‏‮{0} days‬‏]",
        accessibleDurationHours: "[‏‮{0} hours‬‏]",
        accessibleTaskInfo: "[‏‮Start time is {0}, end time is {1}, duration is {2}‬‏]",
        accessibleMilestoneInfo: "[‏‮Time is {0}‬‏]",
        accessibleRowInfo: "[‏‮Row {0}‬‏]",
        accessibleTaskTypeMilestone: "[‏‮Milestone‬‏]",
        accessibleTaskTypeSummary: "[‏‮Summary‬‏]",
        accessiblePredecessorInfo: "[‏‮{0} predecessors‬‏]",
        accessibleSuccessorInfo: "[‏‮{0} successors‬‏]",
        accessibleDependencyInfo: "[‏‮Dependency type {0}, connects {1} to {2}‬‏]",
        startStartDependencyAriaDesc: "[‏‮start to start‬‏]",
        startFinishDependencyAriaDesc: "[‏‮start to finish‬‏]",
        finishStartDependencyAriaDesc: "[‏‮finish to start‬‏]",
        finishFinishDependencyAriaDesc: "[‏‮finish to finish‬‏]",
        tooltipZoomIn: "[‏‮Zoom In‬‏]",
        tooltipZoomOut: "[‏‮Zoom Out‬‏]",
        labelRow: "[‏‮Row‬‏]",
        labelStart: "[‏‮Start‬‏]",
        labelEnd: "[‏‮End‬‏]",
        labelDate: "[‏‮Date‬‏]",
        labelBaselineStart: "[‏‮Baseline Start‬‏]",
        labelBaselineEnd: "[‏‮Baseline End‬‏]",
        labelBaselineDate: "[‏‮Baseline Date‬‏]",
        labelLabel: "[‏‮Label‬‏]",
        labelProgress: "[‏‮Progress‬‏]",
        labelMoveBy: "[‏‮Move By‬‏]",
        taskMoveInitiated: "[‏‮Task move initiated‬‏]",
        taskMoveSelectionInfo: "[‏‮{0} others selected‬‏]",
        taskMoveInitiatedInstruction: "[‏‮Use the arrow keys to move‬‏]",
        taskMoveFinalized: "[‏‮Task move finalized‬‏]",
        taskMoveCancelled: "[‏‮Task move cancelled‬‏]"
    },
    "oj-ojLegend": {
        componentName: "[‏‮Legend‬‏]"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "[‏‮Other‬‏]",
        labelGroup: "[‏‮Group‬‏]",
        labelSize: "[‏‮Size‬‏]",
        labelAdditionalData: "[‏‮Additional Data‬‏]",
        componentName: "[‏‮NBox‬‏]"
    },
    "oj-ojPictoChart": {
        componentName: "[‏‮Picture Chart‬‏]"
    },
    "oj-ojSparkChart": {
        componentName: "[‏‮Chart‬‏]"
    },
    "oj-ojSunburst": {
        labelColor: "[‏‮Color‬‏]",
        labelSize: "[‏‮Size‬‏]",
        tooltipExpand: "[‏‮Expand‬‏]",
        tooltipCollapse: "[‏‮Collapse‬‏]",
        componentName: "[‏‮Sunburst‬‏]"
    },
    "oj-ojTagCloud": {
        componentName: "[‏‮Tag Cloud‬‏]"
    },
    "oj-ojThematicMap": {
        componentName: "[‏‮Thematic Map‬‏]"
    },
    "oj-ojTimeAxis": {
        componentName: "[‏‮Time Axis‬‏]"
    },
    "oj-ojTimeline": {
        componentName: "[‏‮Timeline‬‏]",
        accessibleItemDesc: "[‏‮Description is {0}.‬‏]",
        accessibleItemEnd: "[‏‮End time is {0}.‬‏]",
        accessibleItemStart: "[‏‮Start time is {0}.‬‏]",
        accessibleItemTitle: "[‏‮Title is {0}.‬‏]",
        labelSeries: "[‏‮Series‬‏]",
        tooltipZoomIn: "[‏‮Zoom In‬‏]",
        tooltipZoomOut: "[‏‮Zoom Out‬‏]"
    },
    "oj-ojTreemap": {
        labelColor: "[‏‮Color‬‏]",
        labelSize: "[‏‮Size‬‏]",
        tooltipIsolate: "[‏‮Isolate‬‏]",
        tooltipRestore: "[‏‮Restore‬‏]",
        componentName: "[‏‮Treemap‬‏]"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "[‏‮K‬‏]",
        labelScalingSuffixMillion: "[‏‮M‬‏]",
        labelScalingSuffixBillion: "[‏‮B‬‏]",
        labelScalingSuffixTrillion: "[‏‮T‬‏]",
        labelScalingSuffixQuadrillion: "[‏‮Q‬‏]",
        labelInvalidData: "[‏‮Invalid data‬‏]",
        labelNoData: "[‏‮No data to display‬‏]",
        labelClearSelection: "[‏‮Clear Selection‬‏]",
        labelDataVisualization: "[‏‮Data Visualization‬‏]",
        stateSelected: "[‏‮Selected‬‏]",
        stateUnselected: "[‏‮Unselected‬‏]",
        stateMaximized: "[‏‮Maximized‬‏]",
        stateMinimized: "[‏‮Minimized‬‏]",
        stateExpanded: "[‏‮Expanded‬‏]",
        stateCollapsed: "[‏‮Collapsed‬‏]",
        stateIsolated: "[‏‮Isolated‬‏]",
        stateHidden: "[‏‮Hidden‬‏]",
        stateVisible: "[‏‮Visible‬‏]",
        stateDrillable: "[‏‮Drillable‬‏]",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "[‏‮{0} of {1}‬‏]"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "[‏‮Navigation List‬‏]",
        hierMenuBtnLabel: "[‏‮Hierarchical Menu button‬‏]",
        selectedLabel: "[‏‮selected‬‏]",
        previousIcon: "[‏‮Previous‬‏]",
        msgFetchingData: "[‏‮Fetching Data...‬‏]",
        msgNoData: "[‏‮No items to display.‬‏]",
        overflowItemLabel: "[‏‮More‬‏]",
        accessibleReorderTouchInstructionText: "[‏‮Double tap and hold.  Wait for the sound then drag to rearrange.‬‏]",
        accessibleReorderBeforeItem: "[‏‮Before {item}‬‏]",
        accessibleReorderAfterItem: "[‏‮After {item}‬‏]",
        labelCut: "[‏‮Cut‬‏]",
        labelPasteBefore: "[‏‮Paste Before‬‏]",
        labelPasteAfter: "[‏‮Paste After‬‏]",
        labelRemove: "[‏‮Remove‬‏]",
        removeCueText: "[‏‮Removable‬‏]"
    },
    "oj-ojSlider": {
        noValue: "[‏‮ojSlider has no value‬‏]",
        maxMin: "[‏‮Max must not be less than or equal to min‬‏]",
        valueRange: "[‏‮Value must be within min to max range‬‏]",
        optionNum: "[‏‮{option} option is not a number‬‏]",
        invalidStep: "[‏‮Invalid step; step must be > 0‬‏]"
    },
    "oj-ojDialog": {
        labelCloseIcon: "[‏‮Close‬‏]"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "[‏‮Entering pop-up. Press F6 to navigate between the pop-up and associated control.‬‏]",
        ariaLiveRegionInitialFocusNone: "[‏‮Pop-up opened. Press F6 to navigate between the pop-up and associated control.‬‏]",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "[‏‮Entering pop-up. Pop-up can be closed by navigating to the last link within the pop-up.‬‏]",
        ariaLiveRegionInitialFocusNoneTouch: "[‏‮Pop-up opened.  Navigate to the next link to establish focus within the pop-up.‬‏]",
        ariaFocusSkipLink: "[‏‮Double tap to navigate to the open pop-up.‬‏]",
        ariaCloseSkipLink: "[‏‮Double tap to close the open pop-up.‬‏]"
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "[‏‮Activate link to refresh content‬‏]",
        ariaRefreshingLink: "[‏‮Refreshing content‬‏]",
        ariaRefreshCompleteLink: "[‏‮Refresh complete‬‏]"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "[‏‮Show start actions‬‏]",
        ariaShowEndActionsDescription: "[‏‮Show end actions‬‏]",
        ariaHideActionsDescription: "[‏‮Hide actions‬‏]"
    },
    "oj-ojIndexer": {
        indexerCharacters: "[‏‮A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z‬‏]",
        indexerOthers: "#",
        ariaDisabledLabel: "[‏‮No matching group header‬‏]",
        ariaOthersLabel: "[‏‮number‬‏]",
        ariaInBetweenText: "[‏‮Between {first} and {second}‬‏]",
        ariaKeyboardInstructionText: "[‏‮Press enter to select value.‬‏]",
        ariaTouchInstructionText: "[‏‮Double tap and hold to enter gesture mode, then drag up or down to adjust value.‬‏]"
    },
    "oj-ojMenu": {
        labelCancel: "[‏‮Cancel‬‏]"
    },
    "oj-ojColorSpectrum": {
        labelHue: "[‏‮Hue‬‏]",
        labelOpacity: "[‏‮Opacity‬‏]",
        labelSatLum: "[‏‮Saturation/Luminance‬‏]",
        labelThumbDesc: "[‏‮Color spectrum four way slider.‬‏]"
    },
    "oj-ojColorPalette": {
        labelNone: "[‏‮None‬‏]"
    },
    "oj-ojColorPicker": {
        labelSwatches: "[‏‮Swatches‬‏]",
        labelCustomColors: "[‏‮Custom Colors‬‏]",
        labelPrevColor: "[‏‮Previous Color‬‏]",
        labelDefColor: "[‏‮Default Color‬‏]",
        labelDelete: "[‏‮Delete‬‏]",
        labelDeleteQ: "[‏‮Delete?‬‏]",
        labelAdd: "[‏‮Add‬‏]",
        labelAddColor: "[‏‮Add color‬‏]",
        labelMenuHex: "[‏‮HEX‬‏]",
        labelMenuRgba: "[‏‮RGBa‬‏]",
        labelMenuHsla: "[‏‮HSLa‬‏]",
        labelSliderHue: "[‏‮Hue‬‏]",
        labelSliderSaturation: "[‏‮Saturation‬‏]",
        labelSliderSat: "[‏‮Sat‬‏]",
        labelSliderLightness: "[‏‮Lightness‬‏]",
        labelSliderLum: "[‏‮Luminosity‬‏]",
        labelSliderAlpha: "[‏‮Alpha‬‏]",
        labelOpacity: "[‏‮Opacity‬‏]",
        labelSliderRed: "[‏‮Red‬‏]",
        labelSliderGreen: "[‏‮Green‬‏]",
        labelSliderBlue: "[‏‮Blue‬‏]"
    },
    "oj-ojFilePicker": {
        dropzoneText: "[‏‮Drop files here or click to upload‬‏]"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "[‏‮In Progress‬‏]"
    },
    "oj-ojMessage": {
        labelCloseIcon: "[‏‮Close‬‏]",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "[‏‮Messages‬‏]",
        ariaLiveRegion: {
            navigationFromKeyboard: "[‏‮Entering messages region. Press F6 to navigate back to prior focused element.‬‏]",
            navigationToTouch: "[‏‮Messages region has new messages. Use the voice-over rotor to navigate to the messages landmark.‬‏]",
            navigationToKeyboard: "[‏‮Messages region has new messages.  Press F6 to navigate to the most recent message region.‬‏]",
            newMessage: "[‏‮Message category {category}. {summary}.‬‏]"
        }
    }
});