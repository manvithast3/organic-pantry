import { Header } from "./Header";
import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
  onSearch?: (query: string) => void;
}

// Main layout wrapper component
export function Layout({ children, onSearch }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Header with navigation */}
      <Header onSearch={onSearch} />
      
      {/* Main content area */}
      <main className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      
      {/* Mobile bottom navigation */}
      <BottomNav />
    </div>
  );
}
