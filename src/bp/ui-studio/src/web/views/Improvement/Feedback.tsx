import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'

import style from './style.scss'

export default props => {
  return (
    <div className={style.feedbackItem} onClick={e => props.onItemClicked()}>
      <div>Event Id: {props.item.id}</div>
      <div>Feedback: {props.item.feedback}</div>
      <div>Session ID: {props.item.sessionId}</div>
      <div>Timestamp: {props.item.timestamp}</div>
      <div>Channel: {props.item.channel}</div>
    </div>
  )
}