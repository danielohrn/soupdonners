export const isValidStockholmPostCode = input => {
  const LOW = 10012,
    HIGH = 19587;

  return input >= LOW && input <= HIGH;
};

export const checkoutFormScrollAndFocusHandler = e => {
  e.preventDefault();
  const MOBILE_BREAKPOINT = 790;
  const BOTTOM_OF_WINDOW = window.document.body.getBoundingClientRect().bottom;

  // on mobile - scroll to bottom of page to payment form
  if (window.innerWidth < MOBILE_BREAKPOINT) {
    window.scroll({ top: BOTTOM_OF_WINDOW, behavior: "smooth" });
  }

  // determine if form to focus on is payment or deliveryAddress
  const formToFocusOn = document.getElementById("payment")
    ? document.getElementById("payment")
    : document.getElementById("deliveryAddress");

  // focus on input field after 500 ms so scroll to bottom is not interupted
  if (formToFocusOn) {
    setTimeout(() => formToFocusOn.focus(), 500);
  }
};
