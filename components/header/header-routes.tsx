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
        href: "/faq",
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
                <a href={route.href} key={route.href}>
                    {route.label}
                </a>
            ))}
        </div>
    )
}