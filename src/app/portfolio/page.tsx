import { UserInfoIcons } from '@/components/UserHeadLine';
import { GridSkillsSection } from '@/components/UserSkills';
import { GridIntroduceSection } from '@/components/UserIntroduce';
import { ArticleCard } from '@/components/ArticleCard';

export default function Home() {
  return (
    <main className="">
      <UserInfoIcons />
      <GridSkillsSection />
      <GridIntroduceSection />  
      {/* 以下に自分が投稿した記事が一覧で出るようにする */}
      {/* <ArticleCard /> */}
    </main>
  )
}
