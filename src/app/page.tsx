import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen p-6">
      <Header />

      <main className="flex-1 flex flex-col justify-between my-8">
        <div className="grid grid-cols-4 gap-6">
          <p className="text-3xl col-[3/5] font-bold leading-[110%] tracking-[-0.04em]">
            Hello. I’m Nardo Marquez, a Creative Developer based in Manila. I
            craft bespoke digital experiences with performance and accessibility
            in mind.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <ul>
            {social.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium font-mono uppercase tracking-normal"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <p className="col-[3/5] font-medium font-mono uppercase tracking-normal">
            ©2024
          </p>
        </div>
      </main>

      <div className="overflow-hidden" aria-hidden="true">
        <div className="animate-marquee whitespace-nowrap">
          <p className="text-[10rem] font-bold uppercase -tracking-wider inline-block leading-none align-baseline">
            Nardo
            <span className="text-[#B2B7C9]">你好</span>
            Marquez
            <span className="text-[#B2B7C9]">Hello</span>
            Nardo
            <span className="text-[#B2B7C9]">Ciao</span>
            Marquez
          </p>
          <p
            className="font-semibold uppercase leading-[110%] text-justify w-full text-pretty [text-align-last:justify]"
            aria-hidden="true"
          >
            Code in Motion ( Hello ) Beyond Form ( おはよう ) Ideas in Code (
            Bonjour ) Abstract Design ( こんばんは ) Fluid Constructs ( Ciao )
            Sharp Edges ( やっほー ) Defined by Code ( 你好 ) Invisible Lines (
            もしもし ) Silent Innovation ( 안녕하세요 ) Rewriting Norms ( مرحباً
            ) Unseen Precision ( ハロー ) Digital Fragments ( Hej ) Whispered
            Forms ( Hejsan ) Chasing Edges ( Kamusta ) Sharp Focus (
            いらっしゃいませ ) Breaking Silence ( Γειά σου ) Undefined Motion (
            Merhaba ) Lines in Flux ( こんにちは ) Shadowed Concepts
          </p>
        </div>
      </div>
    </div>
  );
}

const social = [
  { name: "Instagram", href: "https://www.instagram.com/nardomarquez" },
  { name: "Twitter", href: "https://twitter.com/nardomarquez" },
  { name: "Behance", href: "https://www.behance.net/nardomarquez" },
];
