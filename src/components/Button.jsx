import React from 'react'

function Button({props}) {
  return (
    <button className={`w-fit h-fit p-2 pl-4 pr-4 font-Helvetica-BoldOblique m-3 rounded-2xl bg-indigo-200 lg:text-xs text-xl tracking-widest
      ${props.containerClass}`}>{props.label}</button>
  )
}

export default Button