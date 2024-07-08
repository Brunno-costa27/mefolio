import { Buttom } from "./Button";
import image from '../assets/image.svg'
import Typewriter from 'typewriter-effect';

export function Main() {

    return (
        <main className="text-darkScale-dark40 w-full flex justify-between items-center px-32 font-archivo">
            <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                    <p className="text-xl text-darkScale-dark40">Olá, eu sou</p>
                    <p className="text-4xl text-brand-brandColor">Brunno Costa</p>
                </div>
                <div className="flex flex-col py-5">
                    <p className="text-xl text-darkScale-dark40">
                        <Typewriter
                            options={{
                                strings: ['Desenvolvedor FullStack.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </p>
                </div>

                <div className=" flex py-4">
                    <Buttom title='Baixar currículo' />
                </div>
            </div>

            <div>
                <img src={image} alt="" />
            </div>
        </main>
    )
}