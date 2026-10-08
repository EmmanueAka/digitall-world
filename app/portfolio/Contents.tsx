
const projectFilters = ['All', 'Publishing', 'Web Design', 'Mobile Apps', 'Graphics'];
const projects = [
  {
    category: 'Book Design',
    title: "The Shadow's Axis",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8xneR7BFaEQta6VF_CmMaXmern4s3XoAC43gr5euvM8V9dMvocLYwIgK-_4vgU47WH8iu4H3daJi-kH45kKFDmYaKbBGrkiBLyQ4WZRmBfCaAOc_CAn5B6h-C-3ZFdP3k2MF6-ImyCgwrdC3UghXj45-ak6AD6DBc21uItOBEgy03hiezJZCsKUBvWrpTZlV4NZ3xnDyYMVx8_ECCd4szfjza-Q8wQx3TUGogUHooBGk3sVG55DidMA',
    alt: "A sophisticated, high-end mockup of a book design titled 'The Shadow's Axis'.",
  },
  {
    category: 'Visual Identity',
    title: 'Aura Creative',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZFpN1peOffyyrzNgXAZ-2J4aKeUmDfV3dObYnwWHWjHKP4yTN05o46GXrbxVckEuKbAjfMVT2VG9XmYJuAEfzogmEshQzrnF8cC-rvNjkf3w0HWUyaSzshb1IMqdx9LAWfoABmFHt69bZ9qKktxT-19HT11qZNyYST6qdbgSiKiv005Ey5NlhhicRf530YRiKPeNcTXzTEJy8_GPFdp8G5L6CQt1XILmrwIdePrzM4pPjMWHgsirUwA',
    alt: "A sleek, professional visual identity presentation for 'Aura Creative'.",
  },
  {
    category: 'App Development',
    title: 'Fluid Mobile',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCUgRalwwMC2DiiDb3xcljTGX_mYbwFNvtnVytIipXLtNHoaPJqqyuU7frGSWk-o8WZsPZaO8m2D6fUzYOCh1VCsBvEoPLpMpQ4968aRKgSwjrZMD1QUWU_szKl3KwKukSpFhxDSgXXvSwpCQynlXYX3ThoamfdtolTYnbF_0xnL4R0FXNztH1PiW-TEdvQ2UUEeZyPd6sjn4f8X7S2n-s81-5g3b8gdXSnyavmnAi1My2e5jgKmvpcTw',
    alt: "A highly polished mockup of a modern iOS application named 'Fluid Mobile'.",
  },
  {
    category: 'Website Design',
    title: 'Corporate Ecosystem',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkJY86AAaDmcaHVMeaSbKNC4XMyUrpDZfZq9mjZdDdO2VvPnf0rqYPrbZoM1bHZVUVNl-IYQvlBDv57DyHnUKdUPNetqT9PYRkj-0IeatpSS_LiYC5lFp-zMRrJF0P2du_P8MHJrH1EmADSL7Tet-09-Y74ZOLJOdeXjvKAa4velbJ1SKUR9dB7qlPFQJf4TXPaZZ5cdei0gnDyJcQ0BN14AX4mPqeFdrU-vkn_xNQN5_zkmc7OHCAMQ',
    alt: "A high-fidelity mockup of a complex B2B dashboard interface titled 'Corporate Ecosystem'.",
  },
  {
    category: 'Educational Publishing',
    title: 'Atomic Principles',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOKOF80zM9sfZSJvkWYJvhfPfN7fER3ArinN1GOQntb0B4XPYuLF1QxYljE8MupHGgrfPNQSr9lrHAEC0hfsMlzmiGRpMPR1949cT2JLbJoR5fSAkV4W9TqN7e_aS5eg34febd5Ps6B7UY0qKv4PaEDRnRBl_A7WE5OUnTrG4V6NUOMNQYCpEV4055zk5q0OhrbAQFMcC4SvdTAM-URNuZttel3NcM5eLJZQUgFtBlXf-r-7qLS9Y84g',
    alt: "An elegant photographic presentation of an educational publishing project called 'Atomic Principles'.",
  },
  {
    category: 'Brand Strategy',
    title: 'PixelForge',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBquJfKXcv3i0B-zZAlV7VWvo5K2b7XrFMyaaXGhO-OlH8yRqUlIaR4OeKqAoOFany-PS6YXCB5z1RJ-ahKEgpICddXsGp7Jx51zoXkv7OD11RbL6BNWrbzyK7bDkfyhcIdGcb1kNd9SLqwcRy0ghvH3k_fdUB-LMRf89xZpSTd36YaQq6p8hdjRxKBo_pPRq9OSlMcgwoErJzv_7GwKieZJSdBZFw4gwIt0fL1In12q1P9NgcvPONG2w',
    alt: "A minimalist brand strategy presentation for 'PixelForge'.",
  },
];

