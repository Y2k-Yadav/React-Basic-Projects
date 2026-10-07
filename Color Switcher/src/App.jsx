import Button from './components/Button'
import { useState } from 'react'
import ColorBox from './components/ColorBox'

function App() {
    const color = [
        'red',
        'blue',
        'green',
        'lightseagreen',
        'orange',
        'purple',
        'pink',
        'teal',
        'cyan',
        'indigo'
    ]

    const [selectedColor, setSelectedColor] = useState('red')

    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-10 bg-linear-to-r from-red-500 to-pink-500'>

            <h1 className='text-5xl font-bold tracking-widest text-shadow-lg text-shadow-red-500'>
                🎨 Color Switcher
            </h1>

            <div className='flex flex-wrap gap-4 justify-center items-center'>
                {color.map((color, index) => (
                    <Button
                        key={index}
                        title={color}
                        selectedColor={setSelectedColor}
                    />
                ))}
            </div>

            <ColorBox color={selectedColor} />

        </div>
    )
}

export default App
