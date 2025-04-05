import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../../lib/utils"; // Assuming this path is correct relative to tabs.tsx

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", // Using example Shadcn classes, adjust if needed
            className
        )}
        {...props}
    />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", // Using example Shadcn classes, adjust if needed
            className
        )}
        {...props}
    />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// --- START: Corrected TabsContent ---
const TabsContent = React.forwardRef<
    // Use ElementRef with the Radix component type for the ref
    React.ElementRef<typeof TabsPrimitive.Content>,
    // Use ComponentPropsWithoutRef with the Radix component type for the props
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    // Render the underlying Radix Content component
    <TabsPrimitive.Content
        ref={ref}
        // Apply base styles and merge with incoming className
        className={cn(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", // Using example Shadcn classes, adjust if needed
            className
        )}
        // Spread the rest of the props
        {...props}
    />
));
// Set the display name for debugging
TabsContent.displayName = TabsPrimitive.Content.displayName;
// --- END: Corrected TabsContent ---


export { Tabs, TabsList, TabsTrigger, TabsContent }; // Ensure TabsContent is included here
