
  title,
  price,
  period,
  description,
  features = [],
  isPopular = false,
  isAnnual = false,
  delay = 0,
  onCtaClick,


 <ul className={pricingCardStyles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={pricingCardStyles.featureItem}>
            <div
              className={`
                ${pricingCardStyles.featureIcon}
                ${
                  isPopular
                    ? pricingCardStyles.featureIconPopular
                    : pricingCardStyles.featureIconRegular
                }
              `}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className={pricingCardStyles.featureText}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA area: show different button/label depending on auth state */}
      <div style={{ marginTop: 12 }}>
        <SignedIn>
          <button
            type="button"
            onClick={() =>
              onCtaClick && onCtaClick({ title, isPopular, isAnnual })
            }
            className={`
              ${pricingCardStyles.ctaButton}
              ${
                isPopular
                  ? pricingCardStyles.ctaButtonPopular
                  : pricingCardStyles.ctaButtonRegular
              }
            `}
          >
            <span
              className={`
                ${pricingCardStyles.ctaButtonText}
                ${
                  isPopular
                    ? pricingCardStyles.ctaButtonTextPopular
                    : pricingCardStyles.ctaButtonTextRegular
                }
              `}
            >
              {isPopular ? "Get Started" : "Choose Plan"}
            </span>
          </button>
        </SignedIn>

        <SignedOut>
          <button
            type="button"
            onClick={() =>
              onCtaClick &&
              onCtaClick(
                { title, isPopular, isAnnual },
                { openSignInFallback: true }
              )
            }
            className={`
              ${pricingCardStyles.ctaButton}
              ${pricingCardStyles.ctaButtonRegular}
            `}
          >
            <span className={pricingCardStyles.ctaButtonText}>
              Sign in to get started
            </span>
          </button>
        </SignedOut>
      </div>
    </div>







  const plans = {
    monthly: [
      {
        title: "Starter",
        price: "₹0",
        period: "month",
        description: "Perfect for freelancers and small projects",
        features: [
          "5 invoices per month",
          "Basic AI parsing",
          "Standard templates",
          "Email support",
          "PDF export",
        ],
        isPopular: false,
      },
      {
        title: "Professional",
        price: "₹499",
        period: "month",
        description: "For growing businesses and agencies",
        features: [
          "Unlimited invoices",
          "Advanced AI parsing",
          "Custom branding",
          "Priority support",
          "Advanced analytics",
          "Team collaboration (3 members)",
          "API access",
        ],
        isPopular: true,
      },
      {
        title: "Enterprise",
        price: "₹1,499",
        period: "month",
        description: "For large organizations with custom needs",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom workflows",
          "Dedicated account manager",
          "SLA guarantee",
          "White-label solutions",
          "Advanced security",
        ],
        isPopular: false,
      },
    ],
    annual: [
      {
        title: "Starter",
        price: "₹0",
        period: "month",
        description: "Perfect for freelancers and small projects",
        features: [
          "5 invoices per month",
          "Basic AI parsing",
          "Standard templates",
          "Email support",
          "PDF export",
        ],
        isPopular: false,
        isAnnual: false,
      },
      {
        title: "Professional",
        price: "₹399",
        period: "month",
        description: "For growing businesses and agencies",
        features: [
          "Unlimited invoices",
          "Advanced AI parsing",
          "Custom branding",
          "Priority support",
          "Advanced analytics",
          "Team collaboration (3 members)",
          "API access",
        ],
        isPopular: true,
        isAnnual: true,
      },
      {
        title: "Enterprise",
        price: "₹1,199",
        period: "month",
        description: "For large organizations with custom needs",
        features: [
          "Everything in Professional",
          "Unlimited team members",
          "Custom workflows",
          "Dedicated account manager",
          "SLA guarantee",
          "White-label solutions",
          "Advanced security",
        ],
        isPopular: false,
        isAnnual: true,
      },
    ],
  };

  const currentPlans = plans[billingPeriod];





              {[
                "Secure cloud storage",
                "Mobile-friendly interface",
                "Automatic backups",
                "Real-time notifications",
                "Multi-currency support",
                "Tax calculation",
              ].map((feature, index) => (

              ))}
         
