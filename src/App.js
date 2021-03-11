import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Contend from './Contend'

 function App() {
   return(
     <div className="main">
       <Navbar />
        
        <div className="maine">
          <Sidebar />
          <Contend />
        </div>

        
     </div>
   )
 }
 export default App