import './App.css'
import Product from './assets/Component/Product.jsx'
import data from './assets/data.json'


function App() {
  return (
    <div className='min-h-screen py-8'>
      <h1 className='text-3xl font-bold text-center mb-6'>📱 Mobile Phones</h1>
      <div className='flex flex-col'>
        {
          data.map((phone, index) => {
            return (
              <div key={index}>
                <Product phone={phone} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App