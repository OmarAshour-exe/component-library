'use client'

import React, {ReactNode} from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {breadcrumbs, BreadcrumbsVariant} from "@/styled-system/recipes";

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    capitalizeLinks?: boolean
}

const NextBreadcrumb = ({
                            homeElement,
                            separator,
                            capitalizeLinks
                        }: TBreadCrumbProps) => {

    const paths = usePathname() || '';
    const pathNames = paths.split('/').filter(path => path);

    return (
        <div>
            <ul className={breadcrumbs()}>
                <span className={pathNames.length === 0 ? breadcrumbs({text: 'bold'}) : ''}><Link
                    href={'/'}>{homeElement}</Link></span>
                {pathNames.length > 0 && separator}
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                        return (
                            <React.Fragment key={index}>
                                <span className={breadcrumbs({text: 'bold'})}>
                                    <Link href={href}>{itemLink}</Link>
                                </span>
                                {pathNames.length !== index + 1 && separator}
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NextBreadcrumb