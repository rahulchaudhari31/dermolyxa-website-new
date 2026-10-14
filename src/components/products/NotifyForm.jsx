import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, CheckCircle2 } from "lucide-react";
import { notifyForm } from "../../data/products";

const fieldClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * "Notify me" email capture with frontend validation and a success state.
 */
export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(notifyForm.interestOptions[2]);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const next = {};
    if (!EMAIL_RE.test(email.trim())) next.email = notifyForm.invalidEmail;
    if (!agree) next.agree = notifyForm.requiredConsent;
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-card border border-line bg-white p-8 text-center shadow-soft sm:p-10"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tint text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl text-primary">
          {notifyForm.successTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          {notifyForm.successBody}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-card border border-line bg-white p-7 shadow-soft sm:p-9"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-primary">
          <Bell className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-xl text-primary">{notifyForm.title}</h3>
          <p className="mt-1 text-sm text-muted">{notifyForm.body}</p>
        </div>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {notifyForm.emailLabel}
          </span>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
            }}
            aria-invalid={Boolean(errors.email)}
            className={fieldClasses}
            placeholder={notifyForm.emailPlaceholder}
          />
          {errors.email ? (
            <span className="mt-1.5 block text-xs font-medium text-red-600">
              {errors.email}
            </span>
          ) : null}
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {notifyForm.interestLabel}
          </span>
          <select
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            className={fieldClasses}
          >
            {notifyForm.interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={agree}
          onChange={(event) => {
            setAgree(event.target.checked);
            if (errors.agree) setErrors((prev) => ({ ...prev, agree: "" }));
          }}
          className="mt-0.5 h-4 w-4 rounded border-line text-primary accent-[color:var(--color-primary)]"
        />
        <span>
          {notifyForm.consent}
          {errors.agree ? (
            <span className="mt-1 block text-xs font-medium text-red-600">
              {errors.agree}
            </span>
          ) : null}
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent-600 hover:text-white sm:w-auto"
      >
        <Bell className="h-4 w-4" />
        {notifyForm.submitLabel}
      </button>
    </form>
  );
}
