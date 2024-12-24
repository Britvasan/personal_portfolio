import React from 'react';
import websiteImg1 from '../assets/socialmedia.png';
import websiteImg2 from '../assets/simpleblog.jpg';
import websiteImg3 from '../assets/codepen_clone.jpg';

const Projects = () => {
  const config = {
    line1:"These are some of my projects. I have Built these with React.js, Bootstrap and some more technologies. Kindly check them out.",
    projects : [
      {
        image: websiteImg1,
        description: "A Basic Social Media App project. Built With React.js.",
        link: "https://github.com/Britvasan/react_social_media_app"
      },
      {
        image: websiteImg2,
        description: "A Basic Blog Website Layout Built with Bootstrap and Html.",
        link: "https://github.com/Britvasan/bootstrap5-blog"
      },
      {
        image: websiteImg3,
        description: "Here is the Codepen clone project. Built with React.js.",
        link: "https://github.com/Britvasan/react_codepen_clone"
      }
    ]

  }
  return (
    <section id='projects' className="flex flex-col py-10 px-5 justify-center bg-primary text-white font-text-font">
          <div className="w-full">
            <div className="flex flex-col px-10 py-5">
              <h1 className="text-3xl border-b-4 border-secondary  mb-5 w-[130px] font-semibold">Projects</h1>
                <p>{config.line1}</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row px-10 gap-5">
              {config.projects.map((project) => (
                <a href={project.link}>
                  <div className='relative'>
                    <img className="h-[200px] w-[500px]" src={project.image} />
                    <div className='project-desc'>
                      <p className='text-center px-5 py-5'>{project.description}</p>
                      <div className='flex justify-center'>
                        <a className='btn' target='_blank' href={project.link}>View Project</a>
                      </div>
                    </div>
                    
                  </div>
                </a>
                

              ))}
              
            </div>
          </div>

    </section>
  );
};

export default Projects
