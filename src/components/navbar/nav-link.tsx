"use client"
import Link from 'next/link'
import React from 'react'

interface IRoute {
    route: {
        name: string
        path?: string
        subRoutes?: {
            name: string
            path: string
        }[]
    }
}

const NavBarLink: React.FC<IRoute> =({route}) => {
    const [showSubRoutes, setShowSubRoutes] = React.useState(false)
    return (
        <div className="relative">
            {
                route.path
                ? <Link href={route.path} className="hover:text-gray-900">{route.name}</Link>:
                <span onClick={()=>setShowSubRoutes(!showSubRoutes)} className="hover:text-gray-900">{route.name}</span>
            }
            {showSubRoutes && route.subRoutes && (
                <div className="absolute top-full left-0 bg-white shadow-md py-2 w-48">
                    {route.subRoutes.map((subRoute) => (
                        <Link
                            key={subRoute.name}
                            href={subRoute.path}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            {subRoute.name}
                        </Link>
                    ))}
            </div>
        )}
    </div>
    )
}

export default NavBarLink