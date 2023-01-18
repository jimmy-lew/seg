import { faker } from "@faker-js/faker"
import { transferPaymentMethods, friends } from "../globals"
import { isInvestment } from "./is"
import { generateAmount } from "./generate"
import { IncomeItem } from "../types"

export const generateIncomeItem = () => {
    const date = faker.date.between('2022-11-01', '2023-01-01')
    const time = date.toLocaleTimeString('en-SG')
    const type = 'Income'
    const category = faker.helpers.arrayElement(['Investment', 'Transfer', 'Transfer', 'Transfer'])
    const [item , card, accountNumber, tags] = ['', '', '', '']
    const amount = generateAmount(category)
    const currency = isInvestment(category) ? 'USD' : 'SGD'
    const bank = faker.helpers.arrayElement(['DBS', 'OCBC'])
    const paymentMethod = isInvestment(category) ? 'PayPal' : faker.helpers.arrayElement(transferPaymentMethods)
    const sender = isInvestment(category) ? 'FTX' : faker.helpers.arrayElement(friends)
    const remarks = faker.lorem.sentence()

    const incomeItem: IncomeItem = {
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

    return incomeItem
}