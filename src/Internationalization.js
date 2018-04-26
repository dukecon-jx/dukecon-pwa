import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = Object.freeze({
  de: {
    'termsOfUse': 'Nutzungsbedingungen',
    'imprint': 'Impressum',
    'privacy': 'Datenschutz',
    'simultan': 'mit Simultanübersetzung',
    'speaker': 'Sprecher',
    'speaker.notFound': 'Sprecher nicht gefunden',
    'talk.notFound': 'Talk nicht gefunden',
    'fullyBooked': 'voll besetzt',
    'speakertalks': 'Talks dieses Sprechers',
    'other_speakertalks': 'Weitere Talks dieses Sprechers',
    'noOtherTalks': '-- keine --',
    'feedback': 'Feedback',
    'feedback_content': '<span>Rückmeldungen zur Conference Planner Webseite bitte per Mail an</span> <a href="mailto:feedback@dukecon.org" title="email">feedback@dukecon.org</a> <span>oder direkt</span><a href="https://github.com/dukecon/dukecon/issues" title="Isssuetracker">hier</a> <span>ein Ticket erfassen!</span>',
    'backbutton': 'Zurück',
    'saveAsFavourite': 'Als Favorit speichern',
    'removeFavourite': 'Favorit gespeichert',
    'filterOptions': 'Filter-Optionen',
    'reset': 'Zurücksetzen',
    'active': 'Aktiv',
    'toggleFavorites': 'Nur Favoriten',
    'language': 'Sprache',
    'level': 'Zielgruppe',
    'track': 'Stream',
    'location': 'Ort',
    'uparrow': 'nach oben',
    'notalksfound': 'Keine Talks gefunden; bitte die Filter ',
    'emptyConference': 'Talks für diese Konferenz stehen noch nicht fest.',
    'deactivate': 'Deaktivieren',
    'or': ' oder ',
    'disablefavorites': 'Ist eventuell die Einstellung "Nur Favoriten" aktiviert?',
    'loggedIn': 'eingeloggt',
    'search': 'Suchen',
    'timetable': 'Stundenplan',
    'favoriteAlertTitle': 'Favoriten',
    'favoriteAlertBody': 'Favoriten werden erst mit Eurem Konto synchronisiert wenn Ihr Euch einloggt bzw. registriert. <br><br>Clickt dazu auf das Schloss-Symbol oben.',
    'document.slides': 'Präsentation',
    'document.manuscript': 'Manuskript',
    'document.other': 'Andere',
    'documentDownload': 'Unterlagen zum Herunterladen',
    'feedback.popupbutton': 'Feedback geben',
    'feedback.header': 'Wie hat dir dieser Talk gefallen?',
    'feedback.rating.good': 'Gut',
    'feedback.rating.okay': 'Okay',
    'feedback.rating.bad': 'Schlecht',
    'feedback.text': 'Bitte erkläre deine Wahl',
    'feedback.submit': 'Abschicken',
    'feedback.cancel': 'Abbrechen',
    'feedback.loginMessage': 'Bitte log dich ein, um Feedback zu geben.'
  },
  en: {
    'termsOfUse': 'Terms of use',
    'imprint': 'Legal mentions',
    'privacy': 'Privacy',
    'simultan': 'with live translation',
    'speaker': 'Speakers',
    'speaker.notFound': 'Speaker not found',
    'talk.notFound': 'Talk not found',
    'fullyBooked': 'fully booked',
    'speakertalks': 'Talks held by this speaker',
    'other_speakertalks': 'Other talks held by this speaker',
    'noOtherTalks': '-- none --',
    'feedback': 'Feedback',
    'feedback_content': '<span>Please send any feedback about the Conference Planner website via mail to</span> <a href="mailto:feedback@dukecon.org">feedback@dukecon.org</a> <span>or</span> <a href="https://github.com/dukecon/dukecon/issues" title="Isssuetracker">create a ticket here</a> <span>!</span>',
    'backbutton': 'Back',
    'saveAsFavourite': 'Save as favorite',
    'removeFavourite': 'Favourite saved',
    'filterOptions': 'Filter Options',
    'reset': 'Reset',
    'active': 'Active',
    'toggleFavorites': 'Only Favorites',
    'language': 'Language',
    'level': 'Audience',
    'track': 'Stream',
    'location': 'Location',
    'uparrow': 'back to top',
    'notalksfound': 'No talks found; please perform a filter ',
    'emptyConference': 'No talks scheduled for this conference yet.',
    'deactivate': 'Deactivation',
    'or': ' or ',
    'disablefavorites': 'Also check if you have "Only Favorites" selected.',
    'loggedIn': 'logged in',
    'search': 'Search',
    'timetable': 'Timetable',
    'favoriteAlertTitle': 'Favorites',
    'favoriteAlertBody': 'Favorites are synchronized with your account once you log in. <br><br>Click the lock symbol at the top to do so.',
    'document.slides': 'Presentation',
    'document.manuscript': 'Manuscript',
    'document.other': 'Other',
    'documentDownload': 'Documents to download',
    'feedback.popupbutton': 'Give feedback',
    'feedback.header': 'How did you like this talk?',
    'feedback.rating.good': 'Good',
    'feedback.rating.okay': 'Okay',
    'feedback.rating.bad': 'Bad',
    'feedback.text': 'Please explain your choice',
    'feedback.submit': 'Submit feedback',
    'feedback.cancel': 'Cancel',
    'feedback.loginMessage': 'Log in to leave feedback'
  }
})

// Create VueI18n instance with options
export let i18n = new VueI18n({
  locale: 'de', // default locale
  messages
})
