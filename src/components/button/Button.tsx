import React from 'react';

type Props = {
    disabled: boolean;
    styleBtn: string;
    btnName: string;
    handleFunc: any;
};

function Button({ disabled, styleBtn, btnName, handleFunc }: Props) {
    return (
        <button type="button" disabled={disabled} className={`btn ${styleBtn} m-1`} onClick={handleFunc}>
            {btnName}
        </button>
    );
}

export default Button;
