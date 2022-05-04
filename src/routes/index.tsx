import Slider from '../components/Slider'
import Tab from '../components/Tab'
import Toggle from '../components/Toggle'
import styles from './Routes.module.scss'

function Routes() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Slider />
    </div>
  )
}

export default Routes
