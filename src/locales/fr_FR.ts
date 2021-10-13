import frFR from 'date-fns/locale/fr';

const Calendar = {
  sunday: 'Di',
  monday: 'Lu',
  tuesday: 'Ma',
  wednesday: 'Me',
  thursday: 'Je',
  friday: 'Ve',
  saturday: 'Sa',
  ok: 'Valider',
  today: "Aujourd'hui",
  yesterday: 'Hier',
  hours: 'Heures',
  minutes: 'Minutes',
  seconds: 'Secondes',
  formattedMonthPattern: 'MMM, yyyy', // 'MM/yyyy'
  formattedDayPattern: 'MMM dd, yyyy', // 'dd/MM/yyyy'
  dateLocale: frFR as any
};

export default {
  common: {
    loading: 'Chargement...',
    emptyMessage: 'Aucune donnée'
  },
  Plaintext: {
    unfilled: 'Non rempli',
    notSelected: 'Non sélectionné',
    notUploaded: 'Non envoyé'
  },
  Pagination: {
    more: 'Plus',
    prev: 'Précédent',
    next: 'Suivant',
    first: 'Premier',
    last: 'Dernier',
    limit: '{0} / page',
    total: 'Total: {0}',
    skip: 'Allez à {0}'
  },
  Calendar,
  DatePicker: {
    ...Calendar
  },
  DateRangePicker: {
    ...Calendar,
    last7Days: 'Les 7 derniers jours'
  },
  Picker: {
    noResultsText: 'Aucun résultat',
    placeholder: 'Sélectionner',
    searchPlaceholder: 'Rechercher',
    checkAll: 'Tous'
  },
  InputPicker: {
    newItem: 'Nouvel élément',
    createOption: 'Créer l\'option "{0}"'
  },
  Uploader: {
    inited: 'Initial',
    progress: 'Envoi',
    error: 'Erreur',
    complete: 'Terminé',
    emptyFile: 'Vide',
    upload: 'Envoi'
  },
  CloseButton: {
    closeLabel: 'Fermer'
  },
  Breadcrumb: {
    expandText: 'Voir le chemin'
  },
  Toggle: {
    on: 'Ouvrir',
    off: 'Fermer'
  }
};
