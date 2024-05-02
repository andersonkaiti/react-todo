import "uikit/dist/css/uikit.min.css";
import { type Metadata } from "next"
import Navbar from "@/components/navbar/navbar"
import TodoProvider from "@/contexts/todo-context";

export const metadata: Metadata = {
  title: "Todo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <TodoProvider>
          <Navbar/>
          <br />
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}