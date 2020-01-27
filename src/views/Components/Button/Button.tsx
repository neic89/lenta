import React from 'react';
import cn from 'classnames';
import './Button.scss';

interface IButtonProps {
    text: string;
    isDisabled?: boolean;
    clickHandler(e: any): void;
    extraClassNames?: string;
}

const Button: React.FC<IButtonProps> = ({text, clickHandler, extraClassNames, isDisabled = false}) => {
    const rootClassNames = cn(['btn', extraClassNames], {
        'btn_disabled': isDisabled
    });

    const onClick = (e: any) => {
        if (!isDisabled) {
            clickHandler(e);
        }
    };

    return (
        <button className={rootClassNames} disabled={isDisabled} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
