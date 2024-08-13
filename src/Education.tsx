import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionTitleBorderClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'
import { useParams } from 'react-router-dom'

export function Education({
  showTitle = false,
  school,
  degree,
  years,
  location,
  coursework = [],
}: {
  showTitle?: boolean
  school: string
  degree: string
  years: string
  location: string
  coursework: {
    course: string
    show: string
    areas: string[]
  }[]
}) {
  const { area } = useParams<{ area: string | undefined }>()

  const containsPhysics =
    degree.toLowerCase().includes('physics') &&
    degree.toLowerCase().includes('bachelor')

  const coursesToShow =
    area === undefined
      ? coursework
      : coursework.filter((course) => course.course.includes(area))

  return (
    <section className="grid grid-cols-12 my-2">
      <p
        className={cx(
          'font-bold text-blue-900 tracking-widest',
          sectionTitleClassNames,
          {
            [sectionTitleBorderClassNames]: showTitle,
          }
        )}
      >
        {showTitle ? 'Education' : null}
      </p>
      <article
        className={cx(sectionBodyClassNames, {
          [sectionBodyBorderClassNames]: showTitle,
        })}
      >
        <p className="flex justify-between mb-2 font-bold print:text-sm text-blue-900">
          <span>
            {school}
            <p>
              <span>{location}</span>
            </p>
          </span>
          <span className="text-right whitespace-nowrap">{years}</span>
        </p>
        <ul className="mb-1">
          <li className="leading-snug">{degree}</li>
        </ul>
        {containsPhysics && (
          <div className="additional-info">
            <h3 className="font-bold text-blue-900">
              Relevant Programming Coursework:
            </h3>
            <p
              className="leading-snug"
              dangerouslySetInnerHTML={{
                __html: coursesToShow
                  .filter((course) => course.show === 'paragraph')
                  .map((course) => {
                    const areas = course.areas
                    const formattedAreas =
                      areas.length > 1
                        ? areas.slice(0, -1).join(', ') +
                          ' and ' +
                          areas[areas.length - 1]
                        : areas[0]
                    return `${course.course} using ${formattedAreas}`
                  })
                  .join(' '),
              }}
            ></p>
            <ul>
              {coursesToShow
                .filter((course) => course.show === 'list')
                .map((course, index) => {
                  const areas = course.areas
                  const formattedAreas =
                    areas.length > 1
                      ? areas.slice(0, -1).join(', ') +
                        ' and ' +
                        areas[areas.length - 1]
                      : areas[0]
                  return (
                    <li
                      key={index}
                      className="leading-snug no-bullets"
                      dangerouslySetInnerHTML={{
                        __html: `${course.course} in ${formattedAreas}`,
                      }}
                    ></li>
                  )
                })}
            </ul>
          </div>
        )}
      </article>
    </section>
  )
}
