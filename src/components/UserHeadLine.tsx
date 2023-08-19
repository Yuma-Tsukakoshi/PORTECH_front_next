"use client";

import { Container, createStyles, Avatar, Text, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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
    <Container my="md" className="bg-white p-8 pt-2 rounded-2xl">
      <div className='flex flex-col items-center justify-between'>
        <Group noWrap>
          <Avatar src={avatar} size={94} radius="md" />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              {/* {title} */}
              {"Web & Machine Learning Engineer"}
            </Text>

            <Text fz="lg" fw={500} className={classes.name}>
              {/* {name} */}
              {"塚越 雄真"}
            </Text>
          </div>
        </Group>
      </div>
    </Container>

  );
}
