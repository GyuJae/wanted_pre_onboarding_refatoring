import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Toggle.module.scss'

const data = ['기본', '상세']

const Toggle = () => {
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
          className={cx(styles.item, { [styles.selected]: dataItem === item })}
          type='button'
          onClick={handleClick}
        >
          {item}
        </button>
      ))}
      <div className={cx(styles.box, { [styles.xEnd]: dataItem === data[1] })} />
    </div>
  )
}

export default Toggle
