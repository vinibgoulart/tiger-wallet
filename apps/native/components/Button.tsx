import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  label: string;
  color?: string;
  fullWidth?: boolean;
};

export const Button = (props: ButtonProps) => {
  const getBackgroundColor = () => {
    if (props.color) {
      return `bg-${props.color}`;
    }

    return 'bg-primary-main';
  };

  const getWidth = () => {
    if (props.fullWidth) {
      return 'w-full';
    }

    return 'w-auto';
  };

  return (
    <TouchableOpacity
      className={`${getBackgroundColor()} ${getWidth()} p-4 rounded-md`}
    >
      <Text className="text-white">{props.label}</Text>
    </TouchableOpacity>
  );
};
