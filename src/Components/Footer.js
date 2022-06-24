import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="bg-gray-800 bg-opacity-75">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p class="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Gambit</span>
            </p>
            <p class="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2022 Gambit —
              <a href="https://github.com/G4MB1T24" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@G4MB1T24</a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <p class="ml-3 text-gray-400">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </p>
            </span>
          </div>
        </div>
      </footer>
    )
  }
}
