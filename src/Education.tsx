import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionTitleBorderClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'

export function Education({
  showTitle = false,
  school,
  degree,
  years,
  location,
}: {
  showTitle?: boolean
  school: string
  degree: string
  years: string
  location: string
}) {
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
          <span
          // className="font-bold text-blue-900 tracking-wide"
          >
            {school}
            <p
            // className="font-bold text-blue-900 tracking-wide"
            >
              <span>{location}</span>
            </p>
          </span>
          <span className="text-right whitespace-nowrap">{years}</span>
        </p>
        <ul className="mb-1">
          <li className="leading-snug">{degree}</li>
        </ul>
      </article>
    </section>
  )
}
