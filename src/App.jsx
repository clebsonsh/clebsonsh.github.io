import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function App() {
  const { t } = useTranslation()

  return (
    <div className='max-w-screen-xl mx-auto bg-gray-200'>
          <main className="max-h-screen h-screen grid grid-cols-3 overflow-y-hidden">
          <aside className="grid grid-cols-1 bg-black col-span-1 row-span-2 text-white">
        <div
          className="px-4 col-start-1 col-end-1 row-start-1 row-end-1 place-self-center font-medium"
        >
      
          <p className="text-2xl mb-1">{t('aside_text_hi')}</p>
          <p className="mb-1">{t('aside_text_stack')}</p>
          <p className="underline underline-offset-1 decoration-yellow-400">
           {t('aside_text_pitch')} 
          </p>
        </div>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-500 mb-12 px-6 py-2 shadow-btn shadow-yellow-400/50 text-black font-semibold col-start-1 col-end-1 row-start-1 row-end-1 self-end justify-self-center active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
         {t('get_in_touch')} 
        </button>
      </aside>

      <nav
        className="z-10 h-16 bg-black/50 col-span-2 col-start-2 row-start-1 row-end-1 relative"
      >
          <img
            className="cursor-pointer w-8 h-8 hover:scale-125 transition-transform absolute top-4 right-16"
            src="/img/br.svg"
            onClick={() => i18next.changeLanguage('pt')}
          />
          <img
            className="cursor-pointer w-8 h-8 hover:scale-125 transition-transform absolute top-4 right-6"
            src="/img/en.svg"
            onClick={() => i18next.changeLanguage('en')}
          />
        <ul
          className="pb-1 h-full w-full text-white font-medium text-xl flex items-center justify-center gap-x-12"
        >
          <li
            className="decoration-transparent hover:underline hover:underline-offset-2 hover:decoration-4 hover:decoration-yellow-400 transition-all duration-500"
          >
            <a href="#works">{t('works_link_text')}</a>
          </li>
          <li
            className="decoration-transparent hover:underline hover:underline-offset-2 hover:decoration-4 hover:decoration-yellow-400 transition-all duration-500"
          >
            <a href="#contact">{t('contact_link_text')}</a>
          </li>
        </ul>
      </nav>

      <section
        className="col-span-2 col-start-2 row-start-1 row-end-3 bg-[url('/img/profile.jpg')] bg-top bg-cover"
      >
        <div className="z-20 -ml-48 mt-24">
          <h1 className="mb-4 font-bold text-white text-5xl">CLEBSON MOURA</h1>
          <h2
            className="ml-8 py-2 px-8 bg-yellow-400 text-2xl font-semibold inline-block -skew-x-[25deg]"
          >
            <div className="skew-x-[25deg]">FULL STACK DEVELOPER</div>
          </h2>
        </div>
      </section>
      </main>

    <section id="works" className="bg-gray-300 py-12">
      <h2 className="text-5xl text-center font-bold underline underline-offset-1 decoration-4 decoration-yellow-400 mb-24">
        {t('awesome_projects')}
      </h2>
      <div id="works_list" className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-24">
        <a
          href="https://campanhapickers.com.br/"
          target="_blank"
          className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all rounded-3xl overflow-hidden"
        >
          <img src="/img/pickers.png" alt="" />
        </a>
        <a
          href="https://promocaoschweppestonica.com.br/"
          target="_blank"
          className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all rounded-3xl overflow-hidden"
        >
          <img src="/img/promocaoschweppestonica.png" alt="" />
        </a>
        <a
          href="https://www.promomark.com.br/"
          target="_blank"
          className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all rounded-3xl overflow-hidden"
        >
          <img src="/img/promomark.png" alt="" />
        </a>
      </div>
    </section>
    </div>
  )
}

export default App
