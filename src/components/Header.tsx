import logo from './../assets/logo.svg'

export function Header(){
    return ( 
   <header className="bg-gray-header pt-10 px-0 pb-28">
        <div className="w-full max-w-[1120px] mx-auto px-6 flex justify-center items-center">
            <img src={logo} alt="" />
            
        </div>
    </header>
    )
}