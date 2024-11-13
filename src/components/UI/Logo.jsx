import { Link } from 'react-router-dom'
import LogoImg from '../../assets/NavLogo.svg'

export default function Logo() {
  return (
    <Link to='/'>
      <img src={LogoImg} alt="ShopCo" />
    </Link>
  )
}
