import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'

// Señalando que tipos de SVG se estaran trabajando
// Esto nos permitiria trabajar con varios archivos a la vez
const iconTypes = {
	'check': <CheckSVG />,
	'delete': <DeleteSVG />
}

function TodoIcon({ type }) {
	return(
		<span 
			className={`Icon Icon-svg Icon-${type}`}
		>
			{iconTypes[type]}
		</span>
	)
}

export { TodoIcon }