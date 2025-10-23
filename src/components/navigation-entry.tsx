import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu.js";
import {Link} from "react-router-dom";

export function NavigationMenuEntry() {
    return (
        <div className="flex justify-center">
            <NavigationMenu className="list-none">
                <NavigationMenuItem >
                    <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>FAQ</NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link to="/">Components</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link to="/">Features</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link to="/">Documentations</Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenu>
        </div>

    )
}