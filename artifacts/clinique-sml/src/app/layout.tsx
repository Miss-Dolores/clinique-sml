import { cn } from "@/lib/utils";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={cn("min-h-full flex flex-col font-sans antialiased")}>
            {children}
        </div>
    );
}
