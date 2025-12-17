import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Mail, Phone, CheckCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  pickupLocation: z.string().min(3, "Please enter pickup location"),
  dropoffLocation: z.string().min(3, "Please enter dropoff location"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  transportType: z.string().min(1, "Please select transport type"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pickupLocation: "",
      dropoffLocation: "",
      date: "",
      time: "",
      transportType: "",
      message: "",
    },
  });

  const handleSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    onSubmit?.(data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 bg-muted/30"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-contact-title"
          >
            Book Your Ride
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within
            minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-3 border-border">
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-[#09BC8A] mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Request Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    We&apos;ll contact you shortly to confirm your booking.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="pickupLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pickup Location</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="123 Main Street"
                                {...field}
                                data-testid="input-pickup"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dropoffLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Dropoff Location</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Airport Terminal 2"
                                {...field}
                                data-testid="input-dropoff"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                {...field}
                                data-testid="input-date"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time</FormLabel>
                            <FormControl>
                              <Input
                                type="time"
                                {...field}
                                data-testid="input-time"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="transportType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Transport Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-transport">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="sedan">
                                  Executive Sedan
                                </SelectItem>
                                <SelectItem value="suv">Premium SUV</SelectItem>
                                <SelectItem value="shuttle">
                                  Shuttle Service
                                </SelectItem>
                                <SelectItem value="van">Van Service</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any special requests or requirements..."
                              rows={3}
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#09BC8A] hover:bg-[#08a97d] text-white"
                      disabled={form.formState.isSubmitting}
                      data-testid="button-submit"
                    >
                      {form.formState.isSubmitting
                        ? "Submitting..."
                        : "Request Booking"}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Why Book With Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#09BC8A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Quick Response
                      </p>
                      <p className="text-xs text-muted-foreground">
                        We confirm bookings within 15 minutes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#09BC8A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        No Hidden Fees
                      </p>
                      <p className="text-xs text-muted-foreground">
                        The price you see is the price you pay
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Contact Info
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#276EF1]" />
                    <span className="text-sm text-foreground">
                      +1 (555) 123-4567
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#276EF1]" />
                    <span className="text-sm text-foreground">
                      bookings@rideflow.com
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
