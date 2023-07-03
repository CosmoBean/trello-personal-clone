import Modal from "@/components/Modal"
import ProfileIcon from "@/components/ProfileIcon"
import Provider from "@/components/Provider"

export const metadata = {
  title: 'trello-personal-clone',
  description: 'Generated by CosmoBean',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {children}
          <Modal />
      </body>
    </html>
  )
}
