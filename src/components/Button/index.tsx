import './styles.css';

interface ButtonProps {
  action: () => void;
  text: string;
}

const Button = ({ text, action }: ButtonProps) => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
