"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useSubmitContactForm } from "@/app/features/contact/hook/useContact";
import toast from "react-hot-toast";
import { usePublicServicesNames } from "@/app/features/services/hook/useService";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { ChevronsUpDown } from "lucide-react";
import { Service } from "@/types/service";

type ContactFormData = {
  type: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  subject: string;
};

export function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const submitMutation = useSubmitContactForm();

  const { data, isLoading, error } = usePublicServicesNames();
  const services_names = data?.data ?? [];
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const anchor = useComboboxAnchor();

  const [form, setForm] = useState({
    type: "General",
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    subject: "",
  });

  // ✅ Input & Textarea Handler
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Separate Select Handler (Error-Free)
  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Optional validation (recommended)
    if (selectedServices.length === 0) {
      toast.error("Please select at least one service.");
      return;
    }

    // Prepare final payload
    const payload = {
      ...form,
      services: selectedServices.map((service) => service._id), // send only ids
    };

    submitMutation.mutate(payload, {
      onSuccess: () => {
        toast.success("Form submitted successfully.");

        // Reset form fields
        setForm({
          type: "General",
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          subject: "",
        });

        // Reset selected services
        setSelectedServices([]); // this will now clear dropdown
      },

      onError: (err: unknown) => {
        const errorMessage =
          (err as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Something went wrong. Try again";

        toast.error(errorMessage);
        console.log("Submission error:", errorMessage);
      },
    });
  };

  return (
    <div
      className={cn("flex flex-col gap-6 min-w-auto md:min-w-lg", className)}
      {...props}
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Get in touch</CardTitle>
          <CardDescription>
            Fill the form and we will contact you soon.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <FieldSeparator>
                Please fill all required fields
              </FieldSeparator>

              {/* Name */}
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Field>

              {/* Phone */}
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  id="phone"
                  type="text"
                  placeholder="1234567890"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                />
              </Field>

              {/* Service Select */}
              <Field>
                <FieldLabel htmlFor="service">Service</FieldLabel>

                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleSelectChange}
                  required
                  className="w-full border rounded-md px-3 py-2 bg-gray-800"
                >
                  <option value="">Select a Service</option>
                  <option value="web-development">Web Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="business-automation">Business Automation</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="seo">Search Engine Optimization</option>
                  <option value="social-media-marketing">
                    Social Media Marketing
                  </option>
                  <option value="email-marketing">Email Marketing</option>
                  <option value="content-marketing">Content Marketing</option>
                  <option value="performance-marketing">
                    Performance Marketing
                  </option>
                  <option value="branding">Branding</option>
                  <option value="mobile-app-development">
                    Mobile App Development
                  </option>
                  <option value="android-development">
                    Android App Development
                  </option>
                  <option value="ios-development">iOS App Development</option>
                  <option value="software-development">
                    Custom Software Development
                  </option>
                  <option value="saas-development">SaaS Development</option>
                  <option value="influencer-marketing">
                    Influencer Marketing
                  </option>
                  <option value="ui-ux-design">UI / UX Design</option>
                  <option value="testing-qa">Software Testing & QA</option>
                  <option value="maintenance-support">
                    Maintenance & Support
                  </option>
                </select>
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Field>

              <div className="space-y-2 w-full">
                {/* Label */}
                <FieldLabel htmlFor="message">Select Sevices</FieldLabel>

                <Combobox<Service, true>
                  key={selectedServices.length} // 👈 forces re-render when cleared
                  multiple
                  autoHighlight
                  items={services_names}
                  value={selectedServices}
                  onValueChange={(values) =>
                    setSelectedServices(values as Service[])
                  }
                >
                  <div className="relative">
                    <ComboboxChips ref={anchor} className="w-full pr-10">
                      <ComboboxValue>
                        {(values: Service[]) => (
                          <>
                            {values.length === 0 && (
                              <span className="text-muted-foreground">
                                Select Services...
                              </span>
                            )}

                            {values.map((item) => (
                              <ComboboxChip key={item._id}>
                                {item.title}
                              </ComboboxChip>
                            ))}

                            <ComboboxChipsInput />
                          </>
                        )}
                      </ComboboxValue>
                    </ComboboxChips>

                    <ChevronsUpDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>

                  <ComboboxContent anchor={anchor}>
                    <ComboboxEmpty>No services found.</ComboboxEmpty>
                    <ComboboxList>
                      {(item: Service) => (
                        <ComboboxItem key={item._id} value={item}>
                          {item.title}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>

              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-2 bg-gray-800"
                />
              </Field>

              {/* Submit */}
              <Field>
                <Button type="submit" disabled={submitMutation.isPending}>
                  {submitMutation.isPending
                    ? "Submitting..."
                    : "Get in touch"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        Our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}

