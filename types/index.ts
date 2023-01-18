export type ExpenseItem = Omit<DatabaseItem, 'sender'>
export type IncomeItem = Omit<DatabaseItem, 'merchant' | 'recipient' | 'serialNumber' | 'warranty'> 

export interface DatabaseItem {
    date: string,
    time: string,
    type: string,
    category: string,
    item?: string
    amount: number,
    currency: string,
    card: string,
    accountNumber: string,
    bank: string,
    paymentMethod: string,
    tags?: string | string[],
    merchant?: string,
    sender?: string,
    recipient?: string,
    remarks?: string,
    serialNumber?: string,
    warranty?: string
}