import React from 'react'
// import "../../App.css";
// import Caraousle from '../BasicLayouts/Carousel';
import Carousel from '../BasicLayouts/Carousel';

const HomeContent = () => {
    return (
        <div className="parentComp mb-4 ">
            <div className="hidden min-[750px]:flex">
                <div className="left w-[100%]">
                    <h1 className="mainContent ml-6 pt-20 text-[3rem] min-[1024px]:ml-16 font-bold leading-normal  text-ellipsis">
                        Welcome to <span className='text-orange-400'>the Future</span> of Learning!
                    </h1>
                    <h1 className="mt-6 text-ellipsis ml-6 min-[1024px]:ml-16 text-2xl">
                        Start Learning by best creators for <span className='ml-1 font-medium text-orange-400'>absolutely free.</span>
                    </h1>

                </div>
                <div className="right mt-20 pl-4 min-[1024px]:mt-4 mr-5 ">
                    <img className='rounded-xl' src="https://ik.imagekit.io/cipherschools/CipherSchools/for-creator_sNs5MAVE7.jpg" />
                </div>
            </div>

            <div className="min-[750px]:hidden flex items-center">
                <div className="left">
                    <div className="mainContent ml-7 pt-5 grow text-4xl font-bold leading-normal max-w-[350px] justify-center text-ellipsis">
                        Welcome to <span className='text-orange-400'>the Future</span> of Learning!
                    </div>
                    <h1 className="type mt-3 grid-rows-1 text-ellipsis ml-6 min-[1024px]:ml-16 text-lg">
                        Start Learning by best creators for <span className='ml-1 text-orange-400'>absolutely free</span>.
                        {/* <h1>This is a typing demo.</h1> */}
                    </h1>
                    <div className="right mt-5 pl-4 min-[1024px]:mt-4 mr-5 ">
                        <img className='rounded-xl' src="https://ik.imagekit.io/cipherschools/CipherSchools/for-creator_sNs5MAVE7.jpg" />
                    </div>
                    <div className="right mt-5 pl-4 min-[1024px]:mt-4 mr-5 ">
                        <img className='rounded-xl' src="https://ik.imagekit.io/cipherschools/CipherSchools/for-student_nm1kTXQDf.jpg" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeContent