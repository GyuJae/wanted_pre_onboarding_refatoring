import { useState } from 'react'
import styles from './Dropdown.module.scss'

const data = [
  'All Symbols',
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'BCHUSER.PERP',
  'LTCUSD.PERP',
  'XRPUSD.PERP',
  '1000SHIBUSD.PERP',
  'BANDUSD.PERP',
]

const Dropdown = () => {
  const [value, setValue] = useState<string>(data[0])
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const handleClickShowSearch = () => setShowSearch((prev) => !prev)

  const handleClickSymbolName = (symbolName: string) => setValue(symbolName)

  return (
    <div className={styles.wrapper}>
      <div onClick={handleClickShowSearch} className={styles.container} role='button' tabIndex={0}>
        <div>{value}</div>
        <div>▼</div>
      </div>
      {showSearch && (
        <div className={styles.searchContainer}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
          </svg>
          <input
            value={searchValue}
            placeholder='Search Symbol'
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <ul>
            {data
              .filter(
                (symbolName) =>
                  symbolName.toLocaleLowerCase().includes(searchValue) ||
                  symbolName.toLocaleUpperCase().includes(searchValue)
              )
              .map((symbolName) => (
                <button key={symbolName} onClick={() => handleClickSymbolName(symbolName)} type='button'>
                  {symbolName}
                </button>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
