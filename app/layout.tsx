import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jobify App",
  description: "Job application tracking system for job seekers"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
<<<<<<< HEAD
      <html lang="en" suppressContentEditableWarning>
=======
      <html lang="en" suppressHydrationWarning>
>>>>>>> d9ed4fa73990fe3f7accf3464e633de505231a37
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
