# Veloura

Veloura is a minimal luxury journaling app built for one deliberate reflection each day.

## Brand

- Name: `Veloura`
- Positioning: private reflection, beautifully held
- Tone: calm, intimate, aspirational
- Signature color: muted rose `#b66578`

## Run locally

Serve the folder with any static server. Example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Daily prompt to your phone

This repo now includes a scheduled Telegram delivery workflow so the same daily prompt can reach your phone at a fixed time each day.

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
  Example: `20:30`
- `DAILY_PROMPT_TIMEZONE`
  Example: `America/New_York`

The workflow runs every 10 minutes and sends when the local time in your chosen timezone falls within the scheduled delivery window for `DAILY_PROMPT_TIME`.

### 6. Test it

Run the `Veloura Daily Prompt` workflow manually from the Actions tab, or test locally:

```powershell
$env:TELEGRAM_BOT_TOKEN="your-token"
$env:TELEGRAM_CHAT_ID="your-chat-id"
$env:DAILY_PROMPT_TIME="20:30"
$env:DAILY_PROMPT_TIMEZONE="America/New_York"
$env:FORCE_SEND="true"
node scripts/send-daily-prompt.js
```

## Notes

- Telegram delivery is the reliable phone path in this repo.
- Browser notifications still work inside the app, but they are not enough on their own if the site is closed.
