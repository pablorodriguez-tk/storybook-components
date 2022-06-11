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
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor = "black",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
