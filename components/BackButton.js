import { Button } from 'semantic-ui-react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'semantic-ui-css/components/button.css'
import router from 'next/router'
import styles from '../styles/BackButton.module.css'

const BackButton = () => {
  const onClick = () => {
    router.push('/')
  }
  return (
    <Button inverted basic circular size="tiny" onClick={onClick} className={styles.backButton}>
      <FontAwesomeIcon icon={faArrowLeft} size="1x" />
    </Button>
  )
}

export default BackButton
