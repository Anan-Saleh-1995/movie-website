import { useNavigate } from 'react-router-dom';
import { TextInput, PasswordInput, Button, Flex, Paper, Stack, Group, Anchor, Divider, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useToggle } from '@mantine/hooks';
import { useSignIn, useSignUp } from '@/hooks/useAuthActions';
import { GoogleButton } from '@/components/auth/GoogleButton';
import { TwitterButton } from '@/components/auth/TwitterButton';

export const AuthPanel = () => {
  const [type, toggle] = useToggle(['login', 'register']);
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleFormSubmit = () => {
    const email = form.values.email;
    const password = form.values.password;
    const variables = { email, password };
    const onSuccess = () => navigate('/');

    if (type === 'login') {
      signIn.mutate(variables, { onSuccess });
    } else {
      signUp.mutate(variables, { onSuccess });
    }
  };

  const signIn = useSignIn();
  const signUp = useSignUp();

  return (
    <Flex justify='center'>
      <Paper
        w={420}
        maw={420}
        mt={150}
        m={15}
        p={35}
        bg={'dark'}
        radius={'lg'}
        shadow="lg"
        withBorder
      >
        <Text size="lg" fw={500}>
          Welcome to Filmlify, {type} with
        </Text>
        <Group grow mb="md" mt="md">
          <GoogleButton radius={'xl'}>
            Google
          </GoogleButton>
          <TwitterButton radius={'xl'}>
            Twitter
          </TwitterButton>
        </Group>
        <Divider label="Or continue with email" labelPosition="center" my="lg" />
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              mt="sm"
            />
          </Stack>
          <Group justify="space-between" mt="xl">
            <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
              {type === 'register'
                ? 'Already have an account? Login'
                : 'Don\'t have an account? Register'}
            </Anchor>
            <Button bg={'yellow'} onClick={handleFormSubmit} type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </Flex>
  );
};
