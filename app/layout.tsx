import Modal from "@/components/Modal"
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
        <Provider>
          {children}
          <Modal />
        </Provider>
      </body>
    </html>
  )
}
