import { MantineProvider, ColorSchemeScript, Blockquote, Container, Flex, Space } from '@mantine/core';

import { IconCodeCircle2, IconGlobe, IconAtom2, IconAffiliate, IconSignRight, IconCpu, IconAward, IconPuzzle } from '@tabler/icons-react';


import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';

import BoatCard from '@/components/CardGallery';
import CardGallery from '@/components/CardGallery';



export default function Imaginarium() {
  return (
    <>
    <Container>
      <Blockquote color="blue" mt="xl">A selection of personal projects from the physical world and the digital.</Blockquote>
      <Space h="xl"></Space>
      <CardGallery></CardGallery>
    </Container>
    </>
  );
}
