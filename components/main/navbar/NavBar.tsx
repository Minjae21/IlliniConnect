import React from 'react'

type Props = React.PropsWithChildren<{}>

const NavBar = ({children}: Props) => {
  return (
    <header className="flex bg-blue-600 p-4">
            <nav className="w-full inline-block">
                <ul className="flex justify-between items-center">
                    <li className="float-left">

                            <a className="flex items-center text-white">
                                <i className="fa fa-paper-plane-o text-2xl"></i>
                                <p id="wrapper" className="text-xl font-semibold ml-2">Illini Connect</p>
                            </a>

                    </li>
                    <li className="float-right">
                    <button id="btn2" className="button2 mt-4 inline-block bg-transparent border-2 text-white text-lg py-4 px-8 rounded transition-all duration-500 hover:pr-8">
                            <span>Sign in</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
  )
}

export default NavBar