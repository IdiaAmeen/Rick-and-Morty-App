## What architectural decisions did you make and why?

Originally I was deciding if I should create a main page that displays the characters and a modal on click to display location information. Then I was curious if I should have the div expand on hover to display data on location. I went with the DOM model I have so I can run the second API based on params. I thought this was a better idea than using the all location endpoint and filtering because that takes more time.

## Elaborate on strengths and weaknesses.##

-- Weakness : There were a lot of changes in the newest version of React. For example, 'withRouter' as well as 'Switch'. I had to reevaluate and learn how to match params the new way. In addition to that, writing tests is something I have to read documentation for . However, I think now I will make sure to incorporate that into my process of building react apps

## How did you handle error cases? Eg: botched response, no response, etc.##

With every API call I created an error catch. On the characters component, theres a conditional statement to display loading while api loads, an error message if there is an error and to render data if it loads successfully. In the Locations component, if no data renders, it should display the image of the character as well as an error message

## How did you test the app?##

I tested my app by console logging to inspect data on Chrome. Additionally, I tweaked my code to create errors.

## What third party libraries/ external code snippets did you use, if any?##

I chose not to use any third party libraries

## If you had more time, what would you have done differently?##

I would make a more complex app.I would incorporate a search function. I would also create more automatic tests using Jest.
