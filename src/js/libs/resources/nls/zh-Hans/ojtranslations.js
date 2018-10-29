define({
    "oj-message": {
        fatal: "致命",
        error: "错误",
        warning: "警告",
        info: "信息",
        confirmation: "确认",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "值的格式不是预期格式。",
        detail: "请输入采用预期格式的值。",
        "plural-separator": ", ",
        hint: {
            summary: "示例: {exampleValue}",
            detail: "请按与此示例相同的格式输入值：'{exampleValue}'。",
            "detail-plural": "请按与这些示例相同的格式输入值：'{exampleValue}'。"
        },
        optionHint: {
            detail: "选项 '{propertyName}' 可接受的值为 '{propertyValueValid}'。",
            "detail-plural": "选项 '{propertyName}' 可接受的值为 '{propertyValueValid}'。"
        },
        optionTypesMismatch: {
            summary: "当选项 '{propertyName}' 设置为 '{propertyValue}' 时, 选项 '{requiredPropertyName}' 必须具有值。"
        },
        optionTypeInvalid: {
            summary: "没有为选项 '{propertyName}' 提供预期类型的值。"
        },
        optionOutOfRange: {
            summary: "选项 '{propertyName}' 的值 {propertyValue} 超出范围。"
        },
        optionValueInvalid: {
            summary: "为选项 '{propertyName}' 指定的值 '{propertyValue}' 无效。"
        },
        number: {
            decimalFormatMismatch: {
                summary: "'{value}' 不是预期的数字格式。"
            },
            shortLongUnsupportedParse: {
                summary: '转换程序语法分析不支持 "short" 和 "long"。',
                detail: "将组件更改为 readonly。readonly 字段不会调用转换程序的 parse 函数。"
            },
            currencyFormatMismatch: {
                summary: "'{value}' 不是预期的货币格式。"
            },
            percentFormatMismatch: {
                summary: "'{value}' 不是预期的百分比格式。"
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "对于 '{propertyName}', 值 '{value}' 超出了范围。",
                detail: "请输入介于 '{minValue}' 与 '{maxValue}' 之间的值。",
                hour: "小时",
                minute: "分钟",
                second: "秒",
                millisec: "毫秒",
                month: "个月",
                day: "天",
                year: "年",
                "month name": "月份",
                weekday: "星期几"
            },
            dateFormatMismatch: {
                summary: "'{value}' 不是预期的日期格式。"
            },
            invalidTimeZoneID: {
                summary: "提供的时区 ID {timeZoneID} 无效。"
            },
            nonExistingTime: {
                summary: "输入时间不存在, 因为在转换到夏令时期间, 该时间会落空。"
            },
            missingTimeZoneData: {
                summary: "缺少时区数据。请调用 require 'ojs/ojtimezonedata' 以便加载时区数据。"
            },
            timeFormatMismatch: {
                summary: "'{value}' 不是预期的时间格式。"
            },
            datetimeFormatMismatch: {
                summary: "'{value}' 不是预期的日期时间格式。"
            },
            dateToWeekdayMismatch: {
                summary: "日期 '{date}' 不在 '{weekday}' 的范围内。",
                detail: "请输入与日期对应的工作日。"
            },
            invalidISOString: {
                summary: "提供的 '{isoStr}' 不是有效的 ISO 8601 字符串。",
                detail: "请提供有效的 ISO 8601 字符串。"
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "请输入 {min} 个或更多的字符。",
                max: "请输入 {max} 个或更少的字符。",
                inRange: "请输入 {min} 个或更多的字符, 最多 {max} 个。",
                exact: "请输入 {length} 个字符。"
            },
            messageDetail: {
                tooShort: "请输入 {min} 个或更多的字符, 不能更少。",
                tooLong: "请输入 {max} 个或更少的字符, 不能更多。"
            },
            messageSummary: {
                tooShort: "字符太少。",
                tooLong: "字符太多。"
            }
        },
        range: {
            number: {
                hint: {
                    min: "请输入大于等于 {min} 的数字。",
                    max: "请输入小于等于 {max} 的数字。",
                    inRange: "请输入介于 {min} 与 {max} 之间的数字。",
                    exact: "请输入数字 {num}。"
                },
                messageDetail: {
                    rangeUnderflow: "该数字必须大于或等于 {min}。",
                    rangeOverflow: "该数字必须小于或等于 {max}。",
                    exact: "数字必须为 {num}。"
                },
                messageSummary: {
                    rangeUnderflow: "数字太小。",
                    rangeOverflow: "数字太大。"
                }
            },
            datetime: {
                hint: {
                    min: "请输入等于或晚于 {min} 的日期时间。",
                    max: "请输入等于或早于 {max} 的日期时间。",
                    inRange: "请输入介于 {min} 与 {max} 之间的日期时间。"
                },
                messageDetail: {
                    rangeUnderflow: "日期时间必须等于或晚于 {min}。",
                    rangeOverflow: "日期时间必须等于或早于 {max}。"
                },
                messageSummary: {
                    rangeUnderflow: "日期时间早于最早日期和时间。",
                    rangeOverflow: "日期时间晚于最晚日期和时间。"
                }
            },
            date: {
                hint: {
                    min: "请输入 {min} 当日或之后的日期。",
                    max: "请输入 {max} 当日或之前的日期。",
                    inRange: "请输入介于 {min} 和 {max} 之间的日期。"
                },
                messageDetail: {
                    rangeUnderflow: "日期必须等于或晚于 {min}。",
                    rangeOverflow: "日期必须等于或早于 {max}。"
                },
                messageSummary: {
                    rangeUnderflow: "日期早于最早日期。",
                    rangeOverflow: "日期晚于最晚日期。"
                }
            },
            time: {
                hint: {
                    min: "输入 {min} 当日或之后的时间。",
                    max: "输入 {max} 当日或之前的时间。",
                    inRange: "输入介于 {min} 与 {max} 之间的时间。"
                },
                messageDetail: {
                    rangeUnderflow: "时间必须等于或晚于 {min}。",
                    rangeOverflow: "时间必须等于或早于 {max}。"
                },
                messageSummary: {
                    rangeUnderflow: "时间早于最早时间。",
                    rangeOverflow: "时间晚于最晚时间。"
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "日期 {value} 属于已禁用条目。",
                messageDetail: "日期 {value} 不应属于已禁用条目。"
            }
        },
        regExp: {
            summary: "格式不正确。 ",
            detail: "值 '{value}' 必须匹配此模式：'{pattern}'。"
        },
        required: {
            summary: "需要提供值。",
            detail: "必须输入一个值。"
        }
    },
    "oj-ojInputDate": {
        done: "完成",
        cancel: "取消",
        prevText: "上一个",
        nextText: "下一个",
        currentText: "今天",
        weekHeader: "周",
        tooltipCalendar: "选择日期。",
        tooltipCalendarTime: "选择日期时间。",
        tooltipCalendarDisabled: "选择日期已禁用。",
        tooltipCalendarTimeDisabled: "选择日期时间已禁用。",
        picker: "选择器",
        weekText: "周",
        datePicker: "日期选择器",
        inputHelp: "按下箭头或上箭头来访问日历。",
        inputHelpBoth: "按下箭头或上箭头来访问日历, 按 Shift + 下箭头或 Shift + 上箭头来访问时间下拉列表。",
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
        cancelText: "取消",
        okText: "确定",
        currentTimeText: "立即",
        hourWheelLabel: "小时",
        minuteWheelLabel: "分钟",
        ampmWheelLabel: "上午下午",
        tooltipTime: "选择时间。",
        tooltipTimeDisabled: "选择时间已禁用。",
        inputHelp: "按下箭头或上箭头来访问时间下拉列表。",
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
            messageDetail: "值必须匹配此模式：'{pattern}'。"
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "正在显示第 {pageIndex} 页，共 {pageCount} 页",
        labelAccArrowNextPage: "选择“下一页”以显示下一页",
        labelAccArrowPreviousPage: "选择“上一页”以显示上一页",
        tipArrowNextPage: "下一页",
        tipArrowPreviousPage: "上一页"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "以升序排序的 {id}",
        accessibleSortDescending: "{id} 以降序排序",
        accessibleActionableMode: "进入可操作模式。",
        accessibleNavigationMode: "进入导航模式, 按 F2 可进入编辑模式或可操作模式。",
        accessibleEditableMode: "进入可编辑模式, 按 ESC 退出数据网格。",
        accessibleSummaryExact: "这是一个数据网格, 包含 {rownum} 行和 {colnum} 列",
        accessibleSummaryEstimate: "这是一个数据网格, 行数和列数未知",
        accessibleSummaryExpanded: "当前展开了 {num} 行",
        accessibleRowExpanded: "已展开行",
        accessibleRowCollapsed: "已折叠行",
        accessibleRowSelected: "已选择行 {row}",
        accessibleColumnSelected: "已选择列 {column}",
        accessibleStateSelected: "选定",
        accessibleMultiCellSelected: "选定了 {num} 个单元",
        accessibleColumnSpanContext: "{extent} 宽",
        accessibleRowSpanContext: "{extent} 高",
        accessibleRowContext: "行 {index}",
        accessibleColumnContext: "列 {index}",
        accessibleRowHeaderContext: "行标题 {index}",
        accessibleColumnHeaderContext: "列标题 {index}",
        accessibleRowEndHeaderContext: "行结束标题 {index}",
        accessibleColumnEndHeaderContext: "列结束标题 {index}",
        accessibleLevelContext: "级别 {level}",
        accessibleRangeSelectModeOn: "添加选定范围的单元格模式打开。",
        accessibleRangeSelectModeOff: "添加选定范围的单元格模式关闭。",
        accessibleFirstRow: "您已到达第一行。",
        accessibleLastRow: "您已到达最后一行。",
        accessibleFirstColumn: "您已到达第一列",
        accessibleLastColumn: "您已到达最后一列。",
        accessibleSelectionAffordanceTop: "顶部选择句柄。",
        accessibleSelectionAffordanceBottom: "底部选择句柄。",
        msgFetchingData: "正在提取数据...",
        msgNoData: "没有可显示的项。",
        labelResize: "调整大小",
        labelResizeWidth: "调整宽度",
        labelResizeHeight: "调整高度",
        labelSortRow: "排序行",
        labelSortRowAsc: "升序排序行",
        labelSortRowDsc: "降序排序行",
        labelSortCol: "排序列",
        labelSortColAsc: "升序排序列",
        labelSortColDsc: "降序排序列",
        labelCut: "剪切",
        labelPaste: "粘贴",
        labelEnableNonContiguous: "启用非连续选择",
        labelDisableNonContiguous: "禁用非连续选择",
        labelResizeDialogSubmit: "确定"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "级别 {level}",
        accessibleRowDescription: "级别 {level}, 第 {num} 行, 共 {total} 行",
        accessibleRowExpanded: "已展开行",
        accessibleRowCollapsed: "已折叠行",
        accessibleStateExpanded: "已展开",
        accessibleStateCollapsed: "已隐藏"
    },
    "oj-ojListView": {
        msgFetchingData: "正在提取数据...",
        msgNoData: "没有可显示的项。",
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        accessibleReorderTouchInstructionText: "双击并按住。等待发出声音, 然后拖动以重新排列。",
        accessibleReorderBeforeItem: "先于 {item}",
        accessibleReorderAfterItem: "后于 {item}",
        accessibleReorderInsideItem: "到 {item}",
        accessibleNavigateSkipItems: "正在跳过 {numSkip} 项",
        labelCut: "剪切",
        labelCopy: "复制",
        labelPaste: "粘贴",
        labelPasteBefore: "前置粘贴",
        labelPasteAfter: "后置粘贴"
    },
    "oj-_ojLabel": {
        tooltipHelp: "帮助",
        tooltipRequired: "必需"
    },
    "oj-ojLabel": {
        tooltipHelp: "帮助",
        tooltipRequired: "必需"
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
        tooltipDecrement: "减少",
        tooltipIncrement: "增加"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "顶部选择句柄",
        labelAccSelectionAffordanceBottom: "底部选择句柄",
        labelEnableNonContiguousSelection: "启用非连续选择",
        labelDisableNonContiguousSelection: "禁用非连续选择",
        labelResize: "调整大小",
        labelResizePopupSubmit: "确定",
        labelResizePopupSpinner: "调整列大小",
        labelSelectRow: "选择行",
        labelEditRow: "编辑行",
        labelSelectAndEditRow: "选择并编辑行",
        labelSelectColumn: "选择列",
        labelSort: "排序",
        labelSortAsc: "升序排序",
        labelSortDsc: "降序排序",
        msgFetchingData: "正在提取数据...",
        msgNoData: "没有可显示的数据。",
        msgInitializing: "正在初始化...",
        msgColumnResizeWidthValidation: "宽度值必须为整数。",
        msgScrollPolicyMaxCountSummary: "超过了表滚动的最大行数。",
        msgScrollPolicyMaxCountDetail: "请使用较小的数据集重新加载。",
        msgStatusSortAscending: "{0} 按升序排序。",
        msgStatusSortDescending: "{0} 按降序排序。"
    },
    "oj-ojTabs": {
        labelCut: "剪切",
        labelPasteBefore: "前置粘贴",
        labelPasteAfter: "后置粘贴",
        labelRemove: "删除",
        labelReorder: "重排",
        removeCueText: "可删除"
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
        searchField: "搜索字段",
        noMatchesFound: "找不到匹配项",
        oneMatchesFound: "找到一个匹配",
        moreMatchesFound: "找到 {num} 个匹配项",
        filterFurther: "有更多结果可用, 请进一步筛选。"
    },
    "oj-ojSwitch": {
        SwitchON: "启用",
        SwitchOFF: "禁用"
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "找不到匹配项",
        filterFurther: "有更多结果可用, 请进一步筛选。"
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "找不到匹配项",
        oneMatchesFound: "找到一个匹配",
        moreMatchesFound: "找到 {num} 个匹配项"
    },
    "oj-ojTree": {
        stateLoading: "正在加载...",
        labelNewNode: "新建节点",
        labelMultiSelection: "多选",
        labelEdit: "编辑",
        labelCreate: "创建",
        labelCut: "剪切",
        labelCopy: "复制",
        labelPaste: "粘贴",
        labelPasteAfter: "后置粘贴",
        labelPasteBefore: "前置粘贴",
        labelRemove: "删除",
        labelRename: "重命名",
        labelNoData: "无数据"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "页码",
        labelAccNavFirstPage: "第一页",
        labelAccNavLastPage: "最后一页",
        labelAccNavNextPage: "下一页",
        labelAccNavPreviousPage: "上一页",
        labelAccNavPage: "页码",
        labelLoadMore: "显示更多...",
        labelLoadMoreMaxRows: "已达到最大行数限制 {maxRows}",
        labelNavInputPage: "第",
        labelNavInputPageMax: "页, 共 {pageMax} 页",
        msgItemRangeCurrent: "{pageFrom}-{pageTo}",
        msgItemRangeCurrentSingle: "{pageFrom}",
        msgItemRangeOf: "/",
        msgItemRangeOfAtLeast: "至少",
        msgItemRangeOfApprox: "大约",
        msgItemRangeItems: "项",
        tipNavInputPage: "转至页",
        tipNavPageLink: "转至页 {pageNum}",
        tipNavNextPage: "下一页",
        tipNavPreviousPage: "上一页",
        tipNavFirstPage: "第一页",
        tipNavLastPage: "最后一页",
        pageInvalid: {
            summary: "输入的页值无效。",
            detail: "请输入一个大于 0 的值。"
        },
        maxPageLinksInvalid: {
            summary: "maxPageLinks 的值无效。",
            detail: "请输入一个大于 4 的值。"
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "剪切",
        labelPasteBefore: "前置粘贴",
        labelPasteAfter: "后置粘贴"
    },
    "oj-panel": {
        labelAccButtonExpand: "展开",
        labelAccButtonCollapse: "折叠",
        labelAccButtonRemove: "删除"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "{0} 组",
        labelSeries: "系列",
        labelGroup: "组",
        labelDate: "日期",
        labelValue: "值",
        labelTargetValue: "目标",
        labelX: "X",
        labelY: "Y",
        labelZ: "Z",
        labelPercentage: "百分比",
        labelLow: "低",
        labelHigh: "高",
        labelOpen: "打开",
        labelClose: "关闭",
        labelVolume: "卷",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "最小值",
        labelMax: "最大值",
        labelOther: "其他",
        tooltipPan: "平移",
        tooltipSelect: "选取框选择",
        tooltipZoom: "选取框缩放",
        componentName: "图表"
    },
    "oj-dvtBaseGauge": {
        componentName: "计量表"
    },
    "oj-ojDiagram": {
        promotedLink: "{0} 个链接",
        promotedLinks: "{0} 个链接",
        promotedLinkAriaDesc: "间接",
        componentName: "图示"
    },
    "oj-ojGantt": {
        componentName: "甘特图",
        accessibleDurationDays: "{0} 天",
        accessibleDurationHours: "{0} 小时",
        accessibleTaskInfo: "开始时间为 {0}, 结束时间为 {1}, 持续时间为 {2}",
        accessibleMilestoneInfo: "时间为 {0}",
        accessibleRowInfo: "行 {0}",
        accessibleTaskTypeMilestone: "里程碑",
        accessibleTaskTypeSummary: "摘要",
        accessiblePredecessorInfo: "{0} 前置活动",
        accessibleSuccessorInfo: "{0} 后置活动",
        accessibleDependencyInfo: "相关性类型 {0}, 将 {1} 连接到 {2}",
        startStartDependencyAriaDesc: "开始到开始",
        startFinishDependencyAriaDesc: "开始到完成",
        finishStartDependencyAriaDesc: "完成到开始",
        finishFinishDependencyAriaDesc: "完成到完成",
        tooltipZoomIn: "放大",
        tooltipZoomOut: "缩小",
        labelRow: "行",
        labelStart: "开始",
        labelEnd: "结束",
        labelDate: "日期",
        labelBaselineStart: "基线开始日期",
        labelBaselineEnd: "基线结束日期",
        labelBaselineDate: "基线日期",
        labelLabel: "标签",
        labelProgress: "进度",
        labelMoveBy: "移动者",
        taskMoveInitiated: "已启动任务移动",
        taskMoveSelectionInfo: "选择其他 {0} 个",
        taskMoveInitiatedInstruction: "使用箭头键移动",
        taskMoveFinalized: "已完成任务移动",
        taskMoveCancelled: "已取消任务移动"
    },
    "oj-ojLegend": {
        componentName: "图例"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "其他",
        labelGroup: "组",
        labelSize: "大小",
        labelAdditionalData: "附加数据",
        componentName: "方框图"
    },
    "oj-ojPictoChart": {
        componentName: "图表"
    },
    "oj-ojSparkChart": {
        componentName: "图表"
    },
    "oj-ojSunburst": {
        labelColor: "颜色",
        labelSize: "大小",
        tooltipExpand: "展开",
        tooltipCollapse: "折叠",
        componentName: "旭日图"
    },
    "oj-ojTagCloud": {
        componentName: "标记云"
    },
    "oj-ojThematicMap": {
        componentName: "主题地图"
    },
    "oj-ojTimeAxis": {
        componentName: "时间轴"
    },
    "oj-ojTimeline": {
        componentName: "时间表",
        accessibleItemDesc: "说明是 {0}。",
        accessibleItemEnd: "结束时间是 {0}。",
        accessibleItemStart: "开始时间是 {0}。",
        accessibleItemTitle: "标题是 {0}。",
        labelSeries: "系列",
        tooltipZoomIn: "放大",
        tooltipZoomOut: "缩小"
    },
    "oj-ojTreemap": {
        labelColor: "颜色",
        labelSize: "大小",
        tooltipIsolate: "隔离",
        tooltipRestore: "还原",
        componentName: "树状图"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "K",
        labelScalingSuffixMillion: "M",
        labelScalingSuffixBillion: "B",
        labelScalingSuffixTrillion: "T",
        labelScalingSuffixQuadrillion: "Q",
        labelInvalidData: "数据无效",
        labelNoData: "没有可显示的数据",
        labelClearSelection: "清除选择",
        labelDataVisualization: "数据可视化",
        stateSelected: "选定",
        stateUnselected: "未选定",
        stateMaximized: "最大化",
        stateMinimized: "最小化",
        stateExpanded: "展开",
        stateCollapsed: "折叠",
        stateIsolated: "隔离",
        stateHidden: "隐藏",
        stateVisible: "可见",
        stateDrillable: "可钻探",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "{0}/{1}"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "导航列表",
        hierMenuBtnLabel: "分层菜单按钮",
        selectedLabel: "选定",
        previousIcon: "上一页",
        msgFetchingData: "正在提取数据...",
        msgNoData: "没有可显示的项。",
        overflowItemLabel: "更多",
        accessibleReorderTouchInstructionText: "双击并按住。等待发出声音, 然后拖动以重新排列。",
        accessibleReorderBeforeItem: "先于 {item}",
        accessibleReorderAfterItem: "后于 {item}",
        labelCut: "剪切",
        labelPasteBefore: "前置粘贴",
        labelPasteAfter: "后置粘贴",
        labelRemove: "删除",
        removeCueText: "可删除"
    },
    "oj-ojSlider": {
        noValue: "ojSlider 没有值",
        maxMin: "最大值不得小于或等于最小值",
        valueRange: "值必须在最小值和最大值界定的范围内",
        optionNum: "{option} 选项不是数字",
        invalidStep: "步骤无效; 步骤必须大于 0"
    },
    "oj-ojDialog": {
        labelCloseIcon: "关闭"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "正在进入弹出式窗口。按 F6 可在弹出式窗口和相关控件之间导航。",
        ariaLiveRegionInitialFocusNone: "弹出式窗口已打开。按 F6 可在弹出式窗口和相关控件之间导航。",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "正在进入弹出式窗口。通过导航到弹出式窗口中的最后一个链接可关闭弹出式窗口。",
        ariaLiveRegionInitialFocusNoneTouch: "弹出式窗口已打开。导航到下一个链接以在弹出式窗口中建立焦点。",
        ariaFocusSkipLink: "双击以导航到打开的弹出式窗口。",
        ariaCloseSkipLink: "双击以关闭打开的弹出式窗口。"
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "激活链接以刷新内容",
        ariaRefreshingLink: "刷新内容",
        ariaRefreshCompleteLink: "刷新完成"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "显示开始操作",
        ariaShowEndActionsDescription: "显示结束操作",
        ariaHideActionsDescription: "隐藏操作"
    },
    "oj-ojIndexer": {
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        indexerOthers: "#",
        ariaDisabledLabel: "没有匹配的组标题",
        ariaOthersLabel: "数字",
        ariaInBetweenText: "介于 {first} 与 {second} 之间",
        ariaKeyboardInstructionText: "按 Enter 键以选择值。",
        ariaTouchInstructionText: "双击并按住以进入手势模式, 然后向上或向下拖动以调整值。"
    },
    "oj-ojMenu": {
        labelCancel: "取消"
    },
    "oj-ojColorSpectrum": {
        labelHue: "色调",
        labelOpacity: "不透明度",
        labelSatLum: "饱和度/辉度",
        labelThumbDesc: "色谱四向滑块。"
    },
    "oj-ojColorPalette": {
        labelNone: "无"
    },
    "oj-ojColorPicker": {
        labelSwatches: "色板",
        labelCustomColors: "定制颜色",
        labelPrevColor: "上一个颜色",
        labelDefColor: "默认颜色",
        labelDelete: "删除",
        labelDeleteQ: "是否删除?",
        labelAdd: "添加",
        labelAddColor: "添加颜色",
        labelMenuHex: "十六进制",
        labelMenuRgba: "RGBa",
        labelMenuHsla: "HSLa",
        labelSliderHue: "色调",
        labelSliderSaturation: "饱和度",
        labelSliderSat: "饱和度",
        labelSliderLightness: "亮度",
        labelSliderLum: "光度",
        labelSliderAlpha: "Alpha",
        labelOpacity: "不透明度",
        labelSliderRed: "红",
        labelSliderGreen: "绿",
        labelSliderBlue: "蓝"
    },
    "oj-ojFilePicker": {
        dropzoneText: "将文件放在此处或单击以上载"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "进行中"
    },
    "oj-ojMessage": {
        labelCloseIcon: "关闭",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "消息",
        ariaLiveRegion: {
            navigationFromKeyboard: "正在输入消息区域。按 F6 可返回到之前选中的元素。",
            navigationToTouch: "消息区域有新消息。使用旁白转子可导航到消息界标。",
            navigationToKeyboard: "消息区域有新消息。使用 F6 可导航到最新的消息区域。",
            newMessage: "消息类别 {category}。{summary}。"
        }
    }
});