
import { NavLink } from '@mantine/core';
import { IconGauge, IconStack3, IconBalloon } from '@tabler/icons-react';

export default function NavBar() {
  return (
    <>
      <NavLink
        href="/professional"
        label="Professional Experience"
        description="My story so far"
        leftSection={<IconStack3 size="2rem" stroke={1.5} />}
      />

      <NavLink
        href="/imaginarium"
        label="The Imaginarium"
        description="Life applied to professional expertise"
        leftSection={<IconGauge size="2rem" stroke={1.5} />}
      />

<NavLink
        href="/pd"
        label="Professional Reflections"
        description="Thoughts on professional development"
        leftSection={<IconBalloon size="2rem" stroke={1.5} />}
      />
    </>
  );
}