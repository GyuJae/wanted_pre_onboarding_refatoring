import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Toggle.module.scss'

const data = ['기본', '상세']

function Toggle() {
  const [dataItem, setDataItem] = useState<string>(data[0])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const {
      currentTarget: { innerText },
    } = e
    setDataItem(innerText)
  }

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <button
          key={item}
          className={cx(styles.item, dataItem === item && styles.selected)}
          type='button'
          onClick={handleClick}
        >
          {item}
        </button>
      ))}
      <div className={cx(styles.box, dataItem === data[1] && styles.xEnd)} />
    </div>
  )
}

export default Toggle
