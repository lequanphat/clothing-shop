import { faCalendar, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function BlogItem({author,title, desc, time, likes, comments,image, short}) {
    const url = '/images/' +image;
    
    
    return ( <div >
        <img src={url} alt="img" className='w-[100%] h-[260px]'/>
        <div className="flex text-[1.6rem] mt-[16px] mb-[6px]">
            <p >
                <FontAwesomeIcon className="mr-[6px] text-primary" icon={faHeart} />
                <span className='opacity-[0.6]'>{likes}</span>
            </p>
            <p className='ml-[20px]'>
                <FontAwesomeIcon className="mr-[6px] text-primary" icon={faComment} />
                <span className='opacity-[0.6]'>{comments}</span>
            </p>
            {
                !short && <p className='ml-[20px]'>
                <FontAwesomeIcon className="mr-[6px] text-primary" icon={faCalendar} />
                <span className='opacity-[0.6]'>{time}</span>
            </p>
            }
        </div>
        <h1 className='text-[1.8rem] font-medium mb-[4px] capitalize line-clamp-1'>{title}</h1>
        { short && <div className='flex '>
            <h1 className='text-[1.5rem] font-medium text-primary mr-[4px]'>{author}</h1>
            <h1 className='text-[1.5rem] opacity-[0.6]'> - {time}</h1>
        </div> }
        { !short && <p className='text-[1.4rem] opacity-[0.8]'> {desc}</p>}
    </div> );
}

export default BlogItem;