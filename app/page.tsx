import { Blockquote, Container, Text, Title, Space } from '@mantine/core';

export default function HomePage() {
  return (
    <>
    <Container>
      <Blockquote color="blue" cite="– Le Petit Prince" mt="xl">A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.</Blockquote>
      <Space h="xl"></Space>
      <Title order={2}>Why Rich Designs?</Title>
      <Text></Text>
    </Container>
    </>
  );
}
