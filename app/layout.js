import './globals.css'
import Link from 'next/link';

export const metadata = {
  title: 'Christopher Strauss portfolio',
  description: 'The skills portfolio of Christopher Strauss',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <div className='flex'>
            <div className='flex justify-center items-center topNavDiv h-screen'>
                <div className='w-full h-full'>
                  {children}
                </div>
            </div>
            <div className='sideNavDiv justify-center flex pr-40'>
              <div className='flex justify-around items-center w-full h-20 z-20'>
                  <ul>
                    <Link href="/">
                        <button className='text-2xl mt-12 text-zinc-50 rounded-full px-3 py-2 colSecondary btnFontCol'>
                          Me
                        </button>
                    </Link>
                  </ul>
                  <ul> 
                    <Link href="/showcase">
                      <button className='text-2xl mt-12 text-zinc-50 rounded-full px-3 py-2 colSecondary btnFontCol'>
                        Showcase
                      </button>
                    </Link>
                  </ul>
                  <ul>
                    <Link href="/contact">
                      <button className='text-2xl mt-12 text-zinc-50 rounded-full px-3 py-2 colSecondary btnFontCol'>
                        Contact
                      </button>
                    </Link>
                  </ul>
                  <ul>
                    <Link href="/">
                      <button className='text-2xl mt-12 text-zinc-50 rounded-full px-3 py-2 colPrimary btnFontCol'>
                        Resume
                      </button>
                    </Link>
                  </ul>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
export default RootLayout;