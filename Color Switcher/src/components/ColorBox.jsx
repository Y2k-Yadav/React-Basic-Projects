const ColorBox = ({ color }) => {
    return (
        <div
            className="w-50 h-40 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl"
            style={{ backgroundColor: color }}
        >
            {color}
        </div>
    )
}

export default ColorBox
