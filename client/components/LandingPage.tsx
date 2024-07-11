
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
export default function Componentt() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <ScreenShareIcon className="h-6 w-6" />
          <span className="sr-only">Screen Sharing App</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Seamless Screen Sharing
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Effortlessly share your screen with anyone, anywhere. Our WebRTC-powered app makes it easy to
                  collaborate in real-time.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="flex items-center justify-center gap-2">
                  <ShareIcon className="h-5 w-5" />
                  Start Sharing
                </Button>
                <div className="flex items-center justify-center">
                  <img src="/placeholder.svg" width="100" height="100" alt="QR Code" className="rounded-md" />
                  <span className="ml-4 text-sm font-medium">Scan to join on your iPad</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How it Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our screen sharing app is designed to be intuitive and easy-to-use. Follow these simple steps to get
                  started.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <ShareIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Share Your Screen</h3>
                <p className="text-muted-foreground">
                  Click the "Start Sharing" button to begin sharing your screen with others.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <QrCodeIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Invite Participants</h3>
                <p className="text-muted-foreground">
                  Share the QR code with your team members so they can join the session on their devices.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <CombineIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Collaborate in Real-Time</h3>
                <p className="text-muted-foreground">
                  Work together seamlessly, with everyone seeing the same screen and able to contribute.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a question? Check our FAQs or reach out to our support team.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl space-y-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What devices are supported?</AccordionTrigger>
                    <AccordionContent>
                      Our screen sharing app works on desktop computers, laptops, and mobile devices. You can share your
                      screen from any device and invite participants to join on their preferred device.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is there a limit on the number of participants?</AccordionTrigger>
                    <AccordionContent>
                      No, there is no limit on the number of participants in a screen sharing session. Our platform is
                      designed to scale seamlessly, so you can collaborate with your entire team or even larger groups.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is the screen sharing secure?</AccordionTrigger>
                    <AccordionContent>
                      Yes, our screen sharing app uses end-to-end encryption to ensure that your data and screen content
                      are protected. We take security and privacy seriously to provide a safe collaboration environment.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I record the screen sharing session?</AccordionTrigger>
                    <AccordionContent>
                      Absolutely! You can record the screen sharing session and download the recording for later
                      reference or sharing with team members who couldn't attend.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Screen Sharing App. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CombineIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function QrCodeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </svg>
  )
}


function ScreenShareIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m17 8 5-5" />
      <path d="M17 3h5v5" />
    </svg>
  )
}


function ShareIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}