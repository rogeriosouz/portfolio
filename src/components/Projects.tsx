import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.jpg'
import project4 from '../assets/projects/project4.png'

export default function Projects() {
  const projects = [
    {
      title: "Açaí do Brasil",
      description: "Açaí do Brasil, uma plataforma de e-commerce dedicada a oferecer o melhor açaí diretamente da Amazônia para o mundo! Este projeto visa criar uma experiência de compra online intuitiva",
      image: project1,
      link: "https://github.com/rogeriosouz/Acai-do-Brasil-Loja-Online-de-Acai",
      colSpan: "col-span-1",
    },
    {
      title: "CREATOR WEB",
      description: "Creator-Website é um editor online de páginas web que permite a criação de projetos utilizando HTML, CSS e JavaScript. Com uma interface intuitiva e amigável, o Cretor-Web facilita a construção de páginas web diretamente no navegador, sem a necessidade de configurações complexas.",
      image: project2,
      link: "https://github.com/rogeriosouz/CREATOR-WEBSITE",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "PRODUCT-MART",
      description: "uma aplicação de comércio eletrônico que permite aos usuários navegar, pesquisar e comprar produtos de maneira fácil e eficiente. Com uma interface amigável e funcionalidades robustas",
      image: project3, 
      link: "https://github.com/rogeriosouz/PRODUCT-MART",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Delícia Burger",
      description: "Delícia Burger é um site de vendas de hambúrgueres artesanais, dedicados a proporcionar uma experiência gastronômica única.",
      image: project4,
      link: "https://github.com/rogeriosouz/Delicia-Burguer",
      colSpan: "col-span-1",
    },

  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador Full stack.
            </p>

            <a
              href="https://github.com/rogeriosouz?tab=repositories"
              target='_blank'
              className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700"
            >
              meus projetos no GitHub
            </a>

            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default overflow-hidden rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
      
                <a href={project.link} target="_blank" className="absolute hover:cursor-pointer inset-0 text-center flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-gray-900/60 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-xs text-gray-200">{project.description}</p>
                </a>
              </div>
            ))}
          </div>
         
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}
