/**
 * Offline demo trip — no Anthropic / Netlify call required.
 * Used for campus walkthroughs: open the dossier, then add the Itinerary Day View live.
 *
 * Real trips are produced by netlify/functions/plan.js and saved to Supabase
 * (see saveTrip in index.html). Plug live data in at the same `plan` + `form` shape.
 */
window.FIDELIS_SAMPLE_TRIP = {
  form: {
    destination: "Lisbon, Portugal",
    nights: 3,
    timing: "16–19 Oct 2026",
    travelers: "Couple",
    groupSize: 2,
    budget: "Comfortable",
    origin: "Los Angeles",
  },
  plan: {
    tripTitle: "Slow Lisbon, just the two of you",
    destination: "Lisbon, Portugal",
    startDate: "2026-10-16",
    endDate: "2026-10-19",
    summary:
      "Three nights in one walkable neighborhood: a tiled boutique stay in Príncipe Real, long breakfasts, one special dinner, and a free day to wander.",
    hotels: [
      {
        name: "Casa de São Mamede",
        area: "Príncipe Real",
        style: "Boutique townhouse",
        address: "Rua da Escola Politécnica 159, Lisbon",
        pricePerNight: "€210",
        why: "Quiet street, ten minutes on foot to Chiado, and a courtyard breakfast that does not rush you.",
        matches: ["Walkable location", "Quiet at night", "Breakfast included"],
      },
      {
        name: "Dear Lisbon Palace Chiado",
        area: "Chiado",
        style: "Design hotel",
        pricePerNight: "€245",
        why: "Backup if Casa is full — same vibe, slightly louder street.",
      },
    ],
    days: [
      {
        d: 1,
        date: "2026-10-16",
        title: "Arrive, settle, sunset",
        morning: "",
        afternoon: "Check in, drop bags, espresso at Copenhagen Coffee Lab.",
        evening: "Walk down to the river at Time Out Market, then sunset from Miradouro de São Pedro de Alcântara.",
      },
      {
        d: 2,
        date: "2026-10-17",
        title: "Trams, tiles, one big dinner",
        morning: "Tram 28 to Alfama — hop off wherever the street looks good.",
        afternoon: "Azulejo Museum, then a slow lunch in Graça.",
        evening: "Reservation at Cervejaria Ramiro. Walk home via Avenida.",
      },
      {
        d: 3,
        date: "2026-10-18",
        title: "Unscheduled on purpose",
        morning: "",
        afternoon: "",
        evening: "",
      },
      {
        d: 4,
        date: "2026-10-19",
        title: "Last pasteis, then the airport",
        morning: "Pastéis de Belém if the line is kind; otherwise Manteigaria in Chiado.",
        afternoon: "Airport by 14:00.",
        evening: "",
      },
    ],
    food: [
      {
        name: "Cervejaria Ramiro",
        type: "Dinner · seafood",
        why: "The one splurge meal. Go hungry, share the garlic prawns.",
        address: "Av. Almirante Reis 1, Lisbon",
      },
      {
        name: "Manteigaria",
        type: "Pastry",
        why: "Custard tarts without the Belém queue — still the real thing.",
        address: "Rua do Loreto 2, Chiado",
      },
    ],
  },
};
