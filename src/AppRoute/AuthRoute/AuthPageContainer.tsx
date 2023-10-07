import React from 'react'
import { useStyles } from '../../hooks/useStyles'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
}

export const AuthPageContainer: React.FC<Props> = ({children}) => {
  const cx = useStyles(styles)
  return (
    <div className={cx("container")}>{children}</div>
  )
}
