'use client'

import { Timeline, Text, Container, Notification, Space, Alert, List, SimpleGrid } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { IconCodeCircle2, IconGlobe, IconAtom2, IconAffiliate, IconSignRight, IconCpu, IconAward, IconPuzzle } from '@tabler/icons-react';

export default function Professional() {
  return (
    <Container>
                    <Space h="sm"></Space>
                <Alert variant="light" color="blue" title="Key achievements" icon={<IconAward/>}>

                <Text size="md" fw={700}>Certification</Text>
                    <List>
                        <List.Item>Actively progressing through TOGAF Architect certification</List.Item>
                        <List.Item>AWS Solution Architect - associate</List.Item>
                    </List>
                    <Space h="xl" />

                    <Text size="md" fw={700}>Barrenjoey Markets</Text>
                    <List>
                        <List.Item>Saved $20k USD p.a. - by identifying platform changes to reduce Bloomberg Data Licence usage</List.Item>
                        <List.Item>Designed fixed income real time regulatory reporting solution around event sourcing architecture</List.Item>
                    </List>
                    <Space h="xl" />
                    <Text size="md" fw={700}>CommSec</Text>
                    <List>
                        <List.Item>Implemented weekly knowledge sharing session focused on markets, product knowledge, and trading mechanics</List.Item>
                        <List.Item>Designed new microservice based quote request feature for option trading platform</List.Item>
                        <List.Item>Improved operational efficiency and customer experience of option trade booking by designing new API driven solution</List.Item>
                    </List>
                    <Space h="xl" />
                    <Text size="md" fw={700}>CMC Markets</Text>
                    <List>
                        <List.Item>Identified and fixed $65k AUD p.a. leakage in monthly brokerage rebate processing</List.Item>
                        <List.Item>Re-engineered Excel/VBA driven reporting in Oracle DBMS using cursors and bulk collect; reduced run time by 90 mins per report</List.Item>
                    </List>
                    <Space h="xl" />
                    <Text size="md" fw={700}>Susquehanna International Group</Text>
                    <List>
                        <List.Item>Implemented STP for daily regulatory reporting response files; errors and warnings trigger alerts on an SRE dashboard</List.Item>
                    </List>

                </Alert>
            <Space h="xl"></Space>
        <Timeline active={5} bulletSize={45} lineWidth={2}>
        <Timeline.Item color='red.7' title="The future..." bullet={<IconAtom2 size={35} />} lineVariant="dashed">
            <Text size="xs" mt={4}>Is now?</Text>
            <Text c="dimmed" size="sm">My world changed</Text>
            <Text c="dimmed" size="sm">The day I began learning</Text>
        </Timeline.Item>

        <Timeline.Item color='orange.5' title="Barrenjoey Markets" bullet={<IconGlobe size={35} />}>
            <Text size="md" mt={4} fw={700}>Solution Architect</Text>
            <Text size="xs" mt={4}>Nov 2021 - Present</Text>
            <Text c="dimmed" size="sm">Architected interest rate swaps (IRS) real time regulatory reporting solution using pubsub and microservices; led team of analysts developing working prototype including STP integration between Barrenjoey and vendor for executed trades and batch reporting of margins/collateral</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Leveraged relationship with traders and sales to deliver analysis and solution architecture of a new Java based web app. The solution uses event sourcing architecture to allow real time management and recording of pre trade negotiation, up to the point of execution. The tool supports CFTC regulatory obligations arising from expansion of trading desk capabilities</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Recommended, and project managed delivery of, optimisations for Bloomberg Data Licence consumption. Measured results over six months 12k USD realised saving; on track to maintain 20k+ USD p.a. savings</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Implemented real time IRS trade feed for executed risk management system using pubsub and cloud based integration platform</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Designed IRS trade processing for Java based trade capture application: including vendor platform interface, lifecycle/workflow event modelling, trade state management; solution uses AWS EKS, EC2, and Postgres RDS instance</Text>
        </Timeline.Item>

        <Timeline.Item color='yellow.6' title="CommSec" bullet={<IconAffiliate size={35} />}>
            <Text size="md" mt={4} fw={700}>Lead Tech BA/Solution Designer</Text>
            <Text size="xs" mt={4}>Nov 2019 - Nov 2021</Text>
            <Text c="dimmed" size="sm">Functional analysis, design of new tailor made combination trading solution plus associated STP for exchange traded option (ETO) bookings by implementing a REST API facade for legacy vendor system</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Solution design of a microservice providing ETO quote request feature for Commsec trading platform</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Implemented weekly knowledge sharing session focused on markets, product knowledge, and trading mechanics; acknowledged by management as reducing knowledge related defects in team output</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Leading four analysts operating across two scrum teams</Text>
        </Timeline.Item>

        <Timeline.Item color='indigo.6' title="CMC Markets" bullet={<IconPuzzle size={35} />}>
            <Text size="md" mt={4} fw={700}>Senior BI Developer / analyst</Text>
            <Text size="xs" mt={4}>Sep 2017 - Nov 2019</Text>
            <Text c="dimmed" size="sm">Led team of developers to design and deliver reporting platform as part of major white label partnership with a big four bank. Platform includes: ingestion of data, automated low-level control points, transformation of data, outbound data feeds to web and SFTP end points</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Reporting for new trading partners can be configured in a matter of minutes while previous Excel based mechanism required multiple days</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Designed new processes e.g. trading data feeds to third parties; ATO trade reporting; client money segregation</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Wrote new code modules, reports, Unix/Windows scripts, identified and completed bug fixes</Text>
        </Timeline.Item>

        <Timeline.Item color='cyan.8' title="Susquehanna International Group" bullet={<IconCodeCircle2 size={35} />} lineVariant="dashed">
            <Text size="md" mt={4} fw={700}>Database Developer</Text>
            <Text size="xs" mt={4}>May 2013 - Sep 2017</Text>
            <Text c="dimmed" size="sm">Implemented fully automated regulatory reporting solution for OTC products using layered architecture. Analysed technical requirements and designed new relational data model, business logic layer PL/SQL modules/views </Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Production support for traders, middle office, operations </Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Maintained ETL processing of market and trade data, including data governance of trade and position data + data model</Text>
            <Space h="md"></Space>
            <Text c="dimmed" size="sm">Peer reviewed business and technical specifications documents</Text>
            <Space h="md"></Space>
        </Timeline.Item>

        <Timeline.Item color='gray.8' title="Master of History" bullet={<IconSignRight size={35} />}>
            <Text size="sm" mt={4}>Monash University</Text>
            <Text size="xs" mt={4}>2010</Text>
        </Timeline.Item>

        <Timeline.Item color='gray.8' title="BSc Computer Science Dual Hons" bullet={<IconCpu size={35} />}>
            <Text size="sm" mt={4}>University of Keele</Text>
            <Text size="xs" mt={4}>2008</Text>
        </Timeline.Item>
        </Timeline>
    </Container>
  );
}