export function Header() {

    return (
        <>
            <header className="w-full flex justify-between items-center px-32 py-3 text-brand-brandColor font-archivo">
                <div>
                    <p className="text-2xl ">&lt;Brunno Costa  /&gt;</p>
                </div>

                <div className="text-darkScale-dark40">
                    <ul className="flex gap-12">
                        <li className="p-2 hover:text-brand-brandColor">Início</li>
                        <li className="p-2 hover:text-brand-brandColor">Sobre mim</li>
                        <li className="p-2 hover:text-brand-brandColor">Projetos</li>
                        <li className="p-2 hover:text-brand-brandColor">Serviços</li>
                        <li className="p-2 hover:text-brand-brandColor">Habilidade</li>
                    </ul>
                </div>
            </header>
            <div className="px-32">
                <hr className="px-32 border-b-2 border-darkScale-dark30" />
            </div>
        </>

    )
}
