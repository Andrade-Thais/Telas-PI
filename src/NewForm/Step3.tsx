import * as Switch from '@radix-ui/react-switch';
import React from 'react'

export default function Step3() {
    return (

        <>

        <div className='xs:w-11/12 lg:w-1/2 mx-auto bg-accent p-3 m-4'>
            <h1 className="text-3xl font-bold text-center mb-4 text-secondary">Novo Cliente - 3</h1>
            <p className="text-3x1 font-bold text-center mb-9 text-secondary"> Informações Básicas (3/3)</p>



            <form className="flex items-center">
                <div className="xs:w-11/12 lg:w-1/2 mx-auto bg-neutral p-4 m-4">
                    <label className="text-secondary text-[15px] leading-none pr-[15px]" >
                        Deseja enviar E-mail?
                    </label>
                    <Switch.Root
                        className="w-[42px] h-[25px] bg-neutral A6 rounded-full relative shadow-[0_2px_10px] shadow-neutral A4 focus:shadow-[0_0_0_2px] focus:shadow-neutral data-[state=checked]:bg-secondary outline-none cursor-default "
                        id="enviar-email"

                    >
                        <Switch.Thumb className="block w-[21px] h-[21px] bg-neutral rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                    </Switch.Root>
                </div>
            </form>

            <form className="flex items-center ">
                <div className="xs:w-11/12 lg:w-1/2 mx-auto bg-neutral p-4 m-4">
                    <label className="text-secondary text-[15px] leading-none pr-[15px]">
                        Deseja enviar SMS?
                    </label>
                    <Switch.Root
                        className="w-[42px] h-[25px] bg-neutral A6 rounded-full relative shadow-[0_2px_10px] shadow-neutral A4 focus:shadow-[0_0_0_2px] focus:shadow-neutral data-[state=checked]:bg-secondary outline-none cursor-default"
                        id="enviar-email"
                    >
                        <Switch.Thumb className="block w-[21px] h-[21px] bg-neutral rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                    </Switch.Root>
                </div>
            </form>
            
            <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-arial leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                Próximo
            </button>
            </div>
        </>
    )
}