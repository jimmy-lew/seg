import { faker } from "@faker-js/faker"
import { ExpenseItem } from "../types"
import { generateExpenseTags, generateSubscriptionAmount } from "./generate"

export const generateSubscriptionItem = (date: Date, merchant: string, category: string) => {
    const time = date.toLocaleTimeString('en-SG')
    const type = 'Expense'
    const amount = generateSubscriptionAmount(merchant)
    const paymentMethod = 'PayNow'
    const currency = 'SGD'
    const bank = 'DBS'
    const tags = generateExpenseTags(merchant)
    const remarks = faker.lorem.sentence()
    const [item, card, accountNumber, recipient, serialNumber, warranty] = ['', '', '', '', '', '']

    const expenseItem: ExpenseItem = {
        date: date.toLocaleDateString('en-SG'),
        time,
        type,
        category,
        item,
        amount,
        currency,
        bank,
        card,
        accountNumber,
        paymentMethod,
        tags,
        merchant,
        recipient,
        remarks,
        serialNumber,
        warranty
    }

    return expenseItem
}