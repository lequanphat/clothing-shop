import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function BlogItem({title,desc, time, comments, image}) {
    const url = '/images/' +image;
    return ( <div>
        <img src={url} alt="img" className='w-[100%] h-[340px]'/>
        <div className="flex text-[1.6rem] mt-[16px] mb-[6px]">
            <p >
                <FontAwesomeIcon className="mr-[6px] text-primary" icon={faCalendar} />
                <span className='opacity-[0.6]'>{time}</span>
            </p>
            <p className='ml-[20px]'>
                <FontAwesomeIcon className="mr-[6px] text-primary" icon={faComment} />
                <span className='opacity-[0.6]'>{comments}</span>
            </p>
        </div>
        <h1 className='text-[2.4rem] font-medium mb-[16px] capitalize'>{title}</h1>
        <p className='text-[1.6rem] opacity-[0.8]'> {desc}</p>
    </div> );
}

export default BlogItem;