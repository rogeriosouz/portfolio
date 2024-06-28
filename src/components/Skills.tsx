
export default function Skills() {
  const educations = [
    {
      name: "Curso de Desenvolvimento Web Full Stack | Dev Samurai",
    },
    {
      name: "Curso de Desenvolvimento Mobile | Dev Samurai",
    },
  ]

  const skills = [
    {
      name: "HTML5",
      icon: "images/html.svg",
      level: 100,
    },
    {
      name: "CSS3",
      icon: "images/css3.svg",
      level: 100,
    },
    {
      name: "JavaScript",
      icon: "images/javascript.svg",
      level: 100,
    },
    {
      name: "Typescript",
      icon: "images/typescript.svg",
      level: 100,
    },
    {
      name: "React.js",
      icon: "images/react.svg",
      level: 100,
    },
    {
      name: "Next.js",
      icon: "images/next.svg",
      level: 100,
    },
    {
      name: "Node.js",
      icon: "images/nodejs.svg",
      level: 100,
    },
    {
      name: "Tailwindcss",
      icon: "images/tailwindcss.svg",
      level: 100,
    },
  ]

  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-20">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Minhas
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <p className="relative text-sm text-gray-700">
            Full stack Developer | React.js | Next.js | Node.js | TypeScript
            | JavaScript
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="w-full">
          
          <div className="basis-1/2 w-full ">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              Skills
            </h3>

            <div className="w-full grid  gap-10 font-semibold sm:grid-cols-3 md:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10 rounded"
                    />
                  </div>
                  <div className="w-full flex-grow">
                    <h4 className="font-bold text-gray-950 mb-1">{skill.name}</h4>
                    <div className="h-2.5 w-full rounded-full bg-white">
                      <div
                        className="h-2.5 rounded-full bg-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
