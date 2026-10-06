// Prop condivise da tutti i componenti "picker" (Date/DateRange/DateTime/
// DateTimeRange/Time): chrome visivo identico a VxInput, apertura/anchoring
// gestiti internamente da AnchoredOverlay (nessuna prop da configurare per
// quello: è automatico, vedi doc del componente AnchoredOverlay).
export const sharedPickerRows = [
  {
    name: 'variant',
    type: "'outline' | 'ghost' | 'text'",
    default: "'outline'",
    desc: 'Stile visivo del campo',
  },
  {
    name: 'color',
    type: 'string',
    default: "'#7c3aed'",
    desc: 'Colore del bordo, del focus ring e degli elementi selezionati nel pannello',
  },
  {
    name: 'colors',
    type: '{ background?, text?, icon?, border?, focusBorder?, focusShadow?, placeholder? }',
    default: 'null',
    desc: 'Override completo dei colori del campo (non del pannello)',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    desc: 'Dimensione del campo',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    desc: 'Disabilita il campo e impedisce l’apertura del pannello',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    desc: 'Mostra spinner e disabilita il campo',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    desc: 'Occupa tutta la larghezza disponibile',
  },
  {
    name: 'pill',
    type: 'boolean',
    default: 'false',
    desc: 'Bordo completamente arrotondato',
  },
  {
    name: 'radius',
    type: 'number | string',
    default: 'null',
    desc: 'Override del border-radius del campo',
  },
  {
    name: 'icon',
    type: 'Component | Function | null',
    default: 'null',
    desc: 'Icona del campo (di default il calendario/orologio/ecc. dedicato)',
  },
  {
    name: 'iconPosition',
    type: "'left' | 'right'",
    default: "'right'",
    desc: 'Posizione della prop `icon`',
  },
  {
    name: 'iconSize',
    type: 'number | string',
    default: 'null',
    desc: 'Override della dimensione icona',
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'false',
    desc: 'Mostra una X per svuotare il valore quando presente',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: 'varia per componente',
    desc: 'Placeholder del campo',
  },
  {
    name: 'label',
    type: 'string',
    default: "''",
    desc: 'Etichetta sopra il campo',
  },
  {
    name: 'hint',
    type: 'string',
    default: "''",
    desc: 'Testo di aiuto sotto il campo',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    desc: 'Attiva lo stato di errore',
  },
  {
    name: 'errorMessage',
    type: 'string',
    default: "''",
    desc: 'Messaggio mostrato sotto il campo quando `error` è true',
  },
  {
    name: 'focusEffect',
    type: "'ring' | 'lift' | 'glow' | 'none' | 'custom'",
    default: "'ring'",
    desc: 'Effetto visivo applicato allo stato di focus',
  },
]

// Prop condivise solo dai componenti basati sul calendario (Date, DateRange,
// DateTime, DateTimeRange): locale, formato data, primo giorno settimana.
export const sharedCalendarRows = [
  {
    name: 'locale',
    type: 'string',
    default: "'en-US'",
    desc: 'Locale usato per nomi di mesi/giorni e formato data di default',
  },
  {
    name: 'format',
    type: 'string',
    default: "''",
    desc: 'Override del formato data mostrato nel campo (es. \'DD/MM/YYYY\'); vuoto = dedotto dal locale',
  },
  {
    name: 'firstDayOfWeek',
    type: 'number | null',
    default: 'null',
    desc: 'Primo giorno della settimana (0 = domenica); null = dedotto dal locale',
  },
  {
    name: 'min',
    type: 'string',
    default: "''",
    desc: 'Data minima selezionabile, formato ISO \'YYYY-MM-DD\'',
  },
  {
    name: 'max',
    type: 'string',
    default: "''",
    desc: 'Data massima selezionabile, formato ISO \'YYYY-MM-DD\'',
  },
]

// Prop condivise dai componenti con selezione dell'orario (DateTime,
// DateTimeRange, Time).
export const sharedTimeRows = [
  {
    name: 'timeFormat',
    type: 'string',
    default: "'HH:mm'",
    desc: 'Formato di visualizzazione dell’orario nel campo',
  },
  {
    name: 'minuteStep',
    type: 'number',
    default: '5',
    desc: 'Intervallo tra un minuto selezionabile e l’altro nella colonna minuti',
  },
]
