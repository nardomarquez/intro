import Scene from "@/components/Scene";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen p-6">
      <main className="flex-1 flex flex-col justify-between my-8">
        <div className="grid grid-cols-4 gap-6">
          <p className="text-4xl col-[3/5] font-bold leading-[110%] tracking-[-0.04em] text-pretty">
            Hello. I’m Nardo, a Creative Developer based in Manila. I craft
            bespoke digital experiences that elevate brands.
          </p>
        </div>
      </main>

      <div className="overflow-hidden" aria-hidden="true">
        <div className="animate-marquee whitespace-nowrap">
          <p className="mix-blend-multiply text-[10rem] font-bold uppercase -tracking-wider inline-block leading-none align-baseline">
            Nardo
            <span className="text-[#B2B7C9]">你好</span>
            Marquez
            <span className="text-[#B2B7C9]">Ciao</span>
            Nardo
            <span className="text-[#B2B7C9]">Hello</span>
            Marquez
          </p>
          <p
            className="text-[#797e8e] font-semibold uppercase leading-[110%] text-justify w-full text-pretty [text-align-last:justify]"
            aria-hidden="true"
          >
            Code in Motion Hello Beyond Form おはよう Ideas in Code Bonjour
            Abstract Design こんばんは Fluid Constructs Ciao Sharp Edges
            やっほー Defined by Code 你好 Invisible Lines もしもし Silent
            Innovation 안녕하세요 Rewriting Norms مرحباً Unseen Precision ハロー
            Digital Fragments Hej Whispered Forms Hejsan Chasing Edges Kamusta
            Sharp Focus いらっしゃいませ Breaking Silence Γειά σου Undefined
            Motion Merhaba Lines in Flux こんにちは Shadowed Concepts Code in
            Motion Hello Beyond Form おはよう Ideas in Code Bonjour Abstract
            Design こんばんは Fluid Constructs Ciao Sharp Edges やっほー Defined
            by Code 你好 Invisible Lines もしもし
          </p>
        </div>
      </div>

      <Scene />
    </div>
  );
}
