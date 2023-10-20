import {  Link } from 'react-router-dom';
function MenuItem({ to, content }) {
    return ( 
        <li className='group relative'>
        <Link className=' text-[1.5rem] font-bold px-[20px] py-[4px] ' to={to}>{content}</Link>
        <span className='group-hover:w-[60%] group-hover:animate-[grow_.5s_linear_forwards] absolute bottom-[-2px] left-[50%] bg-[black] w-[0%] h-[3px] translate-x-[-50%] '></span>
        </li>
     );
}

export default MenuItem;