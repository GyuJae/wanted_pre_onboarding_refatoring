import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Slider.module.scss'

interface IInputValue {
  value: string
  onClickValue: () => void
}

function InputValue({ value, onClickValue }: IInputValue) {
  return (
    <button onClick={onClickValue} className={styles.inputValue} type='button'>
      {value}
    </button>
  )
}

function RoundValue({ value, standard }: { value: number; standard: number }) {
  return (
    <div
      className={cx(
        value >= standard && value !== 0 && styles.selectedRoundValue,

        styles.roundValue
      )}
    />
  )
}

function Slider() {
  const [rangeValue, setRangeValue] = useState<number>(0)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(+e.currentTarget.value)
  }

  const handleClickValue = (value: number) => {
    setRangeValue(value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.valueContainer}>
        <span className={styles.valueContainerValue}>{rangeValue}</span>
        <span className={styles.percentage}>%</span>
      </div>
      <div className={styles.rangeContainer}>
        <input
          type='range'
          min='0'
          max='100'
          list='number'
          step={1}
          className={cx(rangeValue === 0 && styles.myRangeGRAYA, styles.myRange)}
          value={rangeValue}
          onChange={handleChangeInput}
        />
        <div className={styles.rangeInputContainer}>
          <div
            className={cx(styles.rangeInputWidth, rangeValue === 0 && styles.myRangeGRAYA)}
            style={{ width: `${rangeValue}%` }}
          />
        </div>
        <div className={styles.ballRangeContainer}>
          <RoundValue value={rangeValue} standard={0} />
          <RoundValue value={rangeValue} standard={25} />
          <RoundValue value={rangeValue} standard={50} />
          <RoundValue value={rangeValue} standard={75} />
          <RoundValue value={rangeValue} standard={99} />
        </div>
      </div>
      <div className={styles.inputValueContainer}>
        <InputValue value='0' onClickValue={() => handleClickValue(0)} />
        <InputValue value='25' onClickValue={() => handleClickValue(25)} />
        <InputValue value='50' onClickValue={() => handleClickValue(50)} />
        <InputValue value='75' onClickValue={() => handleClickValue(75)} />
        <InputValue value='100' onClickValue={() => handleClickValue(100)} />
      </div>
    </div>
  )
}

export default Slider
