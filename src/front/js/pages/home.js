import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref} className='position-relative' style={{height:'500px',width:'500px'}}>
	<img className='position-absolute' style={{zIndex:-1,height:'100%',width:'500px'}} src='https://www.pbs.org/wnet/nature/files/2024/01/GoldenHeadedLionTamarin.jpg'></img>
	<img className='position-absolute top-0 start-0' style={{zIndex:0,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	<img className="position-absolute top-0 end-0" style={{zIndex:1,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	<img className="position-absolute top-50 start-50" style={{zIndex:2,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	<img className="position-absolute bottom-50 end-50" style={{zIndex:3,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	<img className="position-absolute bottom-0 start-0" style={{zIndex:4,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	<img className="position-absolute bottom-0 end-0" style={{zIndex:4,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
  </div>
));

export const MyComponent = () => {
  const componentRef = useRef();

  return (
    <div>
		<div className='position-relative d-flex'>
			<React.Fragment >
				<ComponentToPrint ref={componentRef} />
			</React.Fragment>
		</div>
		<div className='position-relative'>
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