import './App.css'

function App() {

  return (
    <>
     <div className="p-8">
      <h1 className="text-3xl font-bold text-primary-600 mb-4">
        Tailwind CSS работает!
      </h1>
      <button className="btn-primary">
        Тестовая кнопка
      </button>
      <input 
        type="text" 
        className="input-field mt-4"
        placeholder="Тестовое поле"
      />
    </div>
    </>
  )
}

export default App
