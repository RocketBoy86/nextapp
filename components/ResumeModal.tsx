import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text, Title, Space, List, ListItem, ScrollArea, Kbd } from '@mantine/core';
import { IconBraces, IconDevices, IconAsset, IconTerminal2, IconCompass, IconBrandDocker, IconVectorSpline } from '@tabler/icons-react';

export default function ResumeModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Llama3.1 recruitment consultant" size="xl" centered>
        <ScrollArea.Autosize offsetScrollbars>
        <Text>Short experiments with the power of AI</Text>
        <Space h="sm"></Space>
        <Text>
            High level goals:
            <Space h="xs"></Space>
            <List>
                <ListItem>Set up a self hosted Llama3.1 instance</ListItem>
                <ListItem>Understand how large language models (LLMs) function</ListItem>
                <ListItem>Leverage the AI to critically reflect on my resume, professional profile, and communication style</ListItem>
                <ListItem>Identify relevant weaknesses and address</ListItem>
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
                <ListItem icon={<IconTerminal2/>}>Implement an LLM which my home desktop machine is capable of running</ListItem>
                <ListItem icon={<IconAsset/>}>Provide easy, user friendly access. Ideally through a self hosted web interface</ListItem>
                <ListItem icon={<IconDevices/>}>Allow for fine tuning of the LLM, using my hosted resume as training data</ListItem>
                <ListItem icon={<IconBraces/>}>Support my existing technology skills and help to develop new ones</ListItem>
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
                <ListItem icon={<IconCompass/>}>Assembled hardware to run an LLM, based around Nvidia's RTX 4070 12GB GPU package</ListItem>
                <ListItem icon={<IconBrandDocker/>}>A Dockerised OpenWebUI based LLM hosting platform</ListItem>
                <ListItem icon={<IconVectorSpline/>}>An instance of Meta's Llama3.1:8b model; fine tuned using my resume, cover letter, and RichDesigns content</ListItem>
            </List>
        </Text>
        <Space h="xl"></Space>
        <Title order={4}>
            Method
        </Title>
        <Text fs ="italic">
            How I have created and used my AI career coach:
        </Text>
        <Text>
            <Space h="md"></Space>
            I started with a clean Docker image containing OpenWebUI and downloaded the Llama3.1:8b model, which is the smallest of the Llama3.x models and uses 8 billion parameters.
            The model is 4GB in size so meets the hardware limitations imposed by my personal machine, the main constraint being VRAM at 12GB.
        </Text>
        <Text>
            <Space h="md"></Space>
            With the Llama3.1 model installed and working I sanity checked various aspects, including asking questions about me, my resume, and RichDesigns.info. As expected, the model's
            response was boilerplate text for 'No information found'.
            <Space h="sm"></Space>
            Using OpenWebUI allows users to upload documents directly within the LLM chat window and this includes pointing to URLs which the model should crawl for content.
            By prompting the LLM using a URL prefixed with <Kbd>#</Kbd> such as <code>#http://www.RichDesigns.info</code> we can invoke a function call to scrape text data 
            from the URL and return it to the model for fine tuning.
        </Text>
        <Text>
            <Space h="md"></Space>
            I briefly confirmed the new data had been trained by asking basic resume questions
            to test for accuracy, hallucination, etc. Examples include "Has the author worked for Microsoft?" (answer: no; correctly responded); "Has the author 
            worked at CMC Markets?" (answer: yes; correctly responded).
            <Space h="sm"></Space>
            Knowing that my dataset had been successfully used to fine tune the model it was time to think like a hiring manager/recruitment consultant.
            Using my own experience on the hiring side of the interview table and my thoughts on how candidates are assessed I came up with a variety of questions, some examples are below:
        </Text>
        <Text>
            <Space h="md"></Space>
            <List>
                <ListItem icon={<IconCompass/>}>Is this person junior or senior in terms of their communication style?</ListItem>
                <ListItem icon={<IconBrandDocker/>}>What weaknesses are present in the author's communication?</ListItem>
                <ListItem icon={<IconVectorSpline/>}>Does the author appear to possess a body of knowledge suitable for a senior architect role?</ListItem>
                <ListItem icon={<IconVectorSpline/>}>Does some aspect of the writing allude to potential gaps in the author's understanding of listed concepts? Consider things like vague or missing explanations</ListItem>
                <ListItem icon={<IconVectorSpline/>}>Describe the authorial voice of the writer</ListItem>
            </List>
        </Text>
        <Text>
            <Space h="md"></Space>
            Part of the challenge when assessing oneself is to remain impartial and hopefully the questions I came up with met, or were close to, this standard.
            Certainly most of Llama3.1's answers were illuminating. I did notice some noise, such as mention of HTTP-404 error codes being interpreted as resume content and used in assessing my professional capability! These likely came from incorrectly entered/parsed URLs during the fine tuning process.
            There were many instances of reasonable and incredibly useful insights such as "<Text fs="italic">the author talks about leading teams and managing projects, but doesn't elaborate on specific challenges, successes, or lessons learned</Text>".
        </Text>
        <Title order={4}>
            Conclusions
        </Title>
        <Text>
            Setup/performance: On a modest hardware configuration with out of the box parameters the Llama3.1:8b LLM was able to reason about my likely aptitudes and respond generally within a duration akin to real-time human conversation. 
            The power and convenience of container technology is also clearly demonstrated here; anyone can image their application and share it with the world. 
            <Space h="sm"></Space>
            Conversely, anyone
            can download the image and have a working containerised application running in seconds - without needing to know anything about the application itself. This saved me
            a large amount of time over the alternative, which in this case was following and debugging Meta's instructions - including a shell script which didn't work "out of the box" for me.
            <Space h="md"></Space>
            Understand how LLMs function: I already had background theoretical knowledge of LLMs going in to this experiment so did not start from zero. But what I did learn
            included workflow for customising the model's training, parameters for fine tuning model output such as temperature and top-p/k, as well as engineering the prompts
            for a particular use case so as to reduce the risks of unwittingly 'leading' the model's responses.
        </Text>
        </ScrollArea.Autosize>         
      </Modal>
      <Button onClick={open} color="blue" fullWidth mt="md" radius="md">Find out more</Button> 
    </>
  );
}