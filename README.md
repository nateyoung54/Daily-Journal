# Veloura

Veloura is a minimal daily prompt delivery app. Its job is simple: send one thoughtful prompt to your phone each day so you can write in your own journal offline.

## Brand

- Name: `Veloura`
- Positioning: private reflection, beautifully held
- Tone: calm, intimate, aspirational
- Signature color: muted rose `#b66578`

## What the app does

- Stores a rotating library of prompts.
- Chooses the prompt of the day deterministically based on the date.
- Sends that prompt to Telegram on a schedule through GitHub Actions.
- Offers a lightweight local page for previewing the prompt library and setup steps.

## Run locally

Serve the folder locally to preview the prompt library and setup page:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Daily prompt to your phone

Telegram is the reliable phone delivery path in this repo.

### 1. Create a Telegram bot

1. In Telegram, message `@BotFather`.
2. Run `/newbot`.
3. Save the bot token you receive.

### 2. Get your chat ID

1. Start a conversation with your new bot and send it any message.
2. Open:

```text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

3. Find the numeric `chat.id` value in the response.

### 3. Push this repo to GitHub

The scheduled delivery runs through GitHub Actions, so the repository needs to be on GitHub with Actions enabled.

### 4. Add GitHub secrets

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

### 5. Add GitHub variables

- `DAILY_PROMPT_TIME`
  Example: `16:30`
- `DAILY_PROMPT_TIMEZONE`
  Example: `America/New_York`

The workflow runs twice per day in UTC to cover daylight saving and standard time, and sends when the local time in your chosen timezone falls within the scheduled delivery window for `DAILY_PROMPT_TIME`.

### 6. Test it

Run the `Veloura Daily Prompt` workflow manually from the Actions tab, or test locally:

```powershell
$env:TELEGRAM_BOT_TOKEN="your-token"
$env:TELEGRAM_CHAT_ID="your-chat-id"
$env:DAILY_PROMPT_TIME="16:30"
$env:DAILY_PROMPT_TIMEZONE="America/New_York"
$env:FORCE_SEND="true"
node scripts/send-daily-prompt.js
```

## Notes

- The local web page is only a preview and setup surface.
- The product is the daily delivery workflow, not in-browser journaling.
- Prompt selection is shared between the browser preview and Telegram sender.
