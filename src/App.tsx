import React from "react"
import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom"
import Wallets from "./pages/Wallet/Wallets"
import "./app.scss"
import { createContext } from "react"
import Message from "./components/Message/Message"
import CreateWallet from "./pages/CreateWallet/CreateWallet"
import Categories from "./pages/Category/Categories"
import CreateCategory from "./pages/CreateCategory/CreateCategory"
import CreateTransaction from "./pages/CreateTransaction/CreateTransaction"
import Histories from "./pages/History/Histories"

interface MessageContextType {
    createMessage: (text: string) => void
}

export const MessageContext = createContext<MessageContextType | undefined>(
    undefined
)

function App() {
    const [message, setMessage] = React.useState<string | null>(null)

    const timeoutRef = React.useRef<null | number>(null)

    const createMessage = (text: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)

        setMessage(text)

        timeoutRef.current = setTimeout(() => {
            setMessage(null)
            timeoutRef.current = null
        }, 3000)
    }

    return (
        <div className='h-screen overflow-hidden'>
            <Header />
            <MessageContext.Provider value={{ createMessage: createMessage }}>
                <main className='w-[900px] mx-auto flex align-center'>
                    <Routes>
                        <Route path='/' element={<Wallets />} />
                        <Route
                            path='/createWallet'
                            element={<CreateWallet />}
                        />
                        <Route path='/categories' element={<Categories />} />
                        <Route
                            path='/createCategory'
                            element={<CreateCategory />}
                        />
                         <Route
                            path='/createTransaction'
                            element={<CreateTransaction />}
                        />

                        <Route path='history' element={<Histories />} />
                    </Routes>
                </main>
            </MessageContext.Provider>
            {message && <Message text={message} />}
        </div>
    )
}

export default App
