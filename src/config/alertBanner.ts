// Alert Banner Configuration
// Change these settings to control the alert banner display

export const ALERT_BANNER_CONFIG = {
  // Set to false to hide the banner completely
  enabled: true,
  
  // Custom message - leave undefined to use default with current month
  message: undefined as string | undefined,
  
  // Call-to-action button text
  ctaText: "Get Started",
  
  // Where the CTA button links to
  ctaLink: "/contact?form=agency-partnership",
  
  // Whether users can dismiss the banner
  dismissible: true,
  
  // Additional styling classes (optional)
  className: ""
};

// Helper function to get current month (used in default message)
export const getCurrentMonth = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[new Date().getMonth()];
};

// Default message template
export const getDefaultMessage = () => `Currently accepting new clients for ${getCurrentMonth()}`;

// Quick presets for different scenarios
export const ALERT_BANNER_PRESETS = {
  // Standard new client acceptance
  acceptingClients: {
    message: undefined, // Uses default with current month
    ctaText: "Get Started",
    ctaLink: "/contact?form=agency-partnership"
  },
  
  // Quick wins promotion
  quickWins: {
    message: `Quick wins available for ${getCurrentMonth()} - Starting at $199`,
    ctaText: "View Quick Wins", 
    ctaLink: "/contact?form=quick-win"
  },
  
  // Limited availability
  limitedSpots: {
    message: `Only 3 partnership spots remaining for ${getCurrentMonth()}`,
    ctaText: "Secure Your Spot",
    ctaLink: "/contact?form=agency-partnership"
  },
  
  // Holiday/special offer
  specialOffer: {
    message: "New Year Special: 15% off first project for new partnerships",
    ctaText: "Claim Offer",
    ctaLink: "/contact?form=agency-partnership"
  }
};

/*
USAGE INSTRUCTIONS:

To change the banner settings, edit the ALERT_BANNER_CONFIG object above:

1. To hide the banner:
   Set enabled: false

2. To use a custom message:
   Set message: "Your custom message here"

3. To use a preset:
   Replace the ALERT_BANNER_CONFIG with one of the presets:
   
   export const ALERT_BANNER_CONFIG = {
     enabled: true,
     dismissible: true,
     className: "",
     ...ALERT_BANNER_PRESETS.quickWins
   };

4. To change the CTA:
   Set ctaText: "Your Button Text"
   Set ctaLink: "/your-link"

The banner will automatically update the month in the default message.
No need to restart the development server - changes are applied immediately.
*/