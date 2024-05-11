'use client'

import { AppShell, Burger, Group, Space, Image, Flex, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';
import React from 'react';
import { theme } from '../theme';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import NavBar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/app/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body>
        <MantineProvider defaultColorScheme='dark'>
          <AppShell
          header={{ height: 60 }}
          footer={{ height: 60 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
          padding="md">
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Image radius="lg" h={50} w={50} fit="contain" src="/rd_logo1.jpg" />
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md" onClick={toggle}>
              <NavBar />
            </AppShell.Navbar>
            <AppShell.Main>
              <Space h="xl"/>
              {children}
            </AppShell.Main>
            <AppShell.Footer>
              <Flex mih={50} justify="left" align="flex-start" direction="row">
                <ColorSchemeToggle/>
              </Flex>
              </AppShell.Footer>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
