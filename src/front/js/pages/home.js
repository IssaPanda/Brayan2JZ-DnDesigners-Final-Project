import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref} className='position-relative' style={{height:'100'}}>
	<img className='position-absolute opacity-50' style={{zIndex:-1}} src='https://www.pbs.org/wnet/nature/files/2024/01/GoldenHeadedLionTamarin.jpg'></img>
	<img className='position-absolute' style={{zIndex:0}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
  </div>
));

export const MyComponent = () => {
  const componentRef = useRef();

  return (
    <div>
		<div className='position-relative'>
			<React.Fragment >
				<ComponentToPrint ref={componentRef} />
			</React.Fragment>
		</div>
		<div className=' top-0'>
			<button onClick={() => exportComponentAsJPEG(componentRef)}>
				Export As JPEG
			</button>
			<button onClick={() => exportComponentAsPDF(componentRef)}>
				Export As PDF
			</button>
			<button onClick={() => exportComponentAsPNG(componentRef)}>
				Export As PNG
			</button>
		</div>
	</div>
  );
};