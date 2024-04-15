import * as Form from '@radix-ui/react-form';
import React from 'react'



export default function Step1() {
    return (

        <>
            {/* Navbar */}
            <nav className="bg-neutral p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-xl">Logo</div>
                    <div className="hidden lg:flex space-x-4">
                        <a href="#" className="text-secondary hover:text-gray-300">Home</a>
                        <a href="#" className="text-secondary hover:text-gray-300">Novo Cliente</a>
                        <a href="#" className="text-secondary hover:text-gray-300">Agenda</a>
                        <a href="#" className="text-secondary hover:text-gray-300">Financeiro</a>

                    </div>
                </div>
            </nav>

            {/* Main Content */}

            <Form.Root className="xs:w-11/12 lg:w-1/2 mx-auto bg-accent p-4 my-4">
                <Form.Field className="mb-[20px] " name="formulario">
                    <h1 className="text-3xl font-bold text-center mb-9 text-secondary">Novo Cliente </h1>
                    <p className="text-3x1 font-bold text-center mb-9 text-secondary"> Informações Básicas (1/3)</p>
                    <div className="flex flex-wrap items-baseline justify-between ">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center">Tipo de Cadastro: </Form.Label>
                        <select className='w-11/12 text-center rounded-lg p-3'>
                            <option disabled> Selecione a opção desejada: </option>

                            <option value="Cliente"> Pessoa Física </option>
                            <option value="Cleinte"> Pessoa Jurídica</option>
                        </select>
                    </div>
                </Form.Field>

                <Form.Field className="mb-[20px]" name="formulario">

                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center">Tipo de Contato: </Form.Label>
                        <select className='w-11/12 text-center rounded-lg p-3'>
                            <option disabled> Selecione a opção desejada: </option>
                            <option value="Cliente"> Contrato </option>
                            <option value="Cleinte"> Prospecção</option>
                        </select>
                    </div>
                </Form.Field>

                <Form.Field name="Nome" className="mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"> Digite seu nome:
                        </Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='Nome' />
                    </div>

                </Form.Field>

                <Form.Field name="Sobrenome" className="mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"> Digite seu Sobrenome:
                        </Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='Sobrenome' />
                    </div>

                </Form.Field>

                <Form.Field name="Email" className="mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"> Digite seu Email:
                        </Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='Email' />
                    </div>

                </Form.Field>

                <Form.Field name="Telefone" className="mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"> Digite seu Telefone:
                        </Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='Telefone' />
                    </div>

                </Form.Field>

                <Form.Field name="Aniversario" className="mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center">Digite o dia do seu aniversário:</Form.Label>
                        <input type="date" className="w-11/12 text-center rounded-lg p-3" placeholder='Dia do Aniversário' />
                    </div>

                </Form.Field>

                <Form.Field name="CPF" className="mb-[30px]">
                    <div className="flex flex-wrap items-baseline justify-between">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center">Digite seu CPF:</Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='Digítos do CPF' />
                    </div>

                </Form.Field>

                <Form.Field name="Celular" className="mb-[30px]">
                    <div className="flex flex-wrap  items-baseline justify-between">
                        <Form.Label className="mb-4 text-[15px] w-11/12 leading-[5px] text-secondary text-center"> Digite seu Celular:
                        </Form.Label>
                        <input className="w-11/12 text-center rounded-lg p-3" placeholder='Celular' />
                    </div>

                </Form.Field>

                <Form.Submit asChild>
                    <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[50px] items-center justify-center rounded-[3px] bg-white px-[10px] font-arial leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                        Próximo
                    </button>
                </Form.Submit>
            </Form.Root>
        </>
    );

}
