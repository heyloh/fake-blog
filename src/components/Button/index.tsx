import './styles.css';

interface ButtonProps {
  action?: () => void;
  text?: string;
  disabled?: boolean;
}

const Button = ({ text, action, disabled }: ButtonProps) => {
  return <button onClick={action} disabled={disabled}>{text}</button>;
};

export default Button;
