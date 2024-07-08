import { Cards } from "./Cards"

export function Projects({projects}) {

    const cards = ['1', '2', '3', '4', '5']

    return (
        <>
            <h1 className="text-brand-brandColor text-3xl py-5 w-full flex justify-center items-center mt-20">Projetos</h1>
            <div className="font-archivo grid grid-cols-2 px-32 gap-5 justify-center items-center">
                {
                    projects.map((item) => (
                        <Cards
                            
                            name={item.name}
                            description={item.description}
                        />
                    ))
                }
            </div>
        </>
    )
}