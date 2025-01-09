"use client"
import useOutsideClick from '@/hooks/use-outside-click'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxCaretDown } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'

interface IRoute {
  route: {
    name: string
    path?: string
    subRoutes?: {
      name: string
      path: string
    }[]
  }
  closeMenu?: () => void
}

const NavBarLink: React.FC<IRoute> = ({ route, closeMenu }) => {
  const [showSubRoutes, setShowSubRoutes] = useState(false)

  const callback = () => {
    setShowSubRoutes(false);
  };
  const ref = useOutsideClick<HTMLDivElement>(callback);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="relative">
      {route.path ? (
        <Link
          href={route.path}
          className="text-primary-text hover:text-opacity-65 font-medium"
          onClick={() => closeMenu?.()}
        >
          {route.name}
        </Link>
      ) : (
        <div
          onClick={() => setShowSubRoutes(!showSubRoutes)}
          className="text-primary-text font-medium cursor-pointer hover:text-opacity-65 flex items-center gap-1"
        >
          <span>{route.name}</span>
          <span className="hidden md:block">
            <RxCaretDown size={24} />
          </span>
        </div>
      )}
      <AnimatePresence>
        {showSubRoutes && route.subRoutes && (
          <>
            {/* SubRoutes for Desktop */}
            <motion.div
              ref={ref}
              className="absolute top-[220%] z-50 space-y-4 rounded-lg transform -translate-x-1/4 bg-white py-6 w-48 xl:w-[292px] shadow-[0_0_10px_0_rgba(0,0,0,0.2)] hidden md:block"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
            >
              {route.subRoutes.map((subRoute) => (
                <Link
                  key={subRoute.name}
                  href={subRoute.path}
                  onClick={callback}
                  className="block w-fit mx-4 px-2 text-sm text-primary-text hover:border-r-2 hover:border-l-2 hover:border-[#B3831C] font-medium hover:text-opacity-65"
                >
                  {subRoute.name}
                </Link>
              ))}
            </motion.div>

            {/* SubRoutes for Mobile */}
            <motion.div
              ref={ref}
              className="bg-[#f5f5f5] py-4 w-full block md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
            >
              {route.subRoutes.map((subRoute) => (
                <Link
                  key={subRoute.name}
                  href={subRoute.path}
                  onClick={() => {
                    callback();
                    closeMenu?.();
                  }}
                  className="block mx-4 px-2 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
                >
                  {subRoute.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBarLink;
