import '@styles/globals.css';

// Change the application's metadata
export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

const RootLayout: React.FC<Prop> = ({children}) => {

    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}

interface Prop {
    children: React.ReactNode
}

export default RootLayout;