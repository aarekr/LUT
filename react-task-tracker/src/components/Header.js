import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title} Task Tracker</h1>
      <h2 style={headingStyle}>H2</h2>
      {location.pathname === '/' && <Button 
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
      }
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
    //title: PropTypes.string.isRequired,
}

const headingStyle = {
  color: 'green',
  backgroundColor: 'brown'
}

export default Header
