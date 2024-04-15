import * as Avatar from '@radix-ui/react-avatar';
import * as Form from '@radix-ui/react-form';
import React from 'react'

export default function Step2() {
    return (
        <>  
       

            <Form.Root className="xs:w-11/12 lg:w-1/2 mx-auto bg-accent p-4 m-4">
                <Form.Field className="mb-[20px] " name="formulario">
                </Form.Field>
                <h1 className="text-3xl font-bold text-center mb-8 text-secondary">Novo Cliente</h1>
                <p className="text-3x1 font-bold text-center mb-9 text-secondary"> Informações Básicas (2/3)</p>

                <Form.Field name="CEP" className="mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between  ">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center">Digite seu CEP:</Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='CEP' />
                    </div>

                </Form.Field>

                <Form.Field name="Endereço" className="mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 w-11/12 text-[15px] leading-[5px] text-secondary text-center"> Digite seu Endereço:
                        </Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='' />
                    </div>

                </Form.Field>

                <Form.Field name="Número" className="grid mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 w-11/12 text-[15px] leading-[5px] text-secondary text-center">Digite o Número:
                        </Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='' />
                    </div>

                </Form.Field>

                <Form.Field name="Complemento" className="grid mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 w-11/12 text-[15px] leading-[5px] text-secondary text-center"> Digite seu Telefone:
                        </Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='' />
                    </div>

                </Form.Field>

                <Form.Field name="Cidade" className="grid mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 w-11/12 text-[15px] leading-[5px] text-secondary text-center">Cidade:</Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='' />
                    </div>

                </Form.Field>

                <Form.Field name="Estado" className="grid mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 w-11/12 text-[15px] leading-[5px] text-secondary text-center">Estado:</Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='' />
                    </div>

                </Form.Field>
                <div className="flex justify-between space-x-4">
                    <Form.Submit asChild>
                        <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-arial leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                            Voltar
                        </button>
                    </Form.Submit>
                    <Form.Submit asChild>
                        <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-arial leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                            Próximo
                        </button>
                    </Form.Submit>
                </div>
            </Form.Root>

        </>
    );

}



