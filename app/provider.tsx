import Header from "@/components/header";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/context/theme-provider";
import FooterComponent from "@/components/footer/FooterComponent";
import SessionProviderWrapper from "@/context/SessionProvider";

export default async function Provider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProviderWrapper >
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                disableTransitionOnChange
            >
                <div className="flex flex-col md:flex-row min-h-screen">
                    <div className="fixed bottom-0 left-0 right-0 z-50 md:fixed md:left-0 md:top-0 md:bottom-auto md:right-auto md:h-screen md:w-[12%] md:z-40">
                        <Navbar />
                    </div>
                    
                    <div className="flex-1 md:ml-[12%] md:mr-[25%] overflow-y-auto pb-20 md:pb-0">
                        <div className="flex space-y-6 flex-col px-2 pt-8 md:pl-6">
                            <Header />
                            {children}
                        </div>
                    </div>
                    
                    <div className="md:fixed md:right-0 md:top-0 md:h-screen md:w-[25%] md:z-40">
                        <FooterComponent />
                    </div>
                </div>
            </ThemeProvider>
        </SessionProviderWrapper >
    );
}