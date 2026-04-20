"use client";

import { useState, type FormEvent } from "react";
import type {
  ContactFormErrors,
  ContactFormValues,
  ProductFilter,
} from "@/types";
import { CONTACT_EMAIL, SHOWROOM_ADDRESS, WHATSAPP_DISPLAY } from "@/lib/constants";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  interest: "All",
  message: "",
};

const INTEREST_OPTIONS: ReadonlyArray<ProductFilter> = [
  "All",
  "SPC",
  "Wood",
  "Composite",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s\-()]{6,}$/;

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone.trim() && !PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    // Simulate async submission (wire up to real endpoint later).
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
    setValues(INITIAL_VALUES);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-background py-20 sm:py-24"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl"
          >
            Get a fixed quote within 24 hours.
          </h2>
          <p className="mt-3 max-w-xl text-base text-brand-800/70">
            Tell us about your space and we&apos;ll follow up with a fixed
            quote, including supply, installation, and disposal of existing
            flooring where required.
          </p>

          <dl className="mt-8 space-y-4 text-sm text-brand-800">
            <div>
              <dt className="font-semibold text-brand-900">WhatsApp</dt>
              <dd className="mt-1 text-brand-800/80">{WHATSAPP_DISPLAY}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-900">Email</dt>
              <dd className="mt-1 text-brand-800/80">{CONTACT_EMAIL}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-900">Showroom</dt>
              <dd className="mt-1 text-brand-800/80">{SHOWROOM_ADDRESS}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div
              role="status"
              className="flex h-full flex-col items-start justify-center gap-4 rounded-2xl bg-emerald-50 p-8 text-emerald-900"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold">Thanks — message received!</h3>
              <p className="text-sm text-emerald-900/80">
                A member of the {"Jupiter's Design"} team will reply within one
                working day. Need it faster? Ping us on WhatsApp at{" "}
                {WHATSAPP_DISPLAY}.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={handleSubmit}
              aria-label="Contact Jupiter's Design"
              className="grid gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Full name"
                  required
                  value={values.name}
                  error={errors.name}
                  onChange={(value) => updateField("name", value)}
                  autoComplete="name"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  required
                  value={values.email}
                  error={errors.email}
                  onChange={(value) => updateField("email", value)}
                  autoComplete="email"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="phone"
                  label="Phone (optional)"
                  type="tel"
                  value={values.phone}
                  error={errors.phone}
                  onChange={(value) => updateField("phone", value)}
                  autoComplete="tel"
                  placeholder="+852"
                />
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="interest"
                    className="text-sm font-medium text-brand-900"
                  >
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={values.interest}
                    onChange={(event) =>
                      updateField(
                        "interest",
                        event.target.value as ProductFilter,
                      )
                    }
                    className="rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm text-brand-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  >
                    {INTEREST_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option === "All" ? "Not sure yet" : `${option} flooring`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-brand-900"
                >
                  Project details <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={values.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Rough square footage, rooms, and any style references."
                  className={`rounded-xl border bg-white px-4 py-3 text-sm text-brand-900 shadow-sm focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                      : "border-brand-200 focus:border-brand-500 focus:ring-brand-300"
                  }`}
                />
                {errors.message ? (
                  <p id="message-error" className="text-sm text-red-600">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Request a quote"}
              </button>
              <p className="text-xs text-brand-800/60">
                By submitting this form you agree to be contacted by{" "}
                {"Jupiter's Design"} regarding your enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  id: keyof ContactFormValues;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-brand-900">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`rounded-xl border bg-white px-4 py-2.5 text-sm text-brand-900 shadow-sm focus:outline-none focus:ring-2 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-200"
            : "border-brand-200 focus:border-brand-500 focus:ring-brand-300"
        }`}
      />
      {error ? (
        <p id={errorId} className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
