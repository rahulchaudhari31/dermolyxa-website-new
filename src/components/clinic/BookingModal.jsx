import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Send } from "lucide-react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { site } from "../../data/site";
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

/**
 * Reusable clinic "Book Consultation" modal with a frontend-only form.
 * `defaultService` pre-selects the service the user clicked.
 */
export default function BookingModal({ open, onClose, defaultService = "" }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    service: defaultService,
    date: "",
    message: "",
  });

  useEffect(() => {
    if (!open) return;
    setSent(false);
    setForm((prev) => ({
      ...prev,
      service: defaultService || prev.service,
    }));
  }, [open, defaultService]);

  const update = (key) => (event) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <Modal open={open} onClose={onClose} title="Book Consultation">
      {sent ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-4 text-center"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tint text-primary">
            <CheckCircle2 className="h-7 w-7" />
          </span>
          <h4 className="mt-5 text-xl text-primary">Booking request noted.</h4>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            This website does not process bookings automatically yet — please
            reach us directly by phone or WhatsApp to confirm your consultation.
            All services are subject to individual clinical assessment.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={`tel:+91${site.contact.phone1}`} variant="primary" icon={CalendarDays}>
              Call {site.contact.phone1}
            </Button>
            <Button
              href={site.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              variant="whatsapp"
            >
              WhatsApp
            </Button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name">
              <input
                required
                value={form.name}
                onChange={update("name")}
                className={fieldClasses}
                placeholder="Your full name"
              />
            </Field>
            <Field label="Mobile Number">
              <input
                required
                type="tel"
                value={form.mobile}
                onChange={update("mobile")}
                className={fieldClasses}
                placeholder="Mobile number"
              />
            </Field>
          </div>

          <Field label="Email">
            <input
              type="email"
              value={form.email}
              onChange={update("email")}
              className={fieldClasses}
              placeholder="Email address"
            />
          </Field>

          <Field label="Service">
            <select
              value={form.service}
              onChange={update("service")}
              className={fieldClasses}
            >
              <option value="">Select a service</option>
              {defaultService &&
              !clinicServiceOptions.includes(defaultService) ? (
                <option value={defaultService}>{defaultService}</option>
              ) : null}
              {clinicServiceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Preferred Date">
            <input
              type="date"
              value={form.date}
              onChange={update("date")}
              className={fieldClasses}
            />
          </Field>

          <Field label="Message">
            <textarea
              rows={3}
              value={form.message}
              onChange={update("message")}
              className={`${fieldClasses} resize-none`}
              placeholder="Anything we should know?"
            />
          </Field>

          <p className="text-xs leading-relaxed text-muted">
            Your booking request is acknowledged here only. All services are
            subject to individual clinical assessment, eligibility and
            applicable professional/regulatory requirements.
          </p>

          <Button
            type="submit"
            variant="accent"
            size="lg"
            icon={Send}
            className="w-full"
          >
            Request Booking
          </Button>
        </form>
      )}
    </Modal>
  );
}
