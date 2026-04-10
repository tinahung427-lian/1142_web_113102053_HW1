export default function AboutPage() {
  return (
    <div className="w-full h-full overflow-y-auto p-6 ">
      <div className="grid grid-cols-4 auto-rows-[120px] gap-6">
        <div className="col-span-2 row-span-4 rounded-3xl bg-white flex items-center justify-center">
          01
        </div>

        <div className="col-span-2 row-span-2 col-start-3 row-start-1 rounded-3xl bg-white flex items-center justify-center">
          02
        </div>

        <div className="col-span-2 row-span-2 col-start-3 row-start-3 rounded-3xl bg-white flex items-center justify-center">
          03
        </div>

        <div className="col-span-4 row-span-2 row-start-5 rounded-3xl bg-white flex items-center justify-center">
          04
        </div>
      </div>
    </div>
  );
}