import { MantineProvider, ColorSchemeScript, Blockquote, Container, Flex, Space } from '@mantine/core';

import { IconCodeCircle2, IconGlobe, IconAtom2, IconAffiliate, IconSignRight, IconCpu, IconAward, IconPuzzle } from '@tabler/icons-react';


import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';

import BoatCard from '@/components/CardGallery';
import CardGallery from '@/components/CardGallery';



export default function Imaginarium() {
  return (
    <>
    <Container>
    <Blockquote color="blue" cite="– Le Petit Prince" mt="xl">A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.</Blockquote>
      <Space h="xl"></Space>
      <CardGallery></CardGallery>
    </Container>
    </>
  );
}
