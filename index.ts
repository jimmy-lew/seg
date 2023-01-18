import * as fs from 'fs/promises'
import { generateExpenseItem, generateIncomeItem, generateSalaryItem, generateStringifiedData, generateSubscriptionItem } from './utils'
import { headers, subscriptionMap } from './globals'

const main = async () => {
    let data = `${headers}`

    for (let i = 0; i < 180; i++) data += generateStringifiedData(generateExpenseItem)
    for (let i = 0; i < 50; i++) data += generateStringifiedData(generateIncomeItem)

    const startDate = new Date('2022-10-01')

    for (let i = 0; i < 3; i++) {
        const newDate = new Date(startDate.setMonth(startDate.getMonth() + 1))
        data += generateStringifiedData(generateSalaryItem, newDate)
        Object.entries(subscriptionMap).forEach(([category, merchants]) => {
            merchants.forEach(merchant => {
                data += generateStringifiedData(generateSubscriptionItem, newDate, merchant, category)
            })
        })            
    }

    await fs.writeFile('data.csv', data)
}

main()