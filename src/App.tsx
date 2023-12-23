import { useState } from "react"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Wallets from "./pages/Wallets"
import History from "./pages/History"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Wallets />}/>
                <Route path='history' element={<History />} />
            </Routes>
        </>
    )
}

export default App
