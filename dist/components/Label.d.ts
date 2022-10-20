/// <reference types="react" />
import './Label.css';
export interface Props {
    /**
     * Text displayed by the component
     */
    label: string;
    /**
     * Size of the text
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * HTML color of the text
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Make text uppercase
     */
    allCaps?: boolean;
    /**
     * Change font color
     */
    fontColor?: string;
}
/**
 * Simple component to render text
 */
declare const Label: ({ label, size, color, fontColor, allCaps }: Props) => JSX.Element;
export default Label;
