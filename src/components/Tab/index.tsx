import { useState } from 'react'
import styles from './Tab.module.scss'

const data = ['감자', '고구마', '카레라이스']

const Tab = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0)
  const handleClick = (idx: number) => {
    setSelectedIdx(idx)
  }
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {data.map((item, idx) => (
          <button key={item} className={styles.item} type='button' onClick={() => handleClick(idx)}>
            {item}
          </button>
        ))}
      </div>
      <div className={styles.indicatorContainer}>
        <div
          className={styles.indicator}
          style={{
            transition: 'all 0.2s linear',
            transform: `translateX(${selectedIdx * 100}%)`,
          }}
        />
      </div>
    </div>
  )
}

export default Tab
