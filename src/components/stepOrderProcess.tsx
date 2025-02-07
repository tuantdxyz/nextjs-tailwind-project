import React from 'react';

interface StepOrderProcessProps {
    currentStep: number;
    paymentStatus: 'Unpaid' | 'Paid' | 'Cancelled';
}

const StepOrderProcess: React.FC<StepOrderProcessProps> = ({ currentStep, paymentStatus }) => {
    const steps = [
        { label: 'Personal Information', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
        { label: 'Payment Details', icon: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
        { label: 'Confirmation', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
        { label: 'Shipping', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    ];

    return (
        <div className="grid md:grid-cols-4 border-b border-cyan-200 mb-8">
            {steps.map((step, index) => (
                <div key={index} className={`p-6 border-r border-cyan-200 text-center relative z-1 ${(index <= currentStep || (paymentStatus === 'Paid' && index === 2)) ? '' : 'opacity-50'}`}>
                    <div className="flex items-center justify-center mb-4">
                        <div className={`w-12 h-12 rounded-full ${(index <= currentStep || (paymentStatus === 'Paid' && index === 2)) ? 'bg-cyan-500' : 'bg-cyan-300'} text-white flex items-center justify-center font-bold text-lg relative z-1`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon} />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-sm font-semibold text-cyan-700">{step.label}</h3>
                </div>
            ))}
        </div>
    );
};

export default StepOrderProcess;