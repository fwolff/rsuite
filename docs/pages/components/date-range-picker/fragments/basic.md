<!--start-code-->

```js
//import { frFR } from 'date-fns/locale/fr';
const {
  allowedMaxDays,
  allowedDays,
  allowedRange,
  beforeToday,
  afterToday,
  combine
} = DateRangePicker;

const minDate = new Date(1900, 0, 1);
const maxDate = new Date();

const instance = (
  <DateRangePicker
    format="dd/MM/yyyy"
    cleanable={false}
    isoWeek={true}
    appearance="default"
    disabledDate={allowedRange(minDate, maxDate)}
    minInputDate={minDate}
    maxInputDate={maxDate}
    locale={{
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
      formattedDayPattern: 'MMM dd, yyyy' // 'dd/MM/yyyy'
      //        dateLocale: frFR as any
    }}
  />
);
ReactDOM.render(instance);
```

<!--end-code-->
