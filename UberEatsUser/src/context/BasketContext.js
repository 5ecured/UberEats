import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { BasketDish, Basket } from "../models";

const BasketContext = createContext({

})

const BasketContextProvider = ({ children }) => {
    const addDishToBasket = (dish, quantity) => {
        console.log('add dish', dish, quantity)
    }

    return (
        <BasketContext.Provider value={{ addDishToBasket }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider

export const useBasketContext = () => useContext(BasketContext)