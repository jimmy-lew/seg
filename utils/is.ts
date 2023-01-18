import { foodDeliveryMerchants, materialCategories, subscriptionMerchants } from "../globals"

export const isTransfer = (category: string) => {
    return category === 'Transfer'
}

export const isPurchasable = (category: string) => {
    return materialCategories.includes(category)
}

export const isInvestment = (category: string) => {
    return category === 'Investment'
}

const isCreditOrDebit = (paymentMethod: string) => {
    return paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card'
}

const isDebit = (paymentMethod: string) => {
    return paymentMethod === 'Debit Card'
}

export const handleCreditOrDebit = (paymentMethod: string, onCredit: string, onDebit: string) => {
    if (!isCreditOrDebit(paymentMethod)) return ''
    return isDebit(paymentMethod) ? onDebit : onCredit
}

export const isSubscriptionMerchant = (merchant: string) => {
    return subscriptionMerchants.includes(merchant)
}

export const isFoodDeliveryMerchant = (merchant: string) => {
    return foodDeliveryMerchants.includes(merchant)
}