import { useRef, useState } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'
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

  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside<HTMLDivElement>({ ref, handler: () => setShowSearch(false) })

  return (
    <div className={styles.wrapper}>
      <button onClick={handleClickShowSearch} className={styles.container} type='button'>
        <div>{value}</div>
        <div>▼</div>
      </button>
      {showSearch && (
        <div className={styles.searchContainer} ref={ref}>
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
