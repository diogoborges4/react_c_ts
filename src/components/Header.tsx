

import React from 'react'
import styles from "./Header.module.css"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <h1>React + TS TODO</h1>
    </div>
  )
}

export default Header