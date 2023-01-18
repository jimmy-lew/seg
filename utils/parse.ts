import { DatabaseItem } from "../types"

export const parseIntoDatabaseItem = (item: DatabaseItem) => {
    const parsedItem: DatabaseItem = {
        date: item.date,
        time: item.time,
        type: item.type,
        category: item.category,
        item: item.item,
        amount: item.amount,
        currency: item.currency,
        bank: item.bank,
        card: item.card,
        accountNumber: item.accountNumber,
        paymentMethod: item.paymentMethod,
        tags: item.tags,
        merchant: item.merchant ?? '',
        sender: item.sender ?? '',
        recipient: item.recipient ?? '',
        remarks: item.remarks,
        serialNumber: item.serialNumber ?? '',
        warranty: item.warranty ?? ''
    }

    return parsedItem
}

export const stringifyObject = (obj: Object) => {
    const values = Object.values(obj)
    const stringifiedValues = values.map(value => {
        if (typeof value === 'object') return stringifyObject(value)
        if (typeof value === 'string') return `"${value}"`
        return value
    })
    return stringifiedValues.join(',')
}