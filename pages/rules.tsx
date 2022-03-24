import type { NextPage } from 'next'

const Rules: NextPage = () => {
  return (
    <div className='bg-slate-800 text-white'>
      <div>
        <ul className='flex flex-row bg-slate-900'>
          <li><a className='navlink' href='/'>Home</a></li>
          <li><a className='navlink active'>Rules</a></li>
        </ul>
      </div>
      <div className='flex justify-center h-screen'>

        <div className='flex flex-col text-center w-2/4'>  
          <h1 className='mt-40 text-3xl font-bold'>Rules of the game</h1>

          <p className='mt-12'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br></br> 
            <br></br>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
          </p>
          
          <div className='flex justify-center text-left'>
            <ol className='w-2/3 mt-14 space-y-4'>
              <li><strong>1. </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li><strong>2. </strong>Ac tincidunt vitae semper quis. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.</li>
              <li><strong>3. </strong>Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu.</li>
              <li><strong>4. </strong>Sapien faucibus et molestie ac feugiat. Sit amet nisl purus in mollis nunc.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rules
