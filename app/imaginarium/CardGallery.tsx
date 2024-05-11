import { Card, Image, Text, Badge, Button, Group, Flex, Space } from '@mantine/core';

export default function CardGallery() {
  return (

    <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap">
        <BoatCard></BoatCard>
        <Card23></Card23>
    </Flex>
  );
}


export function BoatCard() {

    return (

      <Card w={320} shadow="sm" padding="lg" radius="md" withBorder>

        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />


      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>"Nu Pagadi"</Text>
        <Badge color="pink">In progress</Badge>
      </Group>

      <Text size="sm">
        What better way to spend an afternoon than relaxing on a boat? 
      </Text>
      <Space h="sm"></Space>
      <Text size="sm"> 
        Relaxing on a boat you built yourself, of course!
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Follow the story
      </Button>
    </Card>

    );


}


export function Card23() {

  return (

    <Card w={320} shadow="sm" padding="lg" radius="md" withBorder>

    <Image
      //src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
      src="/rd_logo1.jpg"
      h={130}
      fit="contain"
      radius="xl"
      alt="Norway"
    />


  <Group justify="space-between" mt="md" mb="xs">
    <Text fw={500}>RichDesigns.info</Text>
    <Badge color="green">Complete</Badge>
  </Group>

  <Text size="sm">
    With RichDesigns I aim to demonstrate my full stack experience.
  </Text>
  <Space h="sm"></Space>
  <Text size="sm">
    Analysis, design, architecture, implementation, and deployment.
  </Text>

  <Button color="blue" fullWidth mt="md" radius="md">
    Find out more
  </Button>
</Card>
    
  );


}