import smile from '../assets/smile.svg'
import mail from '../assets/mail.svg'
import instagram from '../assets/instagram.svg'
import phone from '../assets/phone.svg'


export function AboutMe(){

    return (
        <div className='w-full flex flex-col text-darkScale-dark40 font-archivo px-32 gap-20'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-2xl text-brand-brandColor'>Sobre mim</p>
                <p className='text-center'>Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora) sou o criador do eFront, um material de ensino de frontend pela internet. Atualmente sou freelancer como Frontend Developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.</p>
            </div>

            <div className='w-full flex justify-center items-center gap-24'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className=' bg-darkScale-dark30 p-3 rounded-full'>

                    <img  src={smile} alt="" />
                    </div>
                    <p>Nome</p>
                    <p>Brunno Costa</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                <div className=' bg-darkScale-dark30 p-3 rounded-full'>

                <img  src={mail} alt="" />
                </div>

                    <p>E-mail</p>
                    <p>sbrunno.costa@gmail.com</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className=' bg-darkScale-dark30 p-3 rounded-full'>

                <img src={instagram} alt="" />
                    </div>
                    <p>Instagram</p>
                    <p>brunno_costa31</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className=' bg-darkScale-dark30 p-3 rounded-full'>

                <img  src={phone} alt="" />
                    </div>
                    <p>Telefone</p>
                    <p>(84) 96492087</p>
                </div>
            </div>
        </div>
    )
}