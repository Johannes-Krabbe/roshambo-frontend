import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-slate-800 text-white'>
      <div>
        <ul className='flex flex-row bg-slate-900'>
          <li><a className='navlink active'>Home</a></li>
          <li><a className='navlink' href='rules'>Rules</a></li>
        </ul>
      </div>
      <div className='h-screen'>
        <h1>Das hier ist Home</h1>
      </div>
    </div>
  )
}

export default Home
