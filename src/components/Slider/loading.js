import React from "react";
import ReactTooltip from 'react-tooltip';

const ImageTooltip = (props) => {
    return (
        <div style={{ position: 'relative', width: '250px', height: '250px' }}>
            <ReactTooltip place="top" type="dark" effect="solid" id="imageTooltip" />
            <img data-tip="This is a tooltip" data-for="imageTooltip"
                src={props}
                alt="demo"
                style={{ position: 'absolute', top: '50px', left: '50px', width: '100px' }}
            />
        </div>
    );
}

export default ImageTooltip;