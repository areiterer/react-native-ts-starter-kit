# react-native-ts-starter-kit
A react-native starter kit with Typescript and Storybook

## This ReactNative starter kit includes

- TypeScript
- StoryBook

## Getting started

1. `git clone https://github.com/areiterer/react-native-ts-starter-kit.git yourappname`
2. `cd yourappname`
3. `npm i`
4. `react-native-rename yourappname`

## Starting the app

To start the app, execute `npm run ios` or `npm run android`

## Storybook 

If you want to run storybook on your phone / simulator, quit a running packager and run `npm run start:storybook` to start a new bundler that will have an environment variable IS_STORYBOOK set. In this case, the app will show Storybook instead of your app.
This mode is great if you want to focus on developing components and save time because you don't have to navigate through several screens to get to the screen you're working on. 
