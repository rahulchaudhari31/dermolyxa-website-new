import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { site } from "../../data/site";
import { courses } from "../../data/courses";
import { clinicServiceOptions } from "../../data/clinic";

const fieldClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function EnquiryForm({ initialCourse }) {
  const { fields, interestOptions, consent, submitLabel } = site.enquiries;
  const [sent, setSent] = useState(false);
  const courseTitle = initialCourse ?? "";
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    qualification: "",
    interestedIn: courseTitle ? "Institute" : "",
    courseService: courseTitle,
    batch: "",
    message: courseTitle ? `I would like to enquire about: ${courseTitle}` : "",
    agree: false,
  });

  useEffect(() => {
    if (!courseTitle) return;
    setForm((prev) => ({
      ...prev,
      interestedIn: "Institute",
      courseService: courseTitle,
      message: prev.message || `I would like to enquire about: ${courseTitle}`,
    }));
  }, [courseTitle]);

  const update = (key) => (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-card border border-line bg-white p-10 text-center shadow-soft"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tint text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl text-primary">Thank you.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Your enquiry details have been captured on this page. This website
          does not process submissions automatically yet — please reach us
          directly by phone or WhatsApp to complete your enquiry.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:+91${site.contact.phone1}`}
            className="inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-3 text-sm font-medium text-white"
          >
            Call {site.contact.phone1}
          </a>
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-pill bg-whatsapp px-6 py-3 text-sm font-medium text-white"
          >
            WhatsApp
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-line bg-white p-7 shadow-soft sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={fields.name}>
          <input
            required
            value={form.name}
            onChange={update("name")}
            className={fieldClasses}
            placeholder="Your full name"
          />
        </Field>
        <Field label={fields.mobile}>
          <input
            required
            type="tel"
            value={form.mobile}
            onChange={update("mobile")}
            className={fieldClasses}
            placeholder="Mobile number"
          />
        </Field>
        <Field label={fields.email}>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            className={fieldClasses}
            placeholder="Email address"
          />
        </Field>
        <Field label={fields.city}>
          <input
            value={form.city}
            onChange={update("city")}
            className={fieldClasses}
            placeholder="City"
          />
        </Field>
        <Field label={fields.qualification}>
          <input
            value={form.qualification}
            onChange={update("qualification")}
            className={fieldClasses}
            placeholder="Highest qualification"
          />
        </Field>
        <Field label={fields.interestedIn}>
          <select
            value={form.interestedIn}
            onChange={update("interestedIn")}
            className={fieldClasses}
          >
            <option value="">Select</option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label={fields.courseService}>
            <select
              value={form.courseService}
              onChange={update("courseService")}
              className={fieldClasses}
            >
              <option value="">Select Course / Service</option>
              <optgroup label="DERMOLYXA Institute™ Courses">
                {courses.map((course) => (
                  <option key={course.id} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </optgroup>
              <optgroup label="DERMOLYXA Clinic™ Services">
                {clinicServiceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </optgroup>
              <optgroup label="DERMOLYXA Products™">
                <option value="Product Updates / Coming Soon">
                  Product Updates / Coming Soon
                </option>
              </optgroup>
            </select>
          </Field>
        </div>
        <Field label={fields.batch}>
          <input
            value={form.batch}
            onChange={update("batch")}
            className={fieldClasses}
            placeholder="Preferred batch"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label={fields.message}>
            <textarea
              rows={4}
              value={form.message}
              onChange={update("message")}
              className={`${fieldClasses} resize-none`}
              placeholder="Your message"
            />
          </Field>
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={form.agree}
          onChange={update("agree")}
          className="mt-0.5 h-4 w-4 rounded border-line text-primary accent-[color:var(--color-primary)]"
        />
        <span>{consent}</span>
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent-600 hover:text-white sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {submitLabel}
      </button>
    </form>
  );
}
