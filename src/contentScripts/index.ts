/* eslint-disable no-console */
import { onMessage } from 'webext-bridge/content-script'
import { createApp } from 'vue'
import App from './views/App.vue'
import { setupApp } from '~/logic/common-setup'
import { send } from 'vite'

function main() {
	if (window.location.hostname === 'chatgpt.com' || window.location.hostname.endsWith('.chatgpt.com')) {
		console.info('Hello world from webext')

		// Functionality:
		// If the Enter key is pressed, it will insert a newline instead of submitting the form.
		// If Cmd + Enter (or Ctrl + Enter on Windows) is pressed, it will submit the form.

		const textarea = document.querySelector('#prompt-textarea') as HTMLTextAreaElement
		const sendButton = document.querySelector('[data-testid="fruitjuice-send-button"]') as HTMLButtonElement
		const form = document.querySelector('form.w-full') as HTMLFormElement

		if (!textarea || !sendButton || !form) {
			console.error('textarea, sendButton, or form not found')
			return
		}

		console.log(textarea, sendButton, form)
	}
}

main()

// ;(() => {
// 	// Check if the current site is chatgpt.com
// 	if (window.location.hostname === 'chatgpt.com' || window.location.hostname.endsWith('.chatgpt.com')) {
// 		console.info('[vitesse-webext] Hello world from content script')

// 		// communication example: send previous tab title from background page
// 		onMessage('tab-prev', ({ data }) => {
// 			console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
// 		})

// 		// mount component to context window
// 		const container = document.createElement('div')
// 		container.id = __NAME__
// 		const root = document.createElement('div')
// 		const styleEl = document.createElement('link')
// 		const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
// 		styleEl.setAttribute('rel', 'stylesheet')
// 		styleEl.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
// 		shadowDOM.appendChild(styleEl)
// 		shadowDOM.appendChild(root)
// 		document.body.appendChild(container)
// 		const app = createApp(App)
// 		setupApp(app)
// 		app.mount(root)
// 	} else {
// 		console.info('[vitesse-webext] Content script not running on this site')
// 	}
// })()
