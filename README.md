# McPride 🏳️‍🌈🛠️
Celebrate Pride™️ at your place of employment during the month of June (and only during June).

## How to install
 To install in Firefox:
  1. Place mcpride.png in the same folder as these files
  2. Go to about:debugging in Firefox
  3. Click This Firefox → Load Temporary Add-on
  4. Select the manifest.json file
  5. 
> Note: For a permanent (non-temporary) install without signing, you can enable xpinstall.signatures.required =
false in about:config and package the folder as a .zip renamed to .xpi.
> 
## Implementation
  How it works:
  - Runs only on localhost and 127.0.0.1 (any port)
  - Replaces the src of every <img class="mcm-logo"> with your mcpride.png from inside the extension
  - A MutationObserver handles images added dynamically after page load

