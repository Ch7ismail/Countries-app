import React from 'react'

export default function Button(props) {
  return (
    <button className={`font-semibold text-lg flex items-center gap-2 ${props.className}`} onClick={props.onClick}>
        {props.icon}
        {props.text}
    </button>
  )
}
