import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useSelector } from 'react-redux'
// import { RemoveScroll } from 'react-remove-scroll/UI'

// import { selectCars } from '../features/car/carSlice'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)

  // const changeBurgerStatus = () => {
  //   setBurgerStatus(!burgerStatus)
  //   const bodySelect = document.querySelector('body')
  //   bodySelect.classList.toggle('hideScroll')
  // }

  return (
    
    <Container>
      <a>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        <a href='#' className='hover'>
          Model S
        </a>
        <a href='#' className='hover'>
          Model 3{' '}
        </a>
        <a href='#' className='hover'>
          Model Y
        </a>
        <a href='#' className='hover'>
          Model X
        </a>
        <a href='#' className='hover'>
          Solor Roof
        </a>
        <a href='#' className='hover'>
          Solor Roof
        </a>
        <a href='#' className='hover'>
          Solor Panels
        </a>
      </Menu>
      <RightMenu>
        <a href='#' className='righthover'>
          Shop
        </a>
        <a href='#' className='righthover'>
          {' '}
          Account
        </a>
        <button onClick={() => setBurgerStatus(true)}>Menu</button>
      </RightMenu>
      {/* <RemoveScroll> */}
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CloseIcon onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          {' '}
          <a href='#'>Existing Inventory</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Used Inventory</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Trade-in</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Cybertruck</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Roadster</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Semi</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Charging</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Power</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Components</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Utilities</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#'>Test Drive</a>{' '}
        </li>
      </BurgerNav>
      {/* </RemoveScroll> */}
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  min-height: 55px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  top: 0;
  left: 90px;
  right: 0;
  z-index: 1;
  a {
    rigth: 90px;
  }

  @media (max-width: 400px) {
    min-height: 40px;
    padding: 0 10px;
    a {
      img {
        width: 75px;
      }
    }
  }
`

const Menu = styled.div`
  display: fixed;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 20px;
  top: 10px;
  font-size: 15px;
  
  

  a {
    
    font-weight: 500;
    text-decoration: none !important;
    padding: 0 17px;
    white-space: nowrap;
  }
  & .hover:hover {
    background-color: black;
    border-radius: 11px;
    
}
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  a {
    font-weight: 450;
    font-size: 15px;

    margin-right: 10px;
    white-space: nowrap;
  }
  & .righthover:hover {
    background-color: black;

    border-radius: 20px;
  }
  button {
    text-decoration: none;
    outline: none;
    border: none;
    color: #393c41;
    font-weight: 450;
    background-color: transparent;

    font-size: 16px;
    padding: 0 10px;
    white-space: nowrap;
  }
  @media (max-width: 400px) {
    a {
      font-size: 12px;
    }
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 1);
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in-out;

  overflow-y: scroll;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      color: black;
      font-weight: 600;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
