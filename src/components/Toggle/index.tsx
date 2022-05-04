import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Toggle.module.scss'

const data = ['기본', '상세']

function Toggle() {
  const [dataItem, setDataItem] = useState<string>(data[0])

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const {
      currentTarget: { innerText },
    } = e
    setDataItem(innerText)
  }

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div
          key={item}
          className={cx(styles.item, dataItem === item ? styles.selected : null)}
          onClick={handleClick}
          role='button'
          tabIndex={index}
        >
          {item}
        </div>
      ))}
      <div className={cx(styles.box, dataItem === data[1] ? styles.xEnd : null)} />
    </div>
  )
}

export default Toggle
