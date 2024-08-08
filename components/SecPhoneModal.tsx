import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text, Title, Space, List, ListItem, ScrollArea } from '@mantine/core';
import { IconBrandAws, IconBraces, IconDevices, IconAsset, IconTerminal2, IconCompass, IconBrandDocker, IconBrandNextjs, IconBrandUbuntu, IconVectorSpline } from '@tabler/icons-react';

export default function SecPhoneModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="The SecPhone" size="xl" centered>
        <ScrollArea.Autosize offsetScrollbars>
        <Text>A technical design concept for a DIY mobile phone with a few unexpected security twists.</Text>
        <Space h="sm"></Space>
        <Text>
            Inspired by a failed mugging attempt in London. 
            <Space h="xs"></Space>
            <List>
                <ListItem>User can set two pin codes. A master PIN to unlock the device and a duress PIN which will unlock the device, but erase the contents including all apps.</ListItem>
                <ListItem>If the duress PIN is used then the unlocked phone will look and function like brand new.</ListItem>
                <ListItem>If the phone is connected to a previously unseen PC via USB then a special auth code must be entered within 15 seconds or else a diode in the physical USB circuitry will be overloaded, thus rendering the phone unreachable via USB e.g. for imaging. A duress PIN can be used which will erase all data and apps before establishing the USB link.</ListItem>
                <ListItem>Send predefined JSON payload to pastebin: anonymously control the phone remotely and instruct erasure, self destruct, etc. Protected by PIN codes as above.</ListItem>
                <ListItem>Send predefined JSON payload to pastebin: anonymously request GPS location of device.</ListItem>
                <ListItem>If the phone connects to a new WiFi network: .</ListItem>
                <ListItem>Crypto wallet feature?</ListItem>
            </List>
        </Text>   
        <Space h="xl"></Space>
        <Title order={4}>
            Solution
        </Title>
        <Text fs="italic">
            At high level, the solution could involve:
        </Text>
        <Text>
            <Space h="md"></Space>
            <List>
                <ListItem icon={<IconTerminal2/>}>Waveshare SIM7600G-H 4G Hat for Raspberry Pi</ListItem>
                <ListItem icon={<IconAsset/>}>Raspberry Pi Zero 2 W </ListItem>
                <ListItem icon={<IconDevices/>}>Be responsive to device e.g. mobile vs desktop</ListItem>
                <ListItem icon={<IconBraces/>}>Support my existing technology skills and help to develop new ones</ListItem>
                <ListItem icon={<IconBrandAws/>}>Be cloud hosted within the free tier, intially :)</ListItem>
            </List>
        </Text>        
        </ScrollArea.Autosize>         
      </Modal>
      <Button onClick={open} color="blue" fullWidth mt="md" radius="md">Find out more</Button> 
    </>
  );
}