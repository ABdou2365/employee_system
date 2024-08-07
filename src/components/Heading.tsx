"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <div className="border-b-2 pb-8 h-16 bborder-zinc-700 mb-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-4xl">Employee System</p>
              </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
      </div>
  )
} 


