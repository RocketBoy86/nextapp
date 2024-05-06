'use client'

import { AppShell, Burger, Group, Skeleton, Space, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import NavBar from '@/components/Navbar';
import myImage from '../app/rd_logo1.jpg';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en">
      <body><MantineProvider defaultColorScheme='dark'>
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image radius="md" h={50} w={50} fit="contain" src={myImage} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" onClick={toggle}>
        <NavBar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Space h="xl"/>
        {children}
      </AppShell.Main>
      <AppShell.Aside p="md">Aside.. what to do wioth this or even keep it at all?</AppShell.Aside>
      <AppShell.Footer>< ColorSchemeToggle /></AppShell.Footer>
    </AppShell>
    </MantineProvider></body>
    </html>
  )
}
