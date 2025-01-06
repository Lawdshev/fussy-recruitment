"use client"
import Link from 'next/link'
import React from 'react'
import {RxCaretDown} from 'react-icons/rx'

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
        {route.path ? (
          <Link
            href={route.path}
            className="text-primary-text hover:text-opacity-65 font-medium"
          >
            {route.name}
          </Link>
        ) : (
          <div
            onClick={() => setShowSubRoutes(!showSubRoutes)}
            className="text-primary-text font-medium cursor-pointer hover:text-opacity-65 flex items-center gap-1"
          >
            <span>{route.name} </span>
            <span>
              <RxCaretDown size={24} />
            </span>
          </div>
        )}
        {showSubRoutes && route.subRoutes && (
          <div className="absolute top-[220%] rounded-lg transform -translate-x-1/4 bg-white shadow-md py-2 w-48 xl:w-[292px]">
            {route.subRoutes.map((subRoute) => (
              <Link
                key={subRoute.name}
                href={subRoute.path}
                className="block px-4 py-2 text-sm text-primary-text font-medium hover:text-opacity-65"
              >
                {subRoute.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
}

export default NavBarLink