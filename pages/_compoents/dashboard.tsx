import Reac, { useState } from 'react';
import Image from 'next/image';
import useRankStore from '../../store/useRankStore';


const Dashboard = () => {
    const { rank } = useRankStore();
    
    return (
        <div className="flex flex-col items-center justify-start h-[670px] gap-2">
            <div className="w-full h-full flex items-center p-2 border-2" style={{ alignItems: "flex-start" }}>
                <div className="w-full grid grid-rows-3 grid-flow-col border-2">
                    <div className="row-span-3">
                        <div className="flex flex-col items-start">
                            <Image src={`/assets/RANK-IMG/${rank}.png`} alt="logo" width={180} height={180} />
                        </div>
                    </div>
                    <div className="col-span-2">02</div>
                    <div className="row-span-2 col-span-2">03</div>
                </div>
            </div>
            <div className="w-full h-full flex items-center p-2 border-2" style={{ alignItems: "flex-start" }}>
                <div className="w-full grid grid-rows-3 grid-flow-col border-2">
                    
                </div>
            </div>
            <div className="w-full flex items-center p-2 border-2">
                <div className="grid grid-rows-3 grid-flow-col gap-4 border-2">
                    <div className="row-span-3">01</div>
                    <div className="col-span-2">02</div>
                    <div className="row-span-2 col-span-2">03</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;