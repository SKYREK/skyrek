"use client"

const routes = [
    {
        label: "Home",
        href: "/",
    },
    // {
    //     label: "Features",
    //     href: "/features",
    // },
    // {
    //     label: "Pricing",
    //     href: "/pricing",
    // },
    {
        label: "FAQ",
        href: "#",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Gallery",
        href: "/gallery",
    },
    {
        label: "Contact",
        href: "/contact",
    },
]

export const HeaderRoutes = ({className}: {className?: string}) => {
    return (
        <div className={className}>
            {routes.map((route) => (
                <a className=" min-w-[65px] text-center " href={route.href} key={route.href}>
                    {route.label}
                </a>
            ))}
        </div>
    )
}