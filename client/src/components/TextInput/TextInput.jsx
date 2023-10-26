import clsx from 'clsx';

function TextInput({ title, error, errormessage, changing, ...props }) {
    const textInputClasses = clsx(
        'w-[100%] px-[12px] py-[8px] outline-none border-[1px]  rounded-[2px]  text-[1.6rem] ',
        {
            'border-[#4cd137] ': changing,
            'border-[black]': !changing,
            'border-[red] bg-[rgba(255,0,0,0.03)]': error,
        },
    );
    return (
        <div className="flex flex-col items-center mb-[16px]">
            {title && <p className="w-[100%] text-start text-[1.5rem] font-medium mb-[4px]">{title}</p>}
            <input {...props} className={textInputClasses} />
            {error && <p className="w-[100%] text-[red] text-start text-[1.4rem]  mt-[4px] ">{errormessage}</p>}
        </div>
    );
}

export default TextInput;
