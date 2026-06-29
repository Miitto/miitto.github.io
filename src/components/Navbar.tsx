import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@ui/navigation-menu";

import { SquareArrowOutUpRight } from "lucide-react";

export function Navbar() {
    return (
        <header className="border-border flex flex-row items-center justify-between border-b p-2 shadow">
            <a href="/" className="px-4 py-2 text-lg hover:underline">
                Miitto.dev
            </a>
            <NavigationMenu>
                <NavigationMenuList>
                    <Link href="/">Home</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="https://github.com/Miitto">
                        Github <SquareArrowOutUpRight />
                    </Link>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink href={href} className={navigationMenuTriggerStyle()}>
                {children}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}
