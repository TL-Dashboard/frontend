### TL Dashboard

## Problem Core
The Lambda Team Lead Dashboard is very slow, and has bugs/errors loading.  Overall user experience is very poor.

The goal of this project is to produce a fast and responsive Team Lead dashboard, improving upon the current iteration of the Lambda Team Lead Dashboard.  We will incorporate features based on user feedback, and implement necessary changes to create a smooth user experience.

## Problem Side Effects

- Dashboard is very slow, taking up a lot of user time
- API is not secured by token authentication
- Errors in displaying completed forms/reviews
- UX problems with drop down lists, and page refreshes required
- Duplicate submissions

## Objectives

- Provide a fast and responsive user interface that has access to all necessary TL actions
- Provide a dashboard upon user sign-in that shows all pertinent information:
    - Alerts for missing form submissions/reviews
    - List of students
    - List of most recently submitted forms by sprint (exclude double submissions)
    - Attendance
        - Flags for students who have missed multiple days
    - Links to important forms
        - Module retrospective
        - Sprint retrospective
- Track, monitor and report on the status of all student related resources