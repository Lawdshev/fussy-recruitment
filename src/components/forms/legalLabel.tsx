export const LegalLabel = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col space-y-6">
      <p className="font-medium text-base text-primary-text leading-5">{label}</p>
      <div className="flex space-x-4">{children}</div>
    </div>
  );
};
