import { Button, type ButtonProps } from '@mantine/core';
import { XIcon } from '@mantinex/dev-icons';

export function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <Button leftSection={<XIcon size={16} />} variant="default" {...props} />
  );
}
