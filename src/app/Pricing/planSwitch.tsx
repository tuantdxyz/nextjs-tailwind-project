import React from 'react';

interface PlanSwitchProps {
    isAnnual: boolean;
    toggleBillingPlan: () => void;
}

const PlanSwitch: React.FC<PlanSwitchProps> = ({ isAnnual, toggleBillingPlan }) => {
    return (
        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
            <span className="flex justify-center items-center text-base font-medium mr-4">Monthly</span> {/* Thêm margin bên phải */}
            <button
                className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggleBillingPlan}
            >
                <div className="w-20 h-10 transition bg-indigo-500 rounded-full shadow-md outline-none"></div> {/* Tăng kích thước */}
                <div
                    className={`absolute inline-flex items-center justify-center w-8 h-8 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ${isAnnual ? 'translate-x-10' : 'translate-x-0'}`}
                ></div>
            </button>
            <span className="flex justify-center items-center text-base font-medium ml-4">Annually</span> {/* Thêm margin bên trái */}
        </div>
    );
};

export default PlanSwitch;