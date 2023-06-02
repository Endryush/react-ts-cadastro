import { Alert } from 'react-bootstrap';

interface MyAlertProps {
  message: string;
  variant: string;
  onClose: () => void;
}

export default function MainAlert ({ message, variant, onClose }: MyAlertProps) {
  return (
    <Alert variant={variant} onClose={onClose} dismissible>
      {message}
    </Alert>
  );
};

