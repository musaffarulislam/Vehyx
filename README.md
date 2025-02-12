
## Getting Started
if you want to run the project, you can run the command in the terminal.
filrst clone the project and then run the command in the terminal.
# step 1
```bash
git clone {github clone link}
```
# step 2
```bash
cd Vehyx
```
# step 3
```bash
npm install
```
# step 4
```bash
npm run dev
```
then you cna goto the locahost:3000/login to see the login page.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Tailwind CSS
 
 This project uses [Tailwind CSS](https://tailwindcss.com) to style the project. Tailwind CSS is a utility-first CSS framework that allows you to style your application without writing any new CSS classes. Instead, you can use Tailwind's utility classes to quickly and easily style your components.
 
 To learn more about Tailwind CSS, check out the [official documentation](https://tailwindcss.com).

## Styling

Styling is done with Tailwind CSS. The `tailwind.config.ts` file contains the configuration for Tailwind CSS.
Global.css contains the global styles for the project.
:root {
  --background: #F8F8F8;
  --primary: #00cbff;
  --secondary: #281F68;
  --tertiary: #646464;
  --platinum: #E5E5E5;
  --ferngreen: #566E3E;
  --munsell: #2E93AD;
  --white: #FFFFFF;
  --black: #1F1F1F;


  --font-family-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  @screen md {
    --text-base: 1 rem;
  }
  @screen lg {
    --text-base: 1.125 rem;
  }
  @screen xl {
    --text-base: 1.25 rem;
  }
  @screen 2xl {
    --text-base: 1.5 rem;
  }
}

mention above the colors of the project. For example, the primary color is #00cbff. The secondary color is #281F68. The tertiary color is #646464. The platinum color is #E5E5E5. The ferngreen color is #566E3E. The munsell color is #2E93AD. The white color is #FFFFFF. The black color is #1F1F1F.

## Run the command
if you want to run the command, you can run the command in the terminal.
```bash
npm run dev
```
then you can goto the locahost:3000/login to see the login page.

if you need ot viisti login page and form code please visit /src/app/login/page.tsx and /src/components/login

that files are the login page and form. 

please check the code and structure of the project. after please give your feedback. thank you.