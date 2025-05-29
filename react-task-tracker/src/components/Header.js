import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <header className='header'>
      <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title} Task Tracker</h1>
      <h2 style={headingStyle}>H2</h2>
      <Button color='green' text='Add' onClick={onClick} />
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
