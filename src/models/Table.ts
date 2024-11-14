export type HeadersTable = {
    field: string
    text: string
    class?: string
    sortable: boolean
    iconInfo: boolean
    fieldType: FieldType,
}

export type FieldType = 'text' | 'link' | 'date' | 'button-state' | 'actions' | 'dolar' | 'checkbox'


export type FieldTable<T, O> = {
    element: T
    actions?: actionsTable<O>
}

export type actionsTable<T> = {
    visibility: boolean
    enable: boolean
    options: OptionsTable<T>[]    
}

export type OptionsTable<T> = {
    type: T
    text: string
    iconClass: string
}

export type OptionsActions<T,O> = {
    detail:FieldTable<T,O> 
    type: O
}