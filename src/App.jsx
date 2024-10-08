
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Feed from './Components/Feed'


import Body from './Components/Body'
import Watch from './Components/Watch'
import SearchPage from './Components/SearchPage'

import { useSelector } from 'react-redux'

import Error from './Components/Error'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element : <Body/>,
    children:[
      {
        path:"/", 
        element:<Feed/>
      },{
        path:"/watch",
        element:<Watch/>,
        errorElement:<Error/>
      },
      {
        path:"/results",
        element:<SearchPage/>,
        errorElement:<Error/>
      },
     
    ]
  }
])


function App() {
  const {theme}  = useSelector((store)=>store.app)
  // console.log(theme);

 return (
<>
       <div className={theme && 'bg-black text-white '  }>
       
       <RouterProvider router={appRouter}/>

       </div>
       </>
     
       
      

  )
}

export default App
