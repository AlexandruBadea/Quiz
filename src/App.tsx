import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <div className="flex h-screen items-center justify-center gap-4 bg-background p-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Tailwind v4 Upgrade</CardTitle>
          <CardDescription>Shadcn UI running on Tailwind CSS v4.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card is styled using the new configuration.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
