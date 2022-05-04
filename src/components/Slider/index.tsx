import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Slider.module.scss'

// interface IInputValue {
//   value: string
//   onClickValue: () => void
// }

// const InputValue: React.FC<IInputValue> = ({ value, onClickValue }) => {
//   return (
//     <div
//       onClick={onClickValue}
//       className='w-12 rounded-3xl cursor-pointer py-1 flex justify-center items-center bg-gray-200 text-xs text-gray-500 hover:text-white hover:bg-teal-600'
//     >
//       {value}
//     </div>
//   )
// }

function RoundValue({ value, standard }: { value: number; standard: number }) {
  return <div className={cx(value > standard ? styles.selected_round_value : null, styles.round_value)} />
}

function Slider() {
  const [rangeValue, setRangeValue] = useState<number>(0)

  return (
    <div className={styles.container}>
      <div className={styles.value_container}>
        <span className={styles.value_container_value}>{rangeValue}</span>
        <span className={styles.percentage}>%</span>
      </div>
      <div className={styles.range_container}>
        <input
          type='range'
          min='0'
          max='100'
          list='number'
          step={1}
          className={cx(rangeValue === 0 ? styles.myRange_GRAYA : null, styles.myRange)}
          value={rangeValue}
          onChange={(event) => setRangeValue(+event.target.value)}
        />
        <div className={styles.range_input_container}>
          <div className={styles.range_input_width} style={{ width: `${rangeValue}%` }} />
        </div>
        <div className={styles.ball_range_container}>
          <RoundValue value={rangeValue} standard={0} />
          <RoundValue value={rangeValue} standard={25} />
          <RoundValue value={rangeValue} standard={50} />
          <RoundValue value={rangeValue} standard={75} />
          <RoundValue value={rangeValue} standard={99} />
        </div>
      </div>
    </div>
  )
}

export default Slider
