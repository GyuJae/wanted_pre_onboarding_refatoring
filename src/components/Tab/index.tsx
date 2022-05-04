import { useState } from 'react'
import styles from './Tab.module.scss'

const data = ['감자', '고구마', '카레라이스']

function Tab() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0)
  const handleClick = (idx: number) => {
    setSelectedIdx(idx)
  }
  return (
    <div className={styles.container}>
      <div className={styles.item_container}>
        {data.map((item, idx) => (
          <div key={item} className={styles.item} tabIndex={idx} onClick={() => handleClick(idx)} role='button'>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.indicator_container}>
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
