import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { RegisterSchema } from '../../constants/retgister';
import { yupResolver } from "@hookform/resolvers/yup"

interface IRegisterDialog {
    showModal: boolean;
    challengeKey: string | null;
    challengeKeyVerified: boolean;
    setShowModal: (value: boolean) => void
    setChallengeKeyVerified: (value: boolean) => void
    setChallengeKey: (value: string | null) => void
    onGetChallengeKey: (email: string) => void
    onVerifyChallengeKey: (email: string, challengeKey: string) => void
    onDisconnect: () => void
}

export type RegisterFormValues = {
    email: string;
    confirmEmail: string;
};

export default function RegisterDialog({
    showModal,
    challengeKey,
    setChallengeKey,
    challengeKeyVerified,
    setChallengeKeyVerified,
    setShowModal,
    onGetChallengeKey,
    onVerifyChallengeKey,
    onDisconnect
}: IRegisterDialog) {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [challengeValue, setChallengeValue] = useState<string>(''); 
    const {
        register: registerForms,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<RegisterFormValues>({
        resolver: yupResolver(RegisterSchema),
    });

    const onChallengeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChallengeValue(e.target.value);
    }

    const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
        if(!challengeKeyVerified) {
            onGetChallengeKey(data.email);  
            setEmail(data.email);
            return;
        }else {
            if(challengeValue === challengeKey){
                onVerifyChallengeKey(email, challengeKey);
            }else{
                setError('Invalid challenge key, please check your email and try again.');
            }
        }
    };

    return showModal &&
        (
            <React.Fragment>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none"
                >
                    <div className="relative my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-yellow-50 outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-2xl font-semibold">
                                    {!challengeKeyVerified ? 'Sign up' : 'Verify Challenge'}
                                </h3>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {!challengeKeyVerified ? (
                                    <div className="relative p-6 flex-auto">
                                        <div className="pb-5">
                                            <label htmlFor="email" className="block text-left text-xl font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                {...registerForms('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: 'Please enter a valid email address',
                                                    },
                                                })}
                                                className={`shadow appearance-none border-black-500 rounded-xl rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmEmail ? 'border-red-500' : ''}`}
                                            />
                                            {errors.email && <span className="flex items-start text-left text-red-600">{errors.email.message}</span>}
                                        </div>
                                        <div>
                                            <label htmlFor="confirmEmail" className="block text-left text-xl font-medium text-gray-700">
                                                Confirm Email
                                            </label>
                                            <input
                                                id="confirmEmail"
                                                type="email"
                                                {...registerForms('confirmEmail', {
                                                    required: 'Please confirm your email',
                                                    validate: value => value === watch('email') || 'The emails do not match',
                                                })}
                                                className={`shadow appearance-none border-black-500 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmEmail ? 'border-red-500' : ''}`}
                                            />
                                            {errors.confirmEmail && <span className="flex items-start text-left text-red-600">{errors.confirmEmail.message}</span>}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative p-6 flex-auto">
                                        <input
                                            id="verifyChallengeKey"
                                            type="string"
                                            placeholder="Typing your challenge key"
                                            onChange={onChallengeChange}
                                            className={`w-200 mb-4 shadow appearance-none border-black-500 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmEmail ? 'border-red-500' : ''}`}
                                        />
                                        {errors.confirmEmail && <span className="flex items-start text-left text-red-600">{errors.confirmEmail.message}</span>}
                                        <p className="flex items-start text-left text-gray-400">JIBTAB, Would be send challenge key to your email.</p>
                                        <p className="flex items-start text-left text-gray-400">Challenge key will expired in 2 minutes.</p>
                                    </div>
                                )}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false);
                                            setChallengeKeyVerified(false);
                                            onDisconnect();
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        {!challengeKeyVerified ? 'Sign up' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </React.Fragment>
        )
}