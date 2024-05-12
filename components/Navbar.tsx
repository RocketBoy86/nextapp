
import { NavLink } from '@mantine/core';
import { IconGauge, IconStack3, IconActivity, IconMail, IconBalloon } from '@tabler/icons-react';

export default function NavBar() {
  return (
    <>
      <NavLink
        href="/"
        label="Rich Designs"
        description="Microsite inspiration"
        leftSection={<IconGauge size="2rem" stroke={1.5} />}
      />

      <NavLink
        href="/professional"
        label="Professional Experience"
        description="My story so far"
        leftSection={<IconStack3 size="2rem" stroke={1.5} />}
      />

      <NavLink
        href="/imaginarium"
        label="The Imaginarium"
        description="Professional expertise applied to life"
        leftSection={<IconBalloon size="2rem" stroke={1.5} />}
      />
    </>
  );
}