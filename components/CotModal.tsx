import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text, Title, Space, List, ListItem, ScrollArea } from '@mantine/core';
import { IconBrandAws, IconBraces, IconDevices, IconAsset, IconTerminal2, IconCompass, IconBrandDocker, IconBrandNextjs, IconBrandUbuntu, IconVectorSpline } from '@tabler/icons-react';

export default function CotModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Shaheen Mahal" size="xl" centered>
        <ScrollArea.Autosize offsetScrollbars>
        <Text>Shaheen Mahal - The Eagle's Palace.</Text>
        <Space h="sm"></Space>
        <Text>
            I created the project with two main goals in mind:
            <Space h="xs"></Space>
            <List>
                <ListItem>Maintain existing technical knowledge/skills relating to analysis, design, and building</ListItem>
                <ListItem>Practice new skills, toolchains, languages</ListItem>
            </List>
        </Text>   
        <Space h="xl"></Space>
        <Title order={4}>
            Solution
        </Title>
        <Text fs="italic">
            At high level, the solution is required to:
        </Text>
        <Text>
            <Space h="md"></Space>
            <List>
                <ListItem icon={<IconTerminal2/>}>Host a publicly accessible portfolio of personal projects</ListItem>
                <ListItem icon={<IconAsset/>}>Host a publicly accessible professional profile</ListItem>
                <ListItem icon={<IconDevices/>}>Be responsive to device e.g. mobile vs desktop</ListItem>
                <ListItem icon={<IconBraces/>}>Support my existing technology skills and help to develop new ones</ListItem>
                <ListItem icon={<IconBrandAws/>}>Be cloud hosted within the free tier, intially :)</ListItem>
            </List>
        </Text>
        <Space h="xl"></Space>
        <Title order={4}>
            Implementation
        </Title>
        <Text fs ="italic">
            What I have built:
        </Text>
        <Text>
            <Space h="md"></Space>
            <List>
                <ListItem icon={<IconCompass/>}>AWS VPC, Route53 routing table, registered domain; all routing/configuration; IDAM; security groups/firewall rules</ListItem>
                <ListItem icon={<IconBrandUbuntu/>}>A Linux EC2 instance set up to host a containerised application on a shoestring budget</ListItem>
                <ListItem icon={<IconBrandNextjs/>}>A Next.js based web application</ListItem>
                <ListItem icon={<IconBrandDocker/>}>Docker containerisation of web application</ListItem>
                <ListItem icon={<IconVectorSpline/>}>Partially scripted deployment</ListItem>
            </List>
        </Text>
        </ScrollArea.Autosize>         
      </Modal>
      <Button onClick={open} color="blue" fullWidth mt="md" radius="md">Find out more</Button> 
    </>
  );
}