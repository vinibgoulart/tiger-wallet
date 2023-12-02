import { Text, TouchableOpacity } from 'react-native';

type ButtonOutlineProps = {
  label: string;
  color?: string;
  fullWidth?: boolean;
};

export const ButtonOutline = (props: ButtonOutlineProps) => {
  const getBackgroundColor = () => {
    if (props.color) {
      return `border-${props.color}`;
    }

    return 'border-primary-main';
  };

  const getWidth = () => {
    if (props.fullWidth) {
      return 'w-full';
    }

    return 'w-auto';
  };

  return (
    <TouchableOpacity
      className={`${getBackgroundColor()} ${getWidth()} border-2 p-4 rounded-md`}
    >
      <Text>{props.label}</Text>
    </TouchableOpacity>
  );
};
