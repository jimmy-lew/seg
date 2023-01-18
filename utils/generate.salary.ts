import { faker } from "@faker-js/faker"
import { generateAmount } from "./generate"
import { IncomeItem } from "../types"

export const generateSalaryItem = (date: Date) => {
    const time = date.toLocaleTimeString('en-SG')
    const type = 'Income'
    const category = 'Salary'
    const [item , card, tags] = ['', '', '']
    const amount = generateAmount(category)
    const currency = 'SGD'
    const bank = 'DBS'
    const paymentMethod = 'Bank Transfer'
    const accountNumber = '123-456-7890'
    const sender = 'Nullspace'
    const remarks = faker.lorem.sentence()

    const salaryItem: IncomeItem = {
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
        sender,
        remarks
    }

    return salaryItem
}