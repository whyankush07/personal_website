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
                <div className="flex max-md:flex-col overflow-y-auto overflow-x-hidden">
                    <Navbar />
                    <div className="flex h-screen w-full md:w-[62%] space-y-6 flex-col px-2 pt-8 md:pl-6">
                        <Header />
                        {children}
                    </div>
                    <FooterComponent />
                </div>
            </ThemeProvider>
        </SessionProviderWrapper >
    );
}