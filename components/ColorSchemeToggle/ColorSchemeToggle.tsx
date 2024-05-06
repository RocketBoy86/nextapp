'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [checked, setChecked] = useState(false);

  return (
    <Group justify="center" mt="xl">
      <Button 
        variant="gradient" 
        gradient={{ from: 'cyan', to: 'grape', deg: 90 }} 
        onClick={() => setColorScheme('light')}
        size="compact-md">
          Light
      </Button>
      <Button 
        variant="gradient" 
        gradient={{ from: 'cyan', to: 'grape', deg: 90 }} 
        onClick={() => setColorScheme('dark')}
        size="compact-md">
          Dark
      </Button>
    </Group>
  );
}
