import React from 'react'

export default function LiveMenu() {
  return (
    <div className="headerRight">
    <li className="live">
       <img width={55} height={26} src="/img/live.png" alt="live" />
     </li>
     <li>
     <img width={18} height={18} src="/img/src.svg" alt="src"/>
     </li>
     <li className="liRight">
     <img width={18} height={18} src="/img/qt.svg" alt="qt"/>
     </li>
    </div>
  )
}
