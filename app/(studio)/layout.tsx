import "../globals.css";

export const metadata = {
  title: 'Story Diary',
  description: 'A Story For Everyone',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}