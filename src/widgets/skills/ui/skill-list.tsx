import { Skill } from '@/widgets/skills';

interface SkillListProps {
  label: string;
  skills: string[];
}

export const SkillList = ({ label, skills }: SkillListProps) => {
  return (
    <div className={'flex flex-col gap-1'}>
      <span>{label}</span>

      <div className={'flex flex-row flex-wrap gap-1'}>
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};
