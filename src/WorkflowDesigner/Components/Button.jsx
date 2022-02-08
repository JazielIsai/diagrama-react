import PropTypes from "prop-types"

const Btn = ({ text, className, id }) => {
    const onClick = () => {
        console.log(id)
        alert('El nomre es ' + text + ' su id es: ' + id);
    }

    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    )
}
Btn.propTypes = {
    text: PropTypes.string,
    onclick: PropTypes.func,
}

export default Btn