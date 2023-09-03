import React, { useRef } from 'react';
import { useMouse } from 'react-use';

const CustomCursor = () => {
    const ref = useRef(null);
    const { docX, docY } = useMouse(ref);

    return (
        <div
            ref={ref}
            style={{
                position: 'absolute',
                top: docY,
                left: docX,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                // backgroundColor: 'black',
                transform: 'translate(-50%, -50%)',
                border: '5px double black',
               
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        />
    );
};

export default CustomCursor;