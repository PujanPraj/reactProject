import React from "react";

const Accordion = () => {
  return (
    <>
      <div
        className="accordion accordion-flush text-start"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="true"
              aria-controls="flush-collapseOne"
            >
              Error message: zip does not contain a valid theme: missing
              template “layout/theme.liquid” OR “Unfortunately it gives the
              error that it exceeds the 50MB transferlimit and doesnt allow it
              to upload.”
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              This is a common error when customers download the theme package
              and upload it immediately with this theme package. First, please
              extract/unzip the theme package you download from themeforest. The
              installation file is located in the Theme folder.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              I bought the wrong theme, can I get a refund?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              When purchasing the wrong theme, please do not download it and
              immediately submit a refund request. We will check the theme
              status, if you haven’t downloaded the theme we will refund you. If
              you have downloaded the theme, you will not receive a refund. Even
              if we agree to refund you and during that time you download the
              theme, the refund decision will be reversed.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              What Is The Support Time?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              All of your emails will be reviewed and checked manually
              carefully. However, based on the number support tickets and the
              nature of the request itself, the response time can be up to 12 –
              24 hours (Monday to Friday). Our timezone is GMT+7
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              After installing the theme, will my site be installed with sample
              data?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Images used and included in this theme are for demo purpose only.
              COMMERCIAL USAGE IS NOT ALLOWED AND IS AT YOUR OWN RISK.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Why am I not getting a response after sending support?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Normally we never respond more than 12 - 24 hours after you submit
              a support request (Except Saturday and Sunday). However, there are
              some cases where we have responded but customers reflect in the
              comment that they have not received any emails. Please check some
              issues: <br />
              1 - All emails we respond to you are answered via the email you
              registered for a Themeforest account <br />2 - Please double check
              the Spam Box section, it is possible that for some reason the
              email has been queued as spam mail.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              Is the license I bought used forever or has a monthly fee ?
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              You only need to pay once, no monthly payments
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              Do I have to pay for any apps you integrate in the theme?
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              1 - Save $3200+ with our built-in theme features for Free.You
              don’t need to pay more for additional Apps <br />2 - There is an
              app we partner with 3rd party judge.me review, which is a free and
              paid plan app. If you just use our demo-like features, it's
              completely free.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
