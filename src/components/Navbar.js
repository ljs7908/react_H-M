import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {
    const navigate = useNavigate()
    const goToLogin = () => {
        !authenticate ? navigate('/login') : setAuthenticate(false)
    }
    const goMain = () => {
        navigate('/')
    }
    const search = (event) => {
        if (event.key === 'Enter') {
            //입력한 검색어를 읽어와서
            // url을 바꿔준다

            let keyword = event.target.value

            navigate(`/?q=${keyword}`)
        }
    }

    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성',
    ]
    return (
        <div>
            <div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{!authenticate ? '로그인' : '로그아웃'}</div>
                </div>
            </div>
            <div className="nav-section">
                <img
                    width={100}
                    src="https://www.hotels-paris-champs-elysees.com/images/pages/hm.gif"
                    onClick={goMain}
                />
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li key={menu}>{menu}</li>
                    ))}
                </ul>
                <div className="nav-search">
                    <FontAwesomeIcon icon={faSearch} />
                    <input
                        type="text"
                        placeholder="제품검색"
                        onKeyPress={(event) => search(event)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar
