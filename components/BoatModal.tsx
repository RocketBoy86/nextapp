import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text, Space, List, ListItem, ScrollArea, Image, Flex, Mark } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed, IconArrowBigDownLinesFilled, IconAssembly, IconAxe, IconBolt } from '@tabler/icons-react';

export default function BoatModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Nu Pagadi" size="xl" centered>
        <Flex
        mih={50}
        gap="sm"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap">
        <Flex
        justify="flex-start"
        align="center"
        direction="column"
        >
          <Image
          src="/np.jpg"
          w={240}
          fit="fill"
          radius="xl"
          alt="The good ship Nu Pagadi"    
          />
          <Text size="sm" fs="italic">
            "Just you wait"
          </Text>
        </Flex>
        <ScrollArea.Autosize offsetScrollbars>   
        <Space h="md"></Space>
        <Text>
          "Nu Pagadi" means "Just you wait" in Russian and is the name of a Soviet era Children's show made by Soyuzmultfilm, intended as a homegrown "Tom and Jerry".
        </Text>
        <Space h="xs"></Space>
        <Text>
          Much like its Western counterpart, the show focuses on the escapades of two main protagonists: a wolf (volk; aka Tom Cat) and a hare (zayats; aka Jerry Mouse).
          <Space h="xs"></Space>
          So what better name for a racing sail boat than a name inspired by a 'cat and mouse' chase?
        </Text>
        <Space h="xs"></Space>
        <Flex
        justify="flex-start"
        align="center"
        direction="column"
        >
          <IconBolt />
        </Flex>
        <Space h="xs"></Space>
        <Text>The good ship "Nu Pagadi" is a Heron class trailerable sail boat which I am part way through building from paper plans. The Heron class was designed in the 1960s and popular across the UK and Australia.</Text>
        <Space h="xs"></Space>
        <Text>
          My reasons for taking on such a project are that such a unique personal project would guarantee to test my present capability, build my problem solving, 
          and teach me traditional skills which are slowly fading as life becomes computerised. Through the process of maintaining/repairing a wooden framed house I have accumulated the required tools, 
          building and woodworking skills to <Mark>attempt</Mark> the challenge...
        </Text>
        <Space h="xs"></Space>
        <Flex
        justify="flex-start"
        align="center"
        direction="column"
        >
          <IconArrowBigDownLinesFilled />
        </Flex>
        <Space h="md"></Space>
        <Text>
          The chosen construction method is traditional "stitch and glue". A jig to hold hull bulkheads firmly in position will be constructed first, followed by screwing 
          bulkhead members on to the jig frame at specified points. 
        </Text>
        <Space h="xs"></Space>
        <Text>
          The king plank is laid across the top, from fore to aft, and the keel formed along with centreboard casing cutouts.
        </Text>
        <Space h="xs"></Space>
        <Text>
          The hull is then constructed upside down by placing regularly spaced horizontal stringers across bulkheads from fore to aft, and from keel to chines
          to gunwales, thus forming a frame. This is followed by attaching a plywood skin to form the outer hull.
        </Text>
        <Space h="xs"></Space>
        <Text>
          Topsides, floorboards, and bouyancy tanks follow, with the spars (mast, gaff, boom) being fashioned from single lengths of timber split down the middle and 
          reglued such that the wood grain of both halves runs in opposing directions (ensuring natural imperfections in the timber cancel each other out when force is applied to the spar). 
        </Text>
        <Text>
          From this point completion of the project relies on fitting hardware and rigging sails.
        </Text>
        <Space h="xs"></Space>
        <Flex
        justify="flex-start"
        align="center"
        direction="column"
        >
          <IconAssembly />
        </Flex>
        <Space h="md"></Space>
        <Text>
         Coming from a software engineering discipline, I am combining modern technology to assist the build/fabrication of parts where it makes sense to do so.          
        </Text>
        <Text>
          I plan on cutting the foils (centreboard, rudder), transom, jig and bulkhead frames with a CNC router for speed and accuracy.
        </Text>
        <Text>
          The spars will be machined with a table saw and a table mounted palm router for fine detail work (such as the sail track).
        </Text>
        <Text>
          All other components are to be rough cut with a circular saw and brought to final shape by hand - either sanding, planing or a mixture of both.
        </Text>
        <Space h="xs"></Space>
        <Text>          
          <Space h="xs"></Space>
        <Flex
        justify="flex-start"
        align="center"
        direction="column"
        >
          <IconAxe />
        </Flex>
        <Space h="md"></Space>
        <Text fw={600} size="xl">Goal: build a (seaworthy) boat</Text>
        <Text fs="italic" fw={400}>
        <List>
              <ListItem icon={<IconCircleCheck color="green"/>}>Complete</ListItem>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Pending</ListItem>
        </List>
        </Text>
        <Space h="sm"></Space>
        <Text fs="italic">Initiative: obtain and understand construction plans</Text>
            <List>
              <ListItem icon={<IconCircleCheck color="green"/>}>Obtain plans from Heron Association (1 week)</ListItem>
              <ListItem icon={<IconCircleCheck color="green"/>}>Study plans (4 weeks)</ListItem>
              <ListItem icon={<IconCircleCheck color="green"/>}>Compile schedule of materials (1 week)</ListItem>
              <ListItem icon={<IconCircleCheck color="green"/>}>Identify timberyard to source materials (2 weeks)</ListItem>
              <ListItem icon={<IconCircleCheck color="green"/>}>Plan order and method of construction/fabrication (2 weeks)</ListItem>
            </List>        
        </Text>   
        <Space h="xs"></Space>    
        <Text fs="italic">Initiative: set up digital tooling</Text>
          <Text>
            <List>
              <ListItem icon={<IconCircleCheck color="green"/>}>Translate paper engineering drawings for rudder and centreboard into CAD (Fusion 360) (1 week)</ListItem>
              <ListItem icon={<IconCircleCheck color="green"/>}>Translate paper construction drawings for jig frame into CAD (Fusion 360) (1 week)</ListItem>
              <ListItem icon={<IconCircleCheck color="green"/>}>Translate paper construction drawings for hull bulkheads into CAD (Fusion 360) (1 week)</ListItem>
              <ListItem icon={<IconCircleCheck color="green"/>}>Translate paper construction drawings for transom into CAD (Fusion 360) (1 day)</ListItem>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Convert digitised plans to G code for CNC machine (1 day)</ListItem>
            </List> 
          </Text>
        <Space h="xs"></Space>         
          <Text fs="italic">Initiative: design and build framing jig</Text>
          <Text>
            <List>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Identify suitable building location in back yard i.e. concrete vs dirt (1 day)</ListItem>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Determine appropriate jig anchoring method for location (1 day)</ListItem>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Obtain suitable materials to construct jig e.g. scrap pallets, Facebook Marketplace freebies (4 weeks)</ListItem>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Construct jig and anchor firmly to ground (2 weeks)</ListItem>
            </List> 
          </Text>         
          <Space h="xs"></Space>         
          <Text fs="italic">Initiative: construct hull</Text>
          <Text>
            <List>
              <ListItem icon={<IconCircleDashed color="orange"/>}>CNC cut hull frames + transom (1 day)</ListItem>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Assemble hull frames (2 days)</ListItem>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Cut, position, and shape king plank (2 days)</ListItem>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Lay longitudinal stringers (4 days)</ListItem>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Rough cut, position, and shape hull outer skin (4 days)</ListItem>
            </List> 
          </Text>     
          <Space h="xs"></Space> 
          <Text fs="italic">Initiative: layup, fairing, fit out, rigging</Text>
            <List>
              <ListItem icon={<IconCircleDashed color="orange"/>}>Initiatives to be identified and scoped (2 days)</ListItem>
            </List>
        </ScrollArea.Autosize>    
        </Flex>    
      </Modal>
      <Button onClick={open} color="blue" fullWidth mt="md" radius="md">Find out more</Button> 
    </>
  );
}