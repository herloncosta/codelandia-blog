import magnifierIcon from '../assets/magnifier.svg'

export const Header = () => {
    return (
        <header className="w-full py-12 px-6 bg-dark10 sm:py-16 sm:px-8">
            <section className="md:max-w-[1216px] md:mx-auto">
                <section>
                    <a href="#">
                        <h1 className="text-brand text-[24px] sm:text-4xl text-center font-space">
                            Code<span className="text-white">lândia</span>
                        </h1>
                    </a>
                </section>

                <section className="relative mt-8 sm:mt-12">
                    <div className="absolute left-6 top-4 sm:top-4">
                        <img
                            className="h-[18px] sm:h-[32px]"
                            src={magnifierIcon}
                            alt="magnifier icon field search"
                        />
                    </div>

                    <input
                        className="w-full bg-dark30 py-4 px-6 pl-12 sm:pl-16 text-gray20 text-sm sm:text-xl font-inter border-2 border-gray10 rounded-lg"
                        type="text"
                        placeholder="Pesquisar no blog"
                    />
                </section>
            </section>
        </header>
    )
}
