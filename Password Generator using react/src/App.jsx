import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [enabled, setEnabled] = useState({
    numbersAllowed: false,
    charactersAllowed: false
  });

  useEffect(() => {
    generatePassword(enabled)
  }, [passwordLength, enabled]);

  let handleCheckBox = (e) => {
    const { name, checked } = e.target
    setEnabled(prevState => ({
      ...prevState,
      [name]: checked
    }))
  }

  function handleCopy() {
    navigator.clipboard.writeText(password)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  function handleSave() {
    if (password && !savedPasswords.includes(password)) {
      setSavedPasswords(prevState => [...prevState, password])
    }
  }

  function generatePassword(enabled) {
    const numbers = '0123456789';
    const characters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let allowedCharacters = letters;

    if (enabled.numbersAllowed) {
      allowedCharacters += numbers;
    }

    if (enabled.charactersAllowed) {
      allowedCharacters += characters;
    }

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
      generatedPassword += allowedCharacters[randomIndex];
    }

    setPassword(generatedPassword);
  }

  return (
    // fixed + inset-0 makes the background cover the whole screen
    <div className="fixed inset-0 overflow-y-auto bg-zinc-900">

      {/* Page padding grows on bigger screens: mobile -> sm -> md */}
      <div className="flex justify-center p-4 sm:p-6 md:p-10">

        {/* Card width grows: mobile -> sm -> md -> lg */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-zinc-800 border border-zinc-700 rounded-2xl shadow-md p-5 sm:p-8 md:p-10 flex flex-col gap-5 sm:gap-6">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 text-center">
            Password generator
          </h1>

          {/* Password box */}
          <input
            type="text"
            id="password"
            readOnly
            value={password}
            className="w-full bg-zinc-900 border border-zinc-600 text-amber-400 font-mono text-sm sm:text-lg md:text-xl text-center rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          {/* Length slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-sm md:text-base text-zinc-300">
              <label htmlFor="length">Password length</label>
              <span className="font-semibold text-zinc-100">{passwordLength}</span>
            </div>
            <input
              type="range"
              id="length"
              min="1"
              max="30"
              value={passwordLength}
              onChange={e => setPasswordLength(e.target.value)}
              className="w-full h-2 cursor-pointer accent-amber-500"
            />
          </div>

          {/* Checkboxes: stacked on mobile, side by side from sm */}
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-3">
            <label htmlFor="number" className="flex items-center gap-3 text-zinc-300 text-sm md:text-base cursor-pointer">
              <input
                type="checkbox"
                id="number"
                name="numbersAllowed"
                checked={enabled.numbersAllowed}
                onChange={handleCheckBox}
                className="w-5 h-5 cursor-pointer accent-amber-500"
              />
              Include numbers
            </label>

            <label htmlFor="character" className="flex items-center gap-3 text-zinc-300 text-sm md:text-base cursor-pointer">
              <input
                type="checkbox"
                id="character"
                name="charactersAllowed"
                checked={enabled.charactersAllowed}
                onChange={handleCheckBox}
                className="w-5 h-5 cursor-pointer accent-amber-500"
              />
              Include special characters
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 cursor-pointer"
              onClick={() => generatePassword(enabled)}
            >
              Generate password
            </button>

            {/* Stacked on mobile, two columns from sm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                className="border border-zinc-600 hover:bg-zinc-700 text-zinc-100 font-semibold py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 cursor-pointer"
                onClick={handleCopy}
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </button>

              <button
                className="border border-zinc-600 hover:bg-zinc-700 text-zinc-100 font-semibold py-3 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 cursor-pointer"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>

          {/* Saved passwords */}
          {savedPasswords.length > 0 && (
            <div className="flex flex-col gap-3 border-t border-zinc-700 pt-5">
              <h2 className="text-lg font-semibold text-zinc-100">Saved passwords</h2>
              {savedPasswords.map((pass) => (
                <p
                  key={pass}
                  className="bg-zinc-900 border border-zinc-700 text-zinc-200 text-sm md:text-base font-mono rounded-lg px-4 py-2 break-all"
                >
                  {pass}
                </p>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default App