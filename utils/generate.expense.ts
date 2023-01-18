import { faker } from '@faker-js/faker'
import { allExpenseCategories, transferPaymentMethods, allPaymentMethods, friends, warrantyDays } from '../globals'
import { ExpenseItem } from '../types'
import { generateAmount, generateExpenseTags, generateMerchant } from './generate'
import { handleCreditOrDebit, isPurchasable, isSubscriptionMerchant, isTransfer } from './is'

export const generateExpenseItem = () => {
    const date = faker.date.between('2022-11-01', '2023-01-01')
    const time = date.toLocaleTimeString('en-SG')
    const type = 'Expense'
    const category = faker.helpers.arrayElement(allExpenseCategories)
    const item = isPurchasable(category) ? 'Product Name' : ''
    const amount = generateAmount(category)
    const paymentMethod = faker.helpers.arrayElement(isTransfer(category) ? transferPaymentMethods : allPaymentMethods)
    const currency = 'SGD'
    const card = handleCreditOrDebit(paymentMethod, '1390', '6940')
    const accountNumber = handleCreditOrDebit(paymentMethod, '098-765-4321', '123-456-7890')
    const bank = faker.helpers.arrayElement(['DBS', 'OCBC'])
    const merchant = isTransfer(category) ? '' : generateMerchant(category)
    const tags = generateExpenseTags(merchant)
    const recipient = isTransfer(category) ? faker.helpers.arrayElement(friends) : ''
    const remarks = faker.lorem.sentence()
    const serialNumber = (isPurchasable(category) && faker.datatype.boolean()) ? faker.random.alphaNumeric(12) : ''
    const warranty = (isPurchasable(category) && faker.datatype.boolean()) ? faker.helpers.arrayElement(warrantyDays) : ''

    if (isSubscriptionMerchant(merchant)) return generateExpenseItem()

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