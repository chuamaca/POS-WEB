export interface Category {

    categoryId: string
    name: string
    description: string
    auditCreateDate: Date
    state: Number
    stateCategory: string

}

export interface CategoryApi {
    data: any
    totalRecords: number
}