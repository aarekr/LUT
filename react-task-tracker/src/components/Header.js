import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title} Task Tracker</h1>
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

export default Header
