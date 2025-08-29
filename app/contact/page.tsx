"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, Send, Clock, Github, Linkedin, Twitter, Globe, CheckCircle } from "lucide-react"
import { LazyImage } from "../../components/lazy-image"
import { Navigation } from "../../components/navigation"
import { Footer } from "../../components/footer"
import { useSoundEffects } from "../../hooks/useSoundEffects"

export default function ContactPage() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { playHover, playClick } = useSoundEffects(isSoundEnabled)

  useEffect(() => {
    const savedSound = localStorage.getItem("soundEnabled")
    if (savedSound !== null) {
      setIsSoundEnabled(savedSound === "true")
    }
  }, [])

  const toggleSound = () => {
    const newSoundState = !isSoundEnabled
    setIsSoundEnabled(newSoundState)
    localStorage.setItem("soundEnabled", newSoundState.toString())
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    playClick()

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@thawzinaung.dev",
      href: "mailto:hello@thawzinaung.dev",
      description: "Best for detailed project discussions",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+95 9 123 456 789",
      href: "tel:+959123456789",
      description: "Available Mon-Fri, 9AM-6PM (GMT+6:30)",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Yangon, Myanmar",
      href: "#",
      description: "Open to remote work worldwide",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/thawzinag",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/thawzinaung",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/thawzinaung",
      color: "hover:text-blue-400",
    },
    {
      icon: Globe,
      label: "Website",
      href: "https://thawzinaung.dev",
      color: "hover:text-[#7391c8]",
    },
  ]

  const faqs = [
    {
      question: "What's your typical response time?",
      answer:
        "I usually respond to emails within 24 hours on weekdays. For urgent matters, feel free to call me directly.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "I work with clients from all over the world. I'm comfortable with different time zones and communication preferences.",
    },
    {
      question: "What's your project process like?",
      answer:
        "I start with a discovery call to understand your needs, then provide a detailed proposal. Once approved, I work in iterative phases with regular check-ins and updates.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, I offer various support packages for ongoing maintenance, updates, and improvements after project completion.",
    },
    {
      question: "What are your rates?",
      answer:
        "My rates vary depending on the project scope and complexity. I provide detailed quotes after understanding your specific requirements.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation isSoundEnabled={isSoundEnabled} onToggleSound={toggleSound} />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <motion.div
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-[#7391c8]/10 text-[#7391c8] border border-[#7391c8]/20 px-4 py-2"
                    >
                      💬 Let's Connect
                    </Badge>
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Get In <span className="text-[#7391c8]">Touch</span>
                  </motion.h1>

                  <motion.p
                    className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Have a project in mind? I'd love to hear about it. Whether you need a new website, want to improve
                    an existing one, or just want to chat about web development, I'm here to help.
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#7391c8]" />
                      <span>Usually responds within 24 hours</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative z-10">
                  <LazyImage
                    src="/images/contact-avatar.png"
                    alt="Contact Thaw Zin Aung"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-full h-full bg-[#7391c8]/20 rounded-2xl -z-10"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ways to <span className="text-[#7391c8]">Reach Me</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the method that works best for you. I'm always happy to discuss new opportunities and answer any
                questions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#7391c8] dark:hover:border-[#7391c8] transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-[#7391c8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <method.icon className="w-8 h-8 text-[#7391c8]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{method.label}</h3>
                      <p className="text-[#7391c8] font-medium mb-2">{method.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                      {method.href !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 border-[#7391c8] text-[#7391c8] hover:bg-[#7391c8] hover:text-white bg-transparent"
                          onClick={() => {
                            playClick()
                            if (method.href.startsWith("mailto:") || method.href.startsWith("tel:")) {
                              window.location.href = method.href
                            }
                          }}
                          onMouseEnter={playHover}
                        >
                          Contact
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                    onClick={() => {
                      playClick()
                      window.open(social.href, "_blank")
                    }}
                    onMouseEnter={playHover}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Send Me a <span className="text-[#7391c8]">Message</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Thank you for reaching out. I'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-gray-900 dark:text-white">
                              Name *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="border-gray-300 dark:border-gray-600 focus:border-[#7391c8] dark:focus:border-[#7391c8]"
                              placeholder="Your full name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-900 dark:text-white">
                              Email *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="border-gray-300 dark:border-gray-600 focus:border-[#7391c8] dark:focus:border-[#7391c8]"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-gray-900 dark:text-white">
                            Subject *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="border-gray-300 dark:border-gray-600 focus:border-[#7391c8] dark:focus:border-[#7391c8]"
                            placeholder="What's this about?"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-gray-900 dark:text-white">
                            Message *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="border-gray-300 dark:border-gray-600 focus:border-[#7391c8] dark:focus:border-[#7391c8] resize-none"
                            placeholder="Tell me about your project or question..."
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-[#7391c8] hover:bg-[#5f7ab8] text-white"
                          onMouseEnter={playHover}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Frequently Asked <span className="text-[#7391c8]">Questions</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Here are some common questions I get asked. Don't see your question? Feel free to reach out!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 px-6"
                    >
                      <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:text-[#7391c8] dark:hover:text-[#7391c8] py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-400 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
