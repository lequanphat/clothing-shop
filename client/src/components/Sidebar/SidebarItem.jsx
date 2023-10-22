import {Link} from 'react-router-dom'
function SidebarItem({title, items=[], checkbox}) {
    return ( 
        <div className='mb-[40px]'>
            <h1 className="text-[2.2rem] mb-[1.8rem] font-medium">{title}</h1>
            <ul>
            {items.map((item,index) => {
                let idcheck = 'checkbrand' +index;
                return <li key={index} className='text-[1.6rem] py-[6px] font-medium opacity-[0.8]'>{
                    (checkbox)?<li className='flex items-center'><input className='mr-[8px] accent-primary text-[white]' id={idcheck} type='checkbox'/><label htmlFor={idcheck}>{item}</label></li>:<Link>{item}</Link>
                }</li>
            })}
            </ul>
            
        </div>
     );
}

export default SidebarItem;