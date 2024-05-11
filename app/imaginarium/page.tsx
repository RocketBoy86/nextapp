import { MantineProvider, ColorSchemeScript, Blockquote, Container, Flex, Space } from '@mantine/core';

import { IconCodeCircle2, IconGlobe, IconAtom2, IconAffiliate, IconSignRight, IconCpu, IconAward, IconPuzzle } from '@tabler/icons-react';


import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';

import BoatCard from '@/app/imaginarium/CardGallery';
import CardGallery from '@/app/imaginarium/CardGallery';



export default function Imaginarium() {
  return (
    <>
    <Container>
      <Blockquote color="blue" cite="– Timothy Richardson" mt="xl">A page awaiting content is a blank page.</Blockquote>
      <Space h="xl"></Space>
      <CardGallery></CardGallery>
    </Container>
    </>
  );
}
