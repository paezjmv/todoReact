import React from 'react'
import ReactDom from 'react'

function Modal({ children }){
	return ReactDom.creaatePortal(
		<div className="modal">
			{children}
		</div>,
		document.getElementById('modal')
	)
}

export { Modal }