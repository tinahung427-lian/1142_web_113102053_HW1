import PixelTransition from '@/components/PixelTransition';
import { ImStarEmpty } from "react-icons/im";
import { ImStarFull } from "react-icons/im";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { SiBlender } from "react-icons/si";
import { TbBrandAdobePremier } from "react-icons/tb";



function Stars({ count }: { count: number }){
  return (
    <div className="flex gap-1 text-[#1f2a44]">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= count ? (
          <ImStarFull key={i} />
        ) : (
          <ImStarEmpty key={i} />
        )
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full h-full overflow-y-auto p-6 ">
      <div className="grid grid-cols-4 auto-rows-[120px] gap-6">
        
        <div className="col-span-2 row-span-4 rounded-3xl overflow-hidden bg-white">
          <PixelTransition
            firstContent={
              <img
                src="/me.jpg"
                alt="me!"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "32px",
                  backgroundColor: "#111",
                  color: "#fff"
                }}>

                <div
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                      }}>
                      <p style={{ fontWeight: 900, fontSize: "3rem", margin: 0 }}>
                        HELLO!
                      </p>
                  </div>
            
                  <p
                    style={{fontWeight: 900, fontSize: "1rem", textAlign: "center", margin: 0 }}>
                    想要賺很多錢，環遊世界、當有錢米蟲
                  </p>
              </div>
            }
            gridSize={8}
            pixelColor='#ffffff'
            once={false}
            animationStepDuration={0.4}
            className="w-full h-full rounded-none"
          />
        </div>


        <div className="col-span-2 row-span-2 col-start-3 row-start-1 rounded-3xl bg-white p-6 overflow-x-auto overflow-y-hidden">
          <div className="min-w-[700px] leading-relaxed">
            <p className="font-bold mb-2">◾ Education</p>
            <div className="pl-5 mb-4">
              <p>-國立政治大學 教育學系</p>
              <p>-國立政治大學 數位內容與科技學士學位學程</p>
            </div>

            <p className="font-bold mb-2">◾ Experience</p>
            <div className="pl-5">
              <p>-國科會補助研究計畫：運動員生涯轉銜培力計畫（兼任人力）2025.12–2026.01</p>
              <p>-TED分享社－行銷部 114學年</p>
              <p>-數位平台－見習助理_攝影組長 2026.02–</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-2 col-start-3 row-start-3 rounded-3xl bg-white p-6 leading-relaxed relative overflow-hidden">
          <p className="font-bold mb-4">◾ Skill</p>
          <div className="space-y-3 pl-3">

            <div className="flex items-center gap-4">
              <span className="w-[140px]">-Illustrator</span>
              <Stars count={4} />
              
            </div>

            <div className="flex items-center gap-4">
              <span className="w-[140px]">-Photoshop</span>
              <Stars count={4} />
            </div>

            <div className="flex items-center gap-4">
              <span className="w-[140px]">-Premiere</span>
              <Stars count={2} />
            </div>

            <div className="flex items-center gap-4">
              <span className="w-[140px]">-Figma</span>
              <Stars count={3} />
            </div>

            <div className="flex items-center gap-4">
              <span className="w-[140px]">-Blender</span>
              <Stars count={2} />
            </div>

          </div>

          <div className="absolute right-6 bottom-6 flex flex-col items-end gap-3 text-3xl text-slate-600 opacity-80">
            
            <div className="flex gap-2 mr-5">
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


        <div className="col-span-4 row-span-2 row-start-5 rounded-3xl bg-white p-3">

          <p className="font-bold mb-4 ml-4">◾ Hobby</p>

          {/* 圖片區 */}
          <div className="flex gap-4 justify-center">

            
            <div className="w-[200px] aspect-square rounded-xl overflow-hidden bg-gray-100 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img src="/draw.jpg" className="w-full h-full object-contain" />

              <p className="absolute bottom-8 left-2 text-black text-sm font-bold">
                最近的興趣是...
              </p>
              <p className="absolute bottom-4 left-25 text-black text-sm font-bold">
                畫各種水果～
              </p>

            </div>

            

            <div className="w-[200px] aspect-square rounded-xl overflow-hidden bg-gray-100 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img src="/cat.jpg" className="w-full h-full object-cover scale-110 object-[center_20%]" />
              
              <p className="absolute bottom-6 left-11 text-black text-sm font-bold">
                好喜歡卯咪(◍ˊㅿˋ◍)
              </p>
            </div>

            
            <div className="w-[200px] aspect-square rounded-xl overflow-hidden bg-gray-100 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img src="/picnic.jpeg" className="w-full h-full object-contain" />

              <p className="absolute bottom-4 left-11 text-white text-sm font-bold">
                野餐！超適合放空
              </p>
            </div>

            
            <div className="w-[200px] aspect-square rounded-xl overflow-hidden bg-gray-100 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img src="/sweet.jpeg" className="w-full h-full object-cover scale-110 object-[center_10%]" />

              <p className="absolute bottom-20 left-6 text-white text-sm font-bold">
                美食探索也是必須的吧！
              </p>
            </div>

          </div>

        </div>

        
      </div>
    </div>
  );
}

