"use client";

import { createStyles, Text, SimpleGrid, Container, rem , Center} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  title: {
    height: '2.5rem',
    backgroundImage: theme.fn.gradient(),
    color: theme.white,
    borderRadius: rem(14),
    padding: rem(7),
    textAlign: 'center',
    width: '50%',
    transform: 'translateX(50%)',
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  description: string;
}

function Feature({ title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.content}>
        <Text fw={700} fz="xm" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

//propsでログインユーザーのものを表示する
// 他に、ログイン以外の人は別のページにする あくまでこのページにはログインユーザーのみ
const usergoal = [
    {
    title: '今後の目標 【 展望 】',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
]

const identity = [
  {
    title: '活かしたいこと【 強み 】',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity. As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    title: '克服したいこと【 弱み 】',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
];

export function GridIntroduceSection() {
  const goal = usergoal.map((item) => <Feature {...item} key={item.title} className="drop-shadow-lg" />);
  const items = identity.map((item) => <Feature {...item} key={item.title} className="mx-1 bg-white p-8 pt-4 rounded-2xl drop-shadow-lg " />);

  return (
    <Container my="md" size="lg" className='mx-auto my-10 max-w-62rem'>
      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50} className = "p-8 pt-4 bg-white rounded-2xl my-10 drop-shadow-lg ">
        {goal}
      </SimpleGrid>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={10} className="text-xm">
        {items}
      </SimpleGrid>
    </Container>
  );
}
