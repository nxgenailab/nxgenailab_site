
import React from "react";
import { cn } from "../../lib/utils";

const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm justify-centre", className)} {...props}>
        {children}
    </div>
);

// CardHeader Component (defined inline)
const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
        {children}
    </div>
);

  // CardTitle Component (defined inline)
const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
);

// CardDescription Component (defined inline)
const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);

// CardContent Component (defined inline)
  const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-6 pt-0", className)} {...props}>
        {children}
    </div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent };