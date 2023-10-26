function TextInput({title, error, errormessage,  ...props}) {
    return ( 
        <div className="flex flex-col items-center mb-[16px]">
        {title && <p className='w-[100%] text-start text-[1.5rem] font-medium mb-[4px]'>{title}</p>}
            <input {...props} className=" w-[100%] px-[12px] py-[8px] outline-none border-[1px] border-[black] rounded-[2px]  text-[1.6rem]"/>
            {error && <p className="w-[100%] text-[red] text-start text-[1.4rem] font-[450] mt-[4px] ">{errormessage}</p>}
        </div>
     )
}

export default TextInput;