const Contents = () => {
  return (
    <div className="min-h-screen bg-[#f6faff] text-[#141d23] antialiased flex flex-col pt-20 px-8">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-[64px] py-[32px] mt-16 ">
        <section className="mb-[120px] pt-[32px]">
          <div className="max-w-3xl mb-[32px]">
            <h1 className="font-[Inter] text-[64px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00658d] mb-[16px]">
              Our Portfolio
            </h1>
            <p className="font-[Inter] text-[18px] leading-[1.6] text-[#3e4850]">
              Precision in execution, vision in strategy. Explore our curated selection of digital and
              architectural projects that define modern user experiences.
            </p>
          </div>

          <div className="w-full h-[614px] bg-[#e6eff8] border border-[#6c757d]/20 rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/content-hero.jpg')",
              }}
            />
          </div>
        </section>

        <section className="mb-[32px]">
          <div className="flex flex-wrap gap-4 border-b border-[#6c757d]/20 pb-[8px]">
            {projectFilters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={[
                  'font-[Inter] text-[14px] font-semibold uppercase tracking-[0.05em] pb-2 px-2 transition-colors',
                  index === 0
                    ? 'text-[#00658d] border-b-2 border-[#00658d]'
                    : 'text-[#3e4850] hover:text-[#00658d]',
                ].join(' ')}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[120px]">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-[#6c757d]/20 rounded-lg overflow-hidden bg-white transition-all hover:border-[#00a8e8]/50"
            >
              <div className="aspect-[4/3] bg-[#e6eff8] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-[16px] flex flex-col gap-[8px]">
                <span className="inline-block bg-[#e6eff8] text-[#3e4850] font-[Inter] text-[12px] uppercase px-2 py-1 rounded w-fit">
                  {project.category}
                </span>
                <h3 className="font-[Inter] text-[24px] font-semibold leading-[1.4] text-[#00658d]">
                  {project.title}
                </h3>
                <a
                  href="#"
                  className="font-[Inter] text-[14px] font-semibold uppercase tracking-[0.05em] text-[#00A8E8] flex items-center gap-1 mt-auto hover:opacity-80 transition-opacity"
                >
                  View Case Study <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-[120px] border-t border-[#6c757d]/20 pt-[32px]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="material-symbols-outlined text-[48px] text-[#00658d]/20 mb-[16px] block">
              format_quote
            </span>
            <blockquote className="font-[Inter] text-[32px] leading-[1.3] font-semibold text-[#00658d] mb-[16px]">
              &ldquo;DigitAll World brings a level of architectural precision to digital interfaces that is
              truly rare. Their work isn&apos;t just visually stunning; it&apos;s structurally sound and built
              for scale.&rdquo;
            </blockquote>
            <cite className="font-[Inter] text-[16px] leading-[1.6] text-[#3e4850] not-italic block">
              <span className="font-bold text-[#00658d] block">Sarah Jenkins</span>
              Chief Technology Officer, TechNova Systems
            </cite>
          </div>
        </section>

        <section className="mb-[120px] bg-[#e0e9f2] border border-[#6c757d]/20 rounded-xl p-[32px] text-center">
          <h2 className="font-[Inter] text-[40px] leading-[1.2] font-semibold text-[#00658d] mb-[16px] md:text-[64px] md:leading-[1.1] md:tracking-[-0.02em] md:font-bold">
            Ready to build something iconic?
          </h2>
          <p className="font-[Inter] text-[18px] leading-[1.6] text-[#3e4850] mb-[32px] max-w-2xl mx-auto">
            Partner with us to engineer digital experiences that are as precise in strategy as they are
            visionary in design.
          </p>
          <button
            type="button"
            className="bg-[#FF6F61] text-white font-[Inter] shimmer-btn text-[14px] font-semibold uppercase px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Start a Project
          </button>
        </section>
      </main>
    </div>
  );
};

export default Contents;
