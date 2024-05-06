import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import RootLayout from './layout';
import { MantineProvider, ColorSchemeScript, Blockquote, Container } from '@mantine/core';

export default function HomePage() {
  return (
    <>
    <Container>
      <Blockquote color="blue" cite="– Le Petit Prince" mt="xl">A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.</Blockquote>
    </Container>
    </>
  );
}
