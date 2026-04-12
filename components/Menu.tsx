import SidebarContent from "./SidebarContent";

type Props = {
  interClassName: string;
};

export default function Menu({ interClassName }: Props) {
  return (
    <div
      className={`${interClassName} hidden h-full w-[320px] shrink-0 flex-col overflow-y-auto rounded-[20px] bg-[#d8f3fe] p-4 lg:flex lg:rounded-l-[20px] lg:rounded-r-none`}
    >
      <SidebarContent />
    </div>
  );
}
