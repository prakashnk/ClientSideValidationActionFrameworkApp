define({
    "oj-message": {
        fatal: "ร้ายแรง",
        error: "ข้อผิดพลาด",
        warning: "คำเตือน",
        info: "ข้อมูล",
        confirmation: "การยืนยัน",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "ค่าไม่อยู่ในรูปแบบที่ต้องการ",
        detail: "ป้อนค่าในรูปแบบที่ต้องการ",
        "plural-separator": ", ",
        hint: {
            summary: "ตัวอย่าง: {exampleValue}",
            detail: "ป้อนค่าในรูปแบบเดียวกับตัวอย่างต่อไปนี้: '{exampleValue}'",
            "detail-plural": "ป้อนค่าในรูปแบบเดียวกับตัวอย่างต่อไปนี้: '{exampleValue}'"
        },
        optionHint: {
            detail: "ค่าที่ยอมรับสำหรับตัวเลือก '{propertyName}' คือ '{propertyValueValid}'",
            "detail-plural": "ค่าที่ยอมรับสำหรับตัวเลือก '{propertyName}' คือ '{propertyValueValid}'"
        },
        optionTypesMismatch: {
            summary: "ต้องระบุค่าสำหรับตัวเลือก '{requiredPropertyName}' เมื่อตั้งค่าตัวเลือก '{propertyName}' เป็น '{propertyValue}'"
        },
        optionTypeInvalid: {
            summary: "ไม่ได้ระบุค่าของประเภทที่ต้องการสำหรับตัวเลือก '{propertyName}'"
        },
        optionOutOfRange: {
            summary: "ค่า {propertyValue} อยู่นอกช่วงสำหรับตัวเลือก '{propertyName}'"
        },
        optionValueInvalid: {
            summary: "ค่า '{propertyValue}' ที่ระบุสำหรับตัวเลือก '{propertyName}' ไม่ถูกต้อง"
        },
        number: {
            decimalFormatMismatch: {
                summary: "'{value}' ไม่อยู่ในรูปแบบตัวเลขที่ต้องการ"
            },
            shortLongUnsupportedParse: {
                summary: "ไม่รองรับ 'short' และ 'long' สำหรับการพาร์ซตัวแปลง",
                detail: "เปลี่ยนองค์ประกอบเป็น readOnly โดยฟิลด์ readOnly จะไม่เรียกใช้ฟังก์ชันการพาร์ซของตัวแปลง"
            },
            currencyFormatMismatch: {
                summary: "'{value}' ไม่อยู่ในรูปแบบสกุลเงินที่ต้องการ"
            },
            percentFormatMismatch: {
                summary: "'{value}' ไม่อยู่ในรูปแบบเปอร์เซ็นต์ที่ต้องการ"
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "ค่า '{value}' อยู่นอกช่วงสำหรับ '{propertyName}'",
                detail: "ป้อนค่าตั้งแต่ '{minValue}' ถึง '{maxValue}'",
                hour: "ชั่วโมง",
                minute: "นาที",
                second: "วินาที",
                millisec: "มิลลิวินาที",
                month: "เดือน",
                day: "วัน",
                year: "ปี",
                "month name": "ชื่อเดือน",
                weekday: "วันทำการ"
            },
            dateFormatMismatch: {
                summary: "'{value}' ไม่อยู่ในรูปแบบวันที่ที่ต้องการ"
            },
            invalidTimeZoneID: {
                summary: "ระบุ ID โซนเวลา {timeZoneID} ไม่ถูกต้อง"
            },
            nonExistingTime: {
                summary: "ไม่มีเวลาที่อินพุต เนื่องจากอยู่ในช่วงปรับเปลี่ยนเป็นเวลาตามฤดูกาล"
            },
            missingTimeZoneData: {
                summary: "ไม่มีข้อมูล TimeZone โปรดเรียก 'ojs/ojtimezonedata' ที่จำเป็นเพื่อโหลดข้อมูล TimeZone"
            },
            timeFormatMismatch: {
                summary: "'{value}' ไม่อยู่ในรูปแบบเวลาที่ต้องการ"
            },
            datetimeFormatMismatch: {
                summary: "'{value}' ไม่อยู่ในรูปแบบวันที่และเวลาที่ต้องการ"
            },
            dateToWeekdayMismatch: {
                summary: "วันที่ '{date}' ไม่ตรงกับ '{weekday}'",
                detail: "ป้อนวันทำการที่ตรงกับวันที่"
            },
            invalidISOString: {
                summary: "'{isoStr}' ที่ระบุไม่ใช่สตริง ISO 8601 ที่ถูกต้อง",
                detail: "โปรดระบุสตริง ISO 8601 ที่ถูกต้อง"
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "ป้อนอักขระ {min} ตัวหรือมากกว่า",
                max: "ป้อนอักขระ {max} ตัวหรือน้อยกว่า",
                inRange: "ป้อนอักขระ {min} ตัวหรือมากกว่า และไม่เกิน {max} ตัว",
                exact: "ป้อนอักขระ {length} ตัว"
            },
            messageDetail: {
                tooShort: "ป้อนอักขระไม่ต่ำกว่า {min} ตัว",
                tooLong: "ป้อนอักขระไม่เกิน {max} ตัว"
            },
            messageSummary: {
                tooShort: "มีอักขระจำนวนน้อยเกินไป",
                tooLong: "มีอักขระจำนวนมากเกินไป"
            }
        },
        range: {
            number: {
                hint: {
                    min: "ป้อนตัวเลขที่มากกว่าหรือเท่ากับ {min}",
                    max: "ป้อนตัวเลขที่น้อยกว่าหรือเท่ากับ {max}",
                    inRange: "ป้อนตัวเลขตั้งแต่ {min} ถึง {max}",
                    exact: "ป้อนตัวเลข {num}"
                },
                messageDetail: {
                    rangeUnderflow: "ตัวเลขต้องมากกว่าหรือเท่ากับ {min}",
                    rangeOverflow: "ตัวเลขต้องน้อยกว่าหรือเท่ากับ {max}",
                    exact: "ตัวเลขต้องเท่ากับ {num}"
                },
                messageSummary: {
                    rangeUnderflow: "ตัวเลขน้อยเกินไป",
                    rangeOverflow: "ตัวเลขสูงเกินไป"
                }
            },
            datetime: {
                hint: {
                    min: "ป้อนวันที่และเวลาตรงกับหรือหลัง {min}",
                    max: "ป้อนวันที่และเวลาตรงกับหรือก่อน {max}",
                    inRange: "ป้อนวันที่และเวลาตั้งแต่ {min} ถึง {max}"
                },
                messageDetail: {
                    rangeUnderflow: "วันที่และเวลาต้องตรงกับหรือหลัง {min}",
                    rangeOverflow: "วันที่และเวลาต้องตรงกับหรือก่อน {max}"
                },
                messageSummary: {
                    rangeUnderflow: "วันที่และเวลาอยู่ก่อนวันที่และเวลาเริ่มต้น",
                    rangeOverflow: "วันที่และเวลาอยู่หลังวันที่และเวลาสิ้นสุด"
                }
            },
            date: {
                hint: {
                    min: "ป้อนวันที่ตรงกับหรือหลัง {min}",
                    max: "ป้อนวันที่ตรงกับหรือก่อน {max}",
                    inRange: "ป้อนวันที่ตั้งแต่ {min} ถึง {max}"
                },
                messageDetail: {
                    rangeUnderflow: "วันที่ต้องตรงกับหรือหลัง {min}",
                    rangeOverflow: "วันที่ต้องตรงกับหรือก่อน {max}"
                },
                messageSummary: {
                    rangeUnderflow: "วันที่อยู่ก่อนวันที่เริ่มต้น",
                    rangeOverflow: "วันที่อยู่หลังวันที่สิ้นสุด"
                }
            },
            time: {
                hint: {
                    min: "ป้อนเวลาตรงกับหรือหลัง {min}",
                    max: "ป้อนเวลาตรงกับหรือก่อน {max}",
                    inRange: "ป้อนเวลาตั้งแต่ {min} ถึง {max}"
                },
                messageDetail: {
                    rangeUnderflow: "เวลาต้องตรงกับหรือหลัง {min}",
                    rangeOverflow: "เวลาต้องตรงกับหรือก่อน {max}"
                },
                messageSummary: {
                    rangeUnderflow: "เวลาอยู่ก่อนเวลาเริ่มต้น",
                    rangeOverflow: "เวลาอยู่หลังเวลาสิ้นสุด"
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "วันที่ {value} มาจากรายการที่เลิกใช้",
                messageDetail: "วันที่ {value} ไม่ควรมาจากรายการที่เลิกใช้"
            }
        },
        regExp: {
            summary: "รูปแบบไม่ถูกต้อง",
            detail: "ค่า '{value}' ต้องตรงกับรูปแบบต่อไปนี้: '{pattern}'"
        },
        required: {
            summary: "ต้องระบุค่า",
            detail: "คุณต้องป้อนค่า"
        }
    },
    "oj-ojInputDate": {
        done: "เสร็จ",
        cancel: "ยกเลิก",
        prevText: "ก่อนหน้า",
        nextText: "ถัดไป",
        currentText: "วันนี้",
        weekHeader: "สัปดาห์",
        tooltipCalendar: "เลือกวันที่",
        tooltipCalendarTime: "เลือกวันที่/เวลา",
        tooltipCalendarDisabled: "เลิกใช้การเลือกวันที่",
        tooltipCalendarTimeDisabled: "เลิกใช้การเลือกวันที่/เวลา",
        picker: "ตัวเลือก",
        weekText: "สัปดาห์",
        datePicker: "ตัวเลือกวันที่",
        inputHelp: "กดลูกศรชี้ลงหรือลูกศรชี้ขึ้นเพื่อเข้าใช้ปฏิทิน",
        inputHelpBoth: "กดลูกศรชี้ลงหรือลูกศรชี้ขึ้นเพื่อเข้าใช้ปฏิทิน และ Shift + ลูกศรชี้ลงหรือ Shift + ลูกศรชี้ขึ้นเพื่อเข้าใช้ดรอปดาวน์เวลา",
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
        cancelText: "ยกเลิก",
        okText: "ตกลง",
        currentTimeText: "ปัจจุบัน",
        hourWheelLabel: "ชั่วโมง",
        minuteWheelLabel: "นาที",
        ampmWheelLabel: "AMPM",
        tooltipTime: "เลือกเวลา",
        tooltipTimeDisabled: "เลิกใช้การเลือกเวลา",
        inputHelp: "กดลูกศรชี้ลงหรือลูกศรชี้ขึ้นเพื่อเข้าใช้ดรอปดาวน์เวลา",
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
            messageDetail: "ค่าต้องตรงกับรูปแบบนี้: '{pattern}'"
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "กำลังแสดง {pageIndex} จาก {pageCount} เพจ",
        labelAccArrowNextPage: "เลือก ถัดไป เพื่อแสดงเพจถัดไป",
        labelAccArrowPreviousPage: "เลือก ก่อนหน้า เพื่อแสดงเพจก่อนหน้า",
        tipArrowNextPage: "ถัดไป",
        tipArrowPreviousPage: "ก่อนหน้า"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "{id} เรียงจากน้อยไปมาก",
        accessibleSortDescending: "{id} เรียกจากมากไปน้อย",
        accessibleActionableMode: "เข้าสู่โหมดที่สามารถดำเนินการได้",
        accessibleNavigationMode: "เข้าสู่โหมดการนาวิเกต กด F2 เพื่อเข้าสู่โหมดแก้ไขหรือโหมดที่สามารถดำเนินการได้",
        accessibleEditableMode: "เข้าสู่โหมดที่สามารถแก้ไขได้ กด Escape เพื่อนาวิเกตนอกกริดข้อมูล",
        accessibleSummaryExact: "นี่คือกริดข้อมูลที่มี {rownum} แถวและ {colnum} คอลัมน์",
        accessibleSummaryEstimate: "นี่คือกริดข้อมูลที่ไม่ทราบจำนวนแถวและคอลัมน์",
        accessibleSummaryExpanded: "ขณะนี้มีการขยายแถวแล้ว {num} แถว",
        accessibleRowExpanded: "ขยายแถวแล้ว",
        accessibleRowCollapsed: "ยุบแถวแล้ว",
        accessibleRowSelected: "เลือกแถว {row}",
        accessibleColumnSelected: "เลือกคอลัมน์ {column}",
        accessibleStateSelected: "รายการที่เลือก",
        accessibleMultiCellSelected: "เลือกไว้ {num} เซลล์",
        accessibleColumnSpanContext: "{extent} กว้าง",
        accessibleRowSpanContext: "{extent} สูง",
        accessibleRowContext: "แถว {index}",
        accessibleColumnContext: "คอลัมน์ {index}",
        accessibleRowHeaderContext: "ส่วนหัวของแถว {index}",
        accessibleColumnHeaderContext: "ส่วนหัวของคอลัมน์ {index}",
        accessibleRowEndHeaderContext: "ส่วนหัวการสิ้นสุดแถว {index}",
        accessibleColumnEndHeaderContext: "ส่วนหัวการสิ้นสุดคอลัมน์ {index}",
        accessibleLevelContext: "ระดับ {level}",
        accessibleRangeSelectModeOn: "เปิดโหมดการเพิ่มช่วงของเซลล์ที่เลือก",
        accessibleRangeSelectModeOff: "ปิดโหมดการเพิ่มช่วงของเซลล์ที่เลือก",
        accessibleFirstRow: "คุณอยู่ที่แถวแรก",
        accessibleLastRow: "คุณอยู่ที่แถวสุดท้าย",
        accessibleFirstColumn: "คุณอยู่ที่คอลัมน์แรก",
        accessibleLastColumn: "คุณอยู่ที่คอลัมน์สุดท้าย",
        accessibleSelectionAffordanceTop: "แฮนเดิลการเลือกด้านบน",
        accessibleSelectionAffordanceBottom: "แฮนเดิลการเลือกด้านล่าง",
        msgFetchingData: "กำลังดึงข้อมูล...",
        msgNoData: "ไม่มีรายการที่จะแสดงผล",
        labelResize: "ปรับขนาด",
        labelResizeWidth: "ปรับความกว้าง",
        labelResizeHeight: "ปรับความสูง",
        labelSortRow: "จัดเรียงแถว",
        labelSortRowAsc: "จัดเรียงแถวจากน้อยไปมาก",
        labelSortRowDsc: "จัดเรียงแถวจากมากไปน้อย",
        labelSortCol: "จัดเรียงคอลัมน์",
        labelSortColAsc: "จัดเรียงคอลัมน์จากน้อยไปมาก",
        labelSortColDsc: "จัดเรียงคอลัมน์จากมากไปน้อย",
        labelCut: "ตัด",
        labelPaste: "วาง",
        labelEnableNonContiguous: "ใช้การเลือกแบบไม่ต่อเนื่อง",
        labelDisableNonContiguous: "เลิกใช้การเลือกแบบไม่ต่อเนื่อง",
        labelResizeDialogSubmit: "ตกลง"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "ระดับ {level}",
        accessibleRowDescription: "ระดับ {level}, แถว {num} จาก {total}",
        accessibleRowExpanded: "ขยายแถวแล้ว",
        accessibleRowCollapsed: "ยุบแถวแล้ว",
        accessibleStateExpanded: "ขยายแล้ว",
        accessibleStateCollapsed: "ยุบแล้ว"
    },
    "oj-ojListView": {
        msgFetchingData: "กำลังดึงข้อมูล...",
        msgNoData: "ไม่มีรายการที่จะแสดงผล",
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        accessibleReorderTouchInstructionText: "แตะสองครั้งค้างไว้ รอจนกว่าจะได้ยินเสียงแล้วจึงลากเพื่อจัดเรียงใหม่",
        accessibleReorderBeforeItem: "ก่อน {item}",
        accessibleReorderAfterItem: "หลัง {item}",
        accessibleReorderInsideItem: "ใน {item}",
        accessibleNavigateSkipItems: "กำลังข้าม {numSkip} รายการ",
        labelCut: "ตัด",
        labelCopy: "คัดลอก",
        labelPaste: "วาง",
        labelPasteBefore: "วางก่อน",
        labelPasteAfter: "วางหลัง"
    },
    "oj-_ojLabel": {
        tooltipHelp: "วิธีใช้",
        tooltipRequired: "ต้องระบุ"
    },
    "oj-ojLabel": {
        tooltipHelp: "วิธีใช้",
        tooltipRequired: "ต้องระบุ"
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
        tooltipDecrement: "ส่วนลด",
        tooltipIncrement: "ส่วนเพิ่ม"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "แฮนเดิลการเลือกด้านบน",
        labelAccSelectionAffordanceBottom: "แฮนเดิลการเลือกด้านล่าง",
        labelEnableNonContiguousSelection: "ใช้การเลือกแบบไม่ต่อเนื่อง",
        labelDisableNonContiguousSelection: "เลิกใช้การเลือกแบบไม่ต่อเนื่อง",
        labelResize: "ปรับขนาด",
        labelResizePopupSubmit: "ตกลง",
        labelResizePopupSpinner: "ปรับขนาดของคอลัมน์",
        labelSelectRow: "เลือกแถว",
        labelEditRow: "แก้ไขแถว",
        labelSelectAndEditRow: "เลือกและแก้ไขแถว",
        labelSelectColumn: "เลือกคอลัมน์",
        labelSort: "จัดเรียง",
        labelSortAsc: "เรียงจากน้อยไปมาก",
        labelSortDsc: "เรียงจากมากไปน้อย",
        msgFetchingData: "กำลังดึงข้อมูล...",
        msgNoData: "ไม่มีข้อมูลที่จะแสดงผล",
        msgInitializing: "กำลังเริ่มต้น...",
        msgColumnResizeWidthValidation: "ค่าความกว้างต้องเป็นจำนวนเต็ม",
        msgScrollPolicyMaxCountSummary: "เกินจำนวนแถวสูงสุดสำหรับการเลื่อนตาราง",
        msgScrollPolicyMaxCountDetail: "โปรดโหลดอีกครั้งด้วยชุดข้อมูลที่มีขนาดเล็กลง",
        msgStatusSortAscending: "{0} เรียงจากน้อยไปมาก",
        msgStatusSortDescending: "{0} เรียกจากมากไปน้อย"
    },
    "oj-ojTabs": {
        labelCut: "ตัด",
        labelPasteBefore: "วางก่อน",
        labelPasteAfter: "วางหลัง",
        labelRemove: "ย้ายออก",
        labelReorder: "จัดลำดับใหม่",
        removeCueText: "ย้ายออกได้"
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
        searchField: "ฟิลด์ค้นหา",
        noMatchesFound: "ไม่พบรายการที่ค้นหา",
        oneMatchesFound: "พบข้อมูลหนึ่งรายการ",
        moreMatchesFound: "พบ {num} รายการที่ค้นหา",
        filterFurther: "มีผลลัพธ์เพิ่มเติม โปรดฟิลเตอร์เพิ่ม"
    },
    "oj-ojSwitch": {
        SwitchON: "เปิด",
        SwitchOFF: "ปิด"
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "ไม่พบรายการที่ค้นหา",
        filterFurther: "มีผลลัพธ์เพิ่มเติม โปรดฟิลเตอร์เพิ่ม"
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "ไม่พบรายการที่ค้นหา",
        oneMatchesFound: "พบข้อมูลหนึ่งรายการ",
        moreMatchesFound: "พบ {num} รายการที่ค้นหา"
    },
    "oj-ojTree": {
        stateLoading: "กำลังโหลด...",
        labelNewNode: "โหนดใหม่",
        labelMultiSelection: "การเลือกหลายรายการ",
        labelEdit: "แก้ไข",
        labelCreate: "สร้าง",
        labelCut: "ตัด",
        labelCopy: "คัดลอก",
        labelPaste: "วาง",
        labelPasteAfter: "วางหลัง",
        labelPasteBefore: "วางก่อน",
        labelRemove: "ย้ายออก",
        labelRename: "เปลี่ยนชื่อ",
        labelNoData: "ไม่มีข้อมูล"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "แบ่งหน้า",
        labelAccNavFirstPage: "เพจแรก",
        labelAccNavLastPage: "เพจสุดท้าย",
        labelAccNavNextPage: "เพจถัดไป",
        labelAccNavPreviousPage: "เพจก่อนหน้า",
        labelAccNavPage: "เพจ",
        labelLoadMore: "แสดงเพิ่มเติม...",
        labelLoadMoreMaxRows: "ถึงขีดจำกัดสูงสุด {maxRows} แถวแล้ว",
        labelNavInputPage: "เพจ",
        labelNavInputPageMax: "จาก {pageMax}",
        msgItemRangeCurrent: "{pageFrom}-{pageTo}",
        msgItemRangeCurrentSingle: "{pageFrom}",
        msgItemRangeOf: "จาก",
        msgItemRangeOfAtLeast: "จากอย่างน้อย",
        msgItemRangeOfApprox: "จากประมาณ",
        msgItemRangeItems: "รายการ",
        tipNavInputPage: "ไปที่เพจ",
        tipNavPageLink: "ไปที่เพจ {pageNum}",
        tipNavNextPage: "ถัดไป",
        tipNavPreviousPage: "ก่อนหน้า",
        tipNavFirstPage: "แรก",
        tipNavLastPage: "สุดท้าย",
        pageInvalid: {
            summary: "ค่าของเพจที่ป้อนไม่ถูกต้อง",
            detail: "โปรดป้อนค่ามากกว่า 0"
        },
        maxPageLinksInvalid: {
            summary: "ค่าสำหรับ maxPageLinks ไม่ถูกต้อง",
            detail: "โปรดป้อนค่ามากกว่า 4"
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "ตัด",
        labelPasteBefore: "วางก่อน",
        labelPasteAfter: "วางหลัง"
    },
    "oj-panel": {
        labelAccButtonExpand: "ขยาย",
        labelAccButtonCollapse: "ยุบ",
        labelAccButtonRemove: "ย้ายออก"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "กลุ่ม {0}",
        labelSeries: "ชุด",
        labelGroup: "กลุ่ม",
        labelDate: "วันที่",
        labelValue: "ค่า",
        labelTargetValue: "เป้าหมาย",
        labelX: "X",
        labelY: "Y",
        labelZ: "Z",
        labelPercentage: "เปอร์เซ็นต์",
        labelLow: "ต่ำ",
        labelHigh: "สูง",
        labelOpen: "เปิด",
        labelClose: "ปิด",
        labelVolume: "ปริมาณ",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "ต่ำสุด",
        labelMax: "สูงสุด",
        labelOther: "อื่นๆ",
        tooltipPan: "แพน",
        tooltipSelect: "เลือกเฉพาะในกรอบ",
        tooltipZoom: "ซูมเฉพาะในกรอบ",
        componentName: "แผนภูมิ"
    },
    "oj-dvtBaseGauge": {
        componentName: "มาตรวัด"
    },
    "oj-ojDiagram": {
        promotedLink: "{0} ลิงค์",
        promotedLinks: "{0} ลิงค์",
        promotedLinkAriaDesc: "ทางอ้อม",
        componentName: "ไดอะแกรม"
    },
    "oj-ojGantt": {
        componentName: "แกนท์",
        accessibleDurationDays: "{0} วัน",
        accessibleDurationHours: "{0} ชั่วโมง",
        accessibleTaskInfo: "เวลาเริ่มต้นคือ {0} เวลาสิ้นสุดคือ {1} ระยะเวลาคือ {2}",
        accessibleMilestoneInfo: "เวลาคือ {0}",
        accessibleRowInfo: "แถว {0}",
        accessibleTaskTypeMilestone: "ไมล์สโตน",
        accessibleTaskTypeSummary: "ข้อมูลสรุป",
        accessiblePredecessorInfo: "{0} ค่าที่อยู่ก่อนหน้า",
        accessibleSuccessorInfo: "{0} ค่าถัดไป",
        accessibleDependencyInfo: "ประเภทการอ้างอิง {0} เชื่อมต่อ {1} กับ {2}",
        startStartDependencyAriaDesc: "เริ่มต้น-เริ่มต้น",
        startFinishDependencyAriaDesc: "เริ่มต้น-สิ้นสุด",
        finishStartDependencyAriaDesc: "สิ้นสุด-เริ่มต้น",
        finishFinishDependencyAriaDesc: "สิ้นสุด-สิ้นสุด",
        tooltipZoomIn: "ซูมเข้า",
        tooltipZoomOut: "ซูมออก",
        labelRow: "แถว",
        labelStart: "เริ่มต้น",
        labelEnd: "สิ้นสุด",
        labelDate: "วันที่",
        labelBaselineStart: "เริ่มต้นตามเกณฑ์พื้นฐาน",
        labelBaselineEnd: "สิ้นสุดตามเกณฑ์พื้นฐาน",
        labelBaselineDate: "วันที่ตามเกณฑ์พื้นฐาน",
        labelLabel: "ป้ายกำกับ",
        labelProgress: "ความคืบหน้า",
        labelMoveBy: "ย้ายภายใน",
        taskMoveInitiated: "เริ่มต้นการย้ายงาน",
        taskMoveSelectionInfo: "อื่นๆ {0} รายการที่เลือก",
        taskMoveInitiatedInstruction: "ใช้ปุ่มลูกศรเพื่อย้าย",
        taskMoveFinalized: "สิ้นสุดการย้ายงาน",
        taskMoveCancelled: "ยกเลิกการย้ายงาน"
    },
    "oj-ojLegend": {
        componentName: "คำอธิบาย"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "อื่นๆ",
        labelGroup: "กลุ่ม",
        labelSize: "ขนาด",
        labelAdditionalData: "ข้อมูลเพิ่มเติม",
        componentName: "NBox"
    },
    "oj-ojPictoChart": {
        componentName: "แผนภูมิรูปภาพ"
    },
    "oj-ojSparkChart": {
        componentName: "แผนภูมิ"
    },
    "oj-ojSunburst": {
        labelColor: "สี",
        labelSize: "ขนาด",
        tooltipExpand: "ขยาย",
        tooltipCollapse: "ยุบ",
        componentName: "ซันเบิร์สท์"
    },
    "oj-ojTagCloud": {
        componentName: "แท็กคลาวด์"
    },
    "oj-ojThematicMap": {
        componentName: "แผนที่เฉพาะทาง"
    },
    "oj-ojTimeAxis": {
        componentName: "แกนเวลา"
    },
    "oj-ojTimeline": {
        componentName: "ระยะเวลา",
        accessibleItemDesc: "คำอธิบายคือ {0}",
        accessibleItemEnd: "เวลาสิ้นสุดคือ {0}",
        accessibleItemStart: "เวลาเริ่มต้นคือ {0}",
        accessibleItemTitle: "ชื่อคือ {0}",
        labelSeries: "ชุด",
        tooltipZoomIn: "ซูมเข้า",
        tooltipZoomOut: "ซูมออก"
    },
    "oj-ojTreemap": {
        labelColor: "สี",
        labelSize: "ขนาด",
        tooltipIsolate: "แยก",
        tooltipRestore: "เรียกคืน",
        componentName: "แผนที่โครงสร้าง"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "K",
        labelScalingSuffixMillion: "M",
        labelScalingSuffixBillion: "B",
        labelScalingSuffixTrillion: "T",
        labelScalingSuffixQuadrillion: "Q",
        labelInvalidData: "ข้อมูลไม่ถูกต้อง",
        labelNoData: "ไม่มีข้อมูลที่จะแสดงผล",
        labelClearSelection: "ล้างข้อมูลที่เลือกไว้",
        labelDataVisualization: "การแสดงข้อมูล",
        stateSelected: "เลือกไว้",
        stateUnselected: "ไม่ได้เลือกไว้",
        stateMaximized: "ขนาดใหญ่สุด",
        stateMinimized: "ขนาดเล็กสุด",
        stateExpanded: "ขยายแล้ว",
        stateCollapsed: "ยุบแล้ว",
        stateIsolated: "แยก",
        stateHidden: "ซ่อน",
        stateVisible: "มองเห็นได้",
        stateDrillable: "ดริลล์ได้",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "{0} จาก {1}"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "ลิสต์การนาวิเกต",
        hierMenuBtnLabel: "ปุ่มเมนูย่อย",
        selectedLabel: "รายการที่เลือก",
        previousIcon: "ก่อนหน้า",
        msgFetchingData: "กำลังดึงข้อมูล...",
        msgNoData: "ไม่มีรายการที่จะแสดงผล",
        overflowItemLabel: "เพิ่มเติม",
        accessibleReorderTouchInstructionText: "แตะสองครั้งค้างไว้ รอจนกว่าจะได้ยินเสียงแล้วจึงลากเพื่อจัดเรียงใหม่",
        accessibleReorderBeforeItem: "ก่อน {item}",
        accessibleReorderAfterItem: "หลัง {item}",
        labelCut: "ตัด",
        labelPasteBefore: "วางก่อน",
        labelPasteAfter: "วางหลัง",
        labelRemove: "ย้ายออก",
        removeCueText: "ย้ายออกได้"
    },
    "oj-ojSlider": {
        noValue: "ojSlider ไม่มีค่า",
        maxMin: "สูงสุดต้องไม่น้อยกว่าหรือเท่ากับต่ำสุด",
        valueRange: "ค่าต้องอยู่ภายในช่วงต่ำสุดถึงสูงสุด",
        optionNum: "ตัวเลือก {option} ไม่ใช่ตัวเลข",
        invalidStep: "ขั้นตอนไม่ถูกต้อง ขั้นตอนต้อง > 0"
    },
    "oj-ojDialog": {
        labelCloseIcon: "ปิด"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "กำลังเข้าสู่ป็อปอัป กด F6 เพื่อนาวิเกตระหว่างป็อปอัปและการควบคุมที่เกี่ยวข้อง",
        ariaLiveRegionInitialFocusNone: "ป็อปอัปเปิดอยู่ กด F6 เพื่อนาวิเกตระหว่างป็อปอัปและการควบคุมที่เกี่ยวข้อง",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "กำลังเข้าสู่ป็อปอัป สามารถปิดป็อปอัปได้โดยนาวิเกตไปยังลิงค์ล่าสุดภายในป็อปอัป",
        ariaLiveRegionInitialFocusNoneTouch: "ป็อปอัปเปิดอยู่ โปรดนาวิเกตไปยังลิงค์ถัดไปเพื่อกำหนดโฟกัสภายในป็อปอัป",
        ariaFocusSkipLink: "แตะสองครั้งเพื่อนาวิเกตไปยังป็อปอัปที่เปิดอยู่",
        ariaCloseSkipLink: "แตะสองครั้งเพื่อปิดป็อปอัปที่เปิดอยู่"
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "เปิดใช้งานลิงค์เพื่อรีเฟรชเนื้อหา",
        ariaRefreshingLink: "กำลังรีเฟรชเนื้อหา",
        ariaRefreshCompleteLink: "รีเฟรชเสร็จสมบูรณ์"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "แสดงการดำเนินการเริ่มต้น",
        ariaShowEndActionsDescription: "แสดงการดำเนินการสิ้นสุด",
        ariaHideActionsDescription: "ซ่อนการดำเนินการ"
    },
    "oj-ojIndexer": {
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        indexerOthers: "#",
        ariaDisabledLabel: "ไม่พบส่วนหัวของกลุ่มที่ตรงกัน",
        ariaOthersLabel: "ตัวเลข",
        ariaInBetweenText: "ตั้งแต่ {first} ถึง {second}",
        ariaKeyboardInstructionText: "กด Enter เพื่อเลือกค่า",
        ariaTouchInstructionText: "แตะสองครั้งและกดค้างไว้เพื่อเข้าสู่โหมดการวาดนิ้ว จากนั้นลากขึ้นหรือลงเพื่อปรับค่า"
    },
    "oj-ojMenu": {
        labelCancel: "ยกเลิก"
    },
    "oj-ojColorSpectrum": {
        labelHue: "เฉดสี",
        labelOpacity: "ความทึบ",
        labelSatLum: "ความเข้ม/ความสว่าง",
        labelThumbDesc: "ตัวเลื่อนแถบสีแบบสี่ทิศทาง"
    },
    "oj-ojColorPalette": {
        labelNone: "ไม่มี"
    },
    "oj-ojColorPicker": {
        labelSwatches: "แผงสี",
        labelCustomColors: "สีที่กำหนดเอง",
        labelPrevColor: "สีก่อนหน้า",
        labelDefColor: "สีดีฟอลต์",
        labelDelete: "ลบ",
        labelDeleteQ: "ลบหรือไม่",
        labelAdd: "เพิ่ม",
        labelAddColor: "เพิ่มสี",
        labelMenuHex: "ฐานสิบหก",
        labelMenuRgba: "RGBa",
        labelMenuHsla: "HSLa",
        labelSliderHue: "เฉดสี",
        labelSliderSaturation: "ความเข้ม",
        labelSliderSat: "เข้ม",
        labelSliderLightness: "ความสว่าง",
        labelSliderLum: "ความสว่าง",
        labelSliderAlpha: "Alpha",
        labelOpacity: "ความทึบ",
        labelSliderRed: "แดง",
        labelSliderGreen: "เขียว",
        labelSliderBlue: "น้ำเงิน"
    },
    "oj-ojFilePicker": {
        dropzoneText: "วางไฟล์ที่นี่หรือคลิกเพื่ออัปโหลด"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "กำลังดำเนินการ"
    },
    "oj-ojMessage": {
        labelCloseIcon: "ปิด",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "ข้อความ",
        ariaLiveRegion: {
            navigationFromKeyboard: "กำลังเข้าสู่พื้นที่ข้อความ กด F6 เพื่อนาวิเกตกลับไปยังอีลิเมนต์ที่โฟกัสก่อนหน้า",
            navigationToTouch: "พื้นที่ข้อความมีข้อความใหม่ ใช้ตัวหมุน Voice-Over เพื่อนาวิเกตไปยังสถานที่สำคัญของข้อความ",
            navigationToKeyboard: "พื้นที่ข้อความมีข้อความใหม่ กด F6 เพื่อนาวิเกตไปยังพื้นที่ข้อความล่าสุด",
            newMessage: "ชนิดข้อความ {category} {summary}"
        }
    }
});