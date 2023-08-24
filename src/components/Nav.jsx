import { useState } from "react"

function Nav() {
    let Links = [
        {name:'Product', link:'/'},
        {name:'Features', link:'/'},
        {name:'Marketplace', link:'/'},
        {name:'Company', link:'/'},
    ]

    let [open, setOpen] = useState(false)
    return (
      <>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                <span className="text-5xl text-indigo-500 mr-1 pt-2">
                <ion-icon name="logo-react"></ion-icon>
                </span>
            </div>
            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-gray-400">
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-gray-900 bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 md:pr-0 pl-9 pr-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                {Links.map((menuElement) => {
                    return (
                    <li key={menuElement.name} className="md:ml-8 text-xl md:my-0 my-7">
                        <a href={menuElement.link} className="text-gray-800 hover:text-gray-400 duration-500 md:text-gray-300">
                            {menuElement.name}
                        </a>
                    </li>)
                })}
                <button className="md:bg-gray-700 bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500 w-full">
                    Start free trial
                </button>
            </ul>
        </div>
      </div>
      </>
    )
  }
  
  export default Nav