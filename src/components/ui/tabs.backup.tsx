import * as React from "react"
import { cn } from "../../lib/utils"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {}
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("border-b border-gray-700", className)} {...props} />
    )
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)}
            {...props}
        />
    )
)
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ className, ...props }, ref) => (
        <button
            ref={ref}
            className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", className)}
            {...props}
        />
    )
)
TabsTrigger.displayName = "TabsTrigger"

export { Tabs, TabsList, TabsTrigger }
