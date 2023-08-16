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
      <ArticleCard />
    </main>
  )
}
