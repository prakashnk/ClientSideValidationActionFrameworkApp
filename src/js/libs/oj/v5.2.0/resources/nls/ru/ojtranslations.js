define({
    "oj-message": {
        fatal: "Неустранимая ошибка",
        error: "Ошибка ",
        warning: "Предупреждение",
        info: "Информация",
        confirmation: "Подтверждение",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "Значение в непредусмотренном формате.",
        detail: "Введите значение в предусмотренном формате.",
        "plural-separator": ", ",
        hint: {
            summary: "Пример: {exampleValue}",
            detail: "Введите значение в таком же формате, как в этом примере: '{exampleValue}'.",
            "detail-plural": "Введите значение в таком же формате, как в этих примерах: '{exampleValue}'."
        },
        optionHint: {
            detail: "Допустимое значение для параметра '{propertyName}': '{propertyValueValid}'.",
            "detail-plural": "Допустимые значения для параметра '{propertyName}': '{propertyValueValid}'."
        },
        optionTypesMismatch: {
            summary: "Если для параметра '{propertyName}' задано значение '{propertyValue}', требуется установить значение для параметра '{requiredPropertyName}'."
        },
        optionTypeInvalid: {
            summary: "Для параметра '{propertyName}' не указано значение ожидаемого типа."
        },
        optionOutOfRange: {
            summary: "Значение {propertyValue} не входит в диапазон значений для параметра '{propertyName}'."
        },
        optionValueInvalid: {
            summary: "Для параметра '{propertyName}' указано недопустимое значение '{propertyValue}'."
        },
        number: {
            decimalFormatMismatch: {
                summary: "Значение '{value}' не соответствует ожидаемому числовому формату."
            },
            shortLongUnsupportedParse: {
                summary: "'short' и 'long' не поддерживаются для разбора конвертера.",
                detail: 'Измените компонент на "readonly". Поля "readonly" не вызывают функцию конвертера "parse".'
            },
            currencyFormatMismatch: {
                summary: "Значение '{value}' не соответствует ожидаемому формату валюты."
            },
            percentFormatMismatch: {
                summary: "Значение '{value}' не соответствует ожидаемому формату процента."
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "Значение '{value}' не входит в диапазон значений для '{propertyName}'.",
                detail: "Введите значение в диапазоне от '{minValue}' до '{maxValue}'.",
                hour: "ч",
                minute: "мин",
                second: "с",
                millisec: "мс",
                month: "мес.",
                day: "дн.",
                year: "год",
                "month name": "название месяца",
                weekday: "день недели"
            },
            dateFormatMismatch: {
                summary: "Значение '{value}' не соответствует ожидаемому формату даты."
            },
            invalidTimeZoneID: {
                summary: "Указан недопустимый идентификатор часового пояса {timeZoneID}."
            },
            nonExistingTime: {
                summary: "Входное время не существует, так как приходится на период перехода на летнее время."
            },
            missingTimeZoneData: {
                summary: "Отсутствуют данные часового пояса. Выполните вызов 'ojs/ojtimezonedata', чтобы загрузить данные часового пояса."
            },
            timeFormatMismatch: {
                summary: "Значение '{value}' не соответствует ожидаемому формату времени."
            },
            datetimeFormatMismatch: {
                summary: "Значение '{value}' не соответствует ожидаемому формату даты и времени."
            },
            dateToWeekdayMismatch: {
                summary: "'{date}' не выпадает на день недели '{weekday}'.",
                detail: "Введите соответствующий дате день недели."
            },
            invalidISOString: {
                summary: 'Указанное значение "{isoStr}" не является допустимой строкой ISO 8601.',
                detail: "Укажите допустимую строку ISO 8601."
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "Введите не менее {min} симв.",
                max: "Введите не более {max} симв.",
                inRange: "Введите не менее {min} символов, макс. значение: {max}.",
                exact: "Введите {length} симв."
            },
            messageDetail: {
                tooShort: "Введите не менее {min} симв.",
                tooLong: "Введите не более {max} симв."
            },
            messageSummary: {
                tooShort: "Недостаточное количество символов.",
                tooLong: "Слишком большое количество символов."
            }
        },
        range: {
            number: {
                hint: {
                    min: "Введите число не меньше {min}.",
                    max: "Введите число не больше {max}.",
                    inRange: "Введите число от {min} до {max}.",
                    exact: "Введите число {num}."
                },
                messageDetail: {
                    rangeUnderflow: "Число должно быть не менее {min}.",
                    rangeOverflow: "Число должно быть не более {max}.",
                    exact: "Число должно быть {num}."
                },
                messageSummary: {
                    rangeUnderflow: "Слишком малое число.",
                    rangeOverflow: "Слишком большое число."
                }
            },
            datetime: {
                hint: {
                    min: "Введите дату и время не ранее, чем {min}.",
                    max: "Введите дату и время не позднее, чем {max}.",
                    inRange: "Введите дату и время в диапазоне от {min} до {max}."
                },
                messageDetail: {
                    rangeUnderflow: "Дата и время должны быть позднее, чем {min}.",
                    rangeOverflow: "Дата и время должны предшествовать {max}."
                },
                messageSummary: {
                    rangeUnderflow: "Дата и время более ранние, чем минимальные дата и время.",
                    rangeOverflow: "Дата и время более поздние, чем максимальные дата и время."
                }
            },
            date: {
                hint: {
                    min: "Введите дату {min} или более позднюю.",
                    max: "Введите дату {max} или более раннюю.",
                    inRange: "Введите дату от {min} до {max}."
                },
                messageDetail: {
                    rangeUnderflow: "Необходимо использовать дату {min} или более позднюю.",
                    rangeOverflow: "Необходимо использовать дату {max} или более раннюю."
                },
                messageSummary: {
                    rangeUnderflow: "Дата более ранняя, чем минимальная дата.",
                    rangeOverflow: "Дата более поздняя, чем максимальная дата."
                }
            },
            time: {
                hint: {
                    min: "Введите время {min} или более позднее.",
                    max: "Введите время {max} или более раннее.",
                    inRange: "Введите время от {min} до {max}."
                },
                messageDetail: {
                    rangeUnderflow: "Необходимо использовать время {min} или более позднее.",
                    rangeOverflow: "Необходимо использовать время {max} или более раннее."
                },
                messageSummary: {
                    rangeUnderflow: "Время более ранее, чем минимальное время.",
                    rangeOverflow: "Время более позднее, чем максимальное время."
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "Дата {value} относится к отключенной записи.",
                messageDetail: "Дата {value} не должна относиться к отключенной записи."
            }
        },
        regExp: {
            summary: "Неверный формат.",
            detail: "Значение '{value}' должно соответствовать этому шаблону: '{pattern}'."
        },
        required: {
            summary: "Требуется задать значение.",
            detail: "Требуется ввести значение."
        }
    },
    "oj-ojInputDate": {
        done: "Готово",
        cancel: "Отмена",
        prevText: "Назад",
        nextText: "Вперед",
        currentText: "Сегодня",
        weekHeader: "Нед.",
        tooltipCalendar: "Выбор даты.",
        tooltipCalendarTime: "Выбор даты/времени.",
        tooltipCalendarDisabled: "Выбор даты недоступен.",
        tooltipCalendarTimeDisabled: "Выбор даты/времени недоступен.",
        picker: "Окно выбора",
        weekText: "Неделя",
        datePicker: "Выбор даты",
        inputHelp: "Нажмите кнопку со стрелкой вниз или вверх, чтобы открыть календарь.",
        inputHelpBoth: "Нажмите кнопку со стрелкой вниз или вверх, чтобы открыть календарь. Либо нажмите кнопку со стрелкой вниз или вверх, удерживая Shift, чтобы развернуть список времени.",
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
        cancelText: "Отмена",
        okText: "ОК",
        currentTimeText: "Сейчас",
        hourWheelLabel: "Час",
        minuteWheelLabel: "Минута",
        ampmWheelLabel: "12-часовой формат",
        tooltipTime: "Выбор времени.",
        tooltipTimeDisabled: "Выбор времени недоступен.",
        inputHelp: "Нажмите кнопку со стрелкой вниз или вверх, чтобы развернуть список времени.",
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
            messageDetail: "Значение должно соответствовать этому шаблону: '{pattern}'."
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "Просмотр страницы {pageIndex} из {pageCount}",
        labelAccArrowNextPage: 'Нажмите "Далее", чтобы перейти на следующую страницу',
        labelAccArrowPreviousPage: 'Нажмите "Назад", чтобы перейти на предыдущую страницу',
        tipArrowNextPage: "Далее",
        tipArrowPreviousPage: "Назад"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "Сортировка {id} по возрастанию",
        accessibleSortDescending: "Сортировка {id} по убыванию",
        accessibleActionableMode: "Вход в режим действий.",
        accessibleNavigationMode: "Войдите в режим навигации, нажмите F2 для входа в режим редактирования или режим действий.",
        accessibleEditableMode: "Войдите в режим с возможностью редактирования, нажмите Escape для перехода за пределы сетки данных.",
        accessibleSummaryExact: "Это таблица данных, в которой строк: {rownum}, столбцов: {colnum}",
        accessibleSummaryEstimate: "Это таблица данных с неизвестным количеством строк и столбцов",
        accessibleSummaryExpanded: "Развернуто строк: {num}",
        accessibleRowExpanded: "Строка развернута",
        accessibleRowCollapsed: "Строка свернута",
        accessibleRowSelected: "Строка {row} выбрана",
        accessibleColumnSelected: "Столбец {column} выбран",
        accessibleStateSelected: "выбрано",
        accessibleMultiCellSelected: "Выбрано ячеек: {num}",
        accessibleColumnSpanContext: "{extent} широкий",
        accessibleRowSpanContext: "{extent} высокий",
        accessibleRowContext: "Строка {index}",
        accessibleColumnContext: "Столбец {index}",
        accessibleRowHeaderContext: "Заголовок строки {index}",
        accessibleColumnHeaderContext: "Заголовок столбца {index}",
        accessibleRowEndHeaderContext: "Заголовок в конце строки {index}",
        accessibleColumnEndHeaderContext: "Заголовок в конце столбца {index}",
        accessibleLevelContext: "Уровень {level}",
        accessibleRangeSelectModeOn: "Режим добавления выбранного диапазона ячеек вкл.",
        accessibleRangeSelectModeOff: "Режим добавления выбранного диапазона ячеек выкл.",
        accessibleFirstRow: "Достигнута первая строка.",
        accessibleLastRow: "Достигнута последняя строка.",
        accessibleFirstColumn: "Достигнут первый столбец",
        accessibleLastColumn: "Достигнут последний столбец.",
        accessibleSelectionAffordanceTop: "Верхний маркер выделения.",
        accessibleSelectionAffordanceBottom: "Нижний маркер выделения.",
        msgFetchingData: "Выборка данных...",
        msgNoData: "Нет элементов для отображения.",
        labelResize: "Изменить размер",
        labelResizeWidth: "Изменить ширину",
        labelResizeHeight: "Изменить высоту",
        labelSortRow: "Сортировать строку",
        labelSortRowAsc: "Сортировать строку по возрастанию",
        labelSortRowDsc: "Сортировать строку по убыванию",
        labelSortCol: "Сортировать столбец",
        labelSortColAsc: "Сортировать столбец по возрастанию",
        labelSortColDsc: "Сортировать столбец по убыванию",
        labelCut: "Вырезать",
        labelPaste: "Вставить",
        labelEnableNonContiguous: "Разрешить несвязное выделение",
        labelDisableNonContiguous: "Запретить несвязное выделение",
        labelResizeDialogSubmit: "OK"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "Уровень {level}",
        accessibleRowDescription: "Уровень {level}, строка {num} из {total}",
        accessibleRowExpanded: "Строка развернута",
        accessibleRowCollapsed: "Строка свернута",
        accessibleStateExpanded: "развернуто",
        accessibleStateCollapsed: "свернуто"
    },
    "oj-ojListView": {
        msgFetchingData: "Выборка данных...",
        msgNoData: "Нет элементов для отображения.",
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        accessibleReorderTouchInstructionText: "Коснитесь дважды и удерживайте.  Дождитесь сигнала и перетащите для переупорядочения.",
        accessibleReorderBeforeItem: "До {item}",
        accessibleReorderAfterItem: "После {item}",
        accessibleReorderInsideItem: "Внутри {item}",
        accessibleNavigateSkipItems: "Пропуск элементов ({numSkip})",
        labelCut: "Вырезать",
        labelCopy: "Копировать",
        labelPaste: "Вставить",
        labelPasteBefore: "Вставить перед",
        labelPasteAfter: "Вставить после"
    },
    "oj-_ojLabel": {
        tooltipHelp: "Справка",
        tooltipRequired: "Требуется"
    },
    "oj-ojLabel": {
        tooltipHelp: "Справка",
        tooltipRequired: "Требуется"
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
        tooltipDecrement: "Уменьшить",
        tooltipIncrement: "Увеличить"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "Верхний маркер выделения",
        labelAccSelectionAffordanceBottom: "Нижний маркер выделения",
        labelEnableNonContiguousSelection: "Разрешить несвязное выделение",
        labelDisableNonContiguousSelection: "Запретить несвязное выделение",
        labelResize: "Изменить размер",
        labelResizePopupSubmit: "ОК",
        labelResizePopupSpinner: "Изменить размер столбца",
        labelSelectRow: "Выбрать строку",
        labelEditRow: "Редактировать строку",
        labelSelectAndEditRow: "Выбрать и редактировать строку",
        labelSelectColumn: "Выбрать столбец",
        labelSort: "Сортировать",
        labelSortAsc: "Сортировать по возрастанию",
        labelSortDsc: "Сортировать по убыванию",
        msgFetchingData: "Выборка данных...",
        msgNoData: "Нет данных для отображения.",
        msgInitializing: "Инициализация...",
        msgColumnResizeWidthValidation: "Значение ширины должно быть целым числом.",
        msgScrollPolicyMaxCountSummary: "Превышено максимальное число строк для прокрутки таблицы.",
        msgScrollPolicyMaxCountDetail: "Перезагрузите, используя меньший набор данных.",
        msgStatusSortAscending: "Сортировка {0} по возрастанию.",
        msgStatusSortDescending: "Сортировка {0} по убыванию."
    },
    "oj-ojTabs": {
        labelCut: "Вырезать",
        labelPasteBefore: "Вставить перед",
        labelPasteAfter: "Вставить после",
        labelRemove: "Удалить",
        labelReorder: "Изменить порядок",
        removeCueText: "Удаление разрешено"
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
        searchField: "Поле поиска",
        noMatchesFound: "Совпадений не найдено",
        oneMatchesFound: "Найдено одно совпадение",
        moreMatchesFound: "Найдено совпадений: {num}",
        filterFurther: "Доступно больше результатов. Используйте дополнительные фильтры."
    },
    "oj-ojSwitch": {
        SwitchON: "Вкл.",
        SwitchOFF: "Выкл."
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "Совпадений не найдено",
        filterFurther: "Доступно больше результатов. Используйте дополнительные фильтры."
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "Совпадений не найдено",
        oneMatchesFound: "Найдено одно совпадение",
        moreMatchesFound: "Найдено совпадений: {num}"
    },
    "oj-ojTree": {
        stateLoading: "Загрузка...",
        labelNewNode: "Новый узел",
        labelMultiSelection: "Множественный выбор",
        labelEdit: "Изменить",
        labelCreate: "Создать",
        labelCut: "Вырезать",
        labelCopy: "Копировать",
        labelPaste: "Вставить",
        labelPasteAfter: "Вставить после",
        labelPasteBefore: "Вставить перед",
        labelRemove: "Удалить",
        labelRename: "Переименовать",
        labelNoData: "Нет данных"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "Разбивка на страницы",
        labelAccNavFirstPage: "Первая страница",
        labelAccNavLastPage: "Последняя страница",
        labelAccNavNextPage: "Следующая страница",
        labelAccNavPreviousPage: "Предыдущая страница",
        labelAccNavPage: "Страница",
        labelLoadMore: "Показать еще...",
        labelLoadMoreMaxRows: "Достигнуто макс. кол-во строк: {maxRows}",
        labelNavInputPage: "Страница",
        labelNavInputPageMax: "из {pageMax}",
        msgItemRangeCurrent: "{pageFrom} – {pageTo}",
        msgItemRangeCurrentSingle: "{pageFrom}",
        msgItemRangeOf: "из",
        msgItemRangeOfAtLeast: "из не менее чем ",
        msgItemRangeOfApprox: "из примерно",
        msgItemRangeItems: "элем.",
        tipNavInputPage: "Перейти на страницу",
        tipNavPageLink: "Перейти на страницу {pageNum}",
        tipNavNextPage: "Далее",
        tipNavPreviousPage: "Назад",
        tipNavFirstPage: "Первая",
        tipNavLastPage: "Последняя",
        pageInvalid: {
            summary: "Введенное значение страницы является недопустимым.",
            detail: "Введите значение больше 0."
        },
        maxPageLinksInvalid: {
            summary: "Недопустимое значение maxPageLinks.",
            detail: "Введите значение больше 4."
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "Вырезать",
        labelPasteBefore: "Вставить перед",
        labelPasteAfter: "Вставить после"
    },
    "oj-panel": {
        labelAccButtonExpand: "Развернуть",
        labelAccButtonCollapse: "Свернуть",
        labelAccButtonRemove: "Удалить"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "Группа {0}",
        labelSeries: "Ряд",
        labelGroup: "Группа",
        labelDate: "Дата",
        labelValue: "Значение",
        labelTargetValue: "Цель",
        labelX: "X",
        labelY: "Y",
        labelZ: "Z",
        labelPercentage: "Процент",
        labelLow: "Низкий",
        labelHigh: "Высокий",
        labelOpen: "Открыть",
        labelClose: "Закрыть",
        labelVolume: "Объем",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "Мин.",
        labelMax: "Макс.",
        labelOther: "Другое",
        tooltipPan: "Сдвиг",
        tooltipSelect: "Выбор выделенной области",
        tooltipZoom: "Масштабирование выделенной области",
        componentName: "График"
    },
    "oj-dvtBaseGauge": {
        componentName: "Шкала"
    },
    "oj-ojDiagram": {
        promotedLink: "{0} ссылка",
        promotedLinks: "{0} ссыл.",
        promotedLinkAriaDesc: "Косвенные",
        componentName: "Диаграмма"
    },
    "oj-ojGantt": {
        componentName: "Диаграмма Гантта",
        accessibleDurationDays: "{0} дн.",
        accessibleDurationHours: "{0} ч.",
        accessibleTaskInfo: "Время начала – {0}, время окончания – {1}, длительность – {2}",
        accessibleMilestoneInfo: "Время: {0}",
        accessibleRowInfo: "Строка {0}",
        accessibleTaskTypeMilestone: "Веха",
        accessibleTaskTypeSummary: "Сводка",
        accessiblePredecessorInfo: "предшествует {0}",
        accessibleSuccessorInfo: "следует {0}",
        accessibleDependencyInfo: "Тип зависимости {0}, соединяет {1} и {2}",
        startStartDependencyAriaDesc: "начало-начало",
        startFinishDependencyAriaDesc: "начало-окончание",
        finishStartDependencyAriaDesc: "окончание-начало",
        finishFinishDependencyAriaDesc: "окончание-окончание",
        tooltipZoomIn: "Увеличить",
        tooltipZoomOut: "Уменьшить",
        labelRow: "Строка",
        labelStart: "Начало",
        labelEnd: "Окончание",
        labelDate: "Дата",
        labelBaselineStart: "Базовое начало",
        labelBaselineEnd: "Базовое окончание",
        labelBaselineDate: "Базовая дата",
        labelLabel: "Метка",
        labelProgress: "Ход выполнения",
        labelMoveBy: "Перемещение",
        taskMoveInitiated: "Задача перемещения инициирована",
        taskMoveSelectionInfo: "Выбрано других элементов: {0}",
        taskMoveInitiatedInstruction: "Используйте клавиши со стрелками для перемещения",
        taskMoveFinalized: "Задача перемещения завершена",
        taskMoveCancelled: "Задача перемещения отменена"
    },
    "oj-ojLegend": {
        componentName: "Обозначения"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "Другое",
        labelGroup: "Группа",
        labelSize: "Размер",
        labelAdditionalData: "Дополнительные данные",
        componentName: "Ячейка 9-блочной матрицы"
    },
    "oj-ojPictoChart": {
        componentName: "Диаграмма с рисунками"
    },
    "oj-ojSparkChart": {
        componentName: "График"
    },
    "oj-ojSunburst": {
        labelColor: "Цвет",
        labelSize: "Размер",
        tooltipExpand: "Развернуть",
        tooltipCollapse: "Свернуть",
        componentName: "Лучевая"
    },
    "oj-ojTagCloud": {
        componentName: "Облако тегов"
    },
    "oj-ojThematicMap": {
        componentName: "Тематическая карта"
    },
    "oj-ojTimeAxis": {
        componentName: "Ось времени"
    },
    "oj-ojTimeline": {
        componentName: "Шкала времени",
        accessibleItemDesc: "Описание: {0}.",
        accessibleItemEnd: "Время окончания: {0}.",
        accessibleItemStart: "Время начала: {0}.",
        accessibleItemTitle: "Заголовок: {0}.",
        labelSeries: "Ряд",
        tooltipZoomIn: "Увеличить",
        tooltipZoomOut: "Уменьшить"
    },
    "oj-ojTreemap": {
        labelColor: "Цвет",
        labelSize: "Размер",
        tooltipIsolate: "Изолировать",
        tooltipRestore: "Восстановить",
        componentName: "Карта дерева"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "тыс.",
        labelScalingSuffixMillion: "млн",
        labelScalingSuffixBillion: "млрд",
        labelScalingSuffixTrillion: "трлн",
        labelScalingSuffixQuadrillion: "квдрлн",
        labelInvalidData: "Недопустимые данные",
        labelNoData: "Нет данных для отображения",
        labelClearSelection: "Отменить выбор",
        labelDataVisualization: "Визуализация данных",
        stateSelected: "Выбрано",
        stateUnselected: "Не выбрано",
        stateMaximized: "Максимизировано",
        stateMinimized: "Минимизировано",
        stateExpanded: "Развернуто",
        stateCollapsed: "Свернуто",
        stateIsolated: "Изолировано",
        stateHidden: "Скрыто",
        stateVisible: "Отображается",
        stateDrillable: "С возможностью детализации",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "{0} из {1}"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "Список навигации",
        hierMenuBtnLabel: "Кнопка вложенного меню",
        selectedLabel: "выбрано",
        previousIcon: "Назад",
        msgFetchingData: "Выборка данных...",
        msgNoData: "Нет элементов для отображения.",
        overflowItemLabel: "Еще",
        accessibleReorderTouchInstructionText: "Коснитесь дважды и удерживайте.  Дождитесь сигнала и перетащите для переупорядочения.",
        accessibleReorderBeforeItem: "До {item}",
        accessibleReorderAfterItem: "После {item}",
        labelCut: "Вырезать",
        labelPasteBefore: "Вставить перед",
        labelPasteAfter: "Вставить после",
        labelRemove: "Удалить",
        removeCueText: "Удаление разрешено"
    },
    "oj-ojSlider": {
        noValue: "ojSlider не имеет значения",
        maxMin: "Максимальное значение не должно быть меньше или равно минимальному значению",
        valueRange: "Значение должно быть в диапазоне от минимального до максимального значений",
        optionNum: "Параметр {option} не является числом",
        invalidStep: "Недопустимый шаг. Шаг должен быть > 0"
    },
    "oj-ojDialog": {
        labelCloseIcon: "Закрыть"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "Вход во всплывающее окно. Нажмите F6 для перехода между всплывающим окном и связанным элементом управления.",
        ariaLiveRegionInitialFocusNone: "Открыто всплывающее окно. Нажмите F6 для перехода между всплывающим окном и связанным элементом управления.",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "Вход во всплывающее окно. Его можно закрыть, перейдя к последней ссылке в окне.",
        ariaLiveRegionInitialFocusNoneTouch: "Открыто всплывающее окно. Чтобы установить в нем фокус, перейдите к следующей ссылке.",
        ariaFocusSkipLink: "Дважды коснитесь, чтобы перейти к открытому всплывающему окну.",
        ariaCloseSkipLink: "Дважды коснитесь, чтобы закрыть открытое всплывающее окно."
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "Активируйте ссылку, чтобы обновить содержимое",
        ariaRefreshingLink: "Выполняется обновление содержимого",
        ariaRefreshCompleteLink: "Обновление завершено"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "Показать начальные действия",
        ariaShowEndActionsDescription: "Показать конечные действия",
        ariaHideActionsDescription: "Скрыть действия"
    },
    "oj-ojIndexer": {
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        indexerOthers: "#",
        ariaDisabledLabel: "Нет соответствующего заголовка группы",
        ariaOthersLabel: "число",
        ariaInBetweenText: "Между {first} и {second}",
        ariaKeyboardInstructionText: "Нажмите Enter, чтобы выбрать значение.",
        ariaTouchInstructionText: "Дважды коснитесь и удерживайте, чтобы перейти в режим жестов, затем перетащите вверх или вниз, чтобы изменить значение."
    },
    "oj-ojMenu": {
        labelCancel: "Отмена"
    },
    "oj-ojColorSpectrum": {
        labelHue: "Оттенок",
        labelOpacity: "Непрозрачность",
        labelSatLum: "Насыщенность/светимость",
        labelThumbDesc: "Четырехсторонний ползунок для цветового спектра."
    },
    "oj-ojColorPalette": {
        labelNone: "Нет"
    },
    "oj-ojColorPicker": {
        labelSwatches: "Цветовые коллекции",
        labelCustomColors: "Пользовательские цвета",
        labelPrevColor: "Предыдущий цвет",
        labelDefColor: "Цвет по умолчанию",
        labelDelete: "Удалить",
        labelDeleteQ: "Удалить?",
        labelAdd: "Добавить",
        labelAddColor: "Добавить цвет",
        labelMenuHex: "HEX",
        labelMenuRgba: "RGBa",
        labelMenuHsla: "HSLa",
        labelSliderHue: "Оттенок",
        labelSliderSaturation: "Насыщенность",
        labelSliderSat: "Насыщ.",
        labelSliderLightness: "Освещенность",
        labelSliderLum: "Светимость",
        labelSliderAlpha: "Альфа",
        labelOpacity: "Непрозрачность",
        labelSliderRed: "Красный",
        labelSliderGreen: "Зеленый",
        labelSliderBlue: "Синий"
    },
    "oj-ojFilePicker": {
        dropzoneText: "Перетащите файлы сюда или нажмите для загрузки"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "Выполняется"
    },
    "oj-ojMessage": {
        labelCloseIcon: "Закрыть",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "Сообщения",
        ariaLiveRegion: {
            navigationFromKeyboard: "Вход в область сообщений. Нажмите F6 для возврата к предыдущему элементу в фокусе.",
            navigationToTouch: "Область сообщений содержит новые сообщения. Используйте ротор VoiceOver для перехода к ориентиру сообщений.",
            navigationToKeyboard: "Область сообщений содержит новые сообщения.  Нажмите F6 для перехода к последней области сообщений.",
            newMessage: "Категория сообщений {category}. {summary}."
        }
    }
});