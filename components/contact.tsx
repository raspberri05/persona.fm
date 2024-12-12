"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useState, useRef } from "react"

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null) // Add form reference
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    toast({
      title: "Message sent",
      description: "We'll get back to you within 3 business days.",
    })
    
  
    formRef.current.reset()
  }

  return (
    <Card className="w-full max-w-md">
    <CardHeader>
      <CardTitle>Contact Us</CardTitle>
      <CardDescription>
        Report a bug, request a feature, or submit feedback
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Type your message here"
            className="min-h-[100px]"
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send message"}
        </Button>
      </form>
    </CardContent>
  </Card>
  )
}

