import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/context/theme-provider";
import FooterComponent from "@/components/footer/FooterComponent";
import SessionProviderWrapper from "@/context/SessionProvider";

export default async function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProviderWrapper>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Bottom Navbar - Mobile */}
          <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <Navbar />
          </div>

          {/* Side Navbar - Desktop */}
          <div className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-[12%] md:z-40 md:block">
            <Navbar />
          </div>

          {/* Fixed Header */}
          <div className="fixed top-0 left-0 right-0 md:left-[12%] md:right-[25%] z-30 backdrop-blur-md bg-white/90 dark:bg-slate-950/90">
            <Header />
          </div>

          {/* Main Content */}
          <div className="flex-1 md:ml-[12%] md:mr-[25%] pt-16 pb-20 md:pb-0">
            <div className="flex space-y-6 flex-col px-4 md:px-8 lg:px-12">
              {children}
            </div>
          </div>

          {/* Right Sidebar - Desktop */}
          <div className="hidden md:fixed md:right-0 md:top-0 md:h-screen md:w-[25%] md:z-40 md:block">
            <FooterComponent />
          </div>
        </div>
      </ThemeProvider>
    </SessionProviderWrapper>
  );
}
