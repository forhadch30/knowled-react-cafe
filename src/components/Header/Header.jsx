import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center lg:max-w-6xl mx-auto border-b py-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;