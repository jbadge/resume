import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionTitleBorderClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'

export function Publications({
  showTitle = false,
  authors,
  author,
  title,
  organization,
  description,
  year,
}: {
  showTitle?: boolean
  authors: string
  author: string
  title: string
  organization?: string
  description?: string
  year?: string
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
        {showTitle ? 'Publications ' : null}
      </p>
      <article
        className={cx(sectionBodyClassNames, {
          [sectionBodyBorderClassNames]: showTitle,
        })}
      >
        <p className="justify-between mb-2 print:text-sm text-blue-900 tracking-wide">
          <p>
            <span className="justify-between mb-2 print:text-sm text-blue-900 tracking-wide">
              {authors}
              <span className="font-semibold">{author}</span>, et al.
              <span> {year} </span>
              <span className="italic">{title}</span>
            </span>
          </p>
          <p>
            <span>{description}, </span>
            <span>{organization}.</span>
          </p>
        </p>
      </article>
    </section>
  )
}
