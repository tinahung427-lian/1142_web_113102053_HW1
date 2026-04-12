import PixelTransition from "@/components/PixelTransition";
import { ImStarEmpty } from "react-icons/im";
import { ImStarFull } from "react-icons/im";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { SiBlender } from "react-icons/si";
import { TbBrandAdobePremier } from "react-icons/tb";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex shrink-0 gap-1 text-[#1f2a44]">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= count ? <ImStarFull key={i} /> : <ImStarEmpty key={i} />
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="h-full w-full overflow-y-auto p-4 md:p-6">
      <div className="grid auto-rows-min grid-cols-1 gap-4 md:gap-5 lg:auto-rows-[120px] lg:grid-cols-4 lg:gap-6">
        <div className="order-1 h-[min(55vh,480px)] min-h-[280px] overflow-hidden rounded-3xl bg-white sm:min-h-[320px] lg:col-span-2 lg:row-span-4 lg:row-start-1 lg:col-start-1 lg:h-full lg:min-h-0">
          <PixelTransition
            firstContent={
              <img
                src="/me.jpg"
                alt="me!"
                className="h-full w-full object-cover"
              />
            }
            secondContent={
              <div className="flex h-full w-full flex-col items-center justify-between bg-[#111] p-4 text-white sm:p-6 md:p-8">
                <div className="flex w-full flex-1 items-center justify-center">
                  <p className="m-0 text-center text-4xl font-black sm:text-5xl md:text-6xl">
                    HELLO!
                  </p>
                </div>
                <p className="m-0 text-center text-sm font-black sm:text-base">
                  想要賺很多錢，環遊世界、當有錢米蟲
                </p>
              </div>
            }
            gridSize={8}
            pixelColor="#ffffff"
            once={false}
            animationStepDuration={0.4}
            className="h-full w-full rounded-none"
          />
        </div>

        <div className="order-2 min-w-0 rounded-3xl bg-white p-4 sm:p-6 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-1">
          <div className="min-w-0 leading-relaxed">
            <p className="mb-2 font-bold">◾ Education</p>
            <div className="mb-4 pl-3 sm:pl-5">
              <p>-國立政治大學 教育學系</p>
              <p>-國立政治大學 數位內容與科技學士學位學程</p>
            </div>

            <p className="mb-2 font-bold">◾ Experience</p>
            <div className="pl-3 sm:pl-5">
              <p>
                -國科會補助研究計畫：運動員生涯轉銜培力計畫（兼任人力）2025.12–2026.01
              </p>
              <p>-TED分享社－行銷部 114學年</p>
              <p>-數位平台－見習助理_攝影組長 2026.02–</p>
            </div>
          </div>
        </div>

        <div className="order-3 relative min-w-0 overflow-hidden rounded-3xl bg-white p-4 pb-28 leading-relaxed sm:p-6 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3 lg:pb-6">
          <p className="mb-4 font-bold">◾ Skill</p>
          <div className="space-y-3 pl-1 sm:pl-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="w-30 shrink-0 sm:w-35">-Illustrator</span>
              <Stars count={4} />
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="w-30 shrink-0 sm:w-35">-Photoshop</span>
              <Stars count={4} />
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="w-30 shrink-0 sm:w-35">-Premiere</span>
              <Stars count={2} />
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="w-30 shrink-0 sm:w-35">-Figma</span>
              <Stars count={3} />
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="w-30 shrink-0 sm:w-35">-Blender</span>
              <Stars count={2} />
            </div>
          </div>

          <div className="absolute right-4 bottom-4 flex flex-col items-end gap-2 text-2xl text-slate-600 opacity-80 sm:bottom-6 sm:right-6 sm:gap-3 sm:text-3xl">
            <div className="mr-3 flex gap-2 sm:mr-5">
              <IoLogoFigma className="transition hover:-translate-y-1 hover:shadow-xl" />
              <SiBlender className="transition hover:-translate-y-1 hover:shadow-xl" />
            </div>

            <div className="flex gap-2">
              <TbBrandAdobePhotoshop className="transition hover:-translate-y-1 hover:shadow-xl" />
              <TbBrandAdobeIllustrator className="transition hover:-translate-y-1 hover:shadow-xl" />
              <TbBrandAdobePremier className="transition hover:-translate-y-1 hover:shadow-xl" />
            </div>
          </div>
        </div>

        <div className="order-4 rounded-3xl bg-white p-3 sm:p-4 lg:col-span-4 lg:row-span-2 lg:row-start-5">
          <p className="mb-4 ml-2 font-bold sm:ml-4">◾ Hobby</p>

          <div className="grid grid-cols-2 justify-items-center gap-3 sm:gap-4 lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-4">
            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img src="/draw.jpg" className="h-full w-full object-contain" alt="" />

              <p className="absolute bottom-8 left-2 text-sm font-bold text-black">
                最近的興趣是...
              </p>
              <p className="absolute bottom-4 left-2 text-sm font-bold text-black sm:left-6">
                畫各種水果～
              </p>
            </div>

            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src="/cat.jpg"
                className="h-full w-full scale-110 object-cover object-[center_20%]"
                alt=""
              />

              <p className="absolute bottom-6 left-2 text-sm font-bold text-black sm:left-8">
                好喜歡卯咪(◍ˊㅿˋ◍)
              </p>
            </div>

            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img src="/picnic.jpeg" className="h-full w-full object-contain" alt="" />

              <p className="absolute bottom-4 left-2 text-sm font-bold text-white sm:left-8">
                野餐！超適合放空
              </p>
            </div>

            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img
                src="/sweet.jpeg"
                className="h-full w-full scale-110 object-cover object-[center_10%]"
                alt=""
              />

              <p className="absolute bottom-12 left-2 text-sm font-bold text-white sm:bottom-20 sm:left-6">
                美食探索也是必須的吧！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
