# ESYASOFT IGNITE implementation plan

## Build
- Establish the selected control-room design system: deep charcoal surfaces, ESYASOFT greens, Sora/Manrope-style system fallbacks, restrained motion, visible focus, and Simple View.
- Create the complete journey shell with desktop sidebar, mobile bottom navigation, status badges, route search, Ask Ignite, and the persistent help panel.
- Build every requested journey area: Home, Arrive, Basecamp, Esyasoft Grid, 90 Days, Learning, Toolkit, Insider Voices, My Mission, and Final.
- Add the confirmed schedule and phases exactly as supplied, marking the 11 December overlap and all uncertain content as TBC or Proposed.
- Add working local tools: arrival checklist, learning log and export, skills snapshot, toolkit progress, mission goals, reset confirmation, and a date-aware home screen.
- Add accessible expandable guidance, glossary explanations, copy/print Arrival Card actions, presentation mode, and audit mode for unresolved content.

## Technical details
- Keep the existing TanStack app structure while delivering the requested lightweight client-side experience.
- Store editable content in a dedicated configuration module and user progress in a guarded browser-storage wrapper.
- Support `?date=YYYY-MM-DD` and `?audit=1`; all app interactions remain available without a backend.
- Add unique page metadata, responsive behavior at 360/768/1280 widths, reduced-motion handling, and keyboard support.

## Verification
- Check the app at desktop and mobile sizes, including navigation, dialogs, saved progress, Simple View, and critical date states.
- Confirm there are no invented contacts, addresses, policies, timings, or quotes and that every uncertain item is visibly labelled.
