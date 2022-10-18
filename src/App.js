import GlobalStyle from "./components/GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import HabitsPage from "./pages/HabitsPage"
import HabitsTodayPage from "./pages/HabitsTodayPage"
import HabitsHistory from "./pages/HabitsHistory"

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />

                <Routes>
                    <Route path='/' element={<LoginPage />} />

                    <Route path='/cadastro' element={<SignupPage />} />

                    <Route path='/habitos' element={<HabitsPage />} />

                    <Route path='/hoje' element={<HabitsTodayPage/>}/>

                    <Route path='/historico' element={<HabitsHistory/>}/>



                </Routes>

            </BrowserRouter>


        </>
    )

}