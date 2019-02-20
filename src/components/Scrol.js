import React from 'react';

//props
//state
//children 

const Scrol = (props) => {
	return (
		<div style={{overflowY: 'auto', maxHeight: '75vh', }}>
			{props.children}
		</div>
	);
};

export default Scrol;