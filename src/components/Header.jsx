import { useState } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { selectCars } from '../features/car/carSlice'

const Header = () => {
  const [open, setOpen] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        {cars?.map((car, index) => (
          <a href='#' key={index}>
            {car}
          </a>
        ))}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setOpen(true)} />
      </RightMenu>
      <BurgerNav isOpen={open}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpen(false)} />
        </CloseWrapper>
        {cars?.map((car, index) => (
          <li key={index}>
            <a href='#'>{car}</a>
          </li>
        ))}
        <li>
          <a href='#'> Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-in</a>
        </li>
        <li>
          <a href='#'>Cybertruck</a>
        </li>
        <li>
          <a href='#'>Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  )
}
export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase;
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
  background-color: white;
  width: 250px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`
