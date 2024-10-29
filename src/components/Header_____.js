import React from 'react';
import { List, Person, Search, Gear } from 'react-bootstrap-icons';
import main from '../assets/img/main';
import { useAuth } from '../pages/login/AuthContext';
import { useNavigate ,Link } from 'react-router-dom';

function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(); // 로그아웃 처리
    navigate('/');
    window.location.reload();
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <h1 className="sitename">
          <Link to="/">
            <img src={main.logo} alt="logo" />
          </Link>
        </h1>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/plantMine">나만의 식물</Link>
            </li>
            <li className="dropdown">
              <Link to="/alarmlist">
                <span>식집사 알리미</span>{' '}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/alarmlist">물주기 알림</Link>
                </li>
                <li>
                  <Link to="/checklist">나의 식물 체크</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/khboardlist">
                <span>식집사 게시판</span>{' '}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/khboardlist">키우기 노하우</Link>
                </li>
                <li>
                  <Link to="/freeboardlist">식물 무료 나눔</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/hotellist">식물 돌봄 호텔</Link>
            </li>
          </ul>
          <List className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <div>
          <Link to="/" className="nav_icon fs_18">
            <Search className="bi bi-search" />
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/userinfo" className="nav_icon">
                <Gear className="bi bi-gear" />
              </Link>
              <a href="/" className="nav_btn" onClick={handleLogout}>
                로그아웃
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="nav_icon">
                <Person className="bi bi-person" />
              </Link>
              <Link to="/signup" className="nav_btn">회원가입</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
