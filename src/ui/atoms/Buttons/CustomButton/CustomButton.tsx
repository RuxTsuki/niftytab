import './customButton.css';
import { FC, MouseEvent, ReactNode } from 'react';
import { BtnSizes, BtnSpace, BtnStyles } from './customButton.types';
import { createRipple } from '@/utils/ripple-effect/ripple-effect';

export interface Props {
    onClick: (ev: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => any;
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button' | undefined;
    id?: string;
    title?: string;
    className?: string;
    buttonStyle?: BtnStyles;
    buttonSize?: BtnSizes;
    buttonSpace?: BtnSpace;
    disabled?: boolean;
    active?: boolean;
    ripple?: boolean;
}

/**
 * A basic button that contain a ripple effect,
 * @param `Props`
 * @returns custom `HTMLButtonElement`
 */
export const CustomButton: FC<Props> = ({
    onClick,
    children,
    className = '',
    type = 'button',
    buttonStyle = 'btn-normal',
    buttonSize = 'btn-xs',
    buttonSpace = 'btn-cmn-p',
    disabled = false,
    id = '',
    title = '',
    active = false,
    ripple = false
}) => {
    return (
        <button
            onClick={(ev) => {
                ripple && createRipple(ev);
                onClick(ev);
            }}
            type={type}
            className={`common-btn ${buttonStyle} ${buttonSize} ${buttonSpace} ${className} ${active ? 'btn-active' : ''
                }`}
            id={id}
            disabled={disabled}
            title={title}
        >
            {children}
        </button>
    );
};
