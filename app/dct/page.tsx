import Link from "next/link";

export default function DctPage() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto p-4 md:p-6">
      <div className="flex shrink-0 flex-col gap-4 rounded-2xl bg-white p-4 shadow sm:p-6 md:h-[350px] md:flex-row md:gap-6">
        <div className="relative mx-auto aspect-square w-full max-w-[300px] shrink-0 overflow-hidden rounded-2xl md:mx-0">
          <img
            src="/fig.png"
            alt="台北有藝事專案預覽"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-0 flex h-14 w-full items-center justify-center rounded-b-2xl bg-black/30 backdrop-blur-md">
            <p className="text-lg font-semibold text-white">Figma</p>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col justify-center md:min-h-[200px]">
          <h2 className="mb-3 text-xl font-bold sm:text-2xl">台北有藝事</h2>
          <p className="leading-relaxed text-gray-600">
            透過可視化地圖檢索、專屬品味推薦、真實回饋整合，
            <br />
            讓你的藝文生活更有意思！
          </p>

          <Link
            href="/dct/taipei_art"
            className="mt-6 inline-flex w-fit shrink-0 self-end rounded-3xl bg-black/90 px-4 py-2 text-white backdrop-blur transition hover:opacity-80 md:absolute md:right-0 md:bottom-0 md:mt-0"
          >
            了解更多
          </Link>
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-4 rounded-2xl bg-white p-4 shadow sm:p-6 md:h-[350px] md:flex-row md:gap-6">
        <div className="relative mx-auto aspect-square w-full max-w-[300px] shrink-0 overflow-hidden rounded-2xl md:mx-0">
          <img
            src="/ble.jpg"
            alt="Blender 專案預覽"
            className="h-full w-full rounded-xl object-cover object-bottom"
          />

          <div className="absolute bottom-0 flex h-14 w-full items-center justify-center rounded-b-2xl bg-black/30 backdrop-blur-md">
            <p className="text-lg font-semibold text-white">Blender</p>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col justify-center md:min-h-[200px]">
          <h2 className="mb-3 text-xl font-bold sm:text-2xl">BLENDER PROJECT-1</h2>
          <p className="leading-relaxed text-gray-600">
            以政大雄鷹為概念發想，設計自己的老鷹模型
          </p>

          <Link
            href="/dct/blender"
            className="mt-6 inline-flex w-fit shrink-0 self-end rounded-3xl bg-black/90 px-4 py-2 text-white backdrop-blur transition hover:opacity-80 md:absolute md:right-0 md:bottom-0 md:mt-0"
          >
            了解更多
          </Link>
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-4 rounded-2xl bg-white p-4 shadow sm:p-6 md:h-[350px] md:flex-row md:gap-6 md:items-center">
        <div className="mx-auto aspect-square w-full max-w-[300px] shrink-0 rounded-xl bg-gray-200 md:mx-0" />
      </div>

      <div className="flex shrink-0 flex-col gap-4 rounded-2xl bg-white p-4 shadow sm:p-6 md:h-[350px] md:flex-row md:gap-6 md:items-center">
        <div className="mx-auto aspect-square w-full max-w-[300px] shrink-0 rounded-xl bg-gray-200 md:mx-0" />
      </div>
    </div>
  );
}
