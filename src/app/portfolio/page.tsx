import { UserInfoIcons } from '@/components/UserHeadLine';
import { GridSkillsSection } from '@/components/UserSkills';
import { GridIntroduceSection } from '@/components/UserIntroduce';

export default function Home() {
  return (
    <main className="">
      <UserInfoIcons />
      <GridSkillsSection />
      <GridIntroduceSection />  
    </main>
  )
}
