import { Switch, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

export const ThemeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Switch
      checked={colorScheme === 'dark'}
      onChange={() => toggleColorScheme()}
      size="md"
      onLabel={<SunIcon />}
      offLabel={<MoonIcon />}
    />
  );
};
