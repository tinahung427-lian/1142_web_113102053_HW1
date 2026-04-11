import Image from "next/image";
import Link from "next/link";


export default function AboutPage() {
    return (
      <div className="flex flex-col gap-4 h-full overflow-y-auto p-6">

        <div className="bg-white rounded-2xl p-6 h-[350px] shrink-0 shadow flex gap-6">
          
          <div className="w-[300px] h-[300px] rounded-2xl overflow-hidden relative shrink-0">
            <img
              src="/fig.PNG"
              alt="project"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 w-full h-[55px] rounded-b-2xl bg-black/30 backdrop-blur-md flex items-center justify-center">
              <p className="text-white text-lg font-semibold">
                Figma
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center relative">
            <h2 className="text-2xl font-bold mb-3">台北有藝事</h2>
            <p className="text-gray-600 leading-relaxed">
              透過可視化地圖檢索、專屬品味推薦、真實回饋整合，<br />
              讓你的藝文生活更有意思！
            </p>

            <Link
              href="/dct/taipei_art"
              className="absolute right-0 bottom-0 bg-black/90 text-white backdrop-blur px-4 py-2 rounded-3xl hover:opacity-80 transition"
            >
              了解更多
            </Link>
          </div>

        </div>

        <div className="bg-white rounded-2xl p-6 h-[350px] shrink-0 shadow flex gap-6">
          <div className="w-[300px] h-[300px] rounded-2xl overflow-hidden relative group">
            <img
              src="/ble.JPG"
              alt="project"
              className="w-full h-full object-cover object-bottom rounded-xl"
            />

            <div className="absolute bottom-0 w-full h-[55px] rounded-b-2xl bg-black/30 backdrop-blur-md flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    Blender                      
                  </p>
            </div>

          </div>

          <div className="flex-1 flex flex-col justify-center relative">
            <h2 className="text-2xl font-bold mb-3">BLENDER PROJECT-1</h2>
            <p className="text-gray-600 leading-relaxed">
              以政大雄鷹為概念發想，設計自己的老鷹模型
            </p>

            <Link
              href="/dct/blender"
              className="absolute right-0 bottom-0 bg-black/90 text-white backdrop-blur px-4 py-2 rounded-3xl hover:opacity-80 transition"
            >
              了解更多
            </Link>
          </div>


        </div>

        <div className="bg-white rounded-2xl p-6 h-[350px] shrink-0 shadow">
          <div className="w-[300px] h-[300px] bg-gray-200 rounded-xl"></div>
        </div>

        <div className="bg-white rounded-2xl p-6 h-[350px] shrink-0 shadow">
          <div className="w-[300px] h-[300px] bg-gray-200 rounded-xl"></div>
        </div>

      </div>
    );
  }