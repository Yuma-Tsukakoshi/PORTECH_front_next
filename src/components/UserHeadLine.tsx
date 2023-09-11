"use client";

import { Container, createStyles, Avatar, Text, Group, ActionIcon, Center, Stack} from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
}

export function UserInfoIcons({ avatar, name, title}: UserInfoIconsProps) {
  const { classes } = useStyles();
  return (
    <Container my="md" className="bg-white p-8 pt-2 rounded-2xl drop-shadow-lg">
        <Center className='mt-3 gap-10'>
          <Avatar src={avatar} size={94} radius="md"/>
          <Stack>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              {/* {title} */}
              {"POSSE テック局 日本計画党"}
            </Text>
            <Group>
              <Text fz="lg" fw={500} className="font-bold text-xl tracking-wider">
                {/* {name} */}
                {"塚越 雄真"}
              </Text>
              <ActionIcon>
                <GithubIcon size={50} />
              </ActionIcon>
              <Image src="/icon-instagram.png" alt="instagram" width={50} height={50} />
            </Group>
          </Stack>
        </Center>
    </Container>
  );
}
