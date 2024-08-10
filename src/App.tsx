import React from 'react'
import resume from './resume.json'
import { Experience } from './Experience'
import { Education } from './Education'
import { AboutResume } from './AboutResume'
import { Skills } from './Skills'
import { Separator } from './Separator'
import { Header } from './Header'
import { Community } from './Community'
import { Honors } from './Honors'
import { Publications } from './Publications'
// import { SkillArea } from './SkillArea'

export function App() {
  return (
    <>
      <div
        className="
          print:hidden
          w-full bg-gray-700 text-gray-300 p-2 border-4 border-gray-300

          xl:block xl:fixed xl:w-auto xl:top-12 xl:-right-16 xl:transform xl:rotate-45 xl:bg-gray-700 xl:text-gray-300 xl:p-2 xl:border-4 xl:border-gray-300"
      >
        <a
          className="block w-full xl:w-60 text-sm text-center"
          href={`https://www.${resume.contact.webpage}.com`}
          data-ribbon="Back to Jeremy's Portfolio"
          title="Back to Jeremy's Portfolio"
        >
          Back to Jeremy&apos;s Portfolio
        </a>
      </div>

      <div className="mx-6 xl:mx-64 mb-20">
        <Header contact={resume.contact} />

        <div className="leading-snug">{resume.about}</div>

        {/* <SkillArea /> */}

        <Skills showTitle skills={resume.skills} />

        <Separator />

        {resume.education.map((education, index) => (
          <Education
            key={index}
            showTitle={index === 0}
            {...education}
            coursework={resume.coursework}
          />
        ))}

        <Separator />

        {resume.experience.map((experience, index) => (
          <Experience key={index} showTitle={index === 0} {...experience} />
        ))}

        <Separator />

        {resume.community.map((community, index) => (
          <Community key={index} showTitle={index === 0} {...community} />
        ))}

        <Separator />

        {resume.honors.map((honors, index) => (
          <Honors key={index} showTitle={index === 0} {...honors} />
        ))}

        <Separator />

        {resume.publications.map((publications, index) => (
          <Publications key={index} showTitle={index === 0} {...publications} />
        ))}

        <Separator />

        <AboutResume />

        <div className="my-24" />
      </div>
    </>
  )
}
