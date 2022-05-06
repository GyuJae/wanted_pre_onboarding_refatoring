import { useEffect, useState } from 'react'
import styles from './Input.module.scss'
import { CheckIcon, EyeIcon } from '../../assets/svgs'
import { cx } from '../../styles'

function Input() {
  const [emailValue, setEmailValue] = useState<string | null>()
  const [emailError, setEmailError] = useState<string | null>()
  const [emailCorrect, setEmailCorrect] = useState<boolean>(false)

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.currentTarget.value)
  }

  const handleBlurEmail = () => {
    const EMAIL_REG_TEST = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (emailValue) {
      if (EMAIL_REG_TEST.test(emailValue)) {
        setEmailError(null)
      } else {
        setEmailError('Invalid e-mail address')
      }
    }
  }

  const handlePasswordButton = () => setShowPassword((prev) => !prev)

  useEffect(() => {
    const EMAIL_REG_TEST = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (emailValue) {
      setEmailCorrect(EMAIL_REG_TEST.test(emailValue))
    }
  }, [emailValue])

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <label htmlFor='email'>Email</label>
        <div>
          <input
            id='email'
            type='email'
            placeholder='E-Mail'
            autoComplete='off'
            autoCapitalize='off'
            autoCorrect='off'
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
          />
          <div className={styles.iconContainer}>
            <CheckIcon className={cx(emailCorrect && styles.colorCorrect)} />
          </div>
        </div>
        {emailError && <span>{emailError}</span>}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='password'>Password</label>
        <div>
          <input
            id='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            autoComplete='off'
            autoCapitalize='off'
            autoCorrect='off'
          />
          <div className={styles.iconContainer}>
            <button type='button' onClick={handlePasswordButton}>
              <EyeIcon className={cx(showPassword && styles.colorCorrect)} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input
