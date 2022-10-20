import './Label.css'

interface Props {
  /**
   * Text displayed by the component
   */
  label: string
  /**
   * Size of the text
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * HTML color of the text
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Make text uppercase
   */
  allCaps?: boolean,
  /**
   * Change font color
   */
  fontColor?: string
}

/**
 * Simple component to render text
 */
const Label = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  fontColor = '',
  allCaps = false
}: Props) => {
  const text = allCaps ? label.toUpperCase() : label

  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >{text}</span>
  )
}

export default Label
