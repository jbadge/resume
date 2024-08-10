import React from 'react'
import cx from 'classnames'
import {
  sectionTitleClassNames,
  sectionTitleBorderClassNames,
  sectionBodyClassNames,
  sectionBodyBorderClassNames,
} from './styleConstants'

export function Community({
  showTitle = false,
  role,
  organization,
  description,
  years,
}: {
  showTitle?: boolean
  role: string
  organization: string
  description: string
  years: string
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
        {showTitle ? 'Community & Leadership ' : null}
      </p>
      <article
        className={cx(sectionBodyClassNames, {
          [sectionBodyBorderClassNames]: showTitle,
        })}
      >
        <p>
          <span className="font-bold text-blue-900 tracking-wide">{role}</span>
        </p>
        <p>
          <span className="mb-2 print:text-sm text-blue-900">
            {organization}
            <p>
              <span>
                {description}
                <span className="whitespace-nowrap">{years}</span>
              </span>
            </p>
          </span>
        </p>
      </article>
    </section>
  )
}
