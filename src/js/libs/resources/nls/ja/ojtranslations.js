define({
    "oj-message": {
        fatal: "致命的",
        error: "エラー",
        warning: "警告",
        info: "情報",
        confirmation: "確認",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "値が所定のフォーマットではありません。",
        detail: "所定のフォーマットで値を入力してください。",
        "plural-separator": ", ",
        hint: {
            summary: "例: {exampleValue}",
            detail: "次の例と同じフォーマットで値を入力してください: '{exampleValue}'。",
            "detail-plural": "次の例と同じフォーマットで値を入力してください: '{exampleValue}'。"
        },
        optionHint: {
            detail: "オプション'{propertyName}'の許容値は'{propertyValueValid}'です。",
            "detail-plural": "オプション'{propertyName}'の許容値は'{propertyValueValid}'です。"
        },
        optionTypesMismatch: {
            summary: "オプション'{propertyName}'が'{propertyValue}'に設定されている場合、オプション'{requiredPropertyName}'の値が必要です。"
        },
        optionTypeInvalid: {
            summary: "オプション'{propertyName}'に所定のタイプの値が指定されませんでした。"
        },
        optionOutOfRange: {
            summary: "オプション'{propertyName}'の値{propertyValue}は範囲外です。"
        },
        optionValueInvalid: {
            summary: "オプション'{propertyName}'に無効な値'{propertyValue}'が指定されました。"
        },
        number: {
            decimalFormatMismatch: {
                summary: "'{value}'は所定の数値フォーマットではありません。"
            },
            shortLongUnsupportedParse: {
                summary: "'short'および'long'は、コンバータ解析ではサポートされていません。",
                detail: "コンポーネントをreadonlyに変更します。readonlyフィールドはコンバータのparse関数を呼び出しません。"
            },
            currencyFormatMismatch: {
                summary: "'{value}'は所定の通貨フォーマットではありません。"
            },
            percentFormatMismatch: {
                summary: "'{value}'は所定のパーセント・フォーマットではありません。"
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "'{propertyName}'の値'{value}'は範囲外です。",
                detail: "'{minValue}'から'{maxValue}'までの値を入力してください。",
                hour: "時間",
                minute: "分",
                second: "秒",
                millisec: "ミリ秒",
                month: "月",
                day: "日",
                year: "年",
                "month name": "月名",
                weekday: "平日"
            },
            dateFormatMismatch: {
                summary: "'{value}'は所定の日付フォーマットではありません。"
            },
            invalidTimeZoneID: {
                summary: "無効なタイムゾーンID {timeZoneID}が指定されました。"
            },
            nonExistingTime: {
                summary: "夏時間への移行中のため、入力した時間は存在しません。"
            },
            missingTimeZoneData: {
                summary: "タイムゾーン・データが欠落しています。必要な'ojs/ojtimezonedata'を呼び出して、タイムゾーン・データをロードしてください。"
            },
            timeFormatMismatch: {
                summary: "'{value}'は所定の時間フォーマットではありません。"
            },
            datetimeFormatMismatch: {
                summary: "'{value}'は所定の日時フォーマットではありません。"
            },
            dateToWeekdayMismatch: {
                summary: "日付'{date}'は'{weekday}'ではありません。",
                detail: "日付に対応する曜日を入力してください。"
            },
            invalidISOString: {
                summary: "指定した'{isoStr}'は有効なISO 8601文字列ではありません。",
                detail: "有効なISO 8601文字列を指定してください。"
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "{min}文字以上の文字を入力してください。",
                max: "{max}文字以下の文字を入力してください",
                inRange: "{min}文字以上、最大{max}文字の文字を入力してください。",
                exact: "{length}文字の文字を入力してください。"
            },
            messageDetail: {
                tooShort: "{min}文字以上の文字を入力してください。",
                tooLong: "{max}文字以下の文字を入力してください。"
            },
            messageSummary: {
                tooShort: "文字数が少なすぎます。",
                tooLong: "文字数が多すぎます。"
            }
        },
        range: {
            number: {
                hint: {
                    min: "{min}以上の数値を入力してください。",
                    max: "{max}以下の数値を入力してください。",
                    inRange: "{min}から{max}までの数値を入力してください。",
                    exact: "数値{num}を入力してください。"
                },
                messageDetail: {
                    rangeUnderflow: "数値は{min}以上である必要があります。",
                    rangeOverflow: "数値は{max}以下である必要があります。",
                    exact: "数値は{num}にする必要があります。"
                },
                messageSummary: {
                    rangeUnderflow: "数値が小さすぎます。",
                    rangeOverflow: "数値が大きすぎます。"
                }
            },
            datetime: {
                hint: {
                    min: "{min}以降の日時を入力してください。",
                    max: "{max}以前の日時を入力してください。",
                    inRange: "{min}から{max}までの日時を入力してください。"
                },
                messageDetail: {
                    rangeUnderflow: "日時は{min}以降とする必要があります。",
                    rangeOverflow: "日時は{max}以前とする必要があります。"
                },
                messageSummary: {
                    rangeUnderflow: "日時が最小日時より前です。",
                    rangeOverflow: "日時が最大日時より後です。"
                }
            },
            date: {
                hint: {
                    min: "{min}以降の日付を入力してください。",
                    max: "{max}以前の日付を入力してください。",
                    inRange: "{min}と{max}の間の日付を入力してください。"
                },
                messageDetail: {
                    rangeUnderflow: "日付は{min}以降にする必要があります。",
                    rangeOverflow: "日付は{max}以前にする必要があります。"
                },
                messageSummary: {
                    rangeUnderflow: "日付が最小日付より前です。",
                    rangeOverflow: "日付が最大日付より後です。"
                }
            },
            time: {
                hint: {
                    min: "{min}以降の時間を入力してください。",
                    max: "{max}以前の時間を入力してください。",
                    inRange: "{min}と{max}の間の時間を入力してください。"
                },
                messageDetail: {
                    rangeUnderflow: "時間は{min}以降にする必要があります。",
                    rangeOverflow: "時間は{max}以前にする必要があります。"
                },
                messageSummary: {
                    rangeUnderflow: "時間が最小時間より前です。",
                    rangeOverflow: "時間が最大時間より後です。"
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "日付{value}が無効なエントリです。",
                messageDetail: "日付{value}は無効なエントリにしないでください。"
            }
        },
        regExp: {
            summary: "フォーマットが不正です。",
            detail: "値'{value}'は次のパターンと一致している必要があります: '{pattern}'。"
        },
        required: {
            summary: "値が必要です。",
            detail: "値を入力する必要があります。"
        }
    },
    "oj-ojInputDate": {
        done: "完了",
        cancel: "取消",
        prevText: "前",
        nextText: "次",
        currentText: "今日",
        weekHeader: "週",
        tooltipCalendar: "日付の選択",
        tooltipCalendarTime: "日時を選択してください",
        tooltipCalendarDisabled: "無効な日付の選択",
        tooltipCalendarTimeDisabled: "無効な日時が選択されています",
        picker: "ピッカー",
        weekText: "週",
        datePicker: "日付ピッカー",
        inputHelp: "カレンダにアクセスするには[↓]キーまたは[↑]キーを押してください",
        inputHelpBoth: "カレンダにアクセスするには[↓]キーまたは[↑]キーを、時間ドロップ・ダウンにアクセスするには[Shift]+[↓]キーまたは[Shift]+[↑]キーを押してください",
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
        okText: "OK",
        currentTimeText: "現在",
        hourWheelLabel: "時間",
        minuteWheelLabel: "分",
        ampmWheelLabel: "午前/午後",
        tooltipTime: "時間の選択",
        tooltipTimeDisabled: "無効な時間の選択",
        inputHelp: "時間ドロップ・ダウンにアクセスするには[↓]キーまたは[↑]キーを押してください",
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
            messageDetail: "値は次のパターンと一致している必要があります: '{pattern}'。"
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "ページ{pageIndex}/{pageCount}を表示しています",
        labelAccArrowNextPage: "次のページを表示するには「次」を選択します",
        labelAccArrowPreviousPage: "前のページを表示するには「前」を選択します",
        tipArrowNextPage: "次",
        tipArrowPreviousPage: "前"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "{id}は昇順でソートされました",
        accessibleSortDescending: "{id}は降順でソートされました",
        accessibleActionableMode: "アクション可能モードの入力",
        accessibleNavigationMode: "ナビゲーション・モードを開始します。編集モードまたはアクション可能モードを開始するには[F2]を押します",
        accessibleEditableMode: "編集可能モードを開始します。データ・グリッドの外側に移動するには[Esc]を押します",
        accessibleSummaryExact: "これは{rownum}行、{colnum}列のデータ・グリッドです",
        accessibleSummaryEstimate: "これは行数と列数が不明なデータ・グリッドです",
        accessibleSummaryExpanded: "現在{num}行が展開されています",
        accessibleRowExpanded: "行を展開済",
        accessibleRowCollapsed: "行を縮小済",
        accessibleRowSelected: "行{row}が選択済",
        accessibleColumnSelected: "列{column}が選択済",
        accessibleStateSelected: "選択済",
        accessibleMultiCellSelected: "{num}個のセルが選択済",
        accessibleColumnSpanContext: "{extent} 幅",
        accessibleRowSpanContext: "{extent} 高さ",
        accessibleRowContext: "行{index}",
        accessibleColumnContext: "列{index}",
        accessibleRowHeaderContext: "行ヘッダー{index}",
        accessibleColumnHeaderContext: "列ヘッダー{index}",
        accessibleRowEndHeaderContext: "行終了ヘッダー{index}",
        accessibleColumnEndHeaderContext: "列終了ヘッダー{index}",
        accessibleLevelContext: "レベル{level}",
        accessibleRangeSelectModeOn: "選択したセル範囲の追加モード・オン",
        accessibleRangeSelectModeOff: "選択したセル範囲の追加モード・オフ",
        accessibleFirstRow: "最初の行に到達しました",
        accessibleLastRow: "最後の行に到達しました",
        accessibleFirstColumn: "最初の列に到達しました",
        accessibleLastColumn: "最後の列に到達しました",
        accessibleSelectionAffordanceTop: "上側の選択ハンドル",
        accessibleSelectionAffordanceBottom: "下側の選択ハンドル",
        msgFetchingData: "データのフェッチ中...",
        msgNoData: "表示するアイテムはありません。",
        labelResize: "サイズ変更",
        labelResizeWidth: "幅のサイズ変更",
        labelResizeHeight: "高さのサイズ変更",
        labelSortRow: "行のソート",
        labelSortRowAsc: "行の昇順ソート",
        labelSortRowDsc: "行の降順ソート",
        labelSortCol: "列のソート",
        labelSortColAsc: "列の昇順ソート",
        labelSortColDsc: "列の降順ソート",
        labelCut: "切取り",
        labelPaste: "貼付け",
        labelEnableNonContiguous: "連続しない選択の有効化",
        labelDisableNonContiguous: "連続しない選択の無効化",
        labelResizeDialogSubmit: "OK"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "レベル{level}",
        accessibleRowDescription: "レベル{level}、行{num} / {total}",
        accessibleRowExpanded: "行を展開済",
        accessibleRowCollapsed: "行を縮小済",
        accessibleStateExpanded: "展開済",
        accessibleStateCollapsed: "縮小済"
    },
    "oj-ojListView": {
        msgFetchingData: "データのフェッチ中...",
        msgNoData: "表示するアイテムはありません。",
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        accessibleReorderTouchInstructionText: "ダブルタップしてホールドします。音が鳴るのを待機してから、ドラッグして再配置します。",
        accessibleReorderBeforeItem: "{item}の前",
        accessibleReorderAfterItem: "{item}の後",
        accessibleReorderInsideItem: "{item}の中",
        accessibleNavigateSkipItems: "{numSkip}アイテムをスキップしています",
        labelCut: "切取り",
        labelCopy: "コピー",
        labelPaste: "貼付け",
        labelPasteBefore: "前に貼付け",
        labelPasteAfter: "後に貼付け"
    },
    "oj-_ojLabel": {
        tooltipHelp: "ヘルプ",
        tooltipRequired: "必須"
    },
    "oj-ojLabel": {
        tooltipHelp: "ヘルプ",
        tooltipRequired: "必須"
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
        tooltipDecrement: "減分",
        tooltipIncrement: "増分"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "上側の選択ハンドル",
        labelAccSelectionAffordanceBottom: "下側の選択ハンドル",
        labelEnableNonContiguousSelection: "連続しない選択の有効化",
        labelDisableNonContiguousSelection: "連続しない選択の無効化",
        labelResize: "サイズ変更",
        labelResizePopupSubmit: "OK",
        labelResizePopupSpinner: "列のサイズ変更",
        labelSelectRow: "行の選択",
        labelEditRow: "行の編集",
        labelSelectAndEditRow: "行を選択して編集",
        labelSelectColumn: "列の選択",
        labelSort: "ソート",
        labelSortAsc: "昇順ソート",
        labelSortDsc: "降順ソート",
        msgFetchingData: "データのフェッチ中...",
        msgNoData: "表示するデータがありません。",
        msgInitializing: "初期化中...",
        msgColumnResizeWidthValidation: "幅の値は整数値にする必要があります。",
        msgScrollPolicyMaxCountSummary: "表のスクロールの最大行数を超えました。",
        msgScrollPolicyMaxCountDetail: "データ・セットを小さくしてリロードしてください。",
        msgStatusSortAscending: "{0}は昇順でソートされました",
        msgStatusSortDescending: "{0}は降順でソートされました"
    },
    "oj-ojTabs": {
        labelCut: "切取り",
        labelPasteBefore: "前に貼付け",
        labelPasteAfter: "後に貼付け",
        labelRemove: "削除",
        labelReorder: "並替え",
        removeCueText: "削除可能"
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
        searchField: "検索フィールド",
        noMatchesFound: "一致する検索文字列が見つかりませんでした。",
        oneMatchesFound: "一致が1つ見つかりました",
        moreMatchesFound: "{num}件の一致が見つかりました",
        filterFurther: "より多くの結果が使用可能です。さらにフィルタしてください。"
    },
    "oj-ojSwitch": {
        SwitchON: "オン",
        SwitchOFF: "オフ"
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "一致する検索文字列が見つかりませんでした。",
        filterFurther: "より多くの結果が使用可能です。さらにフィルタしてください。"
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "一致する検索文字列が見つかりませんでした。",
        oneMatchesFound: "一致が1つ見つかりました",
        moreMatchesFound: "{num}件の一致が見つかりました"
    },
    "oj-ojTree": {
        stateLoading: "ロード中...",
        labelNewNode: "新規ノード",
        labelMultiSelection: "複数選択",
        labelEdit: "編集",
        labelCreate: "作成",
        labelCut: "切取り",
        labelCopy: "コピー",
        labelPaste: "貼付け",
        labelPasteAfter: "後に貼付け",
        labelPasteBefore: "前に貼付け",
        labelRemove: "削除",
        labelRename: "名前変更",
        labelNoData: "データなし"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "ページ区切り",
        labelAccNavFirstPage: "最初のページ",
        labelAccNavLastPage: "最後のページ",
        labelAccNavNextPage: "次のページ",
        labelAccNavPreviousPage: "前のページ",
        labelAccNavPage: "ページ",
        labelLoadMore: "さらに表示...",
        labelLoadMoreMaxRows: "{maxRows}行の上限に到達",
        labelNavInputPage: "ページ",
        labelNavInputPageMax: "/{pageMax}",
        msgItemRangeCurrent: "{pageFrom}-{pageTo}",
        msgItemRangeCurrentSingle: "{pageFrom}",
        msgItemRangeOf: "/",
        msgItemRangeOfAtLeast: "/少なくとも",
        msgItemRangeOfApprox: "/約",
        msgItemRangeItems: "アイテム",
        tipNavInputPage: "ページに移動",
        tipNavPageLink: "{pageNum}ページに移動",
        tipNavNextPage: "次",
        tipNavPreviousPage: "前",
        tipNavFirstPage: "最初",
        tipNavLastPage: "最後",
        pageInvalid: {
            summary: "入力したページの値が無効です。",
            detail: "0より大きい値を入力してください。"
        },
        maxPageLinksInvalid: {
            summary: "maxPageLinksの値が無効です。",
            detail: "4より大きい値を入力してください。"
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "切取り",
        labelPasteBefore: "前に貼付け",
        labelPasteAfter: "後に貼付け"
    },
    "oj-panel": {
        labelAccButtonExpand: "拡張",
        labelAccButtonCollapse: "縮小",
        labelAccButtonRemove: "削除"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "グループ{0}",
        labelSeries: "系列",
        labelGroup: "グループ",
        labelDate: "日付",
        labelValue: "値",
        labelTargetValue: "ターゲット",
        labelX: "X",
        labelY: "Y",
        labelZ: "Z",
        labelPercentage: "パーセンテージ",
        labelLow: "低",
        labelHigh: "高",
        labelOpen: "開く",
        labelClose: "閉じる",
        labelVolume: "ボリューム",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "最小",
        labelMax: "最大",
        labelOther: "その他",
        tooltipPan: "パン",
        tooltipSelect: "マーキーの選択",
        tooltipZoom: "マーキー・ズーム",
        componentName: "チャート"
    },
    "oj-dvtBaseGauge": {
        componentName: "ゲージ"
    },
    "oj-ojDiagram": {
        promotedLink: "{0}リンク",
        promotedLinks: "{0}リンク",
        promotedLinkAriaDesc: "間接",
        componentName: "ダイアグラム"
    },
    "oj-ojGantt": {
        componentName: "ガント",
        accessibleDurationDays: "{0}日間",
        accessibleDurationHours: "{0}時間",
        accessibleTaskInfo: "開始時間が{0}で、終了時間が{1}で、継続時間が{2}です",
        accessibleMilestoneInfo: "時間は{0}です",
        accessibleRowInfo: "行{0}",
        accessibleTaskTypeMilestone: "マイルストン",
        accessibleTaskTypeSummary: "サマリー",
        accessiblePredecessorInfo: "{0}先行",
        accessibleSuccessorInfo: "{0}後続",
        accessibleDependencyInfo: "依存性タイプ{0}、{1}を{2}に接続",
        startStartDependencyAriaDesc: "開始から開始",
        startFinishDependencyAriaDesc: "開始から終了",
        finishStartDependencyAriaDesc: "終了から開始",
        finishFinishDependencyAriaDesc: "終了から終了",
        tooltipZoomIn: "ズームイン",
        tooltipZoomOut: "ズームアウト",
        labelRow: "行",
        labelStart: "開始",
        labelEnd: "終了",
        labelDate: "日付",
        labelBaselineStart: "ベースライン開始",
        labelBaselineEnd: "ベースライン終了",
        labelBaselineDate: "ベースライン日",
        labelLabel: "ラベル",
        labelProgress: "進行状況",
        labelMoveBy: "移動単位",
        taskMoveInitiated: "タスク移動が開始されました",
        taskMoveSelectionInfo: "他に{0}件選択されています",
        taskMoveInitiatedInstruction: "移動には矢印キーを使用します",
        taskMoveFinalized: "タスク移動が終了しました",
        taskMoveCancelled: "タスク移動が取り消されました"
    },
    "oj-ojLegend": {
        componentName: "凡例"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "その他",
        labelGroup: "グループ",
        labelSize: "サイズ",
        labelAdditionalData: "追加データ",
        componentName: "NBox"
    },
    "oj-ojPictoChart": {
        componentName: "絵グラフ"
    },
    "oj-ojSparkChart": {
        componentName: "チャート"
    },
    "oj-ojSunburst": {
        labelColor: "色",
        labelSize: "サイズ",
        tooltipExpand: "拡張",
        tooltipCollapse: "縮小",
        componentName: "サンバースト"
    },
    "oj-ojTagCloud": {
        componentName: "タグ・クラウド"
    },
    "oj-ojThematicMap": {
        componentName: "テーマ・マップ"
    },
    "oj-ojTimeAxis": {
        componentName: "時間軸"
    },
    "oj-ojTimeline": {
        componentName: "時系列",
        accessibleItemDesc: "説明は{0}です。",
        accessibleItemEnd: "終了時間は{0}です。",
        accessibleItemStart: "開始時間は{0}です。",
        accessibleItemTitle: "タイトルは{0}です。",
        labelSeries: "系列",
        tooltipZoomIn: "ズームイン",
        tooltipZoomOut: "ズームアウト"
    },
    "oj-ojTreemap": {
        labelColor: "色",
        labelSize: "サイズ",
        tooltipIsolate: "分離",
        tooltipRestore: "復元",
        componentName: "ツリーマップ"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "K",
        labelScalingSuffixMillion: "M",
        labelScalingSuffixBillion: "B",
        labelScalingSuffixTrillion: "T",
        labelScalingSuffixQuadrillion: "Q",
        labelInvalidData: "無効なデータ",
        labelNoData: "表示するデータがありません",
        labelClearSelection: "選択のクリア",
        labelDataVisualization: "データの視覚化",
        stateSelected: "選択済",
        stateUnselected: "未選択",
        stateMaximized: "最大化",
        stateMinimized: "最小化",
        stateExpanded: "展開済",
        stateCollapsed: "縮小済",
        stateIsolated: "分離",
        stateHidden: "非表示",
        stateVisible: "表示",
        stateDrillable: "ドリル可能",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "{0} / {1}"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "ナビゲーション・リスト",
        hierMenuBtnLabel: "階層メニュー・ボタン",
        selectedLabel: "選択済",
        previousIcon: "前",
        msgFetchingData: "データのフェッチ中...",
        msgNoData: "表示するアイテムはありません。",
        overflowItemLabel: "その他",
        accessibleReorderTouchInstructionText: "ダブルタップしてホールドします。音が鳴るのを待機してから、ドラッグして再配置します。",
        accessibleReorderBeforeItem: "{item}の前",
        accessibleReorderAfterItem: "{item}の後",
        labelCut: "切取り",
        labelPasteBefore: "前に貼付け",
        labelPasteAfter: "後に貼付け",
        labelRemove: "削除",
        removeCueText: "削除可能"
    },
    "oj-ojSlider": {
        noValue: "ojSliderに値がありません",
        maxMin: "最大を最小以下にすることはできません",
        valueRange: "値は最小から最大の範囲にする必要があります",
        optionNum: "{option}オプションが数字ではありません",
        invalidStep: "ステップが無効です。ステップは0より大きくする必要があります"
    },
    "oj-ojDialog": {
        labelCloseIcon: "閉じる"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "ポップアップの入力中です。ポップアップと関連付けられたコントロールとの間を移動するには、[F6]を押してください。",
        ariaLiveRegionInitialFocusNone: "ポップアップが開きました。ポップアップと関連付けられたコントロールとの間を移動するには、[F6]を押してください。",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "ポップアップの入力中です。ポップアップ内の最後のリンクに移動すると、ポップアップをクローズできます。",
        ariaLiveRegionInitialFocusNoneTouch: "ポップアップが開きました。ポップアップ内にフォーカスを確立するには、次のリンクに移動します。",
        ariaFocusSkipLink: "ダブルタップして、開いているポップアップに移動します。",
        ariaCloseSkipLink: "ダブルタップして、開いているポップアップを閉じます。"
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "リンクをアクティブ化してコンテンツをリフレッシュ",
        ariaRefreshingLink: "コンテンツのリフレッシュ",
        ariaRefreshCompleteLink: "リフレッシュ完了"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "開始アクションを表示します",
        ariaShowEndActionsDescription: "終了アクションを表示します",
        ariaHideActionsDescription: "アクションを非表示にします"
    },
    "oj-ojIndexer": {
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        indexerOthers: "#",
        ariaDisabledLabel: "一致するグループ・ヘッダーがありません",
        ariaOthersLabel: "数値",
        ariaInBetweenText: "{first}と{second}の間",
        ariaKeyboardInstructionText: "[Enter]を押して値を選択します。",
        ariaTouchInstructionText: "ダブル・タップしてホールドし、ジェスチャ・モードを開始した後、上下にドラッグして値を調整します。"
    },
    "oj-ojMenu": {
        labelCancel: "取消"
    },
    "oj-ojColorSpectrum": {
        labelHue: "色相",
        labelOpacity: "不透明度",
        labelSatLum: "彩度/輝度",
        labelThumbDesc: "色のスペクトルの4方向スライダ。"
    },
    "oj-ojColorPalette": {
        labelNone: "なし"
    },
    "oj-ojColorPicker": {
        labelSwatches: "見本",
        labelCustomColors: "カスタム・カラー",
        labelPrevColor: "前回の色",
        labelDefColor: "デフォルトの色",
        labelDelete: "削除",
        labelDeleteQ: "削除しますか。",
        labelAdd: "追加",
        labelAddColor: "色の追加",
        labelMenuHex: "16進",
        labelMenuRgba: "RGBa",
        labelMenuHsla: "HSLa",
        labelSliderHue: "色相",
        labelSliderSaturation: "彩度",
        labelSliderSat: "彩度",
        labelSliderLightness: "明度",
        labelSliderLum: "輝度",
        labelSliderAlpha: "アルファ",
        labelOpacity: "不透明度",
        labelSliderRed: "赤",
        labelSliderGreen: "緑",
        labelSliderBlue: "青"
    },
    "oj-ojFilePicker": {
        dropzoneText: "ファイルをここにドロップするか、クリックしてアップロードします"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "進行中"
    },
    "oj-ojMessage": {
        labelCloseIcon: "閉じる",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "メッセージ",
        ariaLiveRegion: {
            navigationFromKeyboard: "メッセージ・リージョンに入ります。フォーカスされていた前の要素に戻るには、[F6]を押してください。",
            navigationToTouch: "メッセージ・リージョンに新しいメッセージがあります。メッセージ・ランドマークに移動するには、ボイスオーバー・ローターを使用してください。",
            navigationToKeyboard: "メッセージ・リージョンに新しいメッセージがあります。最新のメッセージ・リージョンに移動するには、[F6]を押してください。",
            newMessage: "メッセージ・カテゴリ{category}。{summary}。"
        }
    }
});