import PixelTransition from '@/components/PixelTransition';

export default function AboutPage() {
  return (
    <div className="w-full h-full overflow-y-auto p-6 ">
      <div className="grid grid-cols-4 auto-rows-[120px] gap-6">
        
        <div className="col-span-2 row-span-4 rounded-3xl overflow-hidden bg-white">
          <PixelTransition
            firstContent={
              <img
                src="/me.JPG"
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


