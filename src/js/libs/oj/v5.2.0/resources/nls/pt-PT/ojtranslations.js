define({
    "oj-message": {
        fatal: "Fatal",
        error: "Erro",
        warning: "Aviso",
        info: "Informações",
        confirmation: "Confirmação",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "O valor não está no formato esperado.",
        detail: "Introduza um valor no formato esperado.",
        "plural-separator": ", ",
        hint: {
            summary: "Exemplo: {exampleValue}",
            detail: "Introduza um valor no mesmo formato que no seguinte exemplo: '{exampleValue}'.",
            "detail-plural": "Introduza um valor no mesmo formato que nos seguintes exemplos: '{exampleValue}'."
        },
        optionHint: {
            detail: "Um valor aceite para a opção '{propertyName}' é '{propertyValueValid}'.",
            "detail-plural": "Os valores aceites para a opção '{propertyName}' são '{propertyValueValid}'."
        },
        optionTypesMismatch: {
            summary: "É obrigatório um valor para a opção '{requiredPropertyName}' quando a opção '{propertyName}' está definida como '{propertyValue}'."
        },
        optionTypeInvalid: {
            summary: "Não foi fornecido um valor do tipo esperado para a opção '{propertyName}'."
        },
        optionOutOfRange: {
            summary: "O valor {propertyValue} está fora do intervalo para a opção '{propertyName}'."
        },
        optionValueInvalid: {
            summary: "Foi especificado um valor inválido '{propertyValue}' para a opção '{propertyName}'."
        },
        number: {
            decimalFormatMismatch: {
                summary: "'{value}' não está no formato de número esperado."
            },
            shortLongUnsupportedParse: {
                summary: "'short' e 'long' não são suportados para a análise do conversor.",
                detail: "Altere o componente para readonly. Os campos readonly não chamam a função de análise do conversor."
            },
            currencyFormatMismatch: {
                summary: "'{value}' não está no formato de moeda esperado."
            },
            percentFormatMismatch: {
                summary: "'{value}' não está no formato de percentagem esperado."
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "O valor '{value}' está fora do intervalo para '{propertyName}'.",
                detail: "Introduza um valor entre '{minValue}' e '{maxValue}'.",
                hour: "hora",
                minute: "minuto",
                second: "segundo",
                millisec: "milésimo de segundo",
                month: "mês",
                day: "dia",
                year: "ano",
                "month name": "nome do mês",
                weekday: "dia da semana"
            },
            dateFormatMismatch: {
                summary: "'{value}' não está no formato de data esperado."
            },
            invalidTimeZoneID: {
                summary: "Foi fornecida a ID de fuso horário {timeZoneID}."
            },
            nonExistingTime: {
                summary: "A hora de entrada de dados não existe porque coincide com a transição para a hora de verão."
            },
            missingTimeZoneData: {
                summary: "Dados do Fuso Horário em falta. Chame o elemento 'ojs/ojtimezonedata' obrigatório, de forma a carregar os dados do Fuso Horário."
            },
            timeFormatMismatch: {
                summary: "'{value}' não está no formato de hora esperado."
            },
            datetimeFormatMismatch: {
                summary: "'{value}' não está no formato de data e hora esperado."
            },
            dateToWeekdayMismatch: {
                summary: "O dia '{date}' não se situa num(a) '{weekday}'.",
                detail: "Introduza um dia da semana que corresponda à data."
            },
            invalidISOString: {
                summary: "O '{isoStr}' fornecido não é uma cadeia de caracteres ISO 8601 válida.",
                detail: "Forneça uma cadeia de caracteres ISO 8601 válida."
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "Introduza {min} ou mais caracteres.",
                max: "Introduza {max} ou menos caracteres.",
                inRange: "Introduza {min} ou mais caracteres, até um máximo de {max}.",
                exact: "Introduza {length} caracteres."
            },
            messageDetail: {
                tooShort: "Introduza {min} ou mais caracteres, não menos.",
                tooLong: "Introduza {max} ou menos caracteres, não mais."
            },
            messageSummary: {
                tooShort: "Não existem caracteres suficientes.",
                tooLong: "Existem demasiados caracteres."
            }
        },
        range: {
            number: {
                hint: {
                    min: "Introduza um número maior que ou igual a {min}.",
                    max: "Introduza um número menor que ou igual a {max}.",
                    inRange: "Introduza um número entre {min} e {max}.",
                    exact: "Introduza o número {num}."
                },
                messageDetail: {
                    rangeUnderflow: "É necessário que o número seja maior que ou igual a {min}.",
                    rangeOverflow: "É necessário que o número seja menor que ou igual a {max}.",
                    exact: "O número deve ser {num}."
                },
                messageSummary: {
                    rangeUnderflow: "O número é demasiado baixo.",
                    rangeOverflow: "O número é demasiado alto."
                }
            },
            datetime: {
                hint: {
                    min: "Introduza uma data e hora que se situem em ou depois de {min}.",
                    max: "Introduza uma data e hora que se situem em ou antes de {max}.",
                    inRange: "Introduza uma data e hora entre {min} e {max}."
                },
                messageDetail: {
                    rangeUnderflow: "É necessário que a data e hora se situem em ou depois de {min}.",
                    rangeOverflow: "É necessário que a data e hora se situem em ou antes de {max}."
                },
                messageSummary: {
                    rangeUnderflow: "A data e hora são anteriores às data e hora mínimas.",
                    rangeOverflow: "A data e hora são posteriores às data e hora máximas."
                }
            },
            date: {
                hint: {
                    min: "Introduza uma data igual ou posterior a {min}.",
                    max: "Introduza uma data igual ou anterior a {max}.",
                    inRange: "Introduza uma data entre {min} e {max}."
                },
                messageDetail: {
                    rangeUnderflow: "A data deve ser igual ou posterior a {min}.",
                    rangeOverflow: "A data deve ser igual ou anterior a {max}."
                },
                messageSummary: {
                    rangeUnderflow: "A data é anterior à data mínima.",
                    rangeOverflow: "A data é posterior à data máxima."
                }
            },
            time: {
                hint: {
                    min: "Introduza uma hora igual ou posterior a {min}.",
                    max: "Introduza uma hora igual ou anterior a {max}.",
                    inRange: "Introduza uma hora entre {min} e {max}."
                },
                messageDetail: {
                    rangeUnderflow: "A hora deve ser igual ou posterior a {min}.",
                    rangeOverflow: "A hora deve ser igual ou anterior a {max}."
                },
                messageSummary: {
                    rangeUnderflow: "A hora é anterior à hora mínima.",
                    rangeOverflow: "A hora é posterior à hora máxima."
                }
            }
        },
        restriction: {
            date: {
                messageSummary: "A data {value} é de uma entrada desativada.",
                messageDetail: "A data {value} não deve ser de uma entrada desativada."
            }
        },
        regExp: {
            summary: "O formato está incorreto.",
            detail: "É necessário que o valor '{value}' corresponda a este padrão: '{pattern}'."
        },
        required: {
            summary: "O valor é obrigatório.",
            detail: "É necessário introduzir um valor."
        }
    },
    "oj-ojInputDate": {
        done: "Concluído",
        cancel: "Cancelar",
        prevText: "Anterior",
        nextText: "Seguinte",
        currentText: "Hoje",
        weekHeader: "Semana",
        tooltipCalendar: "Selecionar Data.",
        tooltipCalendarTime: "Selecionar Data e Hora.",
        tooltipCalendarDisabled: "Selecionar Data Desativado.",
        tooltipCalendarTimeDisabled: "Selecionar Data e Hora\n Desativado.",
        picker: "Seletor",
        weekText: "Semana",
        datePicker: "Seletor de Datas",
        inputHelp: "Prima a tecla de seta para baixo ou para cima para ter acesso ao Calendário.",
        inputHelpBoth: "Prima a tecla de seta para baixo ou para cima para ter acesso ao Calendário e Shift + Seta para baixo ou Shift + Seta para cima para ter acesso à lista pendente de horas.",
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
        cancelText: "Cancelar",
        okText: "OK",
        currentTimeText: "Agora",
        hourWheelLabel: "Hora",
        minuteWheelLabel: "Minuto",
        ampmWheelLabel: "AM/PM",
        tooltipTime: "Selecionar Hora.",
        tooltipTimeDisabled: "Selecionar Hora Desativado.",
        inputHelp: "Prima a tecla de seta para baixo ou para cima para ter acesso à lista pendente de horas.",
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
            messageDetail: "É necessário que o valor corresponda a este padrão: '{pattern}'."
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "A apresentar a página {pageIndex} de {pageCount}",
        labelAccArrowNextPage: "Selecionar Seguinte para apresentar a página seguinte",
        labelAccArrowPreviousPage: "Selecionar Anterior para apresentar a página anterior",
        tipArrowNextPage: "Seguinte",
        tipArrowPreviousPage: "Anterior"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "{id} ordenado por ordem crescente",
        accessibleSortDescending: "{id} ordenado por ordem decrescente",
        accessibleActionableMode: "Entrar no modo passível de ação.",
        accessibleNavigationMode: "Entre no modo de navegação, prima F2 para entrar no modo de edição ou no modo passível de ação.",
        accessibleEditableMode: "Entre no modo de edição, prima Escape para navegar para fora da grelha de dados.",
        accessibleSummaryExact: "Grelha de dados com {rownum} linhas e {colnum} colunas",
        accessibleSummaryEstimate: "Grelha de dados com um número desconhecido de linhas e colunas",
        accessibleSummaryExpanded: "Atualmente, existem {num} linhas expandidas",
        accessibleRowExpanded: "Linha expandida",
        accessibleRowCollapsed: "Linha contraída",
        accessibleRowSelected: "Linha {row} selecionada",
        accessibleColumnSelected: "Coluna {column} selecionada",
        accessibleStateSelected: "selecionado",
        accessibleMultiCellSelected: "{num} células selecionadas",
        accessibleColumnSpanContext: "{extent} largo",
        accessibleRowSpanContext: "{extent} alto",
        accessibleRowContext: "Linha {index}",
        accessibleColumnContext: "Coluna {index}",
        accessibleRowHeaderContext: "Cabeçalho da Linha {index}",
        accessibleColumnHeaderContext: "Cabeçalho da Coluna {index}",
        accessibleRowEndHeaderContext: "Cabeçalho Final da Linha {index}",
        accessibleColumnEndHeaderContext: "Cabeçalho Final da Coluna {index}",
        accessibleLevelContext: "Nível {level}",
        accessibleRangeSelectModeOn: "Modo de adição do intervalo de células selecionado ativado.",
        accessibleRangeSelectModeOff: "Modo de adição do intervalo de células selecionado desativado.",
        accessibleFirstRow: "Foi atingida a primeira linha.",
        accessibleLastRow: "Foi atingida a última linha.",
        accessibleFirstColumn: "Foi atingida a primeira coluna",
        accessibleLastColumn: "Foi atingida a última coluna.",
        accessibleSelectionAffordanceTop: "Alça de seleção superior.",
        accessibleSelectionAffordanceBottom: "Alça de seleção inferior.",
        msgFetchingData: "A Extrair Dados...",
        msgNoData: "Não existem itens para apresentação.",
        labelResize: "Redimensionar",
        labelResizeWidth: "Redimensionar Largura",
        labelResizeHeight: "Redimensionar Altura",
        labelSortRow: "Ordenar Linha",
        labelSortRowAsc: "Ordem Crescente da Linha",
        labelSortRowDsc: "Ordem Decrescente da Linha",
        labelSortCol: "Ordenar Coluna",
        labelSortColAsc: "Ordem Crescente da Coluna",
        labelSortColDsc: "Ordem Decrescente da Coluna",
        labelCut: "Cortar",
        labelPaste: "Colar",
        labelEnableNonContiguous: "Ativar Seleção Não Contígua",
        labelDisableNonContiguous: "Desativar Seleção Não Contígua",
        labelResizeDialogSubmit: "OK"
    },
    "oj-ojRowExpander": {
        accessibleLevelDescription: "Nível {level}",
        accessibleRowDescription: "Nível {level}, Linha {num} de {total}",
        accessibleRowExpanded: "Linha expandida",
        accessibleRowCollapsed: "Linha contraída",
        accessibleStateExpanded: "expandido",
        accessibleStateCollapsed: "contraído"
    },
    "oj-ojListView": {
        msgFetchingData: "A Extrair Dados...",
        msgNoData: "Não existem itens para apresentação.",
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        accessibleReorderTouchInstructionText: "Toque duas vezes e mantenha premido. Aguarde pelo som e, em seguida, arraste para voltar a dispor.",
        accessibleReorderBeforeItem: "Antes de {item}",
        accessibleReorderAfterItem: "Depois de {item}",
        accessibleReorderInsideItem: "Em {item}",
        accessibleNavigateSkipItems: "A ignorar {numSkip} itens",
        labelCut: "Cortar",
        labelCopy: "Copiar",
        labelPaste: "Colar",
        labelPasteBefore: "Colar Antes de",
        labelPasteAfter: "Colar Depois de"
    },
    "oj-_ojLabel": {
        tooltipHelp: "Auxílio",
        tooltipRequired: "Obrigatório"
    },
    "oj-ojLabel": {
        tooltipHelp: "Auxílio",
        tooltipRequired: "Obrigatório"
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
        tooltipDecrement: "Diminuir",
        tooltipIncrement: "Incrementar"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "Alça de seleção superior",
        labelAccSelectionAffordanceBottom: "Alça de seleção inferior",
        labelEnableNonContiguousSelection: "Ativar Seleção Não Contígua",
        labelDisableNonContiguousSelection: "Desativar Seleção Não Contígua",
        labelResize: "Redimensionar",
        labelResizePopupSubmit: "OK",
        labelResizePopupSpinner: "Redimensionar Coluna",
        labelSelectRow: "Selecionar Linha",
        labelEditRow: "Editar Linha",
        labelSelectAndEditRow: "Selecionar e Editar Linha",
        labelSelectColumn: "Selecionar Coluna",
        labelSort: "Ordenar",
        labelSortAsc: "Ordem Crescente",
        labelSortDsc: "Ordem Decrescente",
        msgFetchingData: "A Extrair Dados...",
        msgNoData: "Não existem dados para apresentação.",
        msgInitializing: "A inicializar...",
        msgColumnResizeWidthValidation: "O valor da largura deve ser um número inteiro.",
        msgScrollPolicyMaxCountSummary: "Número máximo de linhas excedido para deslocação na tabela.",
        msgScrollPolicyMaxCountDetail: "Repita o carregamento com um conjunto de dados mais pequeno.",
        msgStatusSortAscending: "{0} ordenado por ordem crescente.",
        msgStatusSortDescending: "{0} ordenado por ordem decrescente."
    },
    "oj-ojTabs": {
        labelCut: "Cortar",
        labelPasteBefore: "Colar Antes de",
        labelPasteAfter: "Colar Depois de",
        labelRemove: "Retirar",
        labelReorder: "Reordenar",
        removeCueText: "Retirável"
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
        searchField: "Campo de pesquisa",
        noMatchesFound: "Não foram encontradas correspondências",
        oneMatchesFound: "Foi encontrada uma correspondência",
        moreMatchesFound: "{num} correspondências encontradas",
        filterFurther: "Mais resultados disponíveis, filtre mais."
    },
    "oj-ojSwitch": {
        SwitchON: "Ativado",
        SwitchOFF: "Desativado"
    },
    "oj-ojCombobox": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "Não foram encontradas correspondências",
        filterFurther: "Mais resultados disponíveis, filtre mais."
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "Não foram encontradas correspondências",
        oneMatchesFound: "Foi encontrada uma correspondência",
        moreMatchesFound: "{num} correspondências encontradas"
    },
    "oj-ojTree": {
        stateLoading: "A carregar...",
        labelNewNode: "Novo Nó",
        labelMultiSelection: "Seleção Múltipla",
        labelEdit: "Editar",
        labelCreate: "Criar",
        labelCut: "Cortar",
        labelCopy: "Copiar",
        labelPaste: "Colar",
        labelPasteAfter: "Colar Depois de",
        labelPasteBefore: "Colar Antes de",
        labelRemove: "Retirar",
        labelRename: "Renomear",
        labelNoData: "Não existem dados"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "Paginação",
        labelAccNavFirstPage: "Primeira Página",
        labelAccNavLastPage: "Última Página",
        labelAccNavNextPage: "Página Seguinte",
        labelAccNavPreviousPage: "Página Anterior",
        labelAccNavPage: "Página",
        labelLoadMore: "Mostrar Mais...",
        labelLoadMoreMaxRows: "Foi Atingido o Limite Máximo de {maxRows} linhas",
        labelNavInputPage: "Página",
        labelNavInputPageMax: "de {pageMax}",
        msgItemRangeCurrent: "{pageFrom}-{pageTo}",
        msgItemRangeCurrentSingle: "{pageFrom}",
        msgItemRangeOf: "de",
        msgItemRangeOfAtLeast: "de pelo menos",
        msgItemRangeOfApprox: "de aproximadamente",
        msgItemRangeItems: "itens",
        tipNavInputPage: "Ir para a Página",
        tipNavPageLink: "Ir para a Página {pageNum}",
        tipNavNextPage: "Seguinte",
        tipNavPreviousPage: "Anterior",
        tipNavFirstPage: "Primeira",
        tipNavLastPage: "Última",
        pageInvalid: {
            summary: "O valor da página introduzido é inválido.",
            detail: "Introduza um valor maior que 0."
        },
        maxPageLinksInvalid: {
            summary: "O valor de maxPageLinks é inválido.",
            detail: "Introduza um valor maior que 4."
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "Cortar",
        labelPasteBefore: "Colar Antes de",
        labelPasteAfter: "Colar Depois de"
    },
    "oj-panel": {
        labelAccButtonExpand: "Expandir",
        labelAccButtonCollapse: "Contrair",
        labelAccButtonRemove: "Retirar"
    },
    "oj-ojChart": {
        labelDefaultGroupName: "Grupo {0}",
        labelSeries: "Série",
        labelGroup: "Grupo",
        labelDate: "Data",
        labelValue: "Valor",
        labelTargetValue: "Destino",
        labelX: "X",
        labelY: "Y",
        labelZ: "Z",
        labelPercentage: "Percentagem",
        labelLow: "Mínimo",
        labelHigh: "Máximo",
        labelOpen: "Abertura",
        labelClose: "Fecho",
        labelVolume: "Volume",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "Mín.",
        labelMax: "Máx.",
        labelOther: "Outros",
        tooltipPan: "Deslocamento",
        tooltipSelect: "Seleção através de retângulo",
        tooltipZoom: "Zoom através de retângulo",
        componentName: "Gráfico"
    },
    "oj-dvtBaseGauge": {
        componentName: "Manómetro"
    },
    "oj-ojDiagram": {
        promotedLink: "{0} ligação",
        promotedLinks: "{0} ligações",
        promotedLinkAriaDesc: "Indireto",
        componentName: "Diagrama"
    },
    "oj-ojGantt": {
        componentName: "Gantt",
        accessibleDurationDays: "{0} dias",
        accessibleDurationHours: "{0} horas",
        accessibleTaskInfo: "A hora de início é {0}, a hora de fim é {1}, a duração é {2}",
        accessibleMilestoneInfo: "A hora é {0}",
        accessibleRowInfo: "Linha {0}",
        accessibleTaskTypeMilestone: "Ponto-chave",
        accessibleTaskTypeSummary: "Resumo",
        accessiblePredecessorInfo: "{0} antecessores",
        accessibleSuccessorInfo: "{0} sucessores",
        accessibleDependencyInfo: "Tipo de dependência {0}, liga {1} a {2}",
        startStartDependencyAriaDesc: "do início ao início",
        startFinishDependencyAriaDesc: "do início ao fim",
        finishStartDependencyAriaDesc: "do fim ao início",
        finishFinishDependencyAriaDesc: "do fim ao fim",
        tooltipZoomIn: "Aproximar",
        tooltipZoomOut: "Afastar",
        labelRow: "Linha",
        labelStart: "Início",
        labelEnd: "Fim",
        labelDate: "Data",
        labelBaselineStart: "Início da Linha de Base",
        labelBaselineEnd: "Fim da Linha de Base",
        labelBaselineDate: "Data da Linha de Base",
        labelLabel: "Etiqueta",
        labelProgress: "Progresso",
        labelMoveBy: "Deslocar por",
        taskMoveInitiated: "Deslocação da tarefa iniciada",
        taskMoveSelectionInfo: "outras {0} seleções",
        taskMoveInitiatedInstruction: "Utilize as teclas de seta para se deslocar",
        taskMoveFinalized: "Deslocação da tarefa finalizada",
        taskMoveCancelled: "Deslocação da tarefa cancelada"
    },
    "oj-ojLegend": {
        componentName: "Legenda"
    },
    "oj-ojNBox": {
        highlightedCount: "{0}/{1}",
        labelOther: "Outros",
        labelGroup: "Grupo",
        labelSize: "Tamanho",
        labelAdditionalData: "Dados Adicionais",
        componentName: "NBox"
    },
    "oj-ojPictoChart": {
        componentName: "Gráfico de Imagens"
    },
    "oj-ojSparkChart": {
        componentName: "Gráfico"
    },
    "oj-ojSunburst": {
        labelColor: "Cor",
        labelSize: "Tamanho",
        tooltipExpand: "Expandir",
        tooltipCollapse: "Contrair",
        componentName: "Formato Radial"
    },
    "oj-ojTagCloud": {
        componentName: "Cloud de Identificadores"
    },
    "oj-ojThematicMap": {
        componentName: "Mapa Temático"
    },
    "oj-ojTimeAxis": {
        componentName: "Eixo Temporal"
    },
    "oj-ojTimeline": {
        componentName: "Linha de Tempo",
        accessibleItemDesc: "A descrição é {0}.",
        accessibleItemEnd: "A hora de fim é {0}.",
        accessibleItemStart: "A hora de início é {0}.",
        accessibleItemTitle: "O título é {0}.",
        labelSeries: "Série",
        tooltipZoomIn: "Aproximar",
        tooltipZoomOut: "Afastar"
    },
    "oj-ojTreemap": {
        labelColor: "Cor",
        labelSize: "Tamanho",
        tooltipIsolate: "Isolar",
        tooltipRestore: "Repor",
        componentName: "Mapa da Árvore"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "K",
        labelScalingSuffixMillion: "M",
        labelScalingSuffixBillion: "Md",
        labelScalingSuffixTrillion: "B",
        labelScalingSuffixQuadrillion: "Q",
        labelInvalidData: "Dados inválidos",
        labelNoData: "Não existem dados para apresentação",
        labelClearSelection: "Limpar Seleção",
        labelDataVisualization: "Visualização de Dados",
        stateSelected: "Selecionado",
        stateUnselected: "Não Selecionado",
        stateMaximized: "Maximizado",
        stateMinimized: "Minimizado",
        stateExpanded: "Expandido",
        stateCollapsed: "Contraído",
        stateIsolated: "Isolado",
        stateHidden: "Oculto",
        stateVisible: "Visível",
        stateDrillable: "Passível de definir o nível de detalhe",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "{0} de {1}"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "Lista de Navegação",
        hierMenuBtnLabel: "Botão de Menu Hierárquico",
        selectedLabel: "selecionado",
        previousIcon: "Anterior",
        msgFetchingData: "A Extrair Dados...",
        msgNoData: "Não existem itens para apresentação.",
        overflowItemLabel: "Mais",
        accessibleReorderTouchInstructionText: "Toque duas vezes e mantenha premido. Aguarde pelo som e, em seguida, arraste para voltar a dispor.",
        accessibleReorderBeforeItem: "Antes de {item}",
        accessibleReorderAfterItem: "Depois de {item}",
        labelCut: "Cortar",
        labelPasteBefore: "Colar Antes de",
        labelPasteAfter: "Colar Depois de",
        labelRemove: "Retirar",
        removeCueText: "Retirável"
    },
    "oj-ojSlider": {
        noValue: "ojSlider não tem nenhum valor",
        maxMin: "O máximo não deve ser menor que ou igual ao mínimo",
        valueRange: "O valor deve estar no intervalo entre o mínimo e o máximo",
        optionNum: "A opção {option} não é um número",
        invalidStep: "Passo inválido; o passo deve ser > 0"
    },
    "oj-ojDialog": {
        labelCloseIcon: "Fecho"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "A entrar na janela sobreposta. Prima F6 para navegar entre a janela sobreposta e o controlo associado.",
        ariaLiveRegionInitialFocusNone: "Janela sobreposta aberta. Prima F6 para navegar entre a janela sobreposta e o controlo associado.",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "A entrar na janela sobreposta. A janela sobreposta pode ser fechada ao navegar para a última ligação dentro da janela sobreposta.",
        ariaLiveRegionInitialFocusNoneTouch: "Janela sobreposta aberta. Navegue para a ligação seguinte para estabelecer o foco dentro da janela sobreposta.",
        ariaFocusSkipLink: "Toque duas vezes para navegar para a janela sobreposta aberta.",
        ariaCloseSkipLink: "Toque duas vezes para fechar a janela sobreposta aberta."
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "Ativar ligação para renovar conteúdo",
        ariaRefreshingLink: "A renovar conteúdo",
        ariaRefreshCompleteLink: "Renovação concluída"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "Mostrar ações iniciais",
        ariaShowEndActionsDescription: "Mostrar ações finais",
        ariaHideActionsDescription: "Ocultar ações"
    },
    "oj-ojIndexer": {
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        indexerOthers: "#",
        ariaDisabledLabel: "Não existe nenhum cabeçalho de grupo correspondente",
        ariaOthersLabel: "número",
        ariaInBetweenText: "Entre {first} e {second}",
        ariaKeyboardInstructionText: "Prima Enter para selecionar o valor.",
        ariaTouchInstructionText: "Toque duas vezes e mantenha o toque para entrar no modo de gestos, em seguida, arraste para cima ou para baixo para ajustar o valor."
    },
    "oj-ojMenu": {
        labelCancel: "Cancelar"
    },
    "oj-ojColorSpectrum": {
        labelHue: "Tonalidade",
        labelOpacity: "Opacidade",
        labelSatLum: "Saturação/Luminosidade",
        labelThumbDesc: "Cursor de deslocação de 4 vias do espectro de cores."
    },
    "oj-ojColorPalette": {
        labelNone: "Nenhum"
    },
    "oj-ojColorPicker": {
        labelSwatches: "Coleções de Cores",
        labelCustomColors: "Cores Customizadas",
        labelPrevColor: "Cor Anterior",
        labelDefColor: "Cor por Omissão",
        labelDelete: "Apagar",
        labelDeleteQ: "Apagar?",
        labelAdd: "Acrescentar",
        labelAddColor: "Acrescentar cor",
        labelMenuHex: "HEX",
        labelMenuRgba: "RGBa",
        labelMenuHsla: "HSLa",
        labelSliderHue: "Tonalidade",
        labelSliderSaturation: "Saturação",
        labelSliderSat: "Sat.",
        labelSliderLightness: "Claridade",
        labelSliderLum: "Luminosidade",
        labelSliderAlpha: "Alfa",
        labelOpacity: "Opacidade",
        labelSliderRed: "Vermelho",
        labelSliderGreen: "Verde",
        labelSliderBlue: "Azul"
    },
    "oj-ojFilePicker": {
        dropzoneText: "Largue os ficheiros aqui ou clique para carregar"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "A Decorrer"
    },
    "oj-ojMessage": {
        labelCloseIcon: "Fecho",
        categories: {
            error: "ERROR",
            warning: "WARNING",
            info: "INFORMATION",
            confirmation: "CONFIRMATION"
        }
    },
    "oj-ojMessages": {
        labelLandmark: "Mensagens",
        ariaLiveRegion: {
            navigationFromKeyboard: "A entrar na região de mensagens. Prima F6 para navegar novamente para o elemento anteriormente focado.",
            navigationToTouch: "A região de mensagens tem mensagens novas. Utilize o rotor do VoiceOver para navegar para o ponto de referência das mensagens.",
            navigationToKeyboard: "A região das mensagens tem mensagens novas. Prima F6 para navegar para a mais recente região de mensagens.",
            newMessage: "Categoria da mensagem {category}. {summary}."
        }
    }
});