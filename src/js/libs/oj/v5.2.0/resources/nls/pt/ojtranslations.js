define({
    "oj-message": {
        fatal: "Fatal",
        error: "Erro",
        warning: "Advertência",
        info: "Informações",
        confirmation: "Confirmação",
        "compact-type-summary": "{0}: {1}"
    },
    "oj-converter": {
        summary: "O valor não está no formato esperado.",
        detail: "Informe um valor no formato esperado.",
        "plural-separator": ", ",
        hint: {
            summary: "Exemplo: {exampleValue}",
            detail: "Informe um valor no mesmo formato, conforme este exemplo: '{exampleValue}'.",
            "detail-plural": "Informe um valor no mesmo formato, conforme estes exemplos: '{exampleValue}'."
        },
        optionHint: {
            detail: "Um valor aceito para a opção '{propertyName}' é '{propertyValueValid}'.",
            "detail-plural": "Os valores aceitos para a opção '{propertyName}' são '{propertyValueValid}'."
        },
        optionTypesMismatch: {
            summary: "Um valor para a opção '{requiredPropertyName}' é obrigatório quando a opção '{propertyName}' está definida como '{propertyValue}'."
        },
        optionTypeInvalid: {
            summary: "Um valor do tipo esperado não foi fornecido para a opção '{propertyName}'."
        },
        optionOutOfRange: {
            summary: "O valor {propertyValue} está fora da faixa da opção '{propertyName}'."
        },
        optionValueInvalid: {
            summary: "Um valor inválido '{propertyValue}' foi especificado para a opção '{propertyName}'."
        },
        number: {
            decimalFormatMismatch: {
                summary: "'{value}' não está no formato numérico esperado."
            },
            shortLongUnsupportedParse: {
                summary: "'short' e 'long' não são suportados para parsing do conversor.",
                detail: "Altere o componente para readonly. Os campos readonly não chamam a função de parsing do conversor."
            },
            currencyFormatMismatch: {
                summary: "'{value}' não está no formato de moeda esperado."
            },
            percentFormatMismatch: {
                summary: "'{value}' não está no formato de percentual esperado."
            }
        },
        datetime: {
            datetimeOutOfRange: {
                summary: "O valor '{value}' está fora da faixa de '{propertyName}'.",
                detail: "Informe um valor entre '{minValue}' e '{maxValue}'.",
                hour: "hora",
                minute: "minuto",
                second: "segundo",
                millisec: "milisseg.",
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
                summary: "Id de fuso horário inválido {timeZoneID} fornecido"
            },
            nonExistingTime: {
                summary: "O horário de entrada não existe porque ele se situa na transição para o horário de verão."
            },
            missingTimeZoneData: {
                summary: "Faltam dados de TimeZone. Chame o 'ojs/ojtimezonedata' necessário para carregar os dados de TimeZone."
            },
            timeFormatMismatch: {
                summary: "'{value}' não está no formato de hora esperado."
            },
            datetimeFormatMismatch: {
                summary: "'{value}' não está no formato de data e hora esperado."
            },
            dateToWeekdayMismatch: {
                summary: "O dia '{date}' não é um '{weekday}'.",
                detail: "Informe um dia útil que corresponda à data."
            },
            invalidISOString: {
                summary: "A string '{isoStr}' fornecida não é uma string ISO 8601 válida.",
                detail: "Forneça uma string ISO 8601 válida."
            }
        }
    },
    "oj-validator": {
        length: {
            hint: {
                min: "Informe {min} ou mais caracteres.",
                max: "Informe {max}caracteres ou menos.",
                inRange: "Informe {min} ou mais caracteres; no máximo {max}.",
                exact: "Informe {length} caracteres."
            },
            messageDetail: {
                tooShort: "Informe {min} ou mais caracteres, não menos.",
                tooLong: "Informe {max} ou menos caracteres, não mais."
            },
            messageSummary: {
                tooShort: "Há poucos caracteres.",
                tooLong: "Há muitos caracteres."
            }
        },
        range: {
            number: {
                hint: {
                    min: "Informe um número maior ou igual a {min}.",
                    max: "Informe um número menor ou igual a {max}.",
                    inRange: "Informe um número entre {min} e {max}.",
                    exact: "Digite o número {num}."
                },
                messageDetail: {
                    rangeUnderflow: "O número deve ser maior do que ou igual a {min}.",
                    rangeOverflow: "O número deve ser menor que ou igual a {max}.",
                    exact: "O número deve ser {num}."
                },
                messageSummary: {
                    rangeUnderflow: "O número é muito baixo.",
                    rangeOverflow: "O número é muito alto."
                }
            },
            datetime: {
                hint: {
                    min: "Informe uma data e uma hora iguais ou posteriores a {min}.",
                    max: "Informe uma data e uma hora iguais ou anteriores a {max}.",
                    inRange: "Informe uma data e uma hora entre {min} e {max}."
                },
                messageDetail: {
                    rangeUnderflow: "Data e hora devem ser iguais ou posteriores a {min}.",
                    rangeOverflow: "Data e hora devem ser iguais ou anteriores a {max}."
                },
                messageSummary: {
                    rangeUnderflow: "A data e a hora são anteriores à data e a hora mínimas.",
                    rangeOverflow: "A data e a hora são posteriores à data e a hora máximas."
                }
            },
            date: {
                hint: {
                    min: "Informe uma data posterior ou igual a {min}.",
                    max: "Informe uma data anterior ou igual a {max}.",
                    inRange: "Informe uma data entre {min} e {max}."
                },
                messageDetail: {
                    rangeUnderflow: "A data deve ser posterior ou igual a {min}.",
                    rangeOverflow: "A data deve ser anterior ou igual a {max}."
                },
                messageSummary: {
                    rangeUnderflow: "A data é anterior à data mínima.",
                    rangeOverflow: "A data e é posterior à data máxima."
                }
            },
            time: {
                hint: {
                    min: "Informe uma hora posterior ou igual a {min}.",
                    max: "Informe uma hora anterior ou igual a {max}.",
                    inRange: "Informe uma hora entre {min} e {max}."
                },
                messageDetail: {
                    rangeUnderflow: "A hora deve ser posterior ou igual a {min}.",
                    rangeOverflow: "A hora deve ser anterior ou igual a {max}."
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
            detail: "O valor '{value}' deve corresponder a este padrão: '{pattern}'."
        },
        required: {
            summary: "O valor é obrigatório.",
            detail: "Você deverá informar um valor."
        }
    },
    "oj-ojInputDate": {
        done: "Concluído",
        cancel: "Cancelar",
        prevText: "Ant.",
        nextText: "Próximo",
        currentText: "Hoje",
        weekHeader: "Sem.",
        tooltipCalendar: "Selecionar Data.",
        tooltipCalendarTime: "Selecionar Data/Hora.",
        tooltipCalendarDisabled: "Seleção de Data Desativada.",
        tooltipCalendarTimeDisabled: "Seleção de Data/Hora Desativada.",
        picker: "Seletor",
        weekText: "Semana",
        datePicker: "Seletor de Data",
        inputHelp: "Pressione Seta para baixo ou Seta para cima para acessar o Calendário.",
        inputHelpBoth: "Pressione Seta para baixo ou Seta para cima para acessar o Calendário e Shift + Seta para baixo ou Shift + Seta para cima para acessar a lista drop-down de horários.",
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
        ampmWheelLabel: "AMPM",
        tooltipTime: "Selecionar Horário.",
        tooltipTimeDisabled: "Seleção de Hora Desativada.",
        inputHelp: "Pressione Seta para baixo ou Seta para cima para acessar a lista drop-down de horários.",
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
            messageDetail: "O valor deve corresponder a este padrão: '{pattern}'."
        }
    },
    "oj-ojFilmStrip": {
        labelAccFilmStrip: "Exibindo página {pageIndex} de {pageCount}",
        labelAccArrowNextPage: "Selecione Próximo para exibir a próxima página",
        labelAccArrowPreviousPage: "Selecione Anterior para exibir a página anterior",
        tipArrowNextPage: "Próximo",
        tipArrowPreviousPage: "Anterior"
    },
    "oj-ojDataGrid": {
        accessibleSortAscending: "{id} classificado(a) em ordem crescente",
        accessibleSortDescending: "{id} classificado em ordem decrescente",
        accessibleActionableMode: "Informe o modo acionável.",
        accessibleNavigationMode: "Entre no modo de navegação; pressione F2 para entrar no modo de edição ou no modo acionável.",
        accessibleEditableMode: "Entre no modo editável; pressione Escape para navegar para fora da grade de dados.",
        accessibleSummaryExact: "Esta é uma grade de dados com {rownum} linhas e {colnum} colunas",
        accessibleSummaryEstimate: "Esta é uma grade de dados com um número desconhecido de linhas e colunas",
        accessibleSummaryExpanded: "Atualmente há {num} linhas expandidas",
        accessibleRowExpanded: "Linha expandida",
        accessibleRowCollapsed: "Linha contraída",
        accessibleRowSelected: "Linha {row} selecionada",
        accessibleColumnSelected: "Coluna {column} selecionada",
        accessibleStateSelected: "selecionado",
        accessibleMultiCellSelected: "{num} células selecionadas",
        accessibleColumnSpanContext: "{extent} de largura",
        accessibleRowSpanContext: "{extent} de altura",
        accessibleRowContext: "Linha {index}",
        accessibleColumnContext: "Coluna {index}",
        accessibleRowHeaderContext: "Cabeçalho de Linha {index}",
        accessibleColumnHeaderContext: "Cabeçalho de Coluna {index}",
        accessibleRowEndHeaderContext: "Cabeçalho de Fim de Linha {index}",
        accessibleColumnEndHeaderContext: "Cabeçalho de Fim de Coluna {index}",
        accessibleLevelContext: "Nível {level}",
        accessibleRangeSelectModeOn: "Modo de adição de faixa de células selecionada ativo.",
        accessibleRangeSelectModeOff: "Modo de adição de faixa de células selecionada inativo.",
        accessibleFirstRow: "Você atingiu a primeira linha.",
        accessibleLastRow: "Você atingiu a última linha.",
        accessibleFirstColumn: "Você atingiu a primeira coluna",
        accessibleLastColumn: "Você atingiu a última coluna.",
        accessibleSelectionAffordanceTop: "Handle de seleção superior.",
        accessibleSelectionAffordanceBottom: "Handle de seleção inferior.",
        msgFetchingData: "Extraindo Dados...",
        msgNoData: "Não há itens para exibição.",
        labelResize: "Redimensionar",
        labelResizeWidth: "Redimensionar Largura",
        labelResizeHeight: "Redimensionar Altura",
        labelSortRow: "Classificar Linha",
        labelSortRowAsc: "Classificar Linha em Ordem Crescente",
        labelSortRowDsc: "Classificar Linha em Ordem Decrescente",
        labelSortCol: "Classificar Coluna",
        labelSortColAsc: "Classificar Coluna em Ordem Crescente",
        labelSortColDsc: "Classificar Coluna em Ordem Decrescente",
        labelCut: "Recortar",
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
        msgFetchingData: "Extraindo Dados...",
        msgNoData: "Não há itens para exibição.",
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        accessibleReorderTouchInstructionText: "Toque duas vezes e mantenha. Aguarde o sinal sonoro e depois arraste para reorganizar.",
        accessibleReorderBeforeItem: "Antes {item}",
        accessibleReorderAfterItem: "Após {item}",
        accessibleReorderInsideItem: "Em {item}",
        accessibleNavigateSkipItems: "Ignorando {numSkip} itens",
        labelCut: "Recortar",
        labelCopy: "Copiar",
        labelPaste: "Colar",
        labelPasteBefore: "Colar Antes",
        labelPasteAfter: "Colar Depois"
    },
    "oj-_ojLabel": {
        tooltipHelp: "Ajuda",
        tooltipRequired: "Obrigatório"
    },
    "oj-ojLabel": {
        tooltipHelp: "Ajuda",
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
        tooltipDecrement: "Reduzir",
        tooltipIncrement: "Incrementar"
    },
    "oj-ojTable": {
        labelAccSelectionAffordanceTop: "Handle de seleção superior",
        labelAccSelectionAffordanceBottom: "Handle de seleção inferior",
        labelEnableNonContiguousSelection: "Ativar Seleção Não Contígua",
        labelDisableNonContiguousSelection: "Desativar Seleção Não Contígua",
        labelResize: "Redimensionar",
        labelResizePopupSubmit: "OK",
        labelResizePopupSpinner: "Redimensionar Coluna",
        labelSelectRow: "Selecionar Linha",
        labelEditRow: "Editar Linha",
        labelSelectAndEditRow: "Selecionar e Editar Linha",
        labelSelectColumn: "Selecionar Coluna",
        labelSort: "Classificar",
        labelSortAsc: "Classificar por Ordem Crescente",
        labelSortDsc: "Classificar por Ordem Decrescente",
        msgFetchingData: "Extraindo Dados...",
        msgNoData: "Nenhum dado a ser exibido.",
        msgInitializing: "Inicializando...",
        msgColumnResizeWidthValidation: "O valor da largura deve ser um número inteiro.",
        msgScrollPolicyMaxCountSummary: "O número máximo de linhas para rolagem da tabela foi excedido.",
        msgScrollPolicyMaxCountDetail: "Recarregue com um conjunto de dados menor.",
        msgStatusSortAscending: "{0} classificado(a) em ordem crescente.",
        msgStatusSortDescending: "{0} classificado em ordem decrescente."
    },
    "oj-ojTabs": {
        labelCut: "Recortar",
        labelPasteBefore: "Colar Antes",
        labelPasteAfter: "Colar Depois",
        labelRemove: "Remover",
        labelReorder: "Reordenar",
        removeCueText: "Removível"
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
        searchField: "Pesquisar campo",
        noMatchesFound: "Nenhuma correspondência encontrada",
        oneMatchesFound: "Uma correspondência encontrada",
        moreMatchesFound: "{num} correspondências encontradas",
        filterFurther: "Mais resultados disponíveis. Filtre mais detalhadamente."
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
        noMatchesFound: "Nenhuma correspondência encontrada",
        filterFurther: "Mais resultados disponíveis. Filtre mais detalhadamente."
    },
    "oj-ojInputSearch": {
        required: {
            hint: "",
            messageSummary: "",
            messageDetail: ""
        },
        noMatchesFound: "Nenhuma correspondência encontrada",
        oneMatchesFound: "Uma correspondência encontrada",
        moreMatchesFound: "{num} correspondências encontradas"
    },
    "oj-ojTree": {
        stateLoading: "Carregando...",
        labelNewNode: "Novo Nó",
        labelMultiSelection: "Seleção Múltipla",
        labelEdit: "Editar",
        labelCreate: "Criar",
        labelCut: "Recortar",
        labelCopy: "Copiar",
        labelPaste: "Colar",
        labelPasteAfter: "Colar Depois",
        labelPasteBefore: "Colar Antes",
        labelRemove: "Remover",
        labelRename: "Renomear",
        labelNoData: "Não há dados"
    },
    "oj-ojPagingControl": {
        labelAccPaging: "Paginação",
        labelAccNavFirstPage: "Primeira Página",
        labelAccNavLastPage: "Última Página",
        labelAccNavNextPage: "Próxima Página",
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
        msgItemRangeOfApprox: "de aprox.",
        msgItemRangeItems: "itens",
        tipNavInputPage: "Ir para Página",
        tipNavPageLink: "Ir para a Página {pageNum}",
        tipNavNextPage: "Próximo",
        tipNavPreviousPage: "Anterior",
        tipNavFirstPage: "Primeiro",
        tipNavLastPage: "Último",
        pageInvalid: {
            summary: "O valor informado da página é inválido.",
            detail: "Informe um valor maior que 0."
        },
        maxPageLinksInvalid: {
            summary: "O valor de maxPageLinks é inválido.",
            detail: "Informe um valor maior que 4."
        }
    },
    "oj-ojMasonryLayout": {
        labelCut: "Recortar",
        labelPasteBefore: "Colar Antes",
        labelPasteAfter: "Colar Depois"
    },
    "oj-panel": {
        labelAccButtonExpand: "Expandir",
        labelAccButtonCollapse: "Contrair",
        labelAccButtonRemove: "Remover"
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
        labelPercentage: "Porcentagem",
        labelLow: "Baixa",
        labelHigh: "Alta",
        labelOpen: "Abrir",
        labelClose: "Fechar",
        labelVolume: "Volume",
        labelQ1: "Q1",
        labelQ2: "Q2",
        labelQ3: "Q3",
        labelMin: "Mín.",
        labelMax: "Máx.",
        labelOther: "Outros",
        tooltipPan: "Panorâmico",
        tooltipSelect: "Marcação se seleção",
        tooltipZoom: "Marcação de zoom",
        componentName: "Gráfico"
    },
    "oj-dvtBaseGauge": {
        componentName: "Gauge"
    },
    "oj-ojDiagram": {
        promotedLink: "{0} link",
        promotedLinks: "{0} links",
        promotedLinkAriaDesc: "Indireto",
        componentName: "Diagrama"
    },
    "oj-ojGantt": {
        componentName: "Gantt",
        accessibleDurationDays: "{0} dias",
        accessibleDurationHours: "{0} horas",
        accessibleTaskInfo: "O horário de início é {0}, o horário de término é {1}, a duração é {2}",
        accessibleMilestoneInfo: "O horário é {0}",
        accessibleRowInfo: "Linha {0}",
        accessibleTaskTypeMilestone: "Marco",
        accessibleTaskTypeSummary: "Resumo",
        accessiblePredecessorInfo: "{0} predecessores",
        accessibleSuccessorInfo: "{0} sucessores",
        accessibleDependencyInfo: "Tipo de dependência {0}, conecta {1} a {2}",
        startStartDependencyAriaDesc: "início a início",
        startFinishDependencyAriaDesc: "início ao fim",
        finishStartDependencyAriaDesc: "fim ao início",
        finishFinishDependencyAriaDesc: "fim ao fim",
        tooltipZoomIn: "Mais Zoom",
        tooltipZoomOut: "Menos Zoom",
        labelRow: "Linha",
        labelStart: "Início",
        labelEnd: "Fim",
        labelDate: "Data",
        labelBaselineStart: "Início da Linha de Base",
        labelBaselineEnd: "Fim da Linha de Base",
        labelBaselineDate: "Data da Linha de Base",
        labelLabel: "Label",
        labelProgress: "Andamento",
        labelMoveBy: "Mover por",
        taskMoveInitiated: "Movimentação da tarefa iniciada",
        taskMoveSelectionInfo: "{0} outros itens selecionados",
        taskMoveInitiatedInstruction: "Use as teclas de seta para mover",
        taskMoveFinalized: "Movimentação de tarefa finalizada",
        taskMoveCancelled: "Movimentação de tarefa cancelada"
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
        componentName: "Imagem de Gráfico"
    },
    "oj-ojSparkChart": {
        componentName: "Gráfico"
    },
    "oj-ojSunburst": {
        labelColor: "Cor",
        labelSize: "Tamanho",
        tooltipExpand: "Expandir",
        tooltipCollapse: "Contrair",
        componentName: "Sunburst"
    },
    "oj-ojTagCloud": {
        componentName: "Nuvem de Tags"
    },
    "oj-ojThematicMap": {
        componentName: "Mapa Temático"
    },
    "oj-ojTimeAxis": {
        componentName: "Eixo de Tempo"
    },
    "oj-ojTimeline": {
        componentName: "Linha do Tempo",
        accessibleItemDesc: "A descrição é {0}.",
        accessibleItemEnd: "O horário de término é {0}.",
        accessibleItemStart: "O horário de início é {0}.",
        accessibleItemTitle: "O título é {0}.",
        labelSeries: "Série",
        tooltipZoomIn: "Mais Zoom",
        tooltipZoomOut: "Menos Zoom"
    },
    "oj-ojTreemap": {
        labelColor: "Cor",
        labelSize: "Tamanho",
        tooltipIsolate: "Isolar",
        tooltipRestore: "Restaurar",
        componentName: "Mapa em Árvore"
    },
    "oj-dvtBaseComponent": {
        labelScalingSuffixThousand: "K",
        labelScalingSuffixMillion: "M",
        labelScalingSuffixBillion: "B",
        labelScalingSuffixTrillion: "T",
        labelScalingSuffixQuadrillion: "Q",
        labelInvalidData: "Dados inválidos",
        labelNoData: "Nenhum dado a ser exibido",
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
        stateDrillable: "Pode ter drill",
        labelAndValue: "{0}: {1}",
        labelCountWithTotal: "{0} de {1}"
    },
    "oj-ojNavigationList": {
        defaultRootLabel: "Lista de Navegação",
        hierMenuBtnLabel: "Botão Menu Hierárquico",
        selectedLabel: "selecionado",
        previousIcon: "Anterior",
        msgFetchingData: "Extraindo Dados...",
        msgNoData: "Não há itens para exibição.",
        overflowItemLabel: "Mais",
        accessibleReorderTouchInstructionText: "Toque duas vezes e mantenha. Aguarde o sinal sonoro e depois arraste para reorganizar.",
        accessibleReorderBeforeItem: "Antes {item}",
        accessibleReorderAfterItem: "Após {item}",
        labelCut: "Recortar",
        labelPasteBefore: "Colar Antes",
        labelPasteAfter: "Colar Depois",
        labelRemove: "Remover",
        removeCueText: "Removível"
    },
    "oj-ojSlider": {
        noValue: "ojSlider não tem valor",
        maxMin: "O valor máximo não deve ser menor que ou igual ao mínimo",
        valueRange: "O valor deve estar dentro da faixa de mín. e máx.",
        optionNum: "A opção {option} não é um número",
        invalidStep: "Etapa inválida; deve ser > 0"
    },
    "oj-ojDialog": {
        labelCloseIcon: "Fechar"
    },
    "oj-ojPopup": {
        ariaLiveRegionInitialFocusFirstFocusable: "Inserindo pop-up. Pressione F6 para navegar entre o pop-up e o controle associado.",
        ariaLiveRegionInitialFocusNone: "Pop-up aberto. Pressione F6 para navegar entre o pop-up e o controle associado.",
        ariaLiveRegionInitialFocusFirstFocusableTouch: "Inserindo pop-up. O pop-up pode ser fechado navegando até o último link dentro do pop-up.",
        ariaLiveRegionInitialFocusNoneTouch: "Pop-up aberto. Navegue até o próximo link para estabelecer o foco dentro do pop-up.",
        ariaFocusSkipLink: "Toque 2 vezes para navegar até o pop-up aberto.",
        ariaCloseSkipLink: "Toque 2 vezes para fechar o pop-up aberto."
    },
    "oj-pullToRefresh": {
        ariaRefreshLink: "Ativar link para atualizar o conteúdo",
        ariaRefreshingLink: "Atualizando o conteúdo",
        ariaRefreshCompleteLink: "Atualização concluída"
    },
    "oj-ojSwipeActions": {
        ariaShowStartActionsDescription: "Mostrar ações iniciais",
        ariaShowEndActionsDescription: "Mostrar ações finais",
        ariaHideActionsDescription: "Ocultar ações"
    },
    "oj-ojIndexer": {
        indexerCharacters: "A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",
        indexerOthers: "#",
        ariaDisabledLabel: "Nenhum cabeçalho de grupo correspondente",
        ariaOthersLabel: "número",
        ariaInBetweenText: "Entre {first} e {second}",
        ariaKeyboardInstructionText: "Pressione enter para selecionar um valor.",
        ariaTouchInstructionText: "Toque duas vezes e mantenha para entrar no modo de gestos. Em seguida, arraste para cima ou para baixo para ajustar o valor."
    },
    "oj-ojMenu": {
        labelCancel: "Cancelar"
    },
    "oj-ojColorSpectrum": {
        labelHue: "Matiz",
        labelOpacity: "Opacidade",
        labelSatLum: "Saturação/Luminosidade",
        labelThumbDesc: "Controle deslizante com quatro direções para espectro de cores."
    },
    "oj-ojColorPalette": {
        labelNone: "Nenhum"
    },
    "oj-ojColorPicker": {
        labelSwatches: "Amostras",
        labelCustomColors: "Cores Personalizadas",
        labelPrevColor: "Cor Anterior",
        labelDefColor: "Cor Padrão",
        labelDelete: "Excluir",
        labelDeleteQ: "Excluir?",
        labelAdd: "Adicionar",
        labelAddColor: "Adicionar cor",
        labelMenuHex: "HEX",
        labelMenuRgba: "RGBa",
        labelMenuHsla: "HSLa",
        labelSliderHue: "Matiz",
        labelSliderSaturation: "Saturação",
        labelSliderSat: "Sat",
        labelSliderLightness: "Clareza",
        labelSliderLum: "Luminosidade",
        labelSliderAlpha: "Alfa",
        labelOpacity: "Opacidade",
        labelSliderRed: "Vermelho",
        labelSliderGreen: "Verde",
        labelSliderBlue: "Azul"
    },
    "oj-ojFilePicker": {
        dropzoneText: "Solte os arquivos aqui ou clique para fazer upload"
    },
    "oj-ojProgressbar": {
        ariaIndeterminateProgressText: "Em Andamento"
    },
    "oj-ojMessage": {
        labelCloseIcon: "Fechar",
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
            navigationFromKeyboard: "Entrando na área de mensagens. Pressione F6 para navegar de volta ao elemento focado anteriormente.",
            navigationToTouch: "A área de mensagens tem novas mensagens. Use o rotor do voice-over para navegar até o ponto de referência das mensagens.",
            navigationToKeyboard: "A área de mensagens tem novas mensagens. Pressione F6 para navegar até a área de mensagens mais recentes.",
            newMessage: "Categoria de mensagem {category}. {summary}."
        }
    }
});