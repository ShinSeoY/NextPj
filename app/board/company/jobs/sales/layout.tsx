export default function SalesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            $$$$
        </div>
    );
}

{
    /* 
    <RootLayout>
        <BoardLayout>
            <SalesLayout>
                <Sales />
            </SalesLayout>
        </BoardLayout>
    </RootLayout>; 
    */
}
