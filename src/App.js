import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductAll from './pages/ProductAll'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import PrivateRoute from './route/PrivateRoute'

//전체상품페이지 , 로그인, 상품상세페이지
//네비게이션바 만들기
//전체상품페이지에서는 전체 상품을 볼 수 있다.
//로그인버튼을 누르면 로그인 화면이 나온다
//상품디테일 클릭시 비로그인시 로그인 화면이 나온다
//로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//로그아웃 버튼을 클릭하면 로그아웃이 된다.
//로그아웃이 되면 상품디테일페이지를 볼 수 없다. 다시 로그인페이지가 보임
//로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//상품을 검색할 수 있다.
function App() {
    const [authenticate, setAuthenticate] = useState(false)
    useEffect(() => {}, [authenticate])

    return (
        <div>
            <Navbar
                authenticate={authenticate}
                setAuthenticate={setAuthenticate}
            />
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route
                    path="/login"
                    element={<Login setAuthenticate={setAuthenticate} />}
                />
                {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
                <Route
                    path="/product/:id"
                    element={<PrivateRoute authenticate={authenticate} />}
                />
            </Routes>
        </div>
    )
}

export default App
