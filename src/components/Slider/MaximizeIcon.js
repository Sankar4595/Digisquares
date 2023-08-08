import React, { useState } from 'react';
import { BaseTop } from "./Base";
import Modal from 'antd/es/modal/Modal';

const MaximizeIcon = ({ children, title }) => {
    const [isMaximized, setMaximized] = useState(false);

    const OnClickModal = () => {
        setMaximized(!isMaximized);
    }
    const maximizeImage = () => {
        setMaximized(!isMaximized);
    }

    return <>
        <BaseTop title={title} maximizeImage={maximizeImage} />
        <Modal id="element" width={800} onCancel={OnClickModal} footer={null} open={isMaximized} >
            {children}
        </Modal>
    </>
}

export default MaximizeIcon;
