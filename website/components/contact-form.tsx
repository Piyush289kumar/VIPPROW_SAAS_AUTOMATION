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

export function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const submitMutation = useSubmitContactForm();

  const { data, isLoading, error } = usePublicServicesNames();
  const services_names = data?.data ?? [];
  const anchor = useComboboxAnchor();

  const [form, setForm] = useState({
    type: "General",
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  // Handle On Change Inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitMutation.mutate(form, {
      onSuccess: () => {
        console.log("Form submitted successfully.");
        toast.success("Form submitted successfully.");
        setForm({
          type: "General",
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
        });
      },
      onError: (err: unknown) => {
        const errorMessage =
          (err as { response?: { data?: { message?: string } } })?.response
            ?.data?.message || "Something went wrong. Try again";

        toast.error(errorMessage);
        console.log(errorMessage);
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
          <CardDescription>Get in touch description</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Fill form text
              </FieldSeparator>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="fullname">Phone</FieldLabel>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="1234567890"
                  min={10}
                  max={10}
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </Field>

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
                  multiple
                  autoHighlight
                  items={services_names}
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
                <Input
                  id="message"
                  type="text"
                  placeholder="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <Button type="submit" disabled={submitMutation.isPaused}>
                  {submitMutation.isPending ? "Submitting" : "Get in touch"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center hid">
        Our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
