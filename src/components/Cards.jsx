import {Buttom } from './Button'
import logo from '../assets/logo.svg'

export function Cards({name, description}) {

    return (
        <div className='w-full flex flex-col gap-3 font-archivo text-darkScale-dark40 '>
            <div className='w-full h-full'>
            <img className='overflow-hidden bg-cover w-full h-56'  src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="logo" />
            </div>
            <p>{name}</p>
            <p className='text-brand-brandColor text-sm'>{description}</p>
            <div className='flex gap-2'>
                <div>
                    <Buttom title='Acessar o projeto'/>
                </div>

                <div className=''>
                    <Buttom  title='Acessar repositório'/>
                </div>
            </div>
        </div>
    )
}