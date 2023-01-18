import { faker } from "@faker-js/faker"
import { DatabaseItem } from "../types"
import { parseIntoDatabaseItem, stringifyObject } from "./parse"
import { isFoodDeliveryMerchant, isSubscriptionMerchant } from "./is"
import { subscriptionMap } from "../globals"

export const generateAmount = (category: string) => {
    switch (category) {
        case 'Transport':
            return faker.datatype.float({ min: 0.2, max: 2, precision: 2 })
        case 'Salary':
            return faker.datatype.float({ min: 2000, max: 5000, precision: 2 })
        case 'Investment':
            return faker.datatype.float({ min: 100, max: 500, precision: 2 })
        case 'Tech':
            return faker.datatype.float({ min: 100, max: 1000, precision: 2 })
        default:
            return faker.datatype.float({ min: 10, max: 50, precision: 2 })
    }
}

export const generateSubscriptionAmount = (merchant: string) => {
    let amount = 10
    Object.entries(subscriptionMap).forEach(([category, merchants]) => {
        if (merchants.includes(merchant)) {
            switch(category) {
                case 'Entertainment': amount = 20; break
                case 'Utilies': amount = 50; break
                case 'Games': amount = 9.99; break
                case 'Education': amount = 20; break
                case 'Shopping': amount = 14.99; break
                default: amount = 10; break
            }
        }
    })

    return amount
}

export const generateMerchant = (category: string) => {
    switch (category) {
        case 'Transport':
            return faker.helpers.arrayElement(['Grab', 'Gojek', 'Uber', 'SMRT'])
        case 'Food':
            return faker.helpers.arrayElement(['McDonalds', 'KFC', 'Pizza Hut', 'Subway', 'Starbucks', 'Kazan Ramen', 'YakiNiku Go!', 'NTUC'])
        case 'Shopping':
            return faker.helpers.arrayElement(['Amazon', 'Zalora', 'Shopee', 'Taobao', 'Qoo10'])
        case 'Entertainment':
            return faker.helpers.arrayElement(['Netflix', 'Spotify', 'Disney+', 'HBO'])
        case 'Utilities':
            return faker.helpers.arrayElement(['Singtel', 'ViewQwest'])
        case 'Health':
            return faker.helpers.arrayElement(['Guardian', 'Watsons', 'Unity'])
        case 'Education':
            return faker.helpers.arrayElement(['Coursera', 'Skillshare'])
        case 'Tech':
            return faker.helpers.arrayElement(['Samsung', 'Google', 'Microsoft'])
        case 'Games':
            return faker.helpers.arrayElement(['Steam', 'Origin'])
        default:
            return ''
    }
}

export const generateExpenseTags = (merchant: string) => {
    const tags = []
    if (isSubscriptionMerchant(merchant)) tags.push('Subscription')
    if (isFoodDeliveryMerchant(merchant) && faker.datatype.boolean()) tags.push('Delivery')
    if (merchant === 'Discord') tags.push('Nitro')
    if (merchant === 'Amazon Prime') tags.push('Prime')

    return `${tags.join('|')}`
}

export const generateStringifiedData = (generator: (...args: any[]) => DatabaseItem, ...args: any[]) => {
    const dbItem = parseIntoDatabaseItem(generator(...args))
    const stringifiedObject = stringifyObject(dbItem)
    return `${stringifiedObject}\n`
}