import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text, Title, Space, List, ListItem, ScrollArea, Image, Flex } from '@mantine/core';
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
            A six month labour of love and woodworking.
        </Text>   
        <Space h="xl"></Space>
        <Title order={4}>
            Concept
        </Title>
        <Text fs="italic">
            Using computer aided design (CAD), specifically TinkerCAD, develop plans for a child's cot. Incorporate a large drawer for storage, accommodate multiple 
            mattress height settings, and comply with applicable Australian design rules (ADRs).
        </Text>
        <Space h="xl"></Space>
        <Title order={4}>
            Design
        </Title>
        <Flex
        mih={50}
        gap="sm"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
        <Image
          src="/cot_1.png"
          w={240}
          fit="fill"
          radius="xl"
          alt="The Eagle's Palace"    
          />
          <Text size="sm" fs="italic">
            "The Eagle's Palace"
          </Text>
          </Flex>
          
        <Text>
            The chosen design uses a large central base from which all other components extend. The base also houses a large drawer. There is ventilation space directly
            above the top surface of the base unit - open at the rear and sides whilst the front features a thin panel for aesthetics.
            <Space h="sm"></Space>
            The base unit is used to anchor the ends of the cot and distribute the load of the cot plus occupant, to ensure stability. 
            The rear panel is attached vertically to the end panels. The front panel is likewise attached vertically, 
            except a quick release mechanism is featured so as to enable easy access.
            <Space h="sm"></Space>
            As the child grows, the mattress base drops increasingly lower inside the confines of the cot with multiple support/attachment points.
            <Space h="sm"></Space>
            All exposed edges are given a 12mm roundover and, in the case of the bars, spaced as per ADRs; the drawer features two large handles and a depth suitable for
            storage organisers commonly found at Ikea.
        </Text>
        <Space h="xl"></Space>
        <Title order={4}>
            Conclusions
        </Title>
        <Text>
            <Space h="md"></Space>
            The implementation phase of this project required much more time than first estimated. A large use of my time was in preparing dressed timber, including 
            machining/sanding/painting ~55 lengths to form the bars of the cot. Small imperfections at this stage show up clearly at the painting and varnishing stage, unless addressed, so this was time well spent.
            <Space h="sm"></Space>
            This leads me to the next largest use of time: set up and measuring. In the case of set up, I discovered along the way that I didn't have some of the ideal tooling 
            for certain tasks. To this end, for example, I designed/built my own router table which attaches to a table saw I already have. The router table then made the job of rounding over
            all four edges on 55 pieces of timber much less tedious than palm routing.
            <Space h="sm"></Space>
            Overall, I learnt useful ways of approaching unexpected problems and found myself thinking creatively about home made solutions instead of bought ones. I also 
            developed a more keen eye for estimating effort on physical building projects which requires a different mindset to estimating software projects.
        </Text>
        </ScrollArea.Autosize>         
      </Modal>
      <Button onClick={open} color="blue" fullWidth mt="md" radius="md">Find out more</Button> 
    </>
  );
}