export default function BoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            &copy; Next JS
        </div>
    );
}
