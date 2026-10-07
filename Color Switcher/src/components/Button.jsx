const Button = ({ title, selectedColor }) => {
    return (
        <button
            className="text-white font-bold py-4 px-6 rounded text-xl"
            style={{ backgroundColor: title }}
            onClick={() => selectedColor(title)}
        >
            {title}
        </button>
    )
}

export default Button
