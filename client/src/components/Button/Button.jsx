import  clsx from 'clsx'

function Button({ content, primary, outline, fullwidth, textSize, medium, small, ...props }) {
    const buttonClassnames = clsx(
        'text-[white] font-medium  rounded-[2px] uppercase  ',
        {
            'py-[8px] px-[24px] text-[1.6rem]': medium,
            'px-[8px] py-[4px] text-[1.3rem]': small,
            'w-[100%]': fullwidth,
            'bg-primary': primary,
            'bg-[transparent] text-primary': outline,
        }
    )
    return (
        <button
            {...props}
            className={buttonClassnames}
        >
            {content}
        </button>
    );
}

export default Button;
