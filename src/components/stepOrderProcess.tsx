import React from 'react';
import Image from 'next/image';

interface StepOrderProcessProps {
    currentStep: number;
    paymentStatus: 'Unpaid' | 'Paid' | 'Cancelled';
}

const StepOrderProcess: React.FC<StepOrderProcessProps> = ({ currentStep, paymentStatus }) => {
    const steps = [
        { label: 'Personal Information', icon: '/personal_info.svg' },
        { label: 'Payment Details', icon: '/payment_details.svg' },
        { label: 'Confirmation', icon: '/confirmation.svg' },
        { label: 'Shipping', icon: '/shipping.svg' },
    ];

    return (
        <div className="grid md:grid-cols-4 mb-8 shadow-lg border-t-4 border-blue-700">
            {steps.map((step, index) => (
                <div key={index} className={`p-6 text-center relative z-1 ${(index <= currentStep || (paymentStatus === 'Paid' && index === 2)) ? '' : 'opacity-50'}`}>
                    <div className="flex flex-col items-center mb-4">
                        <div className={`w-8 h-8 ${(index <= currentStep || (paymentStatus === 'Paid' && index === 2)) ? 'bg-blue-500' : 'bg-blue-300'} text-white flex items-center justify-center font-bold text-lg relative z-1 mb-2`}>
                            <Image src={step.icon} alt={`${step.label} icon`} width={16} height={16} />
                        </div>
                        <h3 className="text-sm font-semibold text-blue-700">{step.label}</h3>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="absolute md:right-0 right-1/2 md:top-1/2 md:transform md:-translate-y-1/2 transform translate-x-1/2 md:translate-x-0">
                            <Image
                                src="/arrow.svg"
                                alt="Arrow icon"
                                width={24}
                                height={24}
                                className="rotate-90 md:rotate-0"
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StepOrderProcess;