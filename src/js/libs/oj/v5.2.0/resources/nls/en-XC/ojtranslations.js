define({
    "oj-message": {
        fatal: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-message.fatal:::Fatal))",
        error: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-message.error:::Error))",
        warning: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-message.warning:::Warning))",
        info: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-message.info:::Info))",
        confirmation: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-message.confirmation:::Confirmation))",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.summary:::Value is not in the expected format.))",
        detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.detail:::Enter a value in the expected format.))",
        "plural-separator": ", ",
        hint: {
            summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.hint.summary:::Example: {exampleValue}))",
            detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.hint.detail:::Enter a value in the same format as this example: '{exampleValue}'.))",
            "detail-plural": "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.hint.detail-plural:::Enter a value in the same format as these examples: '{exampleValue}'.))"
        },
        optionHint: {
            detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.optionHint.detail:::An accepted value for option '{propertyName}' is '{propertyValueValid}'.))",
            "detail-plural": "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.optionHint.detail-plural:::Accepted values for option '{propertyName}' are '{propertyValueValid}'.))"
        },
        optionTypesMismatch: {
            summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.optionTypesMismatch.summary:::A value for the option '{requiredPropertyName}' is required when the option '{propertyName}' is set to '{propertyValue}'.))"
        },
        optionTypeInvalid: {
            summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.optionTypeInvalid.summary:::A value of the expected type was not provided for option '{propertyName}'.))"
        },
        optionOutOfRange: {
            summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.optionOutOfRange.summary:::Value {propertyValue} is out of range for the option '{propertyName}'.))"
        },
        optionValueInvalid: {
            summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.optionValueInvalid.summary:::An invalid value '{propertyValue}' was specified for the option '{propertyName}'.))"
        },
        number: {
            decimalFormatMismatch: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.number.decimalFormatMismatch.summary:::'{value}' is not in the expected number format.))"
            },
            shortLongUnsupportedParse: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.number.shortLongUnsupportedParse.summary:::'short' and 'long' are not supported for converter parsing.))",
                detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.number.shortLongUnsupportedParse.detail:::Change component to readonly. readonly fields do not call the converter's parse function.))"
            },
            currencyFormatMismatch: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.number.currencyFormatMismatch.summary:::'{value}' is not in the expected currency format.))"
            },
            percentFormatMismatch: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.number.percentFormatMismatch.summary:::'{value}' is not in the expected percent format.))"
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.summary:::Value '{value}' is out of range for the '{propertyName}'.))",
                detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.detail:::Enter a value between '{minValue}' and '{maxValue}'.))",
                hour: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.hour:::hour))",
                minute: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.minute:::minute))",
                second: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.second:::second))",
                millisec: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.millisec:::millisec))",
                month: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.month:::month))",
                day: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.day:::day))",
                year: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.year:::year))",
                "month name": "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.month name:::month name))",
                weekday: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeOutOfRange.weekday:::weekday))"
            },
            dateFormatMismatch: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.dateFormatMismatch.summary:::'{value}' is not in the expected date format.))"
            },
            invalidTimeZoneID: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.invalidTimeZoneID.summary:::Invalid timezone id {timeZoneID} provided.))"
            },
            nonExistingTime: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.nonExistingTime.summary:::The input time does not exist because it falls during the transition to daylight saving time.))"
            },
            missingTimeZoneData: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.missingTimeZoneData.summary:::TimeZone data is missing. Please call require 'ojs/ojtimezonedata' in order to load the TimeZone data.))"
            },
            timeFormatMismatch: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.timeFormatMismatch.summary:::'{value}' is not in the expected time format.))"
            },
            datetimeFormatMismatch: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.datetimeFormatMismatch.summary:::'{value}' is not in the expected date and time format.))"
            },
            dateToWeekdayMismatch: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.dateToWeekdayMismatch.summary:::Day '{date}' does not fall on a '{weekday}'.))",
                detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.dateToWeekdayMismatch.detail:::Enter a weekday that corresponds with the date.))"
            },
            invalidISOString: {
                summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.invalidISOString.summary:::The provided '{isoStr}' is not a valid ISO 8601 string.))",
                detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-converter.datetime.invalidISOString.detail:::Please provide valid ISO 8601 string.))"
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.length.hint.min:::Enter {min} or more characters.))",
                max: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.length.hint.max:::Enter {max} or fewer characters.))",
                inRange: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.length.hint.inRange:::Enter {min} or more characters, up to a maximum of {max}.))",
                exact: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.length.hint.exact:::Enter {length} characters.))"
            },
            messageDetail: {
                tooShort: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.length.messageDetail.tooShort:::Enter {min} or more characters, not fewer.))",
                tooLong: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.length.messageDetail.tooLong:::Enter {max} or fewer characters, not more.))"
            },
            messageSummary: {
                tooShort: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.length.messageSummary.tooShort:::There are too few characters.))",
                tooLong: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.length.messageSummary.tooLong:::There are too many characters.))"
            }
        },
        range: {
            number: {
                hint: {
                    min: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.number.hint.min:::Enter a number greater than or equal to {min}.))",
                    max: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.number.hint.max:::Enter a number less than or equal to {max}.))",
                    inRange: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.number.hint.inRange:::Enter a number between {min} and {max}.))",
                    exact: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.number.hint.exact:::Enter the number {num}.))"
                },
                messageDetail: {
                    rangeUnderflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.number.messageDetail.rangeUnderflow:::The number must be greater than or equal to {min}.))",
                    rangeOverflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.number.messageDetail.rangeOverflow:::The number must be less than or equal to {max}.))",
                    exact: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.number.messageDetail.exact:::The number must be {num}.))"
                },
                messageSummary: {
                    rangeUnderflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.number.messageSummary.rangeUnderflow:::The number is too low.))",
                    rangeOverflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.number.messageSummary.rangeOverflow:::The number is too high.))"
                }
            },
            datetime: {
                hint: {
                    min: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.datetime.hint.min:::Enter a date and time on or after {min}.))",
                    max: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.datetime.hint.max:::Enter a date and time on or before {max}.))",
                    inRange: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.datetime.hint.inRange:::Enter a date and time between {min} and {max}.))"
                },
                messageDetail: {
                    rangeUnderflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.datetime.messageDetail.rangeUnderflow:::Date and time must be on or later than {min}.))",
                    rangeOverflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.datetime.messageDetail.rangeOverflow:::Date and time must be on or sooner than {max}.))"
                },
                messageSummary: {
                    rangeUnderflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.datetime.messageSummary.rangeUnderflow:::Date and time is earlier than the minimum date and time.))",
                    rangeOverflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.datetime.messageSummary.rangeOverflow:::Date and time is later than the maximum date and time.))"
                }
            },
            date: {
                hint: {
                    min: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.date.hint.min:::Enter a date on or after {min}.))",
                    max: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.date.hint.max:::Enter a date on or before {max}.))",
                    inRange: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.date.hint.inRange:::Enter a date between {min} and {max}.))"
                },
                messageDetail: {
                    rangeUnderflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.date.messageDetail.rangeUnderflow:::Date must be on or later than {min}.))",
                    rangeOverflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.date.messageDetail.rangeOverflow:::Date must be on or sooner than {max}.))"
                },
                messageSummary: {
                    rangeUnderflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.date.messageSummary.rangeUnderflow:::Date is earlier than the minimum date.))",
                    rangeOverflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.date.messageSummary.rangeOverflow:::Date is later than the maximum date.))"
                }
            },
            time: {
                hint: {
                    min: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.time.hint.min:::Enter a time on or after {min}.))",
                    max: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.time.hint.max:::Enter a time on or before {max}.))",
                    inRange: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.time.hint.inRange:::Enter a time between {min} and {max}.))"
                },
                messageDetail: {
                    rangeUnderflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.time.messageDetail.rangeUnderflow:::Time must be on or later than {min}.))",
                    rangeOverflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.time.messageDetail.rangeOverflow:::Time must be on or sooner than {max}.))"
                },
                messageSummary: {
                    rangeUnderflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.time.messageSummary.rangeUnderflow:::Time is earlier than the minimum time.))",
                    rangeOverflow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.range.time.messageSummary.rangeOverflow:::Time is later than the maximum time.))"
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.restriction.date.messageSummary:::Date {value} is of a disabled entry.))",
                messageDetail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.restriction.date.messageDetail:::Date {value} should not be of a disabled entry.))"
            }
        },
        regExp: {
            summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.regExp.summary:::Format is incorrect.))",
            detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.regExp.detail:::Value '{value}' must match this pattern: '{pattern}'.))"
        },
        required: {
            summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.required.summary:::Value is required.))",
            detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-validator.required.detail:::You must enter a value.))"
        }
    },
    "oj-ojInputDate": {
        done: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.done:::Done))",
        cancel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.cancel:::Cancel))",
        prevText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.prevText:::Prev))",
        nextText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.nextText:::Next))",
        currentText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.currentText:::Today))",
        weekHeader: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.weekHeader:::Wk))",
        tooltipCalendar: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.tooltipCalendar:::Select Date.))",
        tooltipCalendarTime: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.tooltipCalendarTime:::Select Date Time.))",
        tooltipCalendarDisabled: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.tooltipCalendarDisabled:::Select Date Disabled.))",
        tooltipCalendarTimeDisabled: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.tooltipCalendarTimeDisabled:::Select Date Time Disabled.))",
        picker: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.picker:::Picker))",
        weekText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.weekText:::Week))",
        datePicker: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.datePicker:::Date Picker))",
        inputHelp: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.inputHelp:::Press Key down or Key up for access to Calendar.))",
        inputHelpBoth: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputDate.inputHelpBoth:::Press Key down or Key up for access to Calendar and Shift + Key down or Shift Key up for access to time drop down.))",
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
        cancelText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputTime.cancelText:::Cancel))",
        okText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputTime.okText:::OK))",
        currentTimeText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputTime.currentTimeText:::Now))",
        hourWheelLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputTime.hourWheelLabel:::Hour))",
        minuteWheelLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputTime.minuteWheelLabel:::Minute))",
        ampmWheelLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputTime.ampmWheelLabel:::AMPM))",
        tooltipTime: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputTime.tooltipTime:::Select Time.))",
        tooltipTimeDisabled: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputTime.tooltipTimeDisabled:::Select Time Disabled.))",
        inputHelp: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputTime.inputHelp:::Press Key down or Key up for access to time drop down.))",
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
            messageDetail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputPassword.regexp.messageDetail:::Value must match this pattern: '{pattern}'.))"
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojFilmStrip.labelAccFilmStrip:::Displaying page {pageIndex} of {pageCount}))",
        labelAccArrowNextPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojFilmStrip.labelAccArrowNextPage:::Select Next to display next page))",
        labelAccArrowPreviousPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojFilmStrip.labelAccArrowPreviousPage:::Select Previous to display previous page))",
        tipArrowNextPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojFilmStrip.tipArrowNextPage:::Next))",
        tipArrowPreviousPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojFilmStrip.tipArrowPreviousPage:::Previous))"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleSortAscending:::{id} sorted in ascending order))",
        accessibleSortDescending: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleSortDescending:::{id} sorted in descending order))",
        accessibleActionableMode: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleActionableMode:::Enter actionable mode.))",
        accessibleNavigationMode: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleNavigationMode:::Enter navigation mode, press F2 to enter edit or actionable mode.))",
        accessibleEditableMode: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleEditableMode:::Enter editable mode, press escape to navigate outside the data grid.))",
        accessibleSummaryExact: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleSummaryExact:::This is a data grid with {rownum} rows and {colnum} columns))",
        accessibleSummaryEstimate: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleSummaryEstimate:::This is a data grid with unknown number of rows and columns))",
        accessibleSummaryExpanded: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleSummaryExpanded:::There are currently {num} rows expanded))",
        accessibleRowExpanded: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleRowExpanded:::Row expanded))",
        accessibleRowCollapsed: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleRowCollapsed:::Row collapsed))",
        accessibleRowSelected: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleRowSelected:::Row {row} selected))",
        accessibleColumnSelected: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleColumnSelected:::Column {column} selected))",
        accessibleStateSelected: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleStateSelected:::selected))",
        accessibleMultiCellSelected: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleMultiCellSelected:::{num} cells selected))",
        accessibleColumnSpanContext: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleColumnSpanContext:::{extent} wide))",
        accessibleRowSpanContext: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleRowSpanContext:::{extent} high))",
        accessibleRowContext: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleRowContext:::Row {index}))",
        accessibleColumnContext: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleColumnContext:::Column {index}))",
        accessibleRowHeaderContext: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleRowHeaderContext:::Row Header {index}))",
        accessibleColumnHeaderContext: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleColumnHeaderContext:::Column Header {index}))",
        accessibleRowEndHeaderContext: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleRowEndHeaderContext:::Row End Header {index}))",
        accessibleColumnEndHeaderContext: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleColumnEndHeaderContext:::Column End Header {index}))",
        accessibleLevelContext: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleLevelContext:::Level {level}))",
        accessibleRangeSelectModeOn: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleRangeSelectModeOn:::Add selected range of cells mode on.))",
        accessibleRangeSelectModeOff: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleRangeSelectModeOff:::Add selected range of cells mode off.))",
        accessibleFirstRow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleFirstRow:::You have reached the first row.))",
        accessibleLastRow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleLastRow:::You have reached the last row.))",
        accessibleFirstColumn: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleFirstColumn:::You have reached the first column))",
        accessibleLastColumn: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleLastColumn:::You have reached the last column.))",
        accessibleSelectionAffordanceTop: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleSelectionAffordanceTop:::Top selection handle.))",
        accessibleSelectionAffordanceBottom: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.accessibleSelectionAffordanceBottom:::Bottom selection handle.))",
        msgFetchingData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.msgFetchingData:::Fetching Data...))",
        msgNoData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.msgNoData:::No items to display.))",
        labelResize: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelResize:::Resize))",
        labelResizeWidth: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelResizeWidth:::Resize Width))",
        labelResizeHeight: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelResizeHeight:::Resize Height))",
        labelSortRow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelSortRow:::Sort Row))",
        labelSortRowAsc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelSortRowAsc:::Sort Row Ascending))",
        labelSortRowDsc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelSortRowDsc:::Sort Row Descending))",
        labelSortCol: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelSortCol:::Sort Column))",
        labelSortColAsc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelSortColAsc:::Sort Column Ascending))",
        labelSortColDsc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelSortColDsc:::Sort Column Descending))",
        labelCut: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelCut:::Cut))",
        labelPaste: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelPaste:::Paste))",
        labelEnableNonContiguous: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelEnableNonContiguous:::Enable Non-Contiguous Selection))",
        labelDisableNonContiguous: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelDisableNonContiguous:::Disable Non-Contiguous Selection))",
        labelResizeDialogSubmit: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDataGrid.labelResizeDialogSubmit:::OK))"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojRowExpander.accessibleLevelDescription:::Level {level}))",
        accessibleRowDescription: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojRowExpander.accessibleRowDescription:::Level {level}, Row {num} of {total}))",
        accessibleRowExpanded: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojRowExpander.accessibleRowExpanded:::Row expanded))",
        accessibleRowCollapsed: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojRowExpander.accessibleRowCollapsed:::Row collapsed))",
        accessibleStateExpanded: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojRowExpander.accessibleStateExpanded:::expanded))",
        accessibleStateCollapsed: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojRowExpander.accessibleStateCollapsed:::collapsed))"
    },
    "oj-ojListView": {
        msgFetchingData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.msgFetchingData:::Fetching Data...))",
        msgNoData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.msgNoData:::No items to display.))",
        indexerCharacters: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.indexerCharacters:::A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z))",
        accessibleReorderTouchInstructionText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.accessibleReorderTouchInstructionText:::Double tap and hold.  Wait for the sound then drag to rearrange.))",
        accessibleReorderBeforeItem: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.accessibleReorderBeforeItem:::Before {item}))",
        accessibleReorderAfterItem: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.accessibleReorderAfterItem:::After {item}))",
        accessibleReorderInsideItem: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.accessibleReorderInsideItem:::Into {item}))",
        accessibleNavigateSkipItems: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.accessibleNavigateSkipItems:::Skipping {numSkip} items))",
        labelCut: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.labelCut:::Cut))",
        labelCopy: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.labelCopy:::Copy))",
        labelPaste: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.labelPaste:::Paste))",
        labelPasteBefore: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.labelPasteBefore:::Paste Before))",
        labelPasteAfter: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojListView.labelPasteAfter:::Paste After))"
    },
    "oj-_ojLabel": {
        tooltipHelp: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-_ojLabel.tooltipHelp:::Help))",
        tooltipRequired: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-_ojLabel.tooltipRequired:::Required))"
    },
    "oj-ojLabel": {
        tooltipHelp: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojLabel.tooltipHelp:::Help))",
        tooltipRequired: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojLabel.tooltipRequired:::Required))"
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
        tooltipDecrement: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputNumber.tooltipDecrement:::Decrement))",
        tooltipIncrement: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputNumber.tooltipIncrement:::Increment))"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelAccSelectionAffordanceTop:::Top selection handle))",
        labelAccSelectionAffordanceBottom: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelAccSelectionAffordanceBottom:::Bottom selection handle))",
        labelEnableNonContiguousSelection: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelEnableNonContiguousSelection:::Enable Non-Contiguous Selection))",
        labelDisableNonContiguousSelection: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelDisableNonContiguousSelection:::Disable Non-Contiguous Selection))",
        labelResize: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelResize:::Resize))",
        labelResizePopupSubmit: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelResizePopupSubmit:::OK))",
        labelResizePopupSpinner: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelResizePopupSpinner:::Resize Column))",
        labelSelectRow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelSelectRow:::Select Row))",
        labelEditRow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelEditRow:::Edit Row))",
        labelSelectAndEditRow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelSelectAndEditRow:::Select And Edit Row))",
        labelSelectColumn: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelSelectColumn:::Select Column))",
        labelSort: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelSort:::Sort))",
        labelSortAsc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelSortAsc:::Sort Ascending))",
        labelSortDsc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.labelSortDsc:::Sort Descending))",
        msgFetchingData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.msgFetchingData:::Fetching Data...))",
        msgNoData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.msgNoData:::No data to display.))",
        msgInitializing: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.msgInitializing:::Initializing...))",
        msgColumnResizeWidthValidation: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.msgColumnResizeWidthValidation:::Width value must be an integer.))",
        msgScrollPolicyMaxCountSummary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.msgScrollPolicyMaxCountSummary:::Exceeded maximum rows for table scrolling.))",
        msgScrollPolicyMaxCountDetail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.msgScrollPolicyMaxCountDetail:::Please reload with smaller data set.))",
        msgStatusSortAscending: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.msgStatusSortAscending:::{0} sorted in ascending order.))",
        msgStatusSortDescending: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTable.msgStatusSortDescending:::{0} sorted in descending order.))"
    },
    "oj-ojTabs": {
        labelCut: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTabs.labelCut:::Cut))",
        labelPasteBefore: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTabs.labelPasteBefore:::Paste Before))",
        labelPasteAfter: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTabs.labelPasteAfter:::Paste After))",
        labelRemove: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTabs.labelRemove:::Remove))",
        labelReorder: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTabs.labelReorder:::Reorder))",
        removeCueText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTabs.removeCueText:::Removable))"
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
        searchField: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSelect.searchField:::Search field))",
        noMatchesFound: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSelect.noMatchesFound:::No matches found))",
        oneMatchesFound: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSelect.oneMatchesFound:::One match found))",
        moreMatchesFound: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSelect.moreMatchesFound:::{num} matches found))",
        filterFurther: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSelect.filterFurther:::More results available, please filter further.))"
    },
    "oj-ojSwitch": {
        SwitchON: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSwitch.SwitchON:::On))",
        SwitchOFF: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSwitch.SwitchOFF:::Off))"
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojCombobox.noMatchesFound:::No matches found))",
        filterFurther: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojCombobox.filterFurther:::More results available, please filter further.))"
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputSearch.noMatchesFound:::No matches found))",
        oneMatchesFound: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputSearch.oneMatchesFound:::One match found))",
        moreMatchesFound: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojInputSearch.moreMatchesFound:::{num} matches found))"
    },
    "oj-ojTree": {
        stateLoading: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.stateLoading:::Loading...))",
        labelNewNode: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelNewNode:::New Node))",
        labelMultiSelection: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelMultiSelection:::Multiple Selection))",
        labelEdit: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelEdit:::Edit))",
        labelCreate: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelCreate:::Create))",
        labelCut: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelCut:::Cut))",
        labelCopy: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelCopy:::Copy))",
        labelPaste: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelPaste:::Paste))",
        labelPasteAfter: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelPasteAfter:::Paste After))",
        labelPasteBefore: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelPasteBefore:::Paste Before))",
        labelRemove: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelRemove:::Remove))",
        labelRename: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelRename:::Rename))",
        labelNoData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTree.labelNoData:::No data))"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelAccPaging:::Pagination))",
        labelAccNavFirstPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelAccNavFirstPage:::First Page))",
        labelAccNavLastPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelAccNavLastPage:::Last Page))",
        labelAccNavNextPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelAccNavNextPage:::Next Page))",
        labelAccNavPreviousPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelAccNavPreviousPage:::Previous Page))",
        labelAccNavPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelAccNavPage:::Page))",
        labelLoadMore: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelLoadMore:::Show More...))",
        labelLoadMoreMaxRows: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelLoadMoreMaxRows:::Reached Maximum Limit of {maxRows} rows))",
        labelNavInputPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelNavInputPage:::Page))",
        labelNavInputPageMax: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.labelNavInputPageMax:::of {pageMax}))",
        msgItemRangeCurrent: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.msgItemRangeCurrent:::{pageFrom}-{pageTo}))",
        msgItemRangeCurrentSingle: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.msgItemRangeCurrentSingle:::{pageFrom}))",
        msgItemRangeOf: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.msgItemRangeOf:::of))",
        msgItemRangeOfAtLeast: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.msgItemRangeOfAtLeast:::of at least))",
        msgItemRangeOfApprox: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.msgItemRangeOfApprox:::of approx.))",
        msgItemRangeItems: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.msgItemRangeItems:::items))",
        tipNavInputPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.tipNavInputPage:::Go To Page))",
        tipNavPageLink: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.tipNavPageLink:::Go To Page {pageNum}))",
        tipNavNextPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.tipNavNextPage:::Next))",
        tipNavPreviousPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.tipNavPreviousPage:::Previous))",
        tipNavFirstPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.tipNavFirstPage:::First))",
        tipNavLastPage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.tipNavLastPage:::Last))",
        pageInvalid: {
            summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.pageInvalid.summary:::The page value entered is invalid.))",
            detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.pageInvalid.detail:::Please enter a value greater than 0.))"
        },
        maxPageLinksInvalid: {
            summary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.maxPageLinksInvalid.summary:::Value for maxPageLinks is invalid.))",
            detail: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPagingControl.maxPageLinksInvalid.detail:::Please enter a value greater than 4.))"
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMasonryLayout.labelCut:::Cut))",
        labelPasteBefore: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMasonryLayout.labelPasteBefore:::Paste Before))",
        labelPasteAfter: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMasonryLayout.labelPasteAfter:::Paste After))"
    },
    "oj-panel": {
        labelAccButtonExpand: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-panel.labelAccButtonExpand:::Expand))",
        labelAccButtonCollapse: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-panel.labelAccButtonCollapse:::Collapse))",
        labelAccButtonRemove: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-panel.labelAccButtonRemove:::Remove))"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelDefaultGroupName:::Group {0}))",
        labelSeries: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelSeries:::Series))",
        labelGroup: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelGroup:::Group))",
        labelDate: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelDate:::Date))",
        labelValue: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelValue:::Value))",
        labelTargetValue: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelTargetValue:::Target))",
        labelX: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelX:::X))",
        labelY: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelY:::Y))",
        labelZ: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelZ:::Z))",
        labelPercentage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelPercentage:::Percentage))",
        labelLow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelLow:::Low))",
        labelHigh: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelHigh:::High))",
        labelOpen: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelOpen:::Open))",
        labelClose: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelClose:::Close))",
        labelVolume: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelVolume:::Volume))",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelMin:::Min))",
        labelMax: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelMax:::Max))",
        labelOther: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.labelOther:::Other))",
        tooltipPan: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.tooltipPan:::Pan))",
        tooltipSelect: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.tooltipSelect:::Marquee select))",
        tooltipZoom: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.tooltipZoom:::Marquee zoom))",
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojChart.componentName:::Chart))"
    },
    "oj-dvtBaseGauge": {
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseGauge.componentName:::Gauge))"
    },
    "oj-ojDiagram": {
        promotedLink: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDiagram.promotedLink:::{0} link))",
        promotedLinks: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDiagram.promotedLinks:::{0} links))",
        promotedLinkAriaDesc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDiagram.promotedLinkAriaDesc:::Indirect))",
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDiagram.componentName:::Diagram))"
    },
    "oj-ojGantt": {
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.componentName:::Gantt))",
        accessibleDurationDays: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessibleDurationDays:::{0} days))",
        accessibleDurationHours: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessibleDurationHours:::{0} hours))",
        accessibleTaskInfo: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessibleTaskInfo:::Start time is {0}, end time is {1}, duration is {2}))",
        accessibleMilestoneInfo: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessibleMilestoneInfo:::Time is {0}))",
        accessibleRowInfo: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessibleRowInfo:::Row {0}))",
        accessibleTaskTypeMilestone: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessibleTaskTypeMilestone:::Milestone))",
        accessibleTaskTypeSummary: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessibleTaskTypeSummary:::Summary))",
        accessiblePredecessorInfo: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessiblePredecessorInfo:::{0} predecessors))",
        accessibleSuccessorInfo: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessibleSuccessorInfo:::{0} successors))",
        accessibleDependencyInfo: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.accessibleDependencyInfo:::Dependency type {0}, connects {1} to {2}))",
        startStartDependencyAriaDesc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.startStartDependencyAriaDesc:::start to start))",
        startFinishDependencyAriaDesc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.startFinishDependencyAriaDesc:::start to finish))",
        finishStartDependencyAriaDesc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.finishStartDependencyAriaDesc:::finish to start))",
        finishFinishDependencyAriaDesc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.finishFinishDependencyAriaDesc:::finish to finish))",
        tooltipZoomIn: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.tooltipZoomIn:::Zoom In))",
        tooltipZoomOut: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.tooltipZoomOut:::Zoom Out))",
        labelRow: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelRow:::Row))",
        labelStart: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelStart:::Start))",
        labelEnd: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelEnd:::End))",
        labelDate: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelDate:::Date))",
        labelBaselineStart: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelBaselineStart:::Baseline Start))",
        labelBaselineEnd: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelBaselineEnd:::Baseline End))",
        labelBaselineDate: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelBaselineDate:::Baseline Date))",
        labelLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelLabel:::Label))",
        labelProgress: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelProgress:::Progress))",
        labelMoveBy: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.labelMoveBy:::Move By))",
        taskMoveInitiated: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.taskMoveInitiated:::Task move initiated))",
        taskMoveSelectionInfo: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.taskMoveSelectionInfo:::{0} others selected))",
        taskMoveInitiatedInstruction: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.taskMoveInitiatedInstruction:::Use the arrow keys to move))",
        taskMoveFinalized: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.taskMoveFinalized:::Task move finalized))",
        taskMoveCancelled: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojGantt.taskMoveCancelled:::Task move cancelled))"
    },
    "oj-ojLegend": {
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojLegend.componentName:::Legend))"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNBox.labelOther:::Other))",
        labelGroup: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNBox.labelGroup:::Group))",
        labelSize: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNBox.labelSize:::Size))",
        labelAdditionalData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNBox.labelAdditionalData:::Additional Data))",
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNBox.componentName:::NBox))"
    },
    "oj-ojPictoChart": {
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPictoChart.componentName:::Picture Chart))"
    },
    "oj-ojSparkChart": {
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSparkChart.componentName:::Chart))"
    },
    "oj-ojSunburst": {
        labelColor: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSunburst.labelColor:::Color))",
        labelSize: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSunburst.labelSize:::Size))",
        tooltipExpand: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSunburst.tooltipExpand:::Expand))",
        tooltipCollapse: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSunburst.tooltipCollapse:::Collapse))",
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSunburst.componentName:::Sunburst))"
    },
    "oj-ojTagCloud": {
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTagCloud.componentName:::Tag Cloud))"
    },
    "oj-ojThematicMap": {
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojThematicMap.componentName:::Thematic Map))"
    },
    "oj-ojTimeAxis": {
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTimeAxis.componentName:::Time Axis))"
    },
    "oj-ojTimeline": {
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTimeline.componentName:::Timeline))",
        accessibleItemDesc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTimeline.accessibleItemDesc:::Description is {0}.))",
        accessibleItemEnd: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTimeline.accessibleItemEnd:::End time is {0}.))",
        accessibleItemStart: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTimeline.accessibleItemStart:::Start time is {0}.))",
        accessibleItemTitle: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTimeline.accessibleItemTitle:::Title is {0}.))",
        labelSeries: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTimeline.labelSeries:::Series))",
        tooltipZoomIn: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTimeline.tooltipZoomIn:::Zoom In))",
        tooltipZoomOut: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTimeline.tooltipZoomOut:::Zoom Out))"
    },
    "oj-ojTreemap": {
        labelColor: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTreemap.labelColor:::Color))",
        labelSize: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTreemap.labelSize:::Size))",
        tooltipIsolate: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTreemap.tooltipIsolate:::Isolate))",
        tooltipRestore: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTreemap.tooltipRestore:::Restore))",
        componentName: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojTreemap.componentName:::Treemap))"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelScalingSuffixThousand:::K))",
        labelScalingSuffixMillion: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelScalingSuffixMillion:::M))",
        labelScalingSuffixBillion: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelScalingSuffixBillion:::B))",
        labelScalingSuffixTrillion: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelScalingSuffixTrillion:::T))",
        labelScalingSuffixQuadrillion: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelScalingSuffixQuadrillion:::Q))",
        labelInvalidData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelInvalidData:::Invalid data))",
        labelNoData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelNoData:::No data to display))",
        labelClearSelection: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelClearSelection:::Clear Selection))",
        labelDataVisualization: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelDataVisualization:::Data Visualization))",
        stateSelected: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateSelected:::Selected))",
        stateUnselected: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateUnselected:::Unselected))",
        stateMaximized: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateMaximized:::Maximized))",
        stateMinimized: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateMinimized:::Minimized))",
        stateExpanded: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateExpanded:::Expanded))",
        stateCollapsed: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateCollapsed:::Collapsed))",
        stateIsolated: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateIsolated:::Isolated))",
        stateHidden: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateHidden:::Hidden))",
        stateVisible: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateVisible:::Visible))",
        stateDrillable: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.stateDrillable:::Drillable))",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-dvtBaseComponent.labelCountWithTotal:::{0} of {1}))"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.defaultRootLabel:::Navigation List))",
        hierMenuBtnLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.hierMenuBtnLabel:::Hierarchical Menu button))",
        selectedLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.selectedLabel:::selected))",
        previousIcon: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.previousIcon:::Previous))",
        msgFetchingData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.msgFetchingData:::Fetching Data...))",
        msgNoData: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.msgNoData:::No items to display.))",
        overflowItemLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.overflowItemLabel:::More))",
        accessibleReorderTouchInstructionText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.accessibleReorderTouchInstructionText:::Double tap and hold.  Wait for the sound then drag to rearrange.))",
        accessibleReorderBeforeItem: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.accessibleReorderBeforeItem:::Before {item}))",
        accessibleReorderAfterItem: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.accessibleReorderAfterItem:::After {item}))",
        labelCut: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.labelCut:::Cut))",
        labelPasteBefore: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.labelPasteBefore:::Paste Before))",
        labelPasteAfter: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.labelPasteAfter:::Paste After))",
        labelRemove: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.labelRemove:::Remove))",
        removeCueText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojNavigationList.removeCueText:::Removable))"
    },
    "oj-ojSlider": {
        noValue: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSlider.noValue:::ojSlider has no value))",
        maxMin: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSlider.maxMin:::Max must not be less than or equal to min))",
        valueRange: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSlider.valueRange:::Value must be within min to max range))",
        optionNum: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSlider.optionNum:::{option} option is not a number))",
        invalidStep: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSlider.invalidStep:::Invalid step; step must be > 0))"
    },
    "oj-ojDialog": {
        labelCloseIcon: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojDialog.labelCloseIcon:::Close))"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPopup.ariaLiveRegionInitialFocusFirstFocusable:::Entering pop-up. Press F6 to navigate between the pop-up and associated control.))",
        ariaLiveRegionInitialFocusNone: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPopup.ariaLiveRegionInitialFocusNone:::Pop-up opened. Press F6 to navigate between the pop-up and associated control.))",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPopup.ariaLiveRegionInitialFocusFirstFocusableTouch:::Entering pop-up. Pop-up can be closed by navigating to the last link within the pop-up.))",
        ariaLiveRegionInitialFocusNoneTouch: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPopup.ariaLiveRegionInitialFocusNoneTouch:::Pop-up opened.  Navigate to the next link to establish focus within the pop-up.))",
        ariaFocusSkipLink: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPopup.ariaFocusSkipLink:::Double tap to navigate to the open pop-up.))",
        ariaCloseSkipLink: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojPopup.ariaCloseSkipLink:::Double tap to close the open pop-up.))"
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-pullToRefresh.ariaRefreshLink:::Activate link to refresh content))",
        ariaRefreshingLink: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-pullToRefresh.ariaRefreshingLink:::Refreshing content))",
        ariaRefreshCompleteLink: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-pullToRefresh.ariaRefreshCompleteLink:::Refresh complete))"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSwipeActions.ariaShowStartActionsDescription:::Show start actions))",
        ariaShowEndActionsDescription: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSwipeActions.ariaShowEndActionsDescription:::Show end actions))",
        ariaHideActionsDescription: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojSwipeActions.ariaHideActionsDescription:::Hide actions))"
    },
    "oj-ojIndexer": {
        indexerCharacters: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojIndexer.indexerCharacters:::A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z))",
        indexerOthers: "#",
        ariaDisabledLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojIndexer.ariaDisabledLabel:::No matching group header))",
        ariaOthersLabel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojIndexer.ariaOthersLabel:::number))",
        ariaInBetweenText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojIndexer.ariaInBetweenText:::Between {first} and {second}))",
        ariaKeyboardInstructionText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojIndexer.ariaKeyboardInstructionText:::Press enter to select value.))",
        ariaTouchInstructionText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojIndexer.ariaTouchInstructionText:::Double tap and hold to enter gesture mode, then drag up or down to adjust value.))"
    },
    "oj-ojMenu": {
        labelCancel: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMenu.labelCancel:::Cancel))"
    },
    "oj-ojColorSpectrum": {
        labelHue: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorSpectrum.labelHue:::Hue))",
        labelOpacity: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorSpectrum.labelOpacity:::Opacity))",
        labelSatLum: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorSpectrum.labelSatLum:::Saturation/Luminance))",
        labelThumbDesc: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorSpectrum.labelThumbDesc:::Color spectrum four way slider.))"
    },
    "oj-ojColorPalette": {
        labelNone: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPalette.labelNone:::None))"
    },
    "oj-ojColorPicker": {
        labelSwatches: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSwatches:::Swatches))",
        labelCustomColors: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelCustomColors:::Custom Colors))",
        labelPrevColor: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelPrevColor:::Previous Color))",
        labelDefColor: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelDefColor:::Default Color))",
        labelDelete: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelDelete:::Delete))",
        labelDeleteQ: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelDeleteQ:::Delete?))",
        labelAdd: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelAdd:::Add))",
        labelAddColor: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelAddColor:::Add color))",
        labelMenuHex: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelMenuHex:::HEX))",
        labelMenuRgba: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelMenuRgba:::RGBa))",
        labelMenuHsla: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelMenuHsla:::HSLa))",
        labelSliderHue: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSliderHue:::Hue))",
        labelSliderSaturation: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSliderSaturation:::Saturation))",
        labelSliderSat: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSliderSat:::Sat))",
        labelSliderLightness: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSliderLightness:::Lightness))",
        labelSliderLum: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSliderLum:::Luminosity))",
        labelSliderAlpha: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSliderAlpha:::Alpha))",
        labelOpacity: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelOpacity:::Opacity))",
        labelSliderRed: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSliderRed:::Red))",
        labelSliderGreen: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSliderGreen:::Green))",
        labelSliderBlue: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojColorPicker.labelSliderBlue:::Blue))"
    },
    "oj-ojFilePicker": {
        dropzoneText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojFilePicker.dropzoneText:::Drop files here or click to upload))"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojProgressbar.ariaIndeterminateProgressText:::In Progress))"
    },
    "oj-ojMessage": {
        labelCloseIcon: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMessage.labelCloseIcon:::Close))",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMessages.labelLandmark:::Messages))",
        ariaLiveRegion: {
            navigationFromKeyboard: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMessages.ariaLiveRegion.navigationFromKeyboard:::Entering messages region. Press F6 to navigate back to prior focused element.))",
            navigationToTouch: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMessages.ariaLiveRegion.navigationToTouch:::Messages region has new messages. Use the voice-over rotor to navigate to the messages landmark.))",
            navigationToKeyboard: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMessages.ariaLiveRegion.navigationToKeyboard:::Messages region has new messages.  Press F6 to navigate to the most recent message region.))",
            newMessage: "((jet/rt/src/main/resources/nls/en/ojtranslations.js:::oj-ojMessages.ariaLiveRegion.newMessage:::Message category {category}. {summary}.))"
        }
    }
});