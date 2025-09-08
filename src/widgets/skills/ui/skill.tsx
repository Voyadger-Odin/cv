export const Skill = ({ skill }: { skill: string }) => {
  return (
    <span
      className={
        'py-1 px-2 border border-[#fff3] rounded-full bg-color-dark-gray-1-primary text-[14px]'
      }
    >
      {skill}
    </span>
  );
};
