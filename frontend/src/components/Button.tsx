interface ButtonProps {
    text: string,
    handleClick: () => void
};

export const Button: React.FC<ButtonProps> = ({text, handleClick}) => {
    return (
    <button className='bg-red-500 text-white mx-3' onClick={handleClick}>{text}</button>
    );

}