const en = {
  common: {
    appName: 'EstateFlow',
    welcome: 'Welcome',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    create: 'Create',
    search: 'Search',
    filter: 'Filter',
    close: 'Close',
  },

  nav: {
    home: 'Home',
    dashboard: 'Dashboard',
    properties: 'Properties',
    tenants: 'Tenants',
    finances: 'Finances',
    documents: 'Documents',
    settings: 'Settings',
    logout: 'Logout',
    allProperties: 'All Properties',
    available: 'Available',
    occupied: 'Occupied',
    maintenance: 'Maintenance',
    profile: 'Profile',
    billing: 'Billing',
  },

  auth: {
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    loginSuccess: 'Successfully logged in',
    loginError: 'Invalid credentials',
  },

  dashboard: {
    title: 'Dashboard',
    overview: 'Portfolio Overview',
    totalProperties: 'Total Properties',
    totalValue: 'Total Value',
    monthlyIncome: 'Monthly Income',
    averageROI: 'Average ROI',
  },

  home: {
    myProperties: 'My Properties',
    propertyCount: '{count} property',
    propertyCount_other: '{count} properties',
    noPropertiesYet: 'No Properties Yet',
    noPropertiesDescription:
      'Get started by adding your first property to your portfolio. Track occupancy, manage tenants, and monitor your real estate investments.',
    addFirstProperty: 'Add Your First Property',
  },

  properties: {
    title: 'Properties',
    addProperty: 'Add Property',
    newProperty: 'New Property',
    editProperty: 'Edit Property',
    deleteProperty: 'Delete Property',
    address: 'Address',
    type: 'Property Type',
    city: 'City',
    country: 'Country',
    purchasePrice: 'Purchase Price',
    purchaseDate: 'Purchase Date',
    currentValue: 'Current Value',
    monthlyRent: 'Monthly Rent',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    area: 'Area (sqm)',
    description: 'Description',
  },

  footer: {
    copyright: '© 2026 EstateFlow. All rights reserved.',
    about: 'About',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    support: 'Support',
  },

  emptyState: {
    addNewProperty: 'Add new property',
  },
} as const;

export default en;
