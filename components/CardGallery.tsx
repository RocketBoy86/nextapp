'use client'

import { Card, Image, Text, Badge, Button, Group, Flex, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import  RDModal from './RDModal'
import BoatModal from './BoatModal';
import CotModal from './CotModal';
import SecPhoneModal from './SecPhoneModal';

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
        <RDCard></RDCard>
        <Cot></Cot>
        <SecPhone></SecPhone>
    </Flex>
  );
}


export function BoatCard() {
    return (
      <Card w={283} h={430} shadow="sm" padding="lg" radius="md" withBorder>
        <Image
          src="/nupagadi1.jpg"
          w={240}
          fit="fill"
          radius="xl"
          alt="The good ship Nu Pagadi"    
        />
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={600}>"Nu Pagadi"</Text>
          <Badge color="pink">In progress</Badge>
        </Group>
        <Text size="sm">
          What better way to spend an afternoon than relaxing on a boat? 
        </Text>
        <BoatModal></BoatModal>
      </Card>
    );
}

export function RDCard() {
  return (
    <Card w={283} h={430} shadow="sm" padding="lg" radius="md" withBorder>
      <Image
        src="/rd_logo1.jpg"
        w={240}
        fit="fill"
        radius="xl"
        alt="Rich Designs logo"        
      />
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={600}>RichDesigns.info</Text>
        <Badge color="green">Complete</Badge>
      </Group>
      <Text size="sm">
        Demonstration of my full stack experience.
      </Text>
      <RDModal></RDModal>
    </Card>   
  );
}

export function Cot() {
  return (
    <Card w={283} h={430} shadow="sm" padding="lg" radius="md" withBorder>
      <Image
        src="/rd_logo1.jpg"
        w={240}
        fit="fill"
        radius="xl"
        alt="Rich Designs logo"        
      />
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={600}>A cot</Text>
        <Badge color="pink">In progress</Badge>
      </Group>
      <Text size="sm">
        Design and manufacture of a child's cot with storage drawer.
      </Text>
      <CotModal></CotModal>
    </Card>   
  );
}

  export function SecPhone() {
    return (
      <Card w={283} h={430} shadow="sm" padding="lg" radius="md" withBorder>
        <Image
          src="/rd_logo1.jpg"
          w={240}
          fit="fill"
          radius="xl"
          alt="Rich Designs logo"        
        />
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={600}>The SecPhone</Text>
          <Badge color="Orange">Concept</Badge>
        </Group>
        <Text size="sm">
          Concept for a secure mobile phone.
        </Text>
        <SecPhoneModal></SecPhoneModal>
      </Card>   
    );
}