import PropTypes from "prop-types"
const Titles = ({ text }) => {
    return (
        <h2 className='title'>
            {text}
        </h2>
    )
}
Titles.propTypes = {
    text: PropTypes.string,
}
export default Titles