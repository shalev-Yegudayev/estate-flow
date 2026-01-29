const he = {
  common: {
    appName: 'EstateFlow',
    welcome: 'ברוכים הבאים',
    loading: 'טוען...',
    error: 'שגיאה',
    success: 'הצלחה',
    save: 'שמור',
    cancel: 'ביטול',
    delete: 'מחק',
    edit: 'ערוך',
    create: 'צור',
    search: 'חיפוש',
    filter: 'סינון',
    close: 'סגור',
  },

  nav: {
    home: 'בית',
    dashboard: 'לוח בקרה',
    properties: 'נכסים',
    tenants: 'דיירים',
    finances: 'כספים',
    documents: 'מסמכים',
    settings: 'הגדרות',
    logout: 'התנתק',
    allProperties: 'כל הנכסים',
    available: 'פנוי',
    occupied: 'תפוס',
    maintenance: 'תחזוקה',
    profile: 'פרופיל',
    billing: 'חיוב',
  },

  auth: {
    login: 'התחבר',
    register: 'הירשם',
    email: 'אימייל',
    password: 'סיסמה',
    forgotPassword: 'שכחת סיסמה?',
    loginSuccess: 'התחברת בהצלחה',
    loginError: 'פרטי התחברות שגויים',
  },

  dashboard: {
    title: 'לוח בקרה',
    overview: 'סקירת תיק',
    totalProperties: 'סה״כ נכסים',
    totalValue: 'ערך כולל',
    monthlyIncome: 'הכנסה חודשית',
    averageROI: 'תשואה ממוצעת',
  },

  home: {
    myProperties: 'הנכסים שלי',
    propertyCount: 'נכס אחד',
    propertyCount_other: '{count} נכסים',
    noPropertiesYet: 'עדיין אין נכסים',
    noPropertiesDescription:
      'התחל בהוספת הנכס הראשון לתיק שלך. עקוב אחר תפוסה, נהל דיירים ועקוב אחר ההשקעות בנדל״ן.',
    addFirstProperty: 'הוסף את הנכס הראשון שלך',
  },

  properties: {
    title: 'נכסים',
    addProperty: 'הוסף נכס',
    newProperty: 'נכס חדש',
    editProperty: 'ערוך נכס',
    deleteProperty: 'מחק נכס',
    address: 'כתובת',
    type: 'סוג נכס',
    purchasePrice: 'מחיר רכישה',
    purchaseDate: 'תאריך רכישה',
    currentValue: 'ערך נוכחי',
    monthlyRent: 'שכר דירה חודשי',
  },

  footer: {
    copyright: '© כל הזכויות שמורות לEstateFlow',
    about: 'אודות',
    terms: 'תנאי שימוש',
    privacy: 'מדיניות פרטיות',
    support: 'תמיכה',
  },

  emptyState: {
    addNewProperty: 'הוסף נכס חדש',
  },
} as const;

export default he;
