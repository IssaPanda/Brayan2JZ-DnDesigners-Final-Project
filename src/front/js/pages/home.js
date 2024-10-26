import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const ComponentToPrint = React.forwardRef((props, ref) => (
	<div ref={ref} className='position-relative' style={{height:'500px',width:'500px'}}>
	  <img className='position-absolute' style={{zIndex:-1,height:'100%',width:'500px'}} src='https://www.pbs.org/wnet/nature/files/2024/01/GoldenHeadedLionTamarin.jpg'></img>
	  <img className='position-absolute top-0 start-0 rounded-circle' style={{zIndex:0,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	  <img className="position-absolute top-0 end-0 rounded-circle" style={{zIndex:1,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	  <img className="position-absolute top-50 start-50 rounded-circle" style={{zIndex:2,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	  <img className="position-absolute bottom-50 end-50 rounded-circle" style={{zIndex:3,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	  <img className="position-absolute bottom-0 start-0 rounded-circle" style={{zIndex:4,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	  <img className="position-absolute bottom-0 end-0 rounded-circle" style={{zIndex:4,height:'25%',width:'25%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg'></img>
	</div>
  ));

export const MyComponent = () => {
    const componentRef = useRef();

    const handleExportAsURI = async () => {
        try {
            const element = componentRef.current;
            console.log("Export function called, element:", element);

            if (!element) {
                console.error("No element found for exporting.");
                return;
            }

            const canvas = await html2canvas(element, {
                scrollY: -window.scrollY,
                useCORS: true,
            });

            console.log("Canvas object:", canvas);
            const uri = canvas.toDataURL("image/png", 1.0);
            console.log("URI generated:", uri);
            return uri;

        } catch (error) {
            console.error("Error generating URI:", error);
        }
    };

    return (
        <div>
            <div className='position-relative d-flex' ref={componentRef}>
                <ComponentToPrint/>
            </div>
            <button onClick={handleExportAsURI}>Export as URI</button>
        </div>
    );
};