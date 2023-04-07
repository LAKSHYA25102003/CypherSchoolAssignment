import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import NavBar from './NavBar';
import DropDownOptions from './DropDownOptions';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <>
            <div className="hidden min-[1024px]:block bg-white ">
                <div className="flex flex-col items-center w-16 h-screen py-8 space-y-10 border-r-[2px] shadow-md pt-20 z-50">
                    <Link to="/"><div className="item1">
                        <HomeOutlinedIcon fontSize='medium' />
                        <div className='text-[10px]'>Home</div>
                    </div></Link>
                    <div className="item1 items-center">
                        <WhatshotIcon className='ml-2' fontSize='medium' />
                        <div className='text-[10px]'>Trending</div>
                    </div>
                    <div className="item1">
                        <PersonAddAltIcon className="ml-3" fontSize='medium' />
                        <div className='text-[10px]'>Following</div>
                    </div>
                    <div className="item1">
                        <QuestionAnswerOutlinedIcon className='mx-1' fontSize='medium' />
                        <div className='text-[10px]'>Review</div>
                    </div>
                    <div className="item1">
                        <TourOutlinedIcon fontSize='medium' />
                        <div className='text-[10px]'>Tour</div>
                    </div>
                    {localStorage.getItem('token') ? <div className="item1">
                        <AccountBoxOutlinedIcon fontSize='medium' />
                        <div className='text-[10px]'>Profile</div>
                    </div> :
                        <div className="item1">
                            <LoginOutlinedIcon fontSize='medium' />
                            <div className='text-[10px]'>Login</div>
                        </div>}

                </div>
            </div>
            <div className="onless1024px min-[1024px]:hidden ">
                <div className="lowernavbar fixed bg-white overflow-hidden rounded-md bottom-2 left-2 right-2 z-50">
                    <div className="flex justify-between h-14 border-t-[2px] border-[2px] space-x-9 shadow-lg px-7 rounded-lg">
                        <Link to="/"><div className="item1">
                            <HomeOutlinedIcon fontSize='medium' />
                            <div className='text-[10px]'>Home</div>
                        </div></Link>
                        <div className="item1 items-center">
                            <WhatshotIcon className='ml-2' fontSize='medium' />
                            <div className='text-[10px]'>Trending</div>
                        </div>
                        <div className="item1">
                            <PersonAddAltIcon className="ml-3" fontSize='medium' />
                            <div className='text-[10px]'>Following</div>
                        </div>
                        {localStorage.getItem('token') ? <div className="item1">
                            <AccountBoxOutlinedIcon fontSize='medium' />
                            <div className='text-[10px]'>Profile</div>
                        </div> : 
                        <Link to="/login"><div className="item1">
                            <LoginOutlinedIcon fontSize='medium' />
                            <div className='text-[10px]'>Login</div>
                        </div></Link>}

                        <div className="item1">
                            <QuestionAnswerOutlinedIcon className='mx-1' fontSize='medium' />
                            <div className='text-[10px]'>Review</div>
                        </div>
                        <div className="item1">
                            <TourOutlinedIcon fontSize='medium' />
                            <div className='text-[10px]'>Tour</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar