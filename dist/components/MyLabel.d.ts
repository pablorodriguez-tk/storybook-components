/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Este será el texto que se mostrará en la etiqueta
     */
    label?: string;
    /**
     * Este será el tamaño que tendra la  etiqueta
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * Si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     * Colores básicos del componente
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Colores personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Colores personalizado del fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
