
            ✕

      
          <div className={aiInvoiceModalStyles.error} role="alert">
            {String(error)
              .split("\n")
              .map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            {(/quota|exhausted|resource_exhausted/i.test(String(error)) && (
              <div style={{ marginTop: 8, fontSize: 13, color: "#374151" }}>
                Tip: AI is temporarily unavailable (quota). Try again in a few
                minutes, or create the invoice manually.
              </div>
            )) ||
              null}
          </div>
