export const Skill = ({ skill }: { skill: string }) => {
  return (
    <span className={'py-1 px-2 border border-[#fff5] rounded-md text-[12px]'}>
      {skill}
    </span>
  );
};